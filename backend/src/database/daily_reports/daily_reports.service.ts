import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class DailyReportsService {
  constructor(private readonly prisma: PrismaService) {}

  async findUnique(args: Prisma.daily_reportsFindUniqueArgs) {
    return this.prisma.daily_reports.findUnique(args);
  }

  async findFirst(args: Prisma.daily_reportsFindFirstArgs) {
    return this.prisma.daily_reports.findFirst(args);
  }

  async findMany(args: Prisma.daily_reportsFindManyArgs) {
    return this.prisma.daily_reports.findMany(args);
  }

  async create(args: Prisma.daily_reportsCreateArgs) {
    return this.prisma.daily_reports.create(args);
  }

  async update(args: Prisma.daily_reportsUpdateArgs) {
    return this.prisma.daily_reports.update(args);
  }

  async delete(args: Prisma.daily_reportsDeleteArgs) {
    return this.prisma.daily_reports.delete(args);
  }
}