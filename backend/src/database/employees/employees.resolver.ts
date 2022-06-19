import {
    CreateOneemployeesArgs,
    DeleteOneemployeesArgs,
    FindFirstemployeesArgs,
    FindManyemployeesArgs,
    FindUniqueemployeesArgs,
    employees,
    UpdateOneemployeesArgs,
} from '../../@generated/prisma-nestjs-graphql/index';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { EmployeesService } from './employees.service';

@Resolver()
export class EmployeesResolver {
  constructor(private readonly service: EmployeesService) {}

  @Query(() => employees, { name: 'Employees', nullable: true })
  async Employees(@Args() args: FindUniqueemployeesArgs) {
    return this.service.findUnique({ ...args });
  }

  @Query(() => employees, { name: 'EmployeesFirst', nullable: true })
  async employeesFirst(@Args() args: FindFirstemployeesArgs) {
    return this.service.findFirst({ ...args });
  }

  @Query(() => [employees], { name: 'EmployeesList' })
  async employeesList(@Args() args: FindManyemployeesArgs) {
    return this.service.findMany({ ...args });
  }

  @Mutation(() => employees, { name: 'CreateEmployees' })
  async createEmployees(@Args() args: CreateOneemployeesArgs) {
    return this.service.create({ ...args });
  }

  @Mutation(() => employees, { name: 'UpdateEmployees' })
  async updateEmployees(@Args() args: UpdateOneemployeesArgs) {
    return this.service.update({ ...args });
  }

  @Mutation(() => employees, { name: 'DeleteEmployees' })
  async deleteEmployees(@Args() args: DeleteOneemployeesArgs) {
    return this.service.delete({ ...args });
  }
}