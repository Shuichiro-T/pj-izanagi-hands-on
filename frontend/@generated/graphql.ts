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
