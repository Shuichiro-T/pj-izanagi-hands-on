// @ts-nocheck
import { GraphQLClient } from 'graphql-request';
import { RequestInit } from 'graphql-request/dist/types.dom';
import { useQuery, useMutation, UseQueryOptions, UseMutationOptions } from '@tanstack/react-query';

function fetcher<TData, TVariables>(client: GraphQLClient, query: string, variables?: TVariables, headers?: RequestInit['headers']) {
  return async (): Promise<TData> => client.request<TData, TVariables>(query, variables, headers);
}
export type GetCalenderListQueryVariables = Exact<{
  where: CalendarWhereInput;
}>;


export type GetCalenderListQuery = { __typename?: 'Query', CalendarList: Array<{ __typename?: 'calendar', year_month: string, day: string, workday: boolean, saturday: boolean, holiday: boolean }> };

export type GetDepartmentQueryVariables = Exact<{
  where: DepartmentWhereUniqueInput;
}>;


export type GetDepartmentQuery = { __typename?: 'Query', Department?: { __typename?: 'department', department_id: string, department_name: string } | null };

export type GetEmployeesQueryVariables = Exact<{
  where: EmployeesWhereUniqueInput;
}>;


export type GetEmployeesQuery = { __typename?: 'Query', Employees?: { __typename?: 'employees', employees_id: string, employees_name: string, department_id: number } | null };

export type GetOperationListQueryVariables = Exact<{
  where: OperationWhereInput;
}>;


export type GetOperationListQuery = { __typename?: 'Query', OperationList: Array<{ __typename?: 'operation', operation_id: string, operation_name: string }> };

export type UpsertDailyItemizedReportsMutationVariables = Exact<{
  year_month: Scalars['String'];
  day: Scalars['String'];
  employees_id: Scalars['Int'];
  operation_id: Scalars['Int'];
  operation_time: Scalars['DateTime'];
  start_time: Scalars['DateTime'];
  end_time: Scalars['DateTime'];
  work_time: Scalars['DateTime'];
}>;


export type UpsertDailyItemizedReportsMutation = { __typename?: 'Mutation', UpsertDailyItemizedReports: { __typename?: 'daily_itemized_reports', year_month: string, day: string, employees_id: number, operation_id: number, operation_time?: any | null } };


export const GetCalenderListDocument = `
    query getCalenderList($where: calendarWhereInput!) {
  CalendarList(where: $where) {
    year_month
    day
    workday
    saturday
    holiday
  }
}
    `;
export const useGetCalenderListQuery = <
      TData = GetCalenderListQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetCalenderListQueryVariables,
      options?: UseQueryOptions<GetCalenderListQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetCalenderListQuery, TError, TData>(
      ['getCalenderList', variables],
      fetcher<GetCalenderListQuery, GetCalenderListQueryVariables>(client, GetCalenderListDocument, variables, headers),
      options
    );

useGetCalenderListQuery.getKey = (variables: GetCalenderListQueryVariables) => ['getCalenderList', variables];
;

export const GetDepartmentDocument = `
    query getDepartment($where: departmentWhereUniqueInput!) {
  Department(where: $where) {
    department_id
    department_name
  }
}
    `;
export const useGetDepartmentQuery = <
      TData = GetDepartmentQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetDepartmentQueryVariables,
      options?: UseQueryOptions<GetDepartmentQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetDepartmentQuery, TError, TData>(
      ['getDepartment', variables],
      fetcher<GetDepartmentQuery, GetDepartmentQueryVariables>(client, GetDepartmentDocument, variables, headers),
      options
    );

useGetDepartmentQuery.getKey = (variables: GetDepartmentQueryVariables) => ['getDepartment', variables];
;

export const GetEmployeesDocument = `
    query getEmployees($where: employeesWhereUniqueInput!) {
  Employees(where: $where) {
    employees_id
    employees_name
    department_id
  }
}
    `;
export const useGetEmployeesQuery = <
      TData = GetEmployeesQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetEmployeesQueryVariables,
      options?: UseQueryOptions<GetEmployeesQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetEmployeesQuery, TError, TData>(
      ['getEmployees', variables],
      fetcher<GetEmployeesQuery, GetEmployeesQueryVariables>(client, GetEmployeesDocument, variables, headers),
      options
    );

useGetEmployeesQuery.getKey = (variables: GetEmployeesQueryVariables) => ['getEmployees', variables];
;

export const GetOperationListDocument = `
    query getOperationList($where: operationWhereInput!) {
  OperationList(where: $where) {
    operation_id
    operation_name
  }
}
    `;
export const useGetOperationListQuery = <
      TData = GetOperationListQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetOperationListQueryVariables,
      options?: UseQueryOptions<GetOperationListQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetOperationListQuery, TError, TData>(
      ['getOperationList', variables],
      fetcher<GetOperationListQuery, GetOperationListQueryVariables>(client, GetOperationListDocument, variables, headers),
      options
    );

useGetOperationListQuery.getKey = (variables: GetOperationListQueryVariables) => ['getOperationList', variables];
;

export const UpsertDailyItemizedReportsDocument = `
    mutation upsertDailyItemizedReports($year_month: String!, $day: String!, $employees_id: Int!, $operation_id: Int!, $operation_time: DateTime!, $start_time: DateTime!, $end_time: DateTime!, $work_time: DateTime!) {
  UpsertDailyItemizedReports(
    where: {year_month_day_employees_id_operation_id: {year_month: $year_month, day: $day, employees_id: $employees_id, operation_id: $operation_id}}
    create: {operation_time: $operation_time, operation: {connect: {operation_id: $operation_id}}, daily_reports: {connectOrCreate: {where: {year_month_day_employees_id: {year_month: $year_month, day: $day, employees_id: $employees_id}}, create: {start_time: $start_time, end_time: $end_time, work_time: $work_time, employees: {connect: {employees_id: $employees_id}}, calendar: {connect: {year_month_day: {year_month: $year_month, day: $day}}}}}}}
    update: {operation_time: {set: $operation_time}, operation: {connect: {operation_id: $operation_id}}, daily_reports: {upsert: {create: {start_time: $start_time, end_time: $end_time, work_time: $work_time, employees: {connect: {employees_id: $employees_id}}, calendar: {connect: {year_month_day: {year_month: $year_month, day: $day}}}}, update: {start_time: {set: $start_time}, end_time: {set: $end_time}, work_time: {set: $work_time}, employees: {connect: {employees_id: $employees_id}}, calendar: {connect: {year_month_day: {year_month: $year_month, day: $day}}}}}}}
  ) {
    year_month
    day
    employees_id
    operation_id
    operation_time
  }
}
    `;
export const useUpsertDailyItemizedReportsMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<UpsertDailyItemizedReportsMutation, TError, UpsertDailyItemizedReportsMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<UpsertDailyItemizedReportsMutation, TError, UpsertDailyItemizedReportsMutationVariables, TContext>(
      ['upsertDailyItemizedReports'],
      (variables?: UpsertDailyItemizedReportsMutationVariables) => fetcher<UpsertDailyItemizedReportsMutation, UpsertDailyItemizedReportsMutationVariables>(client, UpsertDailyItemizedReportsDocument, variables, headers)(),
      options
    );