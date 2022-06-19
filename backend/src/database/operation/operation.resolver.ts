import {
    CreateOneoperationArgs,
    DeleteOneoperationArgs,
    FindFirstoperationArgs,
    FindManyoperationArgs,
    FindUniqueoperationArgs,
    operation,
    UpdateOneoperationArgs,
} from '../../@generated/prisma-nestjs-graphql/index';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { OperationService } from './operation.service';

@Resolver()
export class OperationResolver {
  constructor(private readonly service: OperationService) {}

  @Query(() => operation, { name: 'Operation', nullable: true })
  async Operation(@Args() args: FindUniqueoperationArgs) {
    return this.service.findUnique({ ...args });
  }

  @Query(() => operation, { name: 'OperationFirst', nullable: true })
  async operationFirst(@Args() args: FindFirstoperationArgs) {
    return this.service.findFirst({ ...args });
  }

  @Query(() => [operation], { name: 'OperationList' })
  async operationList(@Args() args: FindManyoperationArgs) {
    return this.service.findMany({ ...args });
  }

  @Mutation(() => operation, { name: 'CreateOperation' })
  async createOperation(@Args() args: CreateOneoperationArgs) {
    return this.service.create({ ...args });
  }

  @Mutation(() => operation, { name: 'UpdateOperation' })
  async updateOperation(@Args() args: UpdateOneoperationArgs) {
    return this.service.update({ ...args });
  }

  @Mutation(() => operation, { name: 'DeleteOperation' })
  async deleteOperation(@Args() args: DeleteOneoperationArgs) {
    return this.service.delete({ ...args });
  }
}