import type { Note } from "~/db.server";
import { e, client } from "~/db.server";

export function User(id: string) {
  return e.select(e.User, (user) => ({
    filter: e.op(user.id, "=", e.uuid(id)),
  }));
}
export async function getNote(params: { id: string; userId: string }) {
  console.log(params);
  const userNotes = e.select(e.Note, (note) => ({
    filter: e.op(note.user, "=", User(params.userId)),
  }));
  const note = e
    .select(userNotes, (note) => ({
      ...e.Note["*"],
      filter: e.op(note.id, "=", e.uuid(params.id)),
    }))
    .run(client);
  return note;
}

export async function getNoteListItems(params: { userId: string }) {
  const notes = await e
    .select(e.Note, (note) => ({
      id: true,
      title: true,
      order_by: { expression: note.createdAt, direction: e.DESC },
      filter: e.op(note.user, "=", User(params.userId)),
    }))
    .run(client);

  return notes;
}

export async function createNote({
  body,
  title,
  userId,
}: Pick<Note, "body" | "title"> & {
  userId: string;
}) {
  const insertNote = e.insert(e.Note, {
    title,
    body,
    user: User(userId),
  });
  return await e.select(insertNote, () => ({ ...e.Note["*"] })).run(client);
}

export async function deleteNote(params: { id: string; userId: string }) {
  const deleted = await e
    .delete(e.Note, (note) => ({
      filter: e.op(
        e.op(note.id, "=", e.uuid(params.id)),
        "and",
        e.op(note.user, "=", User(params.userId))
      ),
    }))
    .run(client);
  return deleted.length;
}
