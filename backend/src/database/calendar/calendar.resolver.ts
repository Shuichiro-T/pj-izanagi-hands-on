import {
    CreateOnecalendarArgs,
    DeleteOnecalendarArgs,
    FindFirstcalendarArgs,
    FindManycalendarArgs,
    FindUniquecalendarArgs,
    calendar,
    UpdateOnecalendarArgs,
} from '../../@generated/prisma-nestjs-graphql/index';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CalendarService } from './calendar.service';

@Resolver()
export class CalendarResolver {
  constructor(private readonly service: CalendarService) {}

  @Query(() => calendar, { name: 'Calendar', nullable: true })
  async calendar(@Args() args: FindUniquecalendarArgs) {
    return this.service.findUnique({ ...args });
  }

  @Query(() => calendar, { name: 'CalendarFirst', nullable: true })
  async calendarFirst(@Args() args: FindFirstcalendarArgs) {
    return this.service.findFirst({ ...args });
  }

  @Query(() => [calendar], { name: 'CalendarList' })
  async calendarList(@Args() args: FindManycalendarArgs) {
    return this.service.findMany({ ...args });
  }

  @Mutation(() => calendar, { name: 'CreateCalendar' })
  async createCalendar(@Args() args: CreateOnecalendarArgs) {
    return this.service.create({ ...args });
  }

  @Mutation(() => calendar, { name: 'UpdateCalendar' })
  async updateCalendar(@Args() args: UpdateOnecalendarArgs) {
    return this.service.update({ ...args });
  }

  @Mutation(() => calendar, { name: 'DeleteCalendar' })
  async deleteCalendar(@Args() args: DeleteOnecalendarArgs) {
    return this.service.delete({ ...args });
  }
}