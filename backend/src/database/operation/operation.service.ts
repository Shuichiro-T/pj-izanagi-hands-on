import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class OperationService {
  constructor(private readonly prisma: PrismaService) {}

  async findUnique(args: Prisma.operationFindUniqueArgs) {
    return this.prisma.operation.findUnique(args);
  }

  async findFirst(args: Prisma.operationFindFirstArgs) {
    return this.prisma.operation.findFirst(args);
  }

  async findMany(args: Prisma.operationFindManyArgs) {
    return this.prisma.operation.findMany(args);
  }

  async create(args: Prisma.operationCreateArgs) {
    return this.prisma.operation.create(args);
  }

  async update(args: Prisma.operationUpdateArgs) {
    return this.prisma.operation.update(args);
  }

  async delete(args: Prisma.operationDeleteArgs) {
    return this.prisma.operation.delete(args);
  }
}