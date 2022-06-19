import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { CalendarResolver } from './calendar/calendar.resolver';
import { CalendarService } from './calendar/calendar.service';
import { DailyItemizedReportsResolver } from './daily_itemized_reports/daily_itemized_reports.resolver';
import { DailyItemizedReportsService } from './daily_itemized_reports/daily_itemized_reports.service';
import { DailyReportsResolver } from './daily_reports/daily_reports.resolver';
import { DailyReportsService } from './daily_reports/daily_reports.service';
import { DepartmentResolver } from './department/department.resolver';
import { DepartmentService } from './department/department.service';
import { EmployeesResolver } from './employees/employees.resolver';
import { EmployeesService } from './employees/employees.service';
import { OperationResolver } from './operation/operation.resolver';
import { OperationService } from './operation/operation.service';

@Module({
  imports: [PrismaModule],
  providers: [
    CalendarResolver,
    CalendarService,
    DailyItemizedReportsResolver,
    DailyItemizedReportsService,
    DailyReportsResolver,
    DailyReportsService,
    DepartmentResolver,
    DepartmentService,
    EmployeesResolver,
    EmployeesService,
    OperationResolver,
    OperationService
  ],
  exports: [CalendarService, 
    DailyItemizedReportsService,
    DailyReportsResolver,
    DepartmentService,
    EmployeesService,
    OperationService
  ],
})
export class DatabaseModule {}