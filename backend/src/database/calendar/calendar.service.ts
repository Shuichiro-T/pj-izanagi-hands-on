import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class CalendarService {
  constructor(private readonly prisma: PrismaService) {}

  async findUnique(args: Prisma.calendarFindUniqueArgs) {
    return this.prisma.calendar.findUnique(args);
  }

  async findFirst(args: Prisma.calendarFindFirstArgs) {
    return this.prisma.calendar.findFirst(args);
  }

  async findMany(args: Prisma.calendarFindManyArgs) {
    return this.prisma.calendar.findMany(args);
  }

  async create(args: Prisma.calendarCreateArgs) {
    return this.prisma.calendar.create(args);
  }

  async update(args: Prisma.calendarUpdateArgs) {
    return this.prisma.calendar.update(args);
  }

  async delete(args: Prisma.calendarDeleteArgs) {
    return this.prisma.calendar.delete(args);
  }
}