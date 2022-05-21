CREATE TABLE Daily_reports (
  year_month char(6) NOT NULL,
  day char(6) NOT NULL,
  employees_id integer NOT NULL,
  start_time time with time zone,
  end_time time with time zone,
  work_time time with time zone,
  PRIMARY KEY (year_month, day, employees_id),
  FOREIGN KEY (year_month, day) references Calendar(year_month, day),
  FOREIGN KEY (employees_id) references Employees(employees_id)
);