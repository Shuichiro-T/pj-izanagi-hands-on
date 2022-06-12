import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { CalendarResolver } from './calendar/calendar.resolver';
import { CalendarService } from './calendar/calendar.service';

@Module({
  imports: [PrismaModule],
  providers: [
    CalendarResolver,
    CalendarService
  ],
  exports: [CalendarService],
})
export class DatabaseModule {}