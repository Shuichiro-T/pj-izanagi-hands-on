CREATE TABLE Calendar (
  year_month char(6) NOT NULL,
  day char(6) NOT NULL,
  workday boolean NOT NULL DEFAULT true,
  saturday boolean NOT NULL DEFAULT false,
  holiday boolean NOT NULL DEFAULT false,
  PRIMARY KEY (year_month, day)
);