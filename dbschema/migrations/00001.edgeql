CREATE MIGRATION m1b3pwk2coagmrlal2nnt4p5c6k4e7ir7g4nniqbgmgxh6tmthvp4a
    ONTO initial
{
  CREATE TYPE default::Note {
      CREATE REQUIRED PROPERTY body -> std::str;
      CREATE REQUIRED PROPERTY createdAt -> std::datetime {
          SET default := (std::datetime_current());
      };
      CREATE REQUIRED PROPERTY title -> std::str;
  };
  CREATE TYPE default::User {
      CREATE MULTI LINK notes -> default::Note;
      CREATE REQUIRED PROPERTY createdAt -> std::datetime {
          SET default := (std::datetime_current());
      };
      CREATE REQUIRED PROPERTY email -> std::str {
          CREATE CONSTRAINT std::exclusive;
      };
  };
  ALTER TYPE default::Note {
      CREATE REQUIRED LINK user -> default::User {
          ON TARGET DELETE  DELETE SOURCE;
      };
  };
  CREATE TYPE default::Password {
      CREATE REQUIRED LINK user -> default::User {
          ON TARGET DELETE  DELETE SOURCE;
          CREATE CONSTRAINT std::exclusive;
      };
      CREATE REQUIRED PROPERTY hash -> std::str;
  };
  ALTER TYPE default::User {
      CREATE LINK password -> default::Password;
  };
};
