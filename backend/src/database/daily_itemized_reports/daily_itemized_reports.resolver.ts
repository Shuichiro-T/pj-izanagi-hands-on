import {
    CreateOnedailyItemizedReportsArgs,
    DeleteOnedailyItemizedReportsArgs,
    FindFirstdailyItemizedReportsArgs,
    FindManydailyItemizedReportsArgs,
    FindUniquedailyItemizedReportsArgs,
    daily_itemized_reports,
    UpdateOnedailyItemizedReportsArgs,
    UpsertOnedailyItemizedReportsArgs,
} from '../../@generated/prisma-nestjs-graphql/index';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { DailyItemizedReportsService } from './daily_itemized_reports.service';

@Resolver()
export class DailyItemizedReportsResolver {
  constructor(private readonly service: DailyItemizedReportsService) {}

  @Query(() => daily_itemized_reports, { name: 'DailyItemizedReports', nullable: true })
  async DailyItemizedReports(@Args() args: FindUniquedailyItemizedReportsArgs) {
    return this.service.findUnique({ ...args });
  }

  @Query(() => daily_itemized_reports, { name: 'DailyItemizedReportsFirst', nullable: true })
  async dailyItemizedReportsFirst(@Args() args: FindFirstdailyItemizedReportsArgs) {
    return this.service.findFirst({ ...args });
  }

  @Query(() => [daily_itemized_reports], { name: 'DailyItemizedReportsList' })
  async dailyItemizedReportsList(@Args() args: FindManydailyItemizedReportsArgs) {
    return this.service.findMany({ ...args });
  }

  @Mutation(() => daily_itemized_reports, { name: 'CreateDailyItemizedReports' })
  async createDailyItemizedReports(@Args() args: CreateOnedailyItemizedReportsArgs) {
    return this.service.create({ ...args });
  }

  @Mutation(() => daily_itemized_reports, { name: 'UpdateDailyItemizedReports' })
  async updateDailyItemizedReports(@Args() args: UpdateOnedailyItemizedReportsArgs) {
    return this.service.update({ ...args });
  }

  @Mutation(() => daily_itemized_reports, { name: 'UpsertDailyItemizedReports' })
  async upsertDailyItemizedReports(@Args() args: UpsertOnedailyItemizedReportsArgs) {
    return this.service.upsert({ ...args });
  }

  @Mutation(() => daily_itemized_reports, { name: 'DeleteDailyItemizedReports' })
  async deleteDailyItemizedReports(@Args() args: DeleteOnedailyItemizedReportsArgs) {
    return this.service.delete({ ...args });
  }
}