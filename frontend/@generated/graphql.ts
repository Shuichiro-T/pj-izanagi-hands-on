// @ts-nocheck
import { GraphQLClient } from 'graphql-request';
import { RequestInit } from 'graphql-request/dist/types.dom';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';

function fetcher<TData, TVariables>(client: GraphQLClient, query: string, variables?: TVariables, headers?: RequestInit['headers']) {
  return async (): Promise<TData> => client.request<TData, TVariables>(query, variables, headers);
}
export type GetCalenderListQueryVariables = Exact<{
  where: CalendarWhereInput;
}>;


export type GetCalenderListQuery = { __typename?: 'Query', CalendarList: Array<{ __typename?: 'calendar', year_month: string, day: string, workday: boolean, saturday: boolean, holiday: boolean }> };

export type GetEmployeesQueryVariables = Exact<{
  where: EmployeesWhereUniqueInput;
}>;


export type GetEmployeesQuery = { __typename?: 'Query', Employees?: { __typename?: 'employees', employees_id: string, employees_name: string, department_id: number } | null };

export type GetOperationListQueryVariables = Exact<{
  where: OperationWhereInput;
}>;


export type GetOperationListQuery = { __typename?: 'Query', OperationList: Array<{ __typename?: 'operation', operation_id: string, operation_name: string }> };


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
