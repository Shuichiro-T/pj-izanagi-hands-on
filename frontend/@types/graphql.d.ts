type Maybe<T> = T | null;
type InputMaybe<T> = Maybe<T>;
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

type BoolFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['Boolean']>;
};

type BoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolFilter>;
};

type CalendarCount = {
  __typename?: 'CalendarCount';
  daily_reports: Scalars['Int'];
};

type CalendarCountAggregate = {
  __typename?: 'CalendarCountAggregate';
  _all: Scalars['Int'];
  day: Scalars['Int'];
  holiday: Scalars['Int'];
  saturday: Scalars['Int'];
  workday: Scalars['Int'];
  year_month: Scalars['Int'];
};

type CalendarMaxAggregate = {
  __typename?: 'CalendarMaxAggregate';
  day?: Maybe<Scalars['String']>;
  holiday?: Maybe<Scalars['Boolean']>;
  saturday?: Maybe<Scalars['Boolean']>;
  workday?: Maybe<Scalars['Boolean']>;
  year_month?: Maybe<Scalars['String']>;
};

type CalendarMinAggregate = {
  __typename?: 'CalendarMinAggregate';
  day?: Maybe<Scalars['String']>;
  holiday?: Maybe<Scalars['Boolean']>;
  saturday?: Maybe<Scalars['Boolean']>;
  workday?: Maybe<Scalars['Boolean']>;
  year_month?: Maybe<Scalars['String']>;
};

type CalendarRelationFilter = {
  is?: InputMaybe<CalendarWhereInput>;
  isNot?: InputMaybe<CalendarWhereInput>;
};

type CalendarScalarFieldEnum =
  | 'day'
  | 'holiday'
  | 'saturday'
  | 'workday'
  | 'year_month';

type Daily_Itemized_ReportsAvgAggregate = {
  __typename?: 'Daily_itemized_reportsAvgAggregate';
  employees_id?: Maybe<Scalars['Float']>;
  operation_id?: Maybe<Scalars['Float']>;
};

type Daily_Itemized_ReportsCountAggregate = {
  __typename?: 'Daily_itemized_reportsCountAggregate';
  _all: Scalars['Int'];
  day: Scalars['Int'];
  employees_id: Scalars['Int'];
  operation_id: Scalars['Int'];
  operation_time: Scalars['Int'];
  year_month: Scalars['Int'];
};

type Daily_Itemized_ReportsListRelationFilter = {
  every?: InputMaybe<Daily_Itemized_ReportsWhereInput>;
  none?: InputMaybe<Daily_Itemized_ReportsWhereInput>;
  some?: InputMaybe<Daily_Itemized_ReportsWhereInput>;
};

type Daily_Itemized_ReportsMaxAggregate = {
  __typename?: 'Daily_itemized_reportsMaxAggregate';
  day?: Maybe<Scalars['String']>;
  employees_id?: Maybe<Scalars['Int']>;
  operation_id?: Maybe<Scalars['Int']>;
  operation_time?: Maybe<Scalars['DateTime']>;
  year_month?: Maybe<Scalars['String']>;
};

type Daily_Itemized_ReportsMinAggregate = {
  __typename?: 'Daily_itemized_reportsMinAggregate';
  day?: Maybe<Scalars['String']>;
  employees_id?: Maybe<Scalars['Int']>;
  operation_id?: Maybe<Scalars['Int']>;
  operation_time?: Maybe<Scalars['DateTime']>;
  year_month?: Maybe<Scalars['String']>;
};

type Daily_Itemized_ReportsScalarFieldEnum =
  | 'day'
  | 'employees_id'
  | 'operation_id'
  | 'operation_time'
  | 'year_month';

type Daily_Itemized_ReportsSumAggregate = {
  __typename?: 'Daily_itemized_reportsSumAggregate';
  employees_id?: Maybe<Scalars['Int']>;
  operation_id?: Maybe<Scalars['Int']>;
};

type Daily_ReportsAvgAggregate = {
  __typename?: 'Daily_reportsAvgAggregate';
  employees_id?: Maybe<Scalars['Float']>;
};

type Daily_ReportsCount = {
  __typename?: 'Daily_reportsCount';
  daily_itemized_reports: Scalars['Int'];
};

type Daily_ReportsCountAggregate = {
  __typename?: 'Daily_reportsCountAggregate';
  _all: Scalars['Int'];
  day: Scalars['Int'];
  employees_id: Scalars['Int'];
  end_time: Scalars['Int'];
  start_time: Scalars['Int'];
  work_time: Scalars['Int'];
  year_month: Scalars['Int'];
};

type Daily_ReportsListRelationFilter = {
  every?: InputMaybe<Daily_ReportsWhereInput>;
  none?: InputMaybe<Daily_ReportsWhereInput>;
  some?: InputMaybe<Daily_ReportsWhereInput>;
};

type Daily_ReportsMaxAggregate = {
  __typename?: 'Daily_reportsMaxAggregate';
  day?: Maybe<Scalars['String']>;
  employees_id?: Maybe<Scalars['Int']>;
  end_time?: Maybe<Scalars['DateTime']>;
  start_time?: Maybe<Scalars['DateTime']>;
  work_time?: Maybe<Scalars['DateTime']>;
  year_month?: Maybe<Scalars['String']>;
};

type Daily_ReportsMinAggregate = {
  __typename?: 'Daily_reportsMinAggregate';
  day?: Maybe<Scalars['String']>;
  employees_id?: Maybe<Scalars['Int']>;
  end_time?: Maybe<Scalars['DateTime']>;
  start_time?: Maybe<Scalars['DateTime']>;
  work_time?: Maybe<Scalars['DateTime']>;
  year_month?: Maybe<Scalars['String']>;
};

type Daily_ReportsRelationFilter = {
  is?: InputMaybe<Daily_ReportsWhereInput>;
  isNot?: InputMaybe<Daily_ReportsWhereInput>;
};

type Daily_ReportsScalarFieldEnum =
  | 'day'
  | 'employees_id'
  | 'end_time'
  | 'start_time'
  | 'work_time'
  | 'year_month';

type Daily_ReportsSumAggregate = {
  __typename?: 'Daily_reportsSumAggregate';
  employees_id?: Maybe<Scalars['Int']>;
};

type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

type DepartmentAvgAggregate = {
  __typename?: 'DepartmentAvgAggregate';
  department_id?: Maybe<Scalars['Float']>;
};

type DepartmentCount = {
  __typename?: 'DepartmentCount';
  employees: Scalars['Int'];
};

type DepartmentCountAggregate = {
  __typename?: 'DepartmentCountAggregate';
  _all: Scalars['Int'];
  department_id: Scalars['Int'];
  department_name: Scalars['Int'];
};

type DepartmentMaxAggregate = {
  __typename?: 'DepartmentMaxAggregate';
  department_id?: Maybe<Scalars['Int']>;
  department_name?: Maybe<Scalars['String']>;
};

type DepartmentMinAggregate = {
  __typename?: 'DepartmentMinAggregate';
  department_id?: Maybe<Scalars['Int']>;
  department_name?: Maybe<Scalars['String']>;
};

type DepartmentRelationFilter = {
  is?: InputMaybe<DepartmentWhereInput>;
  isNot?: InputMaybe<DepartmentWhereInput>;
};

type DepartmentScalarFieldEnum =
  | 'department_id'
  | 'department_name';

type DepartmentSumAggregate = {
  __typename?: 'DepartmentSumAggregate';
  department_id?: Maybe<Scalars['Int']>;
};

type EmployeesAvgAggregate = {
  __typename?: 'EmployeesAvgAggregate';
  department_id?: Maybe<Scalars['Float']>;
  employees_id?: Maybe<Scalars['Float']>;
};

type EmployeesCount = {
  __typename?: 'EmployeesCount';
  daily_reports: Scalars['Int'];
};

type EmployeesCountAggregate = {
  __typename?: 'EmployeesCountAggregate';
  _all: Scalars['Int'];
  department_id: Scalars['Int'];
  employees_id: Scalars['Int'];
  employees_name: Scalars['Int'];
};

type EmployeesListRelationFilter = {
  every?: InputMaybe<EmployeesWhereInput>;
  none?: InputMaybe<EmployeesWhereInput>;
  some?: InputMaybe<EmployeesWhereInput>;
};

type EmployeesMaxAggregate = {
  __typename?: 'EmployeesMaxAggregate';
  department_id?: Maybe<Scalars['Int']>;
  employees_id?: Maybe<Scalars['Int']>;
  employees_name?: Maybe<Scalars['String']>;
};

type EmployeesMinAggregate = {
  __typename?: 'EmployeesMinAggregate';
  department_id?: Maybe<Scalars['Int']>;
  employees_id?: Maybe<Scalars['Int']>;
  employees_name?: Maybe<Scalars['String']>;
};

type EmployeesRelationFilter = {
  is?: InputMaybe<EmployeesWhereInput>;
  isNot?: InputMaybe<EmployeesWhereInput>;
};

type EmployeesScalarFieldEnum =
  | 'department_id'
  | 'employees_id'
  | 'employees_name';

type EmployeesSumAggregate = {
  __typename?: 'EmployeesSumAggregate';
  department_id?: Maybe<Scalars['Int']>;
  employees_id?: Maybe<Scalars['Int']>;
};

type IntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']>;
  divide?: InputMaybe<Scalars['Int']>;
  increment?: InputMaybe<Scalars['Int']>;
  multiply?: InputMaybe<Scalars['Int']>;
  set?: InputMaybe<Scalars['Int']>;
};

type IntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

type Mutation = {
  __typename?: 'Mutation';
  CreateCalendar: Calendar;
  CreateDailyItemizedReports: Daily_Itemized_Reports;
  CreateDailyReports: Daily_Reports;
  CreateDepartment: Department;
  CreateEmployees: Employees;
  CreateOperation: Operation;
  DeleteCalendar: Calendar;
  DeleteDailyItemizedReports: Daily_Itemized_Reports;
  DeleteDailyReports: Daily_Reports;
  DeleteDepartment: Department;
  DeleteEmployees: Employees;
  DeleteOperation: Operation;
  UpdateCalendar: Calendar;
  UpdateDailyItemizedReports: Daily_Itemized_Reports;
  UpdateDailyReports: Daily_Reports;
  UpdateDepartment: Department;
  UpdateEmployees: Employees;
  UpdateOperation: Operation;
};


type MutationCreateCalendarArgs = {
  data: CalendarCreateInput;
};


type MutationCreateDailyItemizedReportsArgs = {
  data: Daily_Itemized_ReportsCreateInput;
};


type MutationCreateDailyReportsArgs = {
  data: Daily_ReportsCreateInput;
};


type MutationCreateDepartmentArgs = {
  data: DepartmentCreateInput;
};


type MutationCreateEmployeesArgs = {
  data: EmployeesCreateInput;
};


type MutationCreateOperationArgs = {
  data: OperationCreateInput;
};


type MutationDeleteCalendarArgs = {
  where: CalendarWhereUniqueInput;
};


type MutationDeleteDailyItemizedReportsArgs = {
  where: Daily_Itemized_ReportsWhereUniqueInput;
};


type MutationDeleteDailyReportsArgs = {
  where: Daily_ReportsWhereUniqueInput;
};


type MutationDeleteDepartmentArgs = {
  where: DepartmentWhereUniqueInput;
};


type MutationDeleteEmployeesArgs = {
  where: EmployeesWhereUniqueInput;
};


type MutationDeleteOperationArgs = {
  where: OperationWhereUniqueInput;
};


type MutationUpdateCalendarArgs = {
  data: CalendarUpdateInput;
  where: CalendarWhereUniqueInput;
};


type MutationUpdateDailyItemizedReportsArgs = {
  data: Daily_Itemized_ReportsUpdateInput;
  where: Daily_Itemized_ReportsWhereUniqueInput;
};


type MutationUpdateDailyReportsArgs = {
  data: Daily_ReportsUpdateInput;
  where: Daily_ReportsWhereUniqueInput;
};


type MutationUpdateDepartmentArgs = {
  data: DepartmentUpdateInput;
  where: DepartmentWhereUniqueInput;
};


type MutationUpdateEmployeesArgs = {
  data: EmployeesUpdateInput;
  where: EmployeesWhereUniqueInput;
};


type MutationUpdateOperationArgs = {
  data: OperationUpdateInput;
  where: OperationWhereUniqueInput;
};

type NestedBoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolFilter>;
};

type NestedDateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

type NullableDateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']>;
};

type OperationAvgAggregate = {
  __typename?: 'OperationAvgAggregate';
  operation_id?: Maybe<Scalars['Float']>;
};

type OperationCount = {
  __typename?: 'OperationCount';
  daily_itemized_reports: Scalars['Int'];
};

type OperationCountAggregate = {
  __typename?: 'OperationCountAggregate';
  _all: Scalars['Int'];
  operation_id: Scalars['Int'];
  operation_name: Scalars['Int'];
};

type OperationMaxAggregate = {
  __typename?: 'OperationMaxAggregate';
  operation_id?: Maybe<Scalars['Int']>;
  operation_name?: Maybe<Scalars['String']>;
};

type OperationMinAggregate = {
  __typename?: 'OperationMinAggregate';
  operation_id?: Maybe<Scalars['Int']>;
  operation_name?: Maybe<Scalars['String']>;
};

type OperationRelationFilter = {
  is?: InputMaybe<OperationWhereInput>;
  isNot?: InputMaybe<OperationWhereInput>;
};

type OperationScalarFieldEnum =
  | 'operation_id'
  | 'operation_name';

type OperationSumAggregate = {
  __typename?: 'OperationSumAggregate';
  operation_id?: Maybe<Scalars['Int']>;
};

type Query = {
  __typename?: 'Query';
  Calendar?: Maybe<Calendar>;
  CalendarFirst?: Maybe<Calendar>;
  CalendarList: Array<Calendar>;
  DailyItemizedReports?: Maybe<Daily_Itemized_Reports>;
  DailyItemizedReportsFirst?: Maybe<Daily_Itemized_Reports>;
  DailyItemizedReportsList: Array<Daily_Itemized_Reports>;
  DailyReports?: Maybe<Daily_Reports>;
  DailyReportsFirst?: Maybe<Daily_Reports>;
  DailyReportsList: Array<Daily_Reports>;
  Department?: Maybe<Department>;
  DepartmentFirst?: Maybe<Department>;
  DepartmentList: Array<Department>;
  Employees?: Maybe<Employees>;
  EmployeesFirst?: Maybe<Employees>;
  EmployeesList: Array<Employees>;
  Operation?: Maybe<Operation>;
  OperationFirst?: Maybe<Operation>;
  OperationList: Array<Operation>;
};


type QueryCalendarArgs = {
  where: CalendarWhereUniqueInput;
};


type QueryCalendarFirstArgs = {
  cursor?: InputMaybe<CalendarWhereUniqueInput>;
  distinct?: InputMaybe<Array<CalendarScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CalendarOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CalendarWhereInput>;
};


type QueryCalendarListArgs = {
  cursor?: InputMaybe<CalendarWhereUniqueInput>;
  distinct?: InputMaybe<Array<CalendarScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CalendarOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CalendarWhereInput>;
};


type QueryDailyItemizedReportsArgs = {
  where: Daily_Itemized_ReportsWhereUniqueInput;
};


type QueryDailyItemizedReportsFirstArgs = {
  cursor?: InputMaybe<Daily_Itemized_ReportsWhereUniqueInput>;
  distinct?: InputMaybe<Array<Daily_Itemized_ReportsScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<Daily_Itemized_ReportsOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Daily_Itemized_ReportsWhereInput>;
};


type QueryDailyItemizedReportsListArgs = {
  cursor?: InputMaybe<Daily_Itemized_ReportsWhereUniqueInput>;
  distinct?: InputMaybe<Array<Daily_Itemized_ReportsScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<Daily_Itemized_ReportsOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Daily_Itemized_ReportsWhereInput>;
};


type QueryDailyReportsArgs = {
  where: Daily_ReportsWhereUniqueInput;
};


type QueryDailyReportsFirstArgs = {
  cursor?: InputMaybe<Daily_ReportsWhereUniqueInput>;
  distinct?: InputMaybe<Array<Daily_ReportsScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<Daily_ReportsOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Daily_ReportsWhereInput>;
};


type QueryDailyReportsListArgs = {
  cursor?: InputMaybe<Daily_ReportsWhereUniqueInput>;
  distinct?: InputMaybe<Array<Daily_ReportsScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<Daily_ReportsOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Daily_ReportsWhereInput>;
};


type QueryDepartmentArgs = {
  where: DepartmentWhereUniqueInput;
};


type QueryDepartmentFirstArgs = {
  cursor?: InputMaybe<DepartmentWhereUniqueInput>;
  distinct?: InputMaybe<Array<DepartmentScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<DepartmentOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DepartmentWhereInput>;
};


type QueryDepartmentListArgs = {
  cursor?: InputMaybe<DepartmentWhereUniqueInput>;
  distinct?: InputMaybe<Array<DepartmentScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<DepartmentOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DepartmentWhereInput>;
};


type QueryEmployeesArgs = {
  where: EmployeesWhereUniqueInput;
};


type QueryEmployeesFirstArgs = {
  cursor?: InputMaybe<EmployeesWhereUniqueInput>;
  distinct?: InputMaybe<Array<EmployeesScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<EmployeesOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EmployeesWhereInput>;
};


type QueryEmployeesListArgs = {
  cursor?: InputMaybe<EmployeesWhereUniqueInput>;
  distinct?: InputMaybe<Array<EmployeesScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<EmployeesOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EmployeesWhereInput>;
};


type QueryOperationArgs = {
  where: OperationWhereUniqueInput;
};


type QueryOperationFirstArgs = {
  cursor?: InputMaybe<OperationWhereUniqueInput>;
  distinct?: InputMaybe<Array<OperationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<OperationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<OperationWhereInput>;
};


type QueryOperationListArgs = {
  cursor?: InputMaybe<OperationWhereUniqueInput>;
  distinct?: InputMaybe<Array<OperationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<OperationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<OperationWhereInput>;
};

type QueryMode =
  | 'default'
  | 'insensitive';

type SortOrder =
  | 'asc'
  | 'desc';

type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

type StringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

type Calendar = {
  __typename?: 'calendar';
  _count: CalendarCount;
  daily_reports?: Maybe<Array<Daily_Reports>>;
  day: Scalars['String'];
  holiday: Scalars['Boolean'];
  saturday: Scalars['Boolean'];
  workday: Scalars['Boolean'];
  year_month: Scalars['String'];
};

type CalendarCreateInput = {
  daily_reports?: InputMaybe<Daily_ReportsCreateNestedManyWithoutCalendarInput>;
  day: Scalars['String'];
  holiday?: InputMaybe<Scalars['Boolean']>;
  saturday?: InputMaybe<Scalars['Boolean']>;
  workday?: InputMaybe<Scalars['Boolean']>;
  year_month: Scalars['String'];
};

type CalendarCreateNestedOneWithoutDaily_ReportsInput = {
  connect?: InputMaybe<CalendarWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CalendarCreateOrConnectWithoutDaily_ReportsInput>;
  create?: InputMaybe<CalendarCreateWithoutDaily_ReportsInput>;
};

type CalendarCreateOrConnectWithoutDaily_ReportsInput = {
  create: CalendarCreateWithoutDaily_ReportsInput;
  where: CalendarWhereUniqueInput;
};

type CalendarCreateWithoutDaily_ReportsInput = {
  day: Scalars['String'];
  holiday?: InputMaybe<Scalars['Boolean']>;
  saturday?: InputMaybe<Scalars['Boolean']>;
  workday?: InputMaybe<Scalars['Boolean']>;
  year_month: Scalars['String'];
};

type CalendarOrderByWithRelationInput = {
  daily_reports?: InputMaybe<Daily_ReportsOrderByRelationAggregateInput>;
  day?: InputMaybe<SortOrder>;
  holiday?: InputMaybe<SortOrder>;
  saturday?: InputMaybe<SortOrder>;
  workday?: InputMaybe<SortOrder>;
  year_month?: InputMaybe<SortOrder>;
};

type CalendarUpdateInput = {
  daily_reports?: InputMaybe<Daily_ReportsUpdateManyWithoutCalendarInput>;
  day?: InputMaybe<StringFieldUpdateOperationsInput>;
  holiday?: InputMaybe<BoolFieldUpdateOperationsInput>;
  saturday?: InputMaybe<BoolFieldUpdateOperationsInput>;
  workday?: InputMaybe<BoolFieldUpdateOperationsInput>;
  year_month?: InputMaybe<StringFieldUpdateOperationsInput>;
};

type CalendarUpdateOneRequiredWithoutDaily_ReportsInput = {
  connect?: InputMaybe<CalendarWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CalendarCreateOrConnectWithoutDaily_ReportsInput>;
  create?: InputMaybe<CalendarCreateWithoutDaily_ReportsInput>;
  update?: InputMaybe<CalendarUpdateWithoutDaily_ReportsInput>;
  upsert?: InputMaybe<CalendarUpsertWithoutDaily_ReportsInput>;
};

type CalendarUpdateWithoutDaily_ReportsInput = {
  day?: InputMaybe<StringFieldUpdateOperationsInput>;
  holiday?: InputMaybe<BoolFieldUpdateOperationsInput>;
  saturday?: InputMaybe<BoolFieldUpdateOperationsInput>;
  workday?: InputMaybe<BoolFieldUpdateOperationsInput>;
  year_month?: InputMaybe<StringFieldUpdateOperationsInput>;
};

type CalendarUpsertWithoutDaily_ReportsInput = {
  create: CalendarCreateWithoutDaily_ReportsInput;
  update: CalendarUpdateWithoutDaily_ReportsInput;
};

type CalendarWhereInput = {
  AND?: InputMaybe<Array<CalendarWhereInput>>;
  NOT?: InputMaybe<Array<CalendarWhereInput>>;
  OR?: InputMaybe<Array<CalendarWhereInput>>;
  daily_reports?: InputMaybe<Daily_ReportsListRelationFilter>;
  day?: InputMaybe<StringFilter>;
  holiday?: InputMaybe<BoolFilter>;
  saturday?: InputMaybe<BoolFilter>;
  workday?: InputMaybe<BoolFilter>;
  year_month?: InputMaybe<StringFilter>;
};

type CalendarWhereUniqueInput = {
  year_month_day?: InputMaybe<CalendarYear_MonthDayCompoundUniqueInput>;
};

type CalendarYear_MonthDayCompoundUniqueInput = {
  day: Scalars['String'];
  year_month: Scalars['String'];
};

type Daily_Itemized_Reports = {
  __typename?: 'daily_itemized_reports';
  daily_reports: Daily_Reports;
  day: Scalars['String'];
  employees_id: Scalars['Int'];
  operation: Operation;
  operation_id: Scalars['Int'];
  operation_time?: Maybe<Scalars['DateTime']>;
  year_month: Scalars['String'];
};

type Daily_Itemized_ReportsCreateInput = {
  daily_reports: Daily_ReportsCreateNestedOneWithoutDaily_Itemized_ReportsInput;
  operation: OperationCreateNestedOneWithoutDaily_Itemized_ReportsInput;
  operation_time?: InputMaybe<Scalars['DateTime']>;
};

type Daily_Itemized_ReportsCreateManyDaily_ReportsInput = {
  operation_id: Scalars['Int'];
  operation_time?: InputMaybe<Scalars['DateTime']>;
};

type Daily_Itemized_ReportsCreateManyDaily_ReportsInputEnvelope = {
  data: Array<Daily_Itemized_ReportsCreateManyDaily_ReportsInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

type Daily_Itemized_ReportsCreateManyOperationInput = {
  day: Scalars['String'];
  employees_id: Scalars['Int'];
  operation_time?: InputMaybe<Scalars['DateTime']>;
  year_month: Scalars['String'];
};

type Daily_Itemized_ReportsCreateManyOperationInputEnvelope = {
  data: Array<Daily_Itemized_ReportsCreateManyOperationInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

type Daily_Itemized_ReportsCreateNestedManyWithoutDaily_ReportsInput = {
  connect?: InputMaybe<Array<Daily_Itemized_ReportsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<Daily_Itemized_ReportsCreateOrConnectWithoutDaily_ReportsInput>>;
  create?: InputMaybe<Array<Daily_Itemized_ReportsCreateWithoutDaily_ReportsInput>>;
  createMany?: InputMaybe<Daily_Itemized_ReportsCreateManyDaily_ReportsInputEnvelope>;
};

type Daily_Itemized_ReportsCreateNestedManyWithoutOperationInput = {
  connect?: InputMaybe<Array<Daily_Itemized_ReportsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<Daily_Itemized_ReportsCreateOrConnectWithoutOperationInput>>;
  create?: InputMaybe<Array<Daily_Itemized_ReportsCreateWithoutOperationInput>>;
  createMany?: InputMaybe<Daily_Itemized_ReportsCreateManyOperationInputEnvelope>;
};

type Daily_Itemized_ReportsCreateOrConnectWithoutDaily_ReportsInput = {
  create: Daily_Itemized_ReportsCreateWithoutDaily_ReportsInput;
  where: Daily_Itemized_ReportsWhereUniqueInput;
};

type Daily_Itemized_ReportsCreateOrConnectWithoutOperationInput = {
  create: Daily_Itemized_ReportsCreateWithoutOperationInput;
  where: Daily_Itemized_ReportsWhereUniqueInput;
};

type Daily_Itemized_ReportsCreateWithoutDaily_ReportsInput = {
  operation: OperationCreateNestedOneWithoutDaily_Itemized_ReportsInput;
  operation_time?: InputMaybe<Scalars['DateTime']>;
};

type Daily_Itemized_ReportsCreateWithoutOperationInput = {
  daily_reports: Daily_ReportsCreateNestedOneWithoutDaily_Itemized_ReportsInput;
  operation_time?: InputMaybe<Scalars['DateTime']>;
};

type Daily_Itemized_ReportsOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

type Daily_Itemized_ReportsOrderByWithRelationInput = {
  daily_reports?: InputMaybe<Daily_ReportsOrderByWithRelationInput>;
  day?: InputMaybe<SortOrder>;
  employees_id?: InputMaybe<SortOrder>;
  operation?: InputMaybe<OperationOrderByWithRelationInput>;
  operation_id?: InputMaybe<SortOrder>;
  operation_time?: InputMaybe<SortOrder>;
  year_month?: InputMaybe<SortOrder>;
};

type Daily_Itemized_ReportsScalarWhereInput = {
  AND?: InputMaybe<Array<Daily_Itemized_ReportsScalarWhereInput>>;
  NOT?: InputMaybe<Array<Daily_Itemized_ReportsScalarWhereInput>>;
  OR?: InputMaybe<Array<Daily_Itemized_ReportsScalarWhereInput>>;
  day?: InputMaybe<StringFilter>;
  employees_id?: InputMaybe<IntFilter>;
  operation_id?: InputMaybe<IntFilter>;
  operation_time?: InputMaybe<DateTimeNullableFilter>;
  year_month?: InputMaybe<StringFilter>;
};

type Daily_Itemized_ReportsUpdateInput = {
  daily_reports?: InputMaybe<Daily_ReportsUpdateOneRequiredWithoutDaily_Itemized_ReportsInput>;
  operation?: InputMaybe<OperationUpdateOneRequiredWithoutDaily_Itemized_ReportsInput>;
  operation_time?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
};

type Daily_Itemized_ReportsUpdateManyMutationInput = {
  operation_time?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
};

type Daily_Itemized_ReportsUpdateManyWithWhereWithoutDaily_ReportsInput = {
  data: Daily_Itemized_ReportsUpdateManyMutationInput;
  where: Daily_Itemized_ReportsScalarWhereInput;
};

type Daily_Itemized_ReportsUpdateManyWithWhereWithoutOperationInput = {
  data: Daily_Itemized_ReportsUpdateManyMutationInput;
  where: Daily_Itemized_ReportsScalarWhereInput;
};

type Daily_Itemized_ReportsUpdateManyWithoutDaily_ReportsInput = {
  connect?: InputMaybe<Array<Daily_Itemized_ReportsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<Daily_Itemized_ReportsCreateOrConnectWithoutDaily_ReportsInput>>;
  create?: InputMaybe<Array<Daily_Itemized_ReportsCreateWithoutDaily_ReportsInput>>;
  createMany?: InputMaybe<Daily_Itemized_ReportsCreateManyDaily_ReportsInputEnvelope>;
  delete?: InputMaybe<Array<Daily_Itemized_ReportsWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<Daily_Itemized_ReportsScalarWhereInput>>;
  disconnect?: InputMaybe<Array<Daily_Itemized_ReportsWhereUniqueInput>>;
  set?: InputMaybe<Array<Daily_Itemized_ReportsWhereUniqueInput>>;
  update?: InputMaybe<Array<Daily_Itemized_ReportsUpdateWithWhereUniqueWithoutDaily_ReportsInput>>;
  updateMany?: InputMaybe<Array<Daily_Itemized_ReportsUpdateManyWithWhereWithoutDaily_ReportsInput>>;
  upsert?: InputMaybe<Array<Daily_Itemized_ReportsUpsertWithWhereUniqueWithoutDaily_ReportsInput>>;
};

type Daily_Itemized_ReportsUpdateManyWithoutOperationInput = {
  connect?: InputMaybe<Array<Daily_Itemized_ReportsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<Daily_Itemized_ReportsCreateOrConnectWithoutOperationInput>>;
  create?: InputMaybe<Array<Daily_Itemized_ReportsCreateWithoutOperationInput>>;
  createMany?: InputMaybe<Daily_Itemized_ReportsCreateManyOperationInputEnvelope>;
  delete?: InputMaybe<Array<Daily_Itemized_ReportsWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<Daily_Itemized_ReportsScalarWhereInput>>;
  disconnect?: InputMaybe<Array<Daily_Itemized_ReportsWhereUniqueInput>>;
  set?: InputMaybe<Array<Daily_Itemized_ReportsWhereUniqueInput>>;
  update?: InputMaybe<Array<Daily_Itemized_ReportsUpdateWithWhereUniqueWithoutOperationInput>>;
  updateMany?: InputMaybe<Array<Daily_Itemized_ReportsUpdateManyWithWhereWithoutOperationInput>>;
  upsert?: InputMaybe<Array<Daily_Itemized_ReportsUpsertWithWhereUniqueWithoutOperationInput>>;
};

type Daily_Itemized_ReportsUpdateWithWhereUniqueWithoutDaily_ReportsInput = {
  data: Daily_Itemized_ReportsUpdateWithoutDaily_ReportsInput;
  where: Daily_Itemized_ReportsWhereUniqueInput;
};

type Daily_Itemized_ReportsUpdateWithWhereUniqueWithoutOperationInput = {
  data: Daily_Itemized_ReportsUpdateWithoutOperationInput;
  where: Daily_Itemized_ReportsWhereUniqueInput;
};

type Daily_Itemized_ReportsUpdateWithoutDaily_ReportsInput = {
  operation?: InputMaybe<OperationUpdateOneRequiredWithoutDaily_Itemized_ReportsInput>;
  operation_time?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
};

type Daily_Itemized_ReportsUpdateWithoutOperationInput = {
  daily_reports?: InputMaybe<Daily_ReportsUpdateOneRequiredWithoutDaily_Itemized_ReportsInput>;
  operation_time?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
};

type Daily_Itemized_ReportsUpsertWithWhereUniqueWithoutDaily_ReportsInput = {
  create: Daily_Itemized_ReportsCreateWithoutDaily_ReportsInput;
  update: Daily_Itemized_ReportsUpdateWithoutDaily_ReportsInput;
  where: Daily_Itemized_ReportsWhereUniqueInput;
};

type Daily_Itemized_ReportsUpsertWithWhereUniqueWithoutOperationInput = {
  create: Daily_Itemized_ReportsCreateWithoutOperationInput;
  update: Daily_Itemized_ReportsUpdateWithoutOperationInput;
  where: Daily_Itemized_ReportsWhereUniqueInput;
};

type Daily_Itemized_ReportsWhereInput = {
  AND?: InputMaybe<Array<Daily_Itemized_ReportsWhereInput>>;
  NOT?: InputMaybe<Array<Daily_Itemized_ReportsWhereInput>>;
  OR?: InputMaybe<Array<Daily_Itemized_ReportsWhereInput>>;
  daily_reports?: InputMaybe<Daily_ReportsRelationFilter>;
  day?: InputMaybe<StringFilter>;
  employees_id?: InputMaybe<IntFilter>;
  operation?: InputMaybe<OperationRelationFilter>;
  operation_id?: InputMaybe<IntFilter>;
  operation_time?: InputMaybe<DateTimeNullableFilter>;
  year_month?: InputMaybe<StringFilter>;
};

type Daily_Itemized_ReportsWhereUniqueInput = {
  year_month_day_employees_id_operation_id?: InputMaybe<Daily_Itemized_ReportsYear_MonthDayEmployees_IdOperation_IdCompoundUniqueInput>;
};

type Daily_Itemized_ReportsYear_MonthDayEmployees_IdOperation_IdCompoundUniqueInput = {
  day: Scalars['String'];
  employees_id: Scalars['Int'];
  operation_id: Scalars['Int'];
  year_month: Scalars['String'];
};

type Daily_Reports = {
  __typename?: 'daily_reports';
  _count: Daily_ReportsCount;
  calendar: Calendar;
  daily_itemized_reports?: Maybe<Array<Daily_Itemized_Reports>>;
  day: Scalars['String'];
  employees: Employees;
  employees_id: Scalars['Int'];
  end_time?: Maybe<Scalars['DateTime']>;
  start_time?: Maybe<Scalars['DateTime']>;
  work_time?: Maybe<Scalars['DateTime']>;
  year_month: Scalars['String'];
};

type Daily_ReportsCreateInput = {
  calendar: CalendarCreateNestedOneWithoutDaily_ReportsInput;
  daily_itemized_reports?: InputMaybe<Daily_Itemized_ReportsCreateNestedManyWithoutDaily_ReportsInput>;
  employees: EmployeesCreateNestedOneWithoutDaily_ReportsInput;
  end_time?: InputMaybe<Scalars['DateTime']>;
  start_time?: InputMaybe<Scalars['DateTime']>;
  work_time?: InputMaybe<Scalars['DateTime']>;
};

type Daily_ReportsCreateManyCalendarInput = {
  employees_id: Scalars['Int'];
  end_time?: InputMaybe<Scalars['DateTime']>;
  start_time?: InputMaybe<Scalars['DateTime']>;
  work_time?: InputMaybe<Scalars['DateTime']>;
};

type Daily_ReportsCreateManyCalendarInputEnvelope = {
  data: Array<Daily_ReportsCreateManyCalendarInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

type Daily_ReportsCreateManyEmployeesInput = {
  day: Scalars['String'];
  end_time?: InputMaybe<Scalars['DateTime']>;
  start_time?: InputMaybe<Scalars['DateTime']>;
  work_time?: InputMaybe<Scalars['DateTime']>;
  year_month: Scalars['String'];
};

type Daily_ReportsCreateManyEmployeesInputEnvelope = {
  data: Array<Daily_ReportsCreateManyEmployeesInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

type Daily_ReportsCreateNestedManyWithoutCalendarInput = {
  connect?: InputMaybe<Array<Daily_ReportsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<Daily_ReportsCreateOrConnectWithoutCalendarInput>>;
  create?: InputMaybe<Array<Daily_ReportsCreateWithoutCalendarInput>>;
  createMany?: InputMaybe<Daily_ReportsCreateManyCalendarInputEnvelope>;
};

type Daily_ReportsCreateNestedManyWithoutEmployeesInput = {
  connect?: InputMaybe<Array<Daily_ReportsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<Daily_ReportsCreateOrConnectWithoutEmployeesInput>>;
  create?: InputMaybe<Array<Daily_ReportsCreateWithoutEmployeesInput>>;
  createMany?: InputMaybe<Daily_ReportsCreateManyEmployeesInputEnvelope>;
};

type Daily_ReportsCreateNestedOneWithoutDaily_Itemized_ReportsInput = {
  connect?: InputMaybe<Daily_ReportsWhereUniqueInput>;
  connectOrCreate?: InputMaybe<Daily_ReportsCreateOrConnectWithoutDaily_Itemized_ReportsInput>;
  create?: InputMaybe<Daily_ReportsCreateWithoutDaily_Itemized_ReportsInput>;
};

type Daily_ReportsCreateOrConnectWithoutCalendarInput = {
  create: Daily_ReportsCreateWithoutCalendarInput;
  where: Daily_ReportsWhereUniqueInput;
};

type Daily_ReportsCreateOrConnectWithoutDaily_Itemized_ReportsInput = {
  create: Daily_ReportsCreateWithoutDaily_Itemized_ReportsInput;
  where: Daily_ReportsWhereUniqueInput;
};

type Daily_ReportsCreateOrConnectWithoutEmployeesInput = {
  create: Daily_ReportsCreateWithoutEmployeesInput;
  where: Daily_ReportsWhereUniqueInput;
};

type Daily_ReportsCreateWithoutCalendarInput = {
  daily_itemized_reports?: InputMaybe<Daily_Itemized_ReportsCreateNestedManyWithoutDaily_ReportsInput>;
  employees: EmployeesCreateNestedOneWithoutDaily_ReportsInput;
  end_time?: InputMaybe<Scalars['DateTime']>;
  start_time?: InputMaybe<Scalars['DateTime']>;
  work_time?: InputMaybe<Scalars['DateTime']>;
};

type Daily_ReportsCreateWithoutDaily_Itemized_ReportsInput = {
  calendar: CalendarCreateNestedOneWithoutDaily_ReportsInput;
  employees: EmployeesCreateNestedOneWithoutDaily_ReportsInput;
  end_time?: InputMaybe<Scalars['DateTime']>;
  start_time?: InputMaybe<Scalars['DateTime']>;
  work_time?: InputMaybe<Scalars['DateTime']>;
};

type Daily_ReportsCreateWithoutEmployeesInput = {
  calendar: CalendarCreateNestedOneWithoutDaily_ReportsInput;
  daily_itemized_reports?: InputMaybe<Daily_Itemized_ReportsCreateNestedManyWithoutDaily_ReportsInput>;
  end_time?: InputMaybe<Scalars['DateTime']>;
  start_time?: InputMaybe<Scalars['DateTime']>;
  work_time?: InputMaybe<Scalars['DateTime']>;
};

type Daily_ReportsOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

type Daily_ReportsOrderByWithRelationInput = {
  calendar?: InputMaybe<CalendarOrderByWithRelationInput>;
  daily_itemized_reports?: InputMaybe<Daily_Itemized_ReportsOrderByRelationAggregateInput>;
  day?: InputMaybe<SortOrder>;
  employees?: InputMaybe<EmployeesOrderByWithRelationInput>;
  employees_id?: InputMaybe<SortOrder>;
  end_time?: InputMaybe<SortOrder>;
  start_time?: InputMaybe<SortOrder>;
  work_time?: InputMaybe<SortOrder>;
  year_month?: InputMaybe<SortOrder>;
};

type Daily_ReportsScalarWhereInput = {
  AND?: InputMaybe<Array<Daily_ReportsScalarWhereInput>>;
  NOT?: InputMaybe<Array<Daily_ReportsScalarWhereInput>>;
  OR?: InputMaybe<Array<Daily_ReportsScalarWhereInput>>;
  day?: InputMaybe<StringFilter>;
  employees_id?: InputMaybe<IntFilter>;
  end_time?: InputMaybe<DateTimeNullableFilter>;
  start_time?: InputMaybe<DateTimeNullableFilter>;
  work_time?: InputMaybe<DateTimeNullableFilter>;
  year_month?: InputMaybe<StringFilter>;
};

type Daily_ReportsUpdateInput = {
  calendar?: InputMaybe<CalendarUpdateOneRequiredWithoutDaily_ReportsInput>;
  daily_itemized_reports?: InputMaybe<Daily_Itemized_ReportsUpdateManyWithoutDaily_ReportsInput>;
  employees?: InputMaybe<EmployeesUpdateOneRequiredWithoutDaily_ReportsInput>;
  end_time?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  start_time?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  work_time?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
};

type Daily_ReportsUpdateManyMutationInput = {
  end_time?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  start_time?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  work_time?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
};

type Daily_ReportsUpdateManyWithWhereWithoutCalendarInput = {
  data: Daily_ReportsUpdateManyMutationInput;
  where: Daily_ReportsScalarWhereInput;
};

type Daily_ReportsUpdateManyWithWhereWithoutEmployeesInput = {
  data: Daily_ReportsUpdateManyMutationInput;
  where: Daily_ReportsScalarWhereInput;
};

type Daily_ReportsUpdateManyWithoutCalendarInput = {
  connect?: InputMaybe<Array<Daily_ReportsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<Daily_ReportsCreateOrConnectWithoutCalendarInput>>;
  create?: InputMaybe<Array<Daily_ReportsCreateWithoutCalendarInput>>;
  createMany?: InputMaybe<Daily_ReportsCreateManyCalendarInputEnvelope>;
  delete?: InputMaybe<Array<Daily_ReportsWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<Daily_ReportsScalarWhereInput>>;
  disconnect?: InputMaybe<Array<Daily_ReportsWhereUniqueInput>>;
  set?: InputMaybe<Array<Daily_ReportsWhereUniqueInput>>;
  update?: InputMaybe<Array<Daily_ReportsUpdateWithWhereUniqueWithoutCalendarInput>>;
  updateMany?: InputMaybe<Array<Daily_ReportsUpdateManyWithWhereWithoutCalendarInput>>;
  upsert?: InputMaybe<Array<Daily_ReportsUpsertWithWhereUniqueWithoutCalendarInput>>;
};

type Daily_ReportsUpdateManyWithoutEmployeesInput = {
  connect?: InputMaybe<Array<Daily_ReportsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<Daily_ReportsCreateOrConnectWithoutEmployeesInput>>;
  create?: InputMaybe<Array<Daily_ReportsCreateWithoutEmployeesInput>>;
  createMany?: InputMaybe<Daily_ReportsCreateManyEmployeesInputEnvelope>;
  delete?: InputMaybe<Array<Daily_ReportsWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<Daily_ReportsScalarWhereInput>>;
  disconnect?: InputMaybe<Array<Daily_ReportsWhereUniqueInput>>;
  set?: InputMaybe<Array<Daily_ReportsWhereUniqueInput>>;
  update?: InputMaybe<Array<Daily_ReportsUpdateWithWhereUniqueWithoutEmployeesInput>>;
  updateMany?: InputMaybe<Array<Daily_ReportsUpdateManyWithWhereWithoutEmployeesInput>>;
  upsert?: InputMaybe<Array<Daily_ReportsUpsertWithWhereUniqueWithoutEmployeesInput>>;
};

type Daily_ReportsUpdateOneRequiredWithoutDaily_Itemized_ReportsInput = {
  connect?: InputMaybe<Daily_ReportsWhereUniqueInput>;
  connectOrCreate?: InputMaybe<Daily_ReportsCreateOrConnectWithoutDaily_Itemized_ReportsInput>;
  create?: InputMaybe<Daily_ReportsCreateWithoutDaily_Itemized_ReportsInput>;
  update?: InputMaybe<Daily_ReportsUpdateWithoutDaily_Itemized_ReportsInput>;
  upsert?: InputMaybe<Daily_ReportsUpsertWithoutDaily_Itemized_ReportsInput>;
};

type Daily_ReportsUpdateWithWhereUniqueWithoutCalendarInput = {
  data: Daily_ReportsUpdateWithoutCalendarInput;
  where: Daily_ReportsWhereUniqueInput;
};

type Daily_ReportsUpdateWithWhereUniqueWithoutEmployeesInput = {
  data: Daily_ReportsUpdateWithoutEmployeesInput;
  where: Daily_ReportsWhereUniqueInput;
};

type Daily_ReportsUpdateWithoutCalendarInput = {
  daily_itemized_reports?: InputMaybe<Daily_Itemized_ReportsUpdateManyWithoutDaily_ReportsInput>;
  employees?: InputMaybe<EmployeesUpdateOneRequiredWithoutDaily_ReportsInput>;
  end_time?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  start_time?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  work_time?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
};

type Daily_ReportsUpdateWithoutDaily_Itemized_ReportsInput = {
  calendar?: InputMaybe<CalendarUpdateOneRequiredWithoutDaily_ReportsInput>;
  employees?: InputMaybe<EmployeesUpdateOneRequiredWithoutDaily_ReportsInput>;
  end_time?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  start_time?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  work_time?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
};

type Daily_ReportsUpdateWithoutEmployeesInput = {
  calendar?: InputMaybe<CalendarUpdateOneRequiredWithoutDaily_ReportsInput>;
  daily_itemized_reports?: InputMaybe<Daily_Itemized_ReportsUpdateManyWithoutDaily_ReportsInput>;
  end_time?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  start_time?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  work_time?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
};

type Daily_ReportsUpsertWithWhereUniqueWithoutCalendarInput = {
  create: Daily_ReportsCreateWithoutCalendarInput;
  update: Daily_ReportsUpdateWithoutCalendarInput;
  where: Daily_ReportsWhereUniqueInput;
};

type Daily_ReportsUpsertWithWhereUniqueWithoutEmployeesInput = {
  create: Daily_ReportsCreateWithoutEmployeesInput;
  update: Daily_ReportsUpdateWithoutEmployeesInput;
  where: Daily_ReportsWhereUniqueInput;
};

type Daily_ReportsUpsertWithoutDaily_Itemized_ReportsInput = {
  create: Daily_ReportsCreateWithoutDaily_Itemized_ReportsInput;
  update: Daily_ReportsUpdateWithoutDaily_Itemized_ReportsInput;
};

type Daily_ReportsWhereInput = {
  AND?: InputMaybe<Array<Daily_ReportsWhereInput>>;
  NOT?: InputMaybe<Array<Daily_ReportsWhereInput>>;
  OR?: InputMaybe<Array<Daily_ReportsWhereInput>>;
  calendar?: InputMaybe<CalendarRelationFilter>;
  daily_itemized_reports?: InputMaybe<Daily_Itemized_ReportsListRelationFilter>;
  day?: InputMaybe<StringFilter>;
  employees?: InputMaybe<EmployeesRelationFilter>;
  employees_id?: InputMaybe<IntFilter>;
  end_time?: InputMaybe<DateTimeNullableFilter>;
  start_time?: InputMaybe<DateTimeNullableFilter>;
  work_time?: InputMaybe<DateTimeNullableFilter>;
  year_month?: InputMaybe<StringFilter>;
};

type Daily_ReportsWhereUniqueInput = {
  year_month_day_employees_id?: InputMaybe<Daily_ReportsYear_MonthDayEmployees_IdCompoundUniqueInput>;
};

type Daily_ReportsYear_MonthDayEmployees_IdCompoundUniqueInput = {
  day: Scalars['String'];
  employees_id: Scalars['Int'];
  year_month: Scalars['String'];
};

type Department = {
  __typename?: 'department';
  _count: DepartmentCount;
  department_id: Scalars['ID'];
  department_name: Scalars['String'];
  employees?: Maybe<Array<Employees>>;
};

type DepartmentCreateInput = {
  department_id: Scalars['Int'];
  department_name: Scalars['String'];
  employees?: InputMaybe<EmployeesCreateNestedManyWithoutDepartmentInput>;
};

type DepartmentCreateNestedOneWithoutEmployeesInput = {
  connect?: InputMaybe<DepartmentWhereUniqueInput>;
  connectOrCreate?: InputMaybe<DepartmentCreateOrConnectWithoutEmployeesInput>;
  create?: InputMaybe<DepartmentCreateWithoutEmployeesInput>;
};

type DepartmentCreateOrConnectWithoutEmployeesInput = {
  create: DepartmentCreateWithoutEmployeesInput;
  where: DepartmentWhereUniqueInput;
};

type DepartmentCreateWithoutEmployeesInput = {
  department_id: Scalars['Int'];
  department_name: Scalars['String'];
};

type DepartmentOrderByWithRelationInput = {
  department_id?: InputMaybe<SortOrder>;
  department_name?: InputMaybe<SortOrder>;
  employees?: InputMaybe<EmployeesOrderByRelationAggregateInput>;
};

type DepartmentUpdateInput = {
  department_id?: InputMaybe<IntFieldUpdateOperationsInput>;
  department_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  employees?: InputMaybe<EmployeesUpdateManyWithoutDepartmentInput>;
};

type DepartmentUpdateOneRequiredWithoutEmployeesInput = {
  connect?: InputMaybe<DepartmentWhereUniqueInput>;
  connectOrCreate?: InputMaybe<DepartmentCreateOrConnectWithoutEmployeesInput>;
  create?: InputMaybe<DepartmentCreateWithoutEmployeesInput>;
  update?: InputMaybe<DepartmentUpdateWithoutEmployeesInput>;
  upsert?: InputMaybe<DepartmentUpsertWithoutEmployeesInput>;
};

type DepartmentUpdateWithoutEmployeesInput = {
  department_id?: InputMaybe<IntFieldUpdateOperationsInput>;
  department_name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

type DepartmentUpsertWithoutEmployeesInput = {
  create: DepartmentCreateWithoutEmployeesInput;
  update: DepartmentUpdateWithoutEmployeesInput;
};

type DepartmentWhereInput = {
  AND?: InputMaybe<Array<DepartmentWhereInput>>;
  NOT?: InputMaybe<Array<DepartmentWhereInput>>;
  OR?: InputMaybe<Array<DepartmentWhereInput>>;
  department_id?: InputMaybe<IntFilter>;
  department_name?: InputMaybe<StringFilter>;
  employees?: InputMaybe<EmployeesListRelationFilter>;
};

type DepartmentWhereUniqueInput = {
  department_id?: InputMaybe<Scalars['Int']>;
};

type Employees = {
  __typename?: 'employees';
  _count: EmployeesCount;
  daily_reports?: Maybe<Array<Daily_Reports>>;
  department: Department;
  department_id: Scalars['Int'];
  employees_id: Scalars['ID'];
  employees_name: Scalars['String'];
};

type EmployeesCreateInput = {
  daily_reports?: InputMaybe<Daily_ReportsCreateNestedManyWithoutEmployeesInput>;
  department: DepartmentCreateNestedOneWithoutEmployeesInput;
  employees_id: Scalars['Int'];
  employees_name: Scalars['String'];
};

type EmployeesCreateManyDepartmentInput = {
  employees_id: Scalars['Int'];
  employees_name: Scalars['String'];
};

type EmployeesCreateManyDepartmentInputEnvelope = {
  data: Array<EmployeesCreateManyDepartmentInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

type EmployeesCreateNestedManyWithoutDepartmentInput = {
  connect?: InputMaybe<Array<EmployeesWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<EmployeesCreateOrConnectWithoutDepartmentInput>>;
  create?: InputMaybe<Array<EmployeesCreateWithoutDepartmentInput>>;
  createMany?: InputMaybe<EmployeesCreateManyDepartmentInputEnvelope>;
};

type EmployeesCreateNestedOneWithoutDaily_ReportsInput = {
  connect?: InputMaybe<EmployeesWhereUniqueInput>;
  connectOrCreate?: InputMaybe<EmployeesCreateOrConnectWithoutDaily_ReportsInput>;
  create?: InputMaybe<EmployeesCreateWithoutDaily_ReportsInput>;
};

type EmployeesCreateOrConnectWithoutDaily_ReportsInput = {
  create: EmployeesCreateWithoutDaily_ReportsInput;
  where: EmployeesWhereUniqueInput;
};

type EmployeesCreateOrConnectWithoutDepartmentInput = {
  create: EmployeesCreateWithoutDepartmentInput;
  where: EmployeesWhereUniqueInput;
};

type EmployeesCreateWithoutDaily_ReportsInput = {
  department: DepartmentCreateNestedOneWithoutEmployeesInput;
  employees_id: Scalars['Int'];
  employees_name: Scalars['String'];
};

type EmployeesCreateWithoutDepartmentInput = {
  daily_reports?: InputMaybe<Daily_ReportsCreateNestedManyWithoutEmployeesInput>;
  employees_id: Scalars['Int'];
  employees_name: Scalars['String'];
};

type EmployeesOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

type EmployeesOrderByWithRelationInput = {
  daily_reports?: InputMaybe<Daily_ReportsOrderByRelationAggregateInput>;
  department?: InputMaybe<DepartmentOrderByWithRelationInput>;
  department_id?: InputMaybe<SortOrder>;
  employees_id?: InputMaybe<SortOrder>;
  employees_name?: InputMaybe<SortOrder>;
};

type EmployeesScalarWhereInput = {
  AND?: InputMaybe<Array<EmployeesScalarWhereInput>>;
  NOT?: InputMaybe<Array<EmployeesScalarWhereInput>>;
  OR?: InputMaybe<Array<EmployeesScalarWhereInput>>;
  department_id?: InputMaybe<IntFilter>;
  employees_id?: InputMaybe<IntFilter>;
  employees_name?: InputMaybe<StringFilter>;
};

type EmployeesUpdateInput = {
  daily_reports?: InputMaybe<Daily_ReportsUpdateManyWithoutEmployeesInput>;
  department?: InputMaybe<DepartmentUpdateOneRequiredWithoutEmployeesInput>;
  employees_id?: InputMaybe<IntFieldUpdateOperationsInput>;
  employees_name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

type EmployeesUpdateManyMutationInput = {
  employees_id?: InputMaybe<IntFieldUpdateOperationsInput>;
  employees_name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

type EmployeesUpdateManyWithWhereWithoutDepartmentInput = {
  data: EmployeesUpdateManyMutationInput;
  where: EmployeesScalarWhereInput;
};

type EmployeesUpdateManyWithoutDepartmentInput = {
  connect?: InputMaybe<Array<EmployeesWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<EmployeesCreateOrConnectWithoutDepartmentInput>>;
  create?: InputMaybe<Array<EmployeesCreateWithoutDepartmentInput>>;
  createMany?: InputMaybe<EmployeesCreateManyDepartmentInputEnvelope>;
  delete?: InputMaybe<Array<EmployeesWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<EmployeesScalarWhereInput>>;
  disconnect?: InputMaybe<Array<EmployeesWhereUniqueInput>>;
  set?: InputMaybe<Array<EmployeesWhereUniqueInput>>;
  update?: InputMaybe<Array<EmployeesUpdateWithWhereUniqueWithoutDepartmentInput>>;
  updateMany?: InputMaybe<Array<EmployeesUpdateManyWithWhereWithoutDepartmentInput>>;
  upsert?: InputMaybe<Array<EmployeesUpsertWithWhereUniqueWithoutDepartmentInput>>;
};

type EmployeesUpdateOneRequiredWithoutDaily_ReportsInput = {
  connect?: InputMaybe<EmployeesWhereUniqueInput>;
  connectOrCreate?: InputMaybe<EmployeesCreateOrConnectWithoutDaily_ReportsInput>;
  create?: InputMaybe<EmployeesCreateWithoutDaily_ReportsInput>;
  update?: InputMaybe<EmployeesUpdateWithoutDaily_ReportsInput>;
  upsert?: InputMaybe<EmployeesUpsertWithoutDaily_ReportsInput>;
};

type EmployeesUpdateWithWhereUniqueWithoutDepartmentInput = {
  data: EmployeesUpdateWithoutDepartmentInput;
  where: EmployeesWhereUniqueInput;
};

type EmployeesUpdateWithoutDaily_ReportsInput = {
  department?: InputMaybe<DepartmentUpdateOneRequiredWithoutEmployeesInput>;
  employees_id?: InputMaybe<IntFieldUpdateOperationsInput>;
  employees_name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

type EmployeesUpdateWithoutDepartmentInput = {
  daily_reports?: InputMaybe<Daily_ReportsUpdateManyWithoutEmployeesInput>;
  employees_id?: InputMaybe<IntFieldUpdateOperationsInput>;
  employees_name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

type EmployeesUpsertWithWhereUniqueWithoutDepartmentInput = {
  create: EmployeesCreateWithoutDepartmentInput;
  update: EmployeesUpdateWithoutDepartmentInput;
  where: EmployeesWhereUniqueInput;
};

type EmployeesUpsertWithoutDaily_ReportsInput = {
  create: EmployeesCreateWithoutDaily_ReportsInput;
  update: EmployeesUpdateWithoutDaily_ReportsInput;
};

type EmployeesWhereInput = {
  AND?: InputMaybe<Array<EmployeesWhereInput>>;
  NOT?: InputMaybe<Array<EmployeesWhereInput>>;
  OR?: InputMaybe<Array<EmployeesWhereInput>>;
  daily_reports?: InputMaybe<Daily_ReportsListRelationFilter>;
  department?: InputMaybe<DepartmentRelationFilter>;
  department_id?: InputMaybe<IntFilter>;
  employees_id?: InputMaybe<IntFilter>;
  employees_name?: InputMaybe<StringFilter>;
};

type EmployeesWhereUniqueInput = {
  employees_id?: InputMaybe<Scalars['Int']>;
};

type Operation = {
  __typename?: 'operation';
  _count: OperationCount;
  daily_itemized_reports?: Maybe<Array<Daily_Itemized_Reports>>;
  operation_id: Scalars['ID'];
  operation_name: Scalars['String'];
};

type OperationCreateInput = {
  daily_itemized_reports?: InputMaybe<Daily_Itemized_ReportsCreateNestedManyWithoutOperationInput>;
  operation_id: Scalars['Int'];
  operation_name: Scalars['String'];
};

type OperationCreateNestedOneWithoutDaily_Itemized_ReportsInput = {
  connect?: InputMaybe<OperationWhereUniqueInput>;
  connectOrCreate?: InputMaybe<OperationCreateOrConnectWithoutDaily_Itemized_ReportsInput>;
  create?: InputMaybe<OperationCreateWithoutDaily_Itemized_ReportsInput>;
};

type OperationCreateOrConnectWithoutDaily_Itemized_ReportsInput = {
  create: OperationCreateWithoutDaily_Itemized_ReportsInput;
  where: OperationWhereUniqueInput;
};

type OperationCreateWithoutDaily_Itemized_ReportsInput = {
  operation_id: Scalars['Int'];
  operation_name: Scalars['String'];
};

type OperationOrderByWithRelationInput = {
  daily_itemized_reports?: InputMaybe<Daily_Itemized_ReportsOrderByRelationAggregateInput>;
  operation_id?: InputMaybe<SortOrder>;
  operation_name?: InputMaybe<SortOrder>;
};

type OperationUpdateInput = {
  daily_itemized_reports?: InputMaybe<Daily_Itemized_ReportsUpdateManyWithoutOperationInput>;
  operation_id?: InputMaybe<IntFieldUpdateOperationsInput>;
  operation_name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

type OperationUpdateOneRequiredWithoutDaily_Itemized_ReportsInput = {
  connect?: InputMaybe<OperationWhereUniqueInput>;
  connectOrCreate?: InputMaybe<OperationCreateOrConnectWithoutDaily_Itemized_ReportsInput>;
  create?: InputMaybe<OperationCreateWithoutDaily_Itemized_ReportsInput>;
  update?: InputMaybe<OperationUpdateWithoutDaily_Itemized_ReportsInput>;
  upsert?: InputMaybe<OperationUpsertWithoutDaily_Itemized_ReportsInput>;
};

type OperationUpdateWithoutDaily_Itemized_ReportsInput = {
  operation_id?: InputMaybe<IntFieldUpdateOperationsInput>;
  operation_name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

type OperationUpsertWithoutDaily_Itemized_ReportsInput = {
  create: OperationCreateWithoutDaily_Itemized_ReportsInput;
  update: OperationUpdateWithoutDaily_Itemized_ReportsInput;
};

type OperationWhereInput = {
  AND?: InputMaybe<Array<OperationWhereInput>>;
  NOT?: InputMaybe<Array<OperationWhereInput>>;
  OR?: InputMaybe<Array<OperationWhereInput>>;
  daily_itemized_reports?: InputMaybe<Daily_Itemized_ReportsListRelationFilter>;
  operation_id?: InputMaybe<IntFilter>;
  operation_name?: InputMaybe<StringFilter>;
};

type OperationWhereUniqueInput = {
  operation_id?: InputMaybe<Scalars['Int']>;
};
