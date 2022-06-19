import {
    CreateOnedepartmentArgs,
    DeleteOnedepartmentArgs,
    FindFirstdepartmentArgs,
    FindManydepartmentArgs,
    FindUniquedepartmentArgs,
    department,
    UpdateOnedepartmentArgs,
} from '../../@generated/prisma-nestjs-graphql/index';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { DepartmentService } from './department.service';

@Resolver()
export class DepartmentResolver {
  constructor(private readonly service: DepartmentService) {}

  @Query(() => department, { name: 'Department', nullable: true })
  async Department(@Args() args: FindUniquedepartmentArgs) {
    return this.service.findUnique({ ...args });
  }

  @Query(() => department, { name: 'DepartmentFirst', nullable: true })
  async departmentFirst(@Args() args: FindFirstdepartmentArgs) {
    return this.service.findFirst({ ...args });
  }

  @Query(() => [department], { name: 'DepartmentList' })
  async departmentList(@Args() args: FindManydepartmentArgs) {
    return this.service.findMany({ ...args });
  }

  @Mutation(() => department, { name: 'CreateDepartment' })
  async createDepartment(@Args() args: CreateOnedepartmentArgs) {
    return this.service.create({ ...args });
  }

  @Mutation(() => department, { name: 'UpdateDepartment' })
  async updateDepartment(@Args() args: UpdateOnedepartmentArgs) {
    return this.service.update({ ...args });
  }

  @Mutation(() => department, { name: 'DeleteDepartment' })
  async deleteDepartment(@Args() args: DeleteOnedepartmentArgs) {
    return this.service.delete({ ...args });
  }
}