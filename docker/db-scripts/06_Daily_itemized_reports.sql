CREATE TABLE Daily_itemized_reports (
  year_month char(6) NOT NULL,
  day char(6) NOT NULL,
  employees_id integer NOT NULL,
  operation_id integer NOT NULL,
  operation_time time,
  PRIMARY KEY (year_month, day, employees_id, operation_id),
  FOREIGN KEY (year_month, day, employees_id) references Daily_reports(year_month, day, employees_id),
  FOREIGN KEY (operation_id) references Operation(operation_id)
);