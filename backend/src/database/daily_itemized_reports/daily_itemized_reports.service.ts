import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class DailyItemizedReportsService {
  constructor(private readonly prisma: PrismaService) {}

  async findUnique(args: Prisma.daily_itemized_reportsFindUniqueArgs) {
    return this.prisma.daily_itemized_reports.findUnique(args);
  }

  async findFirst(args: Prisma.daily_itemized_reportsFindFirstArgs) {
    return this.prisma.daily_itemized_reports.findFirst(args);
  }

  async findMany(args: Prisma.daily_itemized_reportsFindManyArgs) {
    return this.prisma.daily_itemized_reports.findMany(args);
  }

  async create(args: Prisma.daily_itemized_reportsCreateArgs) {
    return this.prisma.daily_itemized_reports.create(args);
  }

  async update(args: Prisma.daily_itemized_reportsUpdateArgs) {
    return this.prisma.daily_itemized_reports.update(args);
  }

  async upsert(args: Prisma.daily_itemized_reportsUpsertArgs) {
    return this.prisma.daily_itemized_reports.upsert(args);
  }

  async delete(args: Prisma.daily_itemized_reportsDeleteArgs) {
    return this.prisma.daily_itemized_reports.delete(args);
  }
}