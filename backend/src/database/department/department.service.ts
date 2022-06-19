import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class DepartmentService {
  constructor(private readonly prisma: PrismaService) {}

  async findUnique(args: Prisma.departmentFindUniqueArgs) {
    return this.prisma.department.findUnique(args);
  }

  async findFirst(args: Prisma.departmentFindFirstArgs) {
    return this.prisma.department.findFirst(args);
  }

  async findMany(args: Prisma.departmentFindManyArgs) {
    return this.prisma.department.findMany(args);
  }

  async create(args: Prisma.departmentCreateArgs) {
    return this.prisma.department.create(args);
  }

  async update(args: Prisma.departmentUpdateArgs) {
    return this.prisma.department.update(args);
  }

  async delete(args: Prisma.departmentDeleteArgs) {
    return this.prisma.department.delete(args);
  }
}