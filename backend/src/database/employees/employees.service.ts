import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class EmployeesService {
  constructor(private readonly prisma: PrismaService) {}

  async findUnique(args: Prisma.employeesFindUniqueArgs) {
    return this.prisma.employees.findUnique(args);
  }

  async findFirst(args: Prisma.employeesFindFirstArgs) {
    return this.prisma.employees.findFirst(args);
  }

  async findMany(args: Prisma.employeesFindManyArgs) {
    return this.prisma.employees.findMany(args);
  }

  async create(args: Prisma.employeesCreateArgs) {
    return this.prisma.employees.create(args);
  }

  async update(args: Prisma.employeesUpdateArgs) {
    return this.prisma.employees.update(args);
  }

  async delete(args: Prisma.employeesDeleteArgs) {
    return this.prisma.employees.delete(args);
  }
}