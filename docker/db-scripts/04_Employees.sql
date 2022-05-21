CREATE TABLE Employees (
  employees_id integer NOT NULL,
  employees_name varchar(30) NOT NULL,
  department_id integer NOT NULL,
  PRIMARY KEY (employees_id),
  FOREIGN KEY (department_id) references Department(department_id)
);