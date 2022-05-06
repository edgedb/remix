CREATE MIGRATION m1kt42vjynoq2uik53rdzfjp2ecbr2upzqhpdvfzyml5xztdzkwnla
    ONTO m1b3pwk2coagmrlal2nnt4p5c6k4e7ir7g4nniqbgmgxh6tmthvp4a
{
  ALTER TYPE default::User {
      ALTER LINK notes {
          USING (.<user[IS default::Note]);
      };
  };
  ALTER TYPE default::User {
      ALTER LINK password {
          USING (.<user[IS default::Password]);
      };
  };
};
