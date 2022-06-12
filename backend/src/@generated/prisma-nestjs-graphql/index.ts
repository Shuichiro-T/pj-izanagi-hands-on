import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { registerEnumType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

export enum SortOrder {
    asc = "asc",
    desc = "desc"
}

export enum QueryMode {
    'default' = "default",
    insensitive = "insensitive"
}

export enum OperationScalarFieldEnum {
    operation_id = "operation_id",
    operation_name = "operation_name"
}

export enum EmployeesScalarFieldEnum {
    employees_id = "employees_id",
    employees_name = "employees_name",
    department_id = "department_id"
}

export enum DepartmentScalarFieldEnum {
    department_id = "department_id",
    department_name = "department_name"
}

export enum Daily_reportsScalarFieldEnum {
    year_month = "year_month",
    day = "day",
    employees_id = "employees_id",
    start_time = "start_time",
    end_time = "end_time",
    work_time = "work_time"
}

export enum Daily_itemized_reportsScalarFieldEnum {
    year_month = "year_month",
    day = "day",
    employees_id = "employees_id",
    operation_id = "operation_id",
    operation_time = "operation_time"
}

export enum CalendarScalarFieldEnum {
    year_month = "year_month",
    day = "day",
    workday = "workday",
    saturday = "saturday",
    holiday = "holiday"
}

registerEnumType(CalendarScalarFieldEnum, { name: 'CalendarScalarFieldEnum', description: undefined })
registerEnumType(Daily_itemized_reportsScalarFieldEnum, { name: 'Daily_itemized_reportsScalarFieldEnum', description: undefined })
registerEnumType(Daily_reportsScalarFieldEnum, { name: 'Daily_reportsScalarFieldEnum', description: undefined })
registerEnumType(DepartmentScalarFieldEnum, { name: 'DepartmentScalarFieldEnum', description: undefined })
registerEnumType(EmployeesScalarFieldEnum, { name: 'EmployeesScalarFieldEnum', description: undefined })
registerEnumType(OperationScalarFieldEnum, { name: 'OperationScalarFieldEnum', description: undefined })
registerEnumType(QueryMode, { name: 'QueryMode', description: undefined })
registerEnumType(SortOrder, { name: 'SortOrder', description: undefined })

@ArgsType()
export class calendarAggregateArgs {
    @Field(() => calendarWhereInput, {nullable:true})
    @Type(() => calendarWhereInput)
    where?: InstanceType<typeof calendarWhereInput>;
    @Field(() => [calendarOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<calendarOrderByWithRelationInput>;
    @Field(() => calendarWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof calendarWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
}

@InputType()
export class calendarCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    year_month?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    day?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    workday?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    saturday?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    holiday?: keyof typeof SortOrder;
}

@InputType()
export class calendarCreateManyInput {
    @Field(() => String, {nullable:false})
    year_month!: string;
    @Field(() => String, {nullable:false})
    day!: string;
    @Field(() => Boolean, {nullable:true})
    workday?: boolean;
    @Field(() => Boolean, {nullable:true})
    saturday?: boolean;
    @Field(() => Boolean, {nullable:true})
    holiday?: boolean;
}

@InputType()
export class calendarCreateNestedOneWithoutDaily_reportsInput {
    @Field(() => calendarCreateWithoutDaily_reportsInput, {nullable:true})
    @Type(() => calendarCreateWithoutDaily_reportsInput)
    create?: InstanceType<typeof calendarCreateWithoutDaily_reportsInput>;
    @Field(() => calendarCreateOrConnectWithoutDaily_reportsInput, {nullable:true})
    @Type(() => calendarCreateOrConnectWithoutDaily_reportsInput)
    connectOrCreate?: InstanceType<typeof calendarCreateOrConnectWithoutDaily_reportsInput>;
    @Field(() => calendarWhereUniqueInput, {nullable:true})
    @Type(() => calendarWhereUniqueInput)
    connect?: InstanceType<typeof calendarWhereUniqueInput>;
}

@InputType()
export class calendarCreateOrConnectWithoutDaily_reportsInput {
    @Field(() => calendarWhereUniqueInput, {nullable:false})
    @Type(() => calendarWhereUniqueInput)
    where!: InstanceType<typeof calendarWhereUniqueInput>;
    @Field(() => calendarCreateWithoutDaily_reportsInput, {nullable:false})
    @Type(() => calendarCreateWithoutDaily_reportsInput)
    create!: InstanceType<typeof calendarCreateWithoutDaily_reportsInput>;
}

@InputType()
export class calendarCreateWithoutDaily_reportsInput {
    @Field(() => String, {nullable:false})
    year_month!: string;
    @Field(() => String, {nullable:false})
    day!: string;
    @Field(() => Boolean, {nullable:true})
    workday?: boolean;
    @Field(() => Boolean, {nullable:true})
    saturday?: boolean;
    @Field(() => Boolean, {nullable:true})
    holiday?: boolean;
}

@InputType()
export class calendarCreateInput {
    @Field(() => String, {nullable:false})
    year_month!: string;
    @Field(() => String, {nullable:false})
    day!: string;
    @Field(() => Boolean, {nullable:true})
    workday?: boolean;
    @Field(() => Boolean, {nullable:true})
    saturday?: boolean;
    @Field(() => Boolean, {nullable:true})
    holiday?: boolean;
    @Field(() => daily_reportsCreateNestedManyWithoutCalendarInput, {nullable:true})
    daily_reports?: InstanceType<typeof daily_reportsCreateNestedManyWithoutCalendarInput>;
}

@ArgsType()
export class calendarGroupByArgs {
    @Field(() => calendarWhereInput, {nullable:true})
    @Type(() => calendarWhereInput)
    where?: InstanceType<typeof calendarWhereInput>;
    @Field(() => [calendarOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<calendarOrderByWithAggregationInput>;
    @Field(() => [CalendarScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof CalendarScalarFieldEnum>;
    @Field(() => calendarScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof calendarScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
}

@InputType()
export class calendarMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    year_month?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    day?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    workday?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    saturday?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    holiday?: keyof typeof SortOrder;
}

@InputType()
export class calendarMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    year_month?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    day?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    workday?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    saturday?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    holiday?: keyof typeof SortOrder;
}

@InputType()
export class calendarOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    year_month?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    day?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    workday?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    saturday?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    holiday?: keyof typeof SortOrder;
    @Field(() => calendarCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof calendarCountOrderByAggregateInput>;
    @Field(() => calendarMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof calendarMaxOrderByAggregateInput>;
    @Field(() => calendarMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof calendarMinOrderByAggregateInput>;
}

@InputType()
export class calendarOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    year_month?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    day?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    workday?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    saturday?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    holiday?: keyof typeof SortOrder;
    @Field(() => daily_reportsOrderByRelationAggregateInput, {nullable:true})
    daily_reports?: InstanceType<typeof daily_reportsOrderByRelationAggregateInput>;
}

@InputType()
export class calendarScalarWhereWithAggregatesInput {
    @Field(() => [calendarScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<calendarScalarWhereWithAggregatesInput>;
    @Field(() => [calendarScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<calendarScalarWhereWithAggregatesInput>;
    @Field(() => [calendarScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<calendarScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    year_month?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    day?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    workday?: InstanceType<typeof BoolWithAggregatesFilter>;
    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    saturday?: InstanceType<typeof BoolWithAggregatesFilter>;
    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    holiday?: InstanceType<typeof BoolWithAggregatesFilter>;
}

@InputType()
export class calendarUncheckedCreateWithoutDaily_reportsInput {
    @Field(() => String, {nullable:false})
    year_month!: string;
    @Field(() => String, {nullable:false})
    day!: string;
    @Field(() => Boolean, {nullable:true})
    workday?: boolean;
    @Field(() => Boolean, {nullable:true})
    saturday?: boolean;
    @Field(() => Boolean, {nullable:true})
    holiday?: boolean;
}

@InputType()
export class calendarUncheckedCreateInput {
    @Field(() => String, {nullable:false})
    year_month!: string;
    @Field(() => String, {nullable:false})
    day!: string;
    @Field(() => Boolean, {nullable:true})
    workday?: boolean;
    @Field(() => Boolean, {nullable:true})
    saturday?: boolean;
    @Field(() => Boolean, {nullable:true})
    holiday?: boolean;
    @Field(() => daily_reportsUncheckedCreateNestedManyWithoutCalendarInput, {nullable:true})
    daily_reports?: InstanceType<typeof daily_reportsUncheckedCreateNestedManyWithoutCalendarInput>;
}

@InputType()
export class calendarUncheckedUpdateManyInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    year_month?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    day?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    workday?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    saturday?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    holiday?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
}

@InputType()
export class calendarUncheckedUpdateWithoutDaily_reportsInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    year_month?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    day?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    workday?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    saturday?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    holiday?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
}

@InputType()
export class calendarUncheckedUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    year_month?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    day?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    workday?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    saturday?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    holiday?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => daily_reportsUncheckedUpdateManyWithoutCalendarInput, {nullable:true})
    daily_reports?: InstanceType<typeof daily_reportsUncheckedUpdateManyWithoutCalendarInput>;
}

@InputType()
export class calendarUpdateManyMutationInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    year_month?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    day?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    workday?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    saturday?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    holiday?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
}

@InputType()
export class calendarUpdateOneRequiredWithoutDaily_reportsInput {
    @Field(() => calendarCreateWithoutDaily_reportsInput, {nullable:true})
    @Type(() => calendarCreateWithoutDaily_reportsInput)
    create?: InstanceType<typeof calendarCreateWithoutDaily_reportsInput>;
    @Field(() => calendarCreateOrConnectWithoutDaily_reportsInput, {nullable:true})
    @Type(() => calendarCreateOrConnectWithoutDaily_reportsInput)
    connectOrCreate?: InstanceType<typeof calendarCreateOrConnectWithoutDaily_reportsInput>;
    @Field(() => calendarUpsertWithoutDaily_reportsInput, {nullable:true})
    @Type(() => calendarUpsertWithoutDaily_reportsInput)
    upsert?: InstanceType<typeof calendarUpsertWithoutDaily_reportsInput>;
    @Field(() => calendarWhereUniqueInput, {nullable:true})
    @Type(() => calendarWhereUniqueInput)
    connect?: InstanceType<typeof calendarWhereUniqueInput>;
    @Field(() => calendarUpdateWithoutDaily_reportsInput, {nullable:true})
    @Type(() => calendarUpdateWithoutDaily_reportsInput)
    update?: InstanceType<typeof calendarUpdateWithoutDaily_reportsInput>;
}

@InputType()
export class calendarUpdateWithoutDaily_reportsInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    year_month?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    day?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    workday?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    saturday?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    holiday?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
}

@InputType()
export class calendarUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    year_month?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    day?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    workday?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    saturday?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    holiday?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => daily_reportsUpdateManyWithoutCalendarInput, {nullable:true})
    daily_reports?: InstanceType<typeof daily_reportsUpdateManyWithoutCalendarInput>;
}

@InputType()
export class calendarUpsertWithoutDaily_reportsInput {
    @Field(() => calendarUpdateWithoutDaily_reportsInput, {nullable:false})
    @Type(() => calendarUpdateWithoutDaily_reportsInput)
    update!: InstanceType<typeof calendarUpdateWithoutDaily_reportsInput>;
    @Field(() => calendarCreateWithoutDaily_reportsInput, {nullable:false})
    @Type(() => calendarCreateWithoutDaily_reportsInput)
    create!: InstanceType<typeof calendarCreateWithoutDaily_reportsInput>;
}

@InputType()
export class calendarWhereUniqueInput {
    @Field(() => calendarYear_monthDayCompoundUniqueInput, {nullable:true})
    year_month_day?: InstanceType<typeof calendarYear_monthDayCompoundUniqueInput>;
}

@InputType()
export class calendarWhereInput {
    @Field(() => [calendarWhereInput], {nullable:true})
    AND?: Array<calendarWhereInput>;
    @Field(() => [calendarWhereInput], {nullable:true})
    OR?: Array<calendarWhereInput>;
    @Field(() => [calendarWhereInput], {nullable:true})
    NOT?: Array<calendarWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    year_month?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    day?: InstanceType<typeof StringFilter>;
    @Field(() => BoolFilter, {nullable:true})
    workday?: InstanceType<typeof BoolFilter>;
    @Field(() => BoolFilter, {nullable:true})
    saturday?: InstanceType<typeof BoolFilter>;
    @Field(() => BoolFilter, {nullable:true})
    holiday?: InstanceType<typeof BoolFilter>;
    @Field(() => Daily_reportsListRelationFilter, {nullable:true})
    daily_reports?: InstanceType<typeof Daily_reportsListRelationFilter>;
}

@InputType()
export class calendarYear_monthDayCompoundUniqueInput {
    @Field(() => String, {nullable:false})
    year_month!: string;
    @Field(() => String, {nullable:false})
    day!: string;
}

@ObjectType()
export class calendar {
    @Field(() => String, {nullable:false})
    year_month!: string;
    @Field(() => String, {nullable:false})
    day!: string;
    @Field(() => Boolean, {nullable:false,defaultValue:true})
    workday!: boolean;
    @Field(() => Boolean, {nullable:false,defaultValue:false})
    saturday!: boolean;
    @Field(() => Boolean, {nullable:false,defaultValue:false})
    holiday!: boolean;
    @Field(() => [daily_reports], {nullable:true})
    daily_reports?: Array<daily_reports>;
    @Field(() => CalendarCount, {nullable:false})
    _count?: InstanceType<typeof CalendarCount>;
}

@ArgsType()
export class CreateManycalendarArgs {
    @Field(() => [calendarCreateManyInput], {nullable:false})
    @Type(() => calendarCreateManyInput)
    data!: Array<calendarCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOnecalendarArgs {
    @Field(() => calendarCreateInput, {nullable:false})
    @Type(() => calendarCreateInput)
    data!: InstanceType<typeof calendarCreateInput>;
}

@ArgsType()
export class DeleteManycalendarArgs {
    @Field(() => calendarWhereInput, {nullable:true})
    @Type(() => calendarWhereInput)
    where?: InstanceType<typeof calendarWhereInput>;
}

@ArgsType()
export class DeleteOnecalendarArgs {
    @Field(() => calendarWhereUniqueInput, {nullable:false})
    @Type(() => calendarWhereUniqueInput)
    where!: InstanceType<typeof calendarWhereUniqueInput>;
}

@ArgsType()
export class FindFirstcalendarArgs {
    @Field(() => calendarWhereInput, {nullable:true})
    @Type(() => calendarWhereInput)
    where?: InstanceType<typeof calendarWhereInput>;
    @Field(() => [calendarOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<calendarOrderByWithRelationInput>;
    @Field(() => calendarWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof calendarWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [CalendarScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof CalendarScalarFieldEnum>;
}

@ArgsType()
export class FindManycalendarArgs {
    @Field(() => calendarWhereInput, {nullable:true})
    @Type(() => calendarWhereInput)
    where?: InstanceType<typeof calendarWhereInput>;
    @Field(() => [calendarOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<calendarOrderByWithRelationInput>;
    @Field(() => calendarWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof calendarWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [CalendarScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof CalendarScalarFieldEnum>;
}

@ArgsType()
export class FindUniquecalendarArgs {
    @Field(() => calendarWhereUniqueInput, {nullable:false})
    @Type(() => calendarWhereUniqueInput)
    where!: InstanceType<typeof calendarWhereUniqueInput>;
}

@ArgsType()
export class UpdateManycalendarArgs {
    @Field(() => calendarUpdateManyMutationInput, {nullable:false})
    @Type(() => calendarUpdateManyMutationInput)
    data!: InstanceType<typeof calendarUpdateManyMutationInput>;
    @Field(() => calendarWhereInput, {nullable:true})
    @Type(() => calendarWhereInput)
    where?: InstanceType<typeof calendarWhereInput>;
}

@ArgsType()
export class UpdateOnecalendarArgs {
    @Field(() => calendarUpdateInput, {nullable:false})
    @Type(() => calendarUpdateInput)
    data!: InstanceType<typeof calendarUpdateInput>;
    @Field(() => calendarWhereUniqueInput, {nullable:false})
    @Type(() => calendarWhereUniqueInput)
    where!: InstanceType<typeof calendarWhereUniqueInput>;
}

@ArgsType()
export class UpsertOnecalendarArgs {
    @Field(() => calendarWhereUniqueInput, {nullable:false})
    @Type(() => calendarWhereUniqueInput)
    where!: InstanceType<typeof calendarWhereUniqueInput>;
    @Field(() => calendarCreateInput, {nullable:false})
    @Type(() => calendarCreateInput)
    create!: InstanceType<typeof calendarCreateInput>;
    @Field(() => calendarUpdateInput, {nullable:false})
    @Type(() => calendarUpdateInput)
    update!: InstanceType<typeof calendarUpdateInput>;
}

@InputType()
export class daily_itemized_reportsAvgOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    employees_id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    operation_id?: keyof typeof SortOrder;
}

@InputType()
export class daily_itemized_reportsCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    year_month?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    day?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    employees_id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    operation_id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    operation_time?: keyof typeof SortOrder;
}

@InputType()
export class daily_itemized_reportsCreateManyDaily_reportsInputEnvelope {
    @Field(() => [daily_itemized_reportsCreateManyDaily_reportsInput], {nullable:false})
    @Type(() => daily_itemized_reportsCreateManyDaily_reportsInput)
    data!: Array<daily_itemized_reportsCreateManyDaily_reportsInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class daily_itemized_reportsCreateManyDaily_reportsInput {
    @Field(() => Int, {nullable:false})
    operation_id!: number;
    @Field(() => Date, {nullable:true})
    operation_time?: Date | string;
}

@InputType()
export class daily_itemized_reportsCreateManyOperationInputEnvelope {
    @Field(() => [daily_itemized_reportsCreateManyOperationInput], {nullable:false})
    @Type(() => daily_itemized_reportsCreateManyOperationInput)
    data!: Array<daily_itemized_reportsCreateManyOperationInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class daily_itemized_reportsCreateManyOperationInput {
    @Field(() => String, {nullable:false})
    year_month!: string;
    @Field(() => String, {nullable:false})
    day!: string;
    @Field(() => Int, {nullable:false})
    employees_id!: number;
    @Field(() => Date, {nullable:true})
    operation_time?: Date | string;
}

@InputType()
export class daily_itemized_reportsCreateManyInput {
    @Field(() => String, {nullable:false})
    year_month!: string;
    @Field(() => String, {nullable:false})
    day!: string;
    @Field(() => Int, {nullable:false})
    employees_id!: number;
    @Field(() => Int, {nullable:false})
    operation_id!: number;
    @Field(() => Date, {nullable:true})
    operation_time?: Date | string;
}

@InputType()
export class daily_itemized_reportsCreateNestedManyWithoutDaily_reportsInput {
    @Field(() => [daily_itemized_reportsCreateWithoutDaily_reportsInput], {nullable:true})
    @Type(() => daily_itemized_reportsCreateWithoutDaily_reportsInput)
    create?: Array<daily_itemized_reportsCreateWithoutDaily_reportsInput>;
    @Field(() => [daily_itemized_reportsCreateOrConnectWithoutDaily_reportsInput], {nullable:true})
    @Type(() => daily_itemized_reportsCreateOrConnectWithoutDaily_reportsInput)
    connectOrCreate?: Array<daily_itemized_reportsCreateOrConnectWithoutDaily_reportsInput>;
    @Field(() => daily_itemized_reportsCreateManyDaily_reportsInputEnvelope, {nullable:true})
    @Type(() => daily_itemized_reportsCreateManyDaily_reportsInputEnvelope)
    createMany?: InstanceType<typeof daily_itemized_reportsCreateManyDaily_reportsInputEnvelope>;
    @Field(() => [daily_itemized_reportsWhereUniqueInput], {nullable:true})
    @Type(() => daily_itemized_reportsWhereUniqueInput)
    connect?: Array<daily_itemized_reportsWhereUniqueInput>;
}

@InputType()
export class daily_itemized_reportsCreateNestedManyWithoutOperationInput {
    @Field(() => [daily_itemized_reportsCreateWithoutOperationInput], {nullable:true})
    @Type(() => daily_itemized_reportsCreateWithoutOperationInput)
    create?: Array<daily_itemized_reportsCreateWithoutOperationInput>;
    @Field(() => [daily_itemized_reportsCreateOrConnectWithoutOperationInput], {nullable:true})
    @Type(() => daily_itemized_reportsCreateOrConnectWithoutOperationInput)
    connectOrCreate?: Array<daily_itemized_reportsCreateOrConnectWithoutOperationInput>;
    @Field(() => daily_itemized_reportsCreateManyOperationInputEnvelope, {nullable:true})
    @Type(() => daily_itemized_reportsCreateManyOperationInputEnvelope)
    createMany?: InstanceType<typeof daily_itemized_reportsCreateManyOperationInputEnvelope>;
    @Field(() => [daily_itemized_reportsWhereUniqueInput], {nullable:true})
    @Type(() => daily_itemized_reportsWhereUniqueInput)
    connect?: Array<daily_itemized_reportsWhereUniqueInput>;
}

@InputType()
export class daily_itemized_reportsCreateOrConnectWithoutDaily_reportsInput {
    @Field(() => daily_itemized_reportsWhereUniqueInput, {nullable:false})
    @Type(() => daily_itemized_reportsWhereUniqueInput)
    where!: InstanceType<typeof daily_itemized_reportsWhereUniqueInput>;
    @Field(() => daily_itemized_reportsCreateWithoutDaily_reportsInput, {nullable:false})
    @Type(() => daily_itemized_reportsCreateWithoutDaily_reportsInput)
    create!: InstanceType<typeof daily_itemized_reportsCreateWithoutDaily_reportsInput>;
}

@InputType()
export class daily_itemized_reportsCreateOrConnectWithoutOperationInput {
    @Field(() => daily_itemized_reportsWhereUniqueInput, {nullable:false})
    @Type(() => daily_itemized_reportsWhereUniqueInput)
    where!: InstanceType<typeof daily_itemized_reportsWhereUniqueInput>;
    @Field(() => daily_itemized_reportsCreateWithoutOperationInput, {nullable:false})
    @Type(() => daily_itemized_reportsCreateWithoutOperationInput)
    create!: InstanceType<typeof daily_itemized_reportsCreateWithoutOperationInput>;
}

@InputType()
export class daily_itemized_reportsCreateWithoutDaily_reportsInput {
    @Field(() => Date, {nullable:true})
    operation_time?: Date | string;
    @Field(() => operationCreateNestedOneWithoutDaily_itemized_reportsInput, {nullable:false})
    operation!: InstanceType<typeof operationCreateNestedOneWithoutDaily_itemized_reportsInput>;
}

@InputType()
export class daily_itemized_reportsCreateWithoutOperationInput {
    @Field(() => Date, {nullable:true})
    operation_time?: Date | string;
    @Field(() => daily_reportsCreateNestedOneWithoutDaily_itemized_reportsInput, {nullable:false})
    daily_reports!: InstanceType<typeof daily_reportsCreateNestedOneWithoutDaily_itemized_reportsInput>;
}

@InputType()
export class daily_itemized_reportsCreateInput {
    @Field(() => Date, {nullable:true})
    operation_time?: Date | string;
    @Field(() => operationCreateNestedOneWithoutDaily_itemized_reportsInput, {nullable:false})
    operation!: InstanceType<typeof operationCreateNestedOneWithoutDaily_itemized_reportsInput>;
    @Field(() => daily_reportsCreateNestedOneWithoutDaily_itemized_reportsInput, {nullable:false})
    daily_reports!: InstanceType<typeof daily_reportsCreateNestedOneWithoutDaily_itemized_reportsInput>;
}

@InputType()
export class daily_itemized_reportsMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    year_month?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    day?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    employees_id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    operation_id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    operation_time?: keyof typeof SortOrder;
}

@InputType()
export class daily_itemized_reportsMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    year_month?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    day?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    employees_id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    operation_id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    operation_time?: keyof typeof SortOrder;
}

@InputType()
export class daily_itemized_reportsOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: keyof typeof SortOrder;
}

@InputType()
export class daily_itemized_reportsOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    year_month?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    day?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    employees_id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    operation_id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    operation_time?: keyof typeof SortOrder;
    @Field(() => daily_itemized_reportsCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof daily_itemized_reportsCountOrderByAggregateInput>;
    @Field(() => daily_itemized_reportsAvgOrderByAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof daily_itemized_reportsAvgOrderByAggregateInput>;
    @Field(() => daily_itemized_reportsMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof daily_itemized_reportsMaxOrderByAggregateInput>;
    @Field(() => daily_itemized_reportsMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof daily_itemized_reportsMinOrderByAggregateInput>;
    @Field(() => daily_itemized_reportsSumOrderByAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof daily_itemized_reportsSumOrderByAggregateInput>;
}

@InputType()
export class daily_itemized_reportsOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    year_month?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    day?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    employees_id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    operation_id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    operation_time?: keyof typeof SortOrder;
    @Field(() => operationOrderByWithRelationInput, {nullable:true})
    operation?: InstanceType<typeof operationOrderByWithRelationInput>;
    @Field(() => daily_reportsOrderByWithRelationInput, {nullable:true})
    daily_reports?: InstanceType<typeof daily_reportsOrderByWithRelationInput>;
}

@InputType()
export class daily_itemized_reportsScalarWhereWithAggregatesInput {
    @Field(() => [daily_itemized_reportsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<daily_itemized_reportsScalarWhereWithAggregatesInput>;
    @Field(() => [daily_itemized_reportsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<daily_itemized_reportsScalarWhereWithAggregatesInput>;
    @Field(() => [daily_itemized_reportsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<daily_itemized_reportsScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    year_month?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    day?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    employees_id?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    operation_id?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    operation_time?: InstanceType<typeof DateTimeNullableWithAggregatesFilter>;
}

@InputType()
export class daily_itemized_reportsScalarWhereInput {
    @Field(() => [daily_itemized_reportsScalarWhereInput], {nullable:true})
    AND?: Array<daily_itemized_reportsScalarWhereInput>;
    @Field(() => [daily_itemized_reportsScalarWhereInput], {nullable:true})
    OR?: Array<daily_itemized_reportsScalarWhereInput>;
    @Field(() => [daily_itemized_reportsScalarWhereInput], {nullable:true})
    NOT?: Array<daily_itemized_reportsScalarWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    year_month?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    day?: InstanceType<typeof StringFilter>;
    @Field(() => IntFilter, {nullable:true})
    employees_id?: InstanceType<typeof IntFilter>;
    @Field(() => IntFilter, {nullable:true})
    operation_id?: InstanceType<typeof IntFilter>;
    @Field(() => DateTimeNullableFilter, {nullable:true})
    operation_time?: InstanceType<typeof DateTimeNullableFilter>;
}

@InputType()
export class daily_itemized_reportsSumOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    employees_id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    operation_id?: keyof typeof SortOrder;
}

@InputType()
export class daily_itemized_reportsUncheckedCreateNestedManyWithoutDaily_reportsInput {
    @Field(() => [daily_itemized_reportsCreateWithoutDaily_reportsInput], {nullable:true})
    @Type(() => daily_itemized_reportsCreateWithoutDaily_reportsInput)
    create?: Array<daily_itemized_reportsCreateWithoutDaily_reportsInput>;
    @Field(() => [daily_itemized_reportsCreateOrConnectWithoutDaily_reportsInput], {nullable:true})
    @Type(() => daily_itemized_reportsCreateOrConnectWithoutDaily_reportsInput)
    connectOrCreate?: Array<daily_itemized_reportsCreateOrConnectWithoutDaily_reportsInput>;
    @Field(() => daily_itemized_reportsCreateManyDaily_reportsInputEnvelope, {nullable:true})
    @Type(() => daily_itemized_reportsCreateManyDaily_reportsInputEnvelope)
    createMany?: InstanceType<typeof daily_itemized_reportsCreateManyDaily_reportsInputEnvelope>;
    @Field(() => [daily_itemized_reportsWhereUniqueInput], {nullable:true})
    @Type(() => daily_itemized_reportsWhereUniqueInput)
    connect?: Array<daily_itemized_reportsWhereUniqueInput>;
}

@InputType()
export class daily_itemized_reportsUncheckedCreateNestedManyWithoutOperationInput {
    @Field(() => [daily_itemized_reportsCreateWithoutOperationInput], {nullable:true})
    @Type(() => daily_itemized_reportsCreateWithoutOperationInput)
    create?: Array<daily_itemized_reportsCreateWithoutOperationInput>;
    @Field(() => [daily_itemized_reportsCreateOrConnectWithoutOperationInput], {nullable:true})
    @Type(() => daily_itemized_reportsCreateOrConnectWithoutOperationInput)
    connectOrCreate?: Array<daily_itemized_reportsCreateOrConnectWithoutOperationInput>;
    @Field(() => daily_itemized_reportsCreateManyOperationInputEnvelope, {nullable:true})
    @Type(() => daily_itemized_reportsCreateManyOperationInputEnvelope)
    createMany?: InstanceType<typeof daily_itemized_reportsCreateManyOperationInputEnvelope>;
    @Field(() => [daily_itemized_reportsWhereUniqueInput], {nullable:true})
    @Type(() => daily_itemized_reportsWhereUniqueInput)
    connect?: Array<daily_itemized_reportsWhereUniqueInput>;
}

@InputType()
export class daily_itemized_reportsUncheckedCreateWithoutDaily_reportsInput {
    @Field(() => Int, {nullable:false})
    operation_id!: number;
    @Field(() => Date, {nullable:true})
    operation_time?: Date | string;
}

@InputType()
export class daily_itemized_reportsUncheckedCreateWithoutOperationInput {
    @Field(() => String, {nullable:false})
    year_month!: string;
    @Field(() => String, {nullable:false})
    day!: string;
    @Field(() => Int, {nullable:false})
    employees_id!: number;
    @Field(() => Date, {nullable:true})
    operation_time?: Date | string;
}

@InputType()
export class daily_itemized_reportsUncheckedCreateInput {
    @Field(() => String, {nullable:false})
    year_month!: string;
    @Field(() => String, {nullable:false})
    day!: string;
    @Field(() => Int, {nullable:false})
    employees_id!: number;
    @Field(() => Int, {nullable:false})
    operation_id!: number;
    @Field(() => Date, {nullable:true})
    operation_time?: Date | string;
}

@InputType()
export class daily_itemized_reportsUncheckedUpdateManyWithoutDaily_itemized_reportsInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    operation_id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    operation_time?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class daily_itemized_reportsUncheckedUpdateManyWithoutDaily_reportsInput {
    @Field(() => [daily_itemized_reportsCreateWithoutDaily_reportsInput], {nullable:true})
    @Type(() => daily_itemized_reportsCreateWithoutDaily_reportsInput)
    create?: Array<daily_itemized_reportsCreateWithoutDaily_reportsInput>;
    @Field(() => [daily_itemized_reportsCreateOrConnectWithoutDaily_reportsInput], {nullable:true})
    @Type(() => daily_itemized_reportsCreateOrConnectWithoutDaily_reportsInput)
    connectOrCreate?: Array<daily_itemized_reportsCreateOrConnectWithoutDaily_reportsInput>;
    @Field(() => [daily_itemized_reportsUpsertWithWhereUniqueWithoutDaily_reportsInput], {nullable:true})
    @Type(() => daily_itemized_reportsUpsertWithWhereUniqueWithoutDaily_reportsInput)
    upsert?: Array<daily_itemized_reportsUpsertWithWhereUniqueWithoutDaily_reportsInput>;
    @Field(() => daily_itemized_reportsCreateManyDaily_reportsInputEnvelope, {nullable:true})
    @Type(() => daily_itemized_reportsCreateManyDaily_reportsInputEnvelope)
    createMany?: InstanceType<typeof daily_itemized_reportsCreateManyDaily_reportsInputEnvelope>;
    @Field(() => [daily_itemized_reportsWhereUniqueInput], {nullable:true})
    @Type(() => daily_itemized_reportsWhereUniqueInput)
    set?: Array<daily_itemized_reportsWhereUniqueInput>;
    @Field(() => [daily_itemized_reportsWhereUniqueInput], {nullable:true})
    @Type(() => daily_itemized_reportsWhereUniqueInput)
    disconnect?: Array<daily_itemized_reportsWhereUniqueInput>;
    @Field(() => [daily_itemized_reportsWhereUniqueInput], {nullable:true})
    @Type(() => daily_itemized_reportsWhereUniqueInput)
    delete?: Array<daily_itemized_reportsWhereUniqueInput>;
    @Field(() => [daily_itemized_reportsWhereUniqueInput], {nullable:true})
    @Type(() => daily_itemized_reportsWhereUniqueInput)
    connect?: Array<daily_itemized_reportsWhereUniqueInput>;
    @Field(() => [daily_itemized_reportsUpdateWithWhereUniqueWithoutDaily_reportsInput], {nullable:true})
    @Type(() => daily_itemized_reportsUpdateWithWhereUniqueWithoutDaily_reportsInput)
    update?: Array<daily_itemized_reportsUpdateWithWhereUniqueWithoutDaily_reportsInput>;
    @Field(() => [daily_itemized_reportsUpdateManyWithWhereWithoutDaily_reportsInput], {nullable:true})
    @Type(() => daily_itemized_reportsUpdateManyWithWhereWithoutDaily_reportsInput)
    updateMany?: Array<daily_itemized_reportsUpdateManyWithWhereWithoutDaily_reportsInput>;
    @Field(() => [daily_itemized_reportsScalarWhereInput], {nullable:true})
    @Type(() => daily_itemized_reportsScalarWhereInput)
    deleteMany?: Array<daily_itemized_reportsScalarWhereInput>;
}

@InputType()
export class daily_itemized_reportsUncheckedUpdateManyWithoutOperationInput {
    @Field(() => [daily_itemized_reportsCreateWithoutOperationInput], {nullable:true})
    @Type(() => daily_itemized_reportsCreateWithoutOperationInput)
    create?: Array<daily_itemized_reportsCreateWithoutOperationInput>;
    @Field(() => [daily_itemized_reportsCreateOrConnectWithoutOperationInput], {nullable:true})
    @Type(() => daily_itemized_reportsCreateOrConnectWithoutOperationInput)
    connectOrCreate?: Array<daily_itemized_reportsCreateOrConnectWithoutOperationInput>;
    @Field(() => [daily_itemized_reportsUpsertWithWhereUniqueWithoutOperationInput], {nullable:true})
    @Type(() => daily_itemized_reportsUpsertWithWhereUniqueWithoutOperationInput)
    upsert?: Array<daily_itemized_reportsUpsertWithWhereUniqueWithoutOperationInput>;
    @Field(() => daily_itemized_reportsCreateManyOperationInputEnvelope, {nullable:true})
    @Type(() => daily_itemized_reportsCreateManyOperationInputEnvelope)
    createMany?: InstanceType<typeof daily_itemized_reportsCreateManyOperationInputEnvelope>;
    @Field(() => [daily_itemized_reportsWhereUniqueInput], {nullable:true})
    @Type(() => daily_itemized_reportsWhereUniqueInput)
    set?: Array<daily_itemized_reportsWhereUniqueInput>;
    @Field(() => [daily_itemized_reportsWhereUniqueInput], {nullable:true})
    @Type(() => daily_itemized_reportsWhereUniqueInput)
    disconnect?: Array<daily_itemized_reportsWhereUniqueInput>;
    @Field(() => [daily_itemized_reportsWhereUniqueInput], {nullable:true})
    @Type(() => daily_itemized_reportsWhereUniqueInput)
    delete?: Array<daily_itemized_reportsWhereUniqueInput>;
    @Field(() => [daily_itemized_reportsWhereUniqueInput], {nullable:true})
    @Type(() => daily_itemized_reportsWhereUniqueInput)
    connect?: Array<daily_itemized_reportsWhereUniqueInput>;
    @Field(() => [daily_itemized_reportsUpdateWithWhereUniqueWithoutOperationInput], {nullable:true})
    @Type(() => daily_itemized_reportsUpdateWithWhereUniqueWithoutOperationInput)
    update?: Array<daily_itemized_reportsUpdateWithWhereUniqueWithoutOperationInput>;
    @Field(() => [daily_itemized_reportsUpdateManyWithWhereWithoutOperationInput], {nullable:true})
    @Type(() => daily_itemized_reportsUpdateManyWithWhereWithoutOperationInput)
    updateMany?: Array<daily_itemized_reportsUpdateManyWithWhereWithoutOperationInput>;
    @Field(() => [daily_itemized_reportsScalarWhereInput], {nullable:true})
    @Type(() => daily_itemized_reportsScalarWhereInput)
    deleteMany?: Array<daily_itemized_reportsScalarWhereInput>;
}

@InputType()
export class daily_itemized_reportsUncheckedUpdateManyInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    year_month?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    day?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    employees_id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    operation_id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    operation_time?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class daily_itemized_reportsUncheckedUpdateWithoutDaily_reportsInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    operation_id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    operation_time?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class daily_itemized_reportsUncheckedUpdateWithoutOperationInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    year_month?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    day?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    employees_id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    operation_time?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class daily_itemized_reportsUncheckedUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    year_month?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    day?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    employees_id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    operation_id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    operation_time?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class daily_itemized_reportsUpdateManyMutationInput {
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    operation_time?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class daily_itemized_reportsUpdateManyWithWhereWithoutDaily_reportsInput {
    @Field(() => daily_itemized_reportsScalarWhereInput, {nullable:false})
    @Type(() => daily_itemized_reportsScalarWhereInput)
    where!: InstanceType<typeof daily_itemized_reportsScalarWhereInput>;
    @Field(() => daily_itemized_reportsUpdateManyMutationInput, {nullable:false})
    @Type(() => daily_itemized_reportsUpdateManyMutationInput)
    data!: InstanceType<typeof daily_itemized_reportsUpdateManyMutationInput>;
}

@InputType()
export class daily_itemized_reportsUpdateManyWithWhereWithoutOperationInput {
    @Field(() => daily_itemized_reportsScalarWhereInput, {nullable:false})
    @Type(() => daily_itemized_reportsScalarWhereInput)
    where!: InstanceType<typeof daily_itemized_reportsScalarWhereInput>;
    @Field(() => daily_itemized_reportsUpdateManyMutationInput, {nullable:false})
    @Type(() => daily_itemized_reportsUpdateManyMutationInput)
    data!: InstanceType<typeof daily_itemized_reportsUpdateManyMutationInput>;
}

@InputType()
export class daily_itemized_reportsUpdateManyWithoutDaily_reportsInput {
    @Field(() => [daily_itemized_reportsCreateWithoutDaily_reportsInput], {nullable:true})
    @Type(() => daily_itemized_reportsCreateWithoutDaily_reportsInput)
    create?: Array<daily_itemized_reportsCreateWithoutDaily_reportsInput>;
    @Field(() => [daily_itemized_reportsCreateOrConnectWithoutDaily_reportsInput], {nullable:true})
    @Type(() => daily_itemized_reportsCreateOrConnectWithoutDaily_reportsInput)
    connectOrCreate?: Array<daily_itemized_reportsCreateOrConnectWithoutDaily_reportsInput>;
    @Field(() => [daily_itemized_reportsUpsertWithWhereUniqueWithoutDaily_reportsInput], {nullable:true})
    @Type(() => daily_itemized_reportsUpsertWithWhereUniqueWithoutDaily_reportsInput)
    upsert?: Array<daily_itemized_reportsUpsertWithWhereUniqueWithoutDaily_reportsInput>;
    @Field(() => daily_itemized_reportsCreateManyDaily_reportsInputEnvelope, {nullable:true})
    @Type(() => daily_itemized_reportsCreateManyDaily_reportsInputEnvelope)
    createMany?: InstanceType<typeof daily_itemized_reportsCreateManyDaily_reportsInputEnvelope>;
    @Field(() => [daily_itemized_reportsWhereUniqueInput], {nullable:true})
    @Type(() => daily_itemized_reportsWhereUniqueInput)
    set?: Array<daily_itemized_reportsWhereUniqueInput>;
    @Field(() => [daily_itemized_reportsWhereUniqueInput], {nullable:true})
    @Type(() => daily_itemized_reportsWhereUniqueInput)
    disconnect?: Array<daily_itemized_reportsWhereUniqueInput>;
    @Field(() => [daily_itemized_reportsWhereUniqueInput], {nullable:true})
    @Type(() => daily_itemized_reportsWhereUniqueInput)
    delete?: Array<daily_itemized_reportsWhereUniqueInput>;
    @Field(() => [daily_itemized_reportsWhereUniqueInput], {nullable:true})
    @Type(() => daily_itemized_reportsWhereUniqueInput)
    connect?: Array<daily_itemized_reportsWhereUniqueInput>;
    @Field(() => [daily_itemized_reportsUpdateWithWhereUniqueWithoutDaily_reportsInput], {nullable:true})
    @Type(() => daily_itemized_reportsUpdateWithWhereUniqueWithoutDaily_reportsInput)
    update?: Array<daily_itemized_reportsUpdateWithWhereUniqueWithoutDaily_reportsInput>;
    @Field(() => [daily_itemized_reportsUpdateManyWithWhereWithoutDaily_reportsInput], {nullable:true})
    @Type(() => daily_itemized_reportsUpdateManyWithWhereWithoutDaily_reportsInput)
    updateMany?: Array<daily_itemized_reportsUpdateManyWithWhereWithoutDaily_reportsInput>;
    @Field(() => [daily_itemized_reportsScalarWhereInput], {nullable:true})
    @Type(() => daily_itemized_reportsScalarWhereInput)
    deleteMany?: Array<daily_itemized_reportsScalarWhereInput>;
}

@InputType()
export class daily_itemized_reportsUpdateManyWithoutOperationInput {
    @Field(() => [daily_itemized_reportsCreateWithoutOperationInput], {nullable:true})
    @Type(() => daily_itemized_reportsCreateWithoutOperationInput)
    create?: Array<daily_itemized_reportsCreateWithoutOperationInput>;
    @Field(() => [daily_itemized_reportsCreateOrConnectWithoutOperationInput], {nullable:true})
    @Type(() => daily_itemized_reportsCreateOrConnectWithoutOperationInput)
    connectOrCreate?: Array<daily_itemized_reportsCreateOrConnectWithoutOperationInput>;
    @Field(() => [daily_itemized_reportsUpsertWithWhereUniqueWithoutOperationInput], {nullable:true})
    @Type(() => daily_itemized_reportsUpsertWithWhereUniqueWithoutOperationInput)
    upsert?: Array<daily_itemized_reportsUpsertWithWhereUniqueWithoutOperationInput>;
    @Field(() => daily_itemized_reportsCreateManyOperationInputEnvelope, {nullable:true})
    @Type(() => daily_itemized_reportsCreateManyOperationInputEnvelope)
    createMany?: InstanceType<typeof daily_itemized_reportsCreateManyOperationInputEnvelope>;
    @Field(() => [daily_itemized_reportsWhereUniqueInput], {nullable:true})
    @Type(() => daily_itemized_reportsWhereUniqueInput)
    set?: Array<daily_itemized_reportsWhereUniqueInput>;
    @Field(() => [daily_itemized_reportsWhereUniqueInput], {nullable:true})
    @Type(() => daily_itemized_reportsWhereUniqueInput)
    disconnect?: Array<daily_itemized_reportsWhereUniqueInput>;
    @Field(() => [daily_itemized_reportsWhereUniqueInput], {nullable:true})
    @Type(() => daily_itemized_reportsWhereUniqueInput)
    delete?: Array<daily_itemized_reportsWhereUniqueInput>;
    @Field(() => [daily_itemized_reportsWhereUniqueInput], {nullable:true})
    @Type(() => daily_itemized_reportsWhereUniqueInput)
    connect?: Array<daily_itemized_reportsWhereUniqueInput>;
    @Field(() => [daily_itemized_reportsUpdateWithWhereUniqueWithoutOperationInput], {nullable:true})
    @Type(() => daily_itemized_reportsUpdateWithWhereUniqueWithoutOperationInput)
    update?: Array<daily_itemized_reportsUpdateWithWhereUniqueWithoutOperationInput>;
    @Field(() => [daily_itemized_reportsUpdateManyWithWhereWithoutOperationInput], {nullable:true})
    @Type(() => daily_itemized_reportsUpdateManyWithWhereWithoutOperationInput)
    updateMany?: Array<daily_itemized_reportsUpdateManyWithWhereWithoutOperationInput>;
    @Field(() => [daily_itemized_reportsScalarWhereInput], {nullable:true})
    @Type(() => daily_itemized_reportsScalarWhereInput)
    deleteMany?: Array<daily_itemized_reportsScalarWhereInput>;
}

@InputType()
export class daily_itemized_reportsUpdateWithWhereUniqueWithoutDaily_reportsInput {
    @Field(() => daily_itemized_reportsWhereUniqueInput, {nullable:false})
    @Type(() => daily_itemized_reportsWhereUniqueInput)
    where!: InstanceType<typeof daily_itemized_reportsWhereUniqueInput>;
    @Field(() => daily_itemized_reportsUpdateWithoutDaily_reportsInput, {nullable:false})
    @Type(() => daily_itemized_reportsUpdateWithoutDaily_reportsInput)
    data!: InstanceType<typeof daily_itemized_reportsUpdateWithoutDaily_reportsInput>;
}

@InputType()
export class daily_itemized_reportsUpdateWithWhereUniqueWithoutOperationInput {
    @Field(() => daily_itemized_reportsWhereUniqueInput, {nullable:false})
    @Type(() => daily_itemized_reportsWhereUniqueInput)
    where!: InstanceType<typeof daily_itemized_reportsWhereUniqueInput>;
    @Field(() => daily_itemized_reportsUpdateWithoutOperationInput, {nullable:false})
    @Type(() => daily_itemized_reportsUpdateWithoutOperationInput)
    data!: InstanceType<typeof daily_itemized_reportsUpdateWithoutOperationInput>;
}

@InputType()
export class daily_itemized_reportsUpdateWithoutDaily_reportsInput {
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    operation_time?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => operationUpdateOneRequiredWithoutDaily_itemized_reportsInput, {nullable:true})
    operation?: InstanceType<typeof operationUpdateOneRequiredWithoutDaily_itemized_reportsInput>;
}

@InputType()
export class daily_itemized_reportsUpdateWithoutOperationInput {
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    operation_time?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => daily_reportsUpdateOneRequiredWithoutDaily_itemized_reportsInput, {nullable:true})
    daily_reports?: InstanceType<typeof daily_reportsUpdateOneRequiredWithoutDaily_itemized_reportsInput>;
}

@InputType()
export class daily_itemized_reportsUpdateInput {
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    operation_time?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => operationUpdateOneRequiredWithoutDaily_itemized_reportsInput, {nullable:true})
    operation?: InstanceType<typeof operationUpdateOneRequiredWithoutDaily_itemized_reportsInput>;
    @Field(() => daily_reportsUpdateOneRequiredWithoutDaily_itemized_reportsInput, {nullable:true})
    daily_reports?: InstanceType<typeof daily_reportsUpdateOneRequiredWithoutDaily_itemized_reportsInput>;
}

@InputType()
export class daily_itemized_reportsUpsertWithWhereUniqueWithoutDaily_reportsInput {
    @Field(() => daily_itemized_reportsWhereUniqueInput, {nullable:false})
    @Type(() => daily_itemized_reportsWhereUniqueInput)
    where!: InstanceType<typeof daily_itemized_reportsWhereUniqueInput>;
    @Field(() => daily_itemized_reportsUpdateWithoutDaily_reportsInput, {nullable:false})
    @Type(() => daily_itemized_reportsUpdateWithoutDaily_reportsInput)
    update!: InstanceType<typeof daily_itemized_reportsUpdateWithoutDaily_reportsInput>;
    @Field(() => daily_itemized_reportsCreateWithoutDaily_reportsInput, {nullable:false})
    @Type(() => daily_itemized_reportsCreateWithoutDaily_reportsInput)
    create!: InstanceType<typeof daily_itemized_reportsCreateWithoutDaily_reportsInput>;
}

@InputType()
export class daily_itemized_reportsUpsertWithWhereUniqueWithoutOperationInput {
    @Field(() => daily_itemized_reportsWhereUniqueInput, {nullable:false})
    @Type(() => daily_itemized_reportsWhereUniqueInput)
    where!: InstanceType<typeof daily_itemized_reportsWhereUniqueInput>;
    @Field(() => daily_itemized_reportsUpdateWithoutOperationInput, {nullable:false})
    @Type(() => daily_itemized_reportsUpdateWithoutOperationInput)
    update!: InstanceType<typeof daily_itemized_reportsUpdateWithoutOperationInput>;
    @Field(() => daily_itemized_reportsCreateWithoutOperationInput, {nullable:false})
    @Type(() => daily_itemized_reportsCreateWithoutOperationInput)
    create!: InstanceType<typeof daily_itemized_reportsCreateWithoutOperationInput>;
}

@InputType()
export class daily_itemized_reportsWhereUniqueInput {
    @Field(() => daily_itemized_reportsYear_monthDayEmployees_idOperation_idCompoundUniqueInput, {nullable:true})
    year_month_day_employees_id_operation_id?: InstanceType<typeof daily_itemized_reportsYear_monthDayEmployees_idOperation_idCompoundUniqueInput>;
}

@InputType()
export class daily_itemized_reportsWhereInput {
    @Field(() => [daily_itemized_reportsWhereInput], {nullable:true})
    AND?: Array<daily_itemized_reportsWhereInput>;
    @Field(() => [daily_itemized_reportsWhereInput], {nullable:true})
    OR?: Array<daily_itemized_reportsWhereInput>;
    @Field(() => [daily_itemized_reportsWhereInput], {nullable:true})
    NOT?: Array<daily_itemized_reportsWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    year_month?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    day?: InstanceType<typeof StringFilter>;
    @Field(() => IntFilter, {nullable:true})
    employees_id?: InstanceType<typeof IntFilter>;
    @Field(() => IntFilter, {nullable:true})
    operation_id?: InstanceType<typeof IntFilter>;
    @Field(() => DateTimeNullableFilter, {nullable:true})
    operation_time?: InstanceType<typeof DateTimeNullableFilter>;
    @Field(() => OperationRelationFilter, {nullable:true})
    operation?: InstanceType<typeof OperationRelationFilter>;
    @Field(() => Daily_reportsRelationFilter, {nullable:true})
    daily_reports?: InstanceType<typeof Daily_reportsRelationFilter>;
}

@InputType()
export class daily_itemized_reportsYear_monthDayEmployees_idOperation_idCompoundUniqueInput {
    @Field(() => String, {nullable:false})
    year_month!: string;
    @Field(() => String, {nullable:false})
    day!: string;
    @Field(() => Int, {nullable:false})
    employees_id!: number;
    @Field(() => Int, {nullable:false})
    operation_id!: number;
}

@ObjectType()
export class daily_itemized_reports {
    @Field(() => String, {nullable:false})
    year_month!: string;
    @Field(() => String, {nullable:false})
    day!: string;
    @Field(() => Int, {nullable:false})
    employees_id!: number;
    @Field(() => Int, {nullable:false})
    operation_id!: number;
    @Field(() => Date, {nullable:true})
    operation_time!: Date | null;
    @Field(() => operation, {nullable:false})
    operation?: InstanceType<typeof operation>;
    @Field(() => daily_reports, {nullable:false})
    daily_reports?: InstanceType<typeof daily_reports>;
}

@InputType()
export class daily_reportsAvgOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    employees_id?: keyof typeof SortOrder;
}

@InputType()
export class daily_reportsCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    year_month?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    day?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    employees_id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    start_time?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    end_time?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    work_time?: keyof typeof SortOrder;
}

@InputType()
export class daily_reportsCreateManyCalendarInputEnvelope {
    @Field(() => [daily_reportsCreateManyCalendarInput], {nullable:false})
    @Type(() => daily_reportsCreateManyCalendarInput)
    data!: Array<daily_reportsCreateManyCalendarInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class daily_reportsCreateManyCalendarInput {
    @Field(() => Int, {nullable:false})
    employees_id!: number;
    @Field(() => Date, {nullable:true})
    start_time?: Date | string;
    @Field(() => Date, {nullable:true})
    end_time?: Date | string;
    @Field(() => Date, {nullable:true})
    work_time?: Date | string;
}

@InputType()
export class daily_reportsCreateManyEmployeesInputEnvelope {
    @Field(() => [daily_reportsCreateManyEmployeesInput], {nullable:false})
    @Type(() => daily_reportsCreateManyEmployeesInput)
    data!: Array<daily_reportsCreateManyEmployeesInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class daily_reportsCreateManyEmployeesInput {
    @Field(() => String, {nullable:false})
    year_month!: string;
    @Field(() => String, {nullable:false})
    day!: string;
    @Field(() => Date, {nullable:true})
    start_time?: Date | string;
    @Field(() => Date, {nullable:true})
    end_time?: Date | string;
    @Field(() => Date, {nullable:true})
    work_time?: Date | string;
}

@InputType()
export class daily_reportsCreateManyInput {
    @Field(() => String, {nullable:false})
    year_month!: string;
    @Field(() => String, {nullable:false})
    day!: string;
    @Field(() => Int, {nullable:false})
    employees_id!: number;
    @Field(() => Date, {nullable:true})
    start_time?: Date | string;
    @Field(() => Date, {nullable:true})
    end_time?: Date | string;
    @Field(() => Date, {nullable:true})
    work_time?: Date | string;
}

@InputType()
export class daily_reportsCreateNestedManyWithoutCalendarInput {
    @Field(() => [daily_reportsCreateWithoutCalendarInput], {nullable:true})
    @Type(() => daily_reportsCreateWithoutCalendarInput)
    create?: Array<daily_reportsCreateWithoutCalendarInput>;
    @Field(() => [daily_reportsCreateOrConnectWithoutCalendarInput], {nullable:true})
    @Type(() => daily_reportsCreateOrConnectWithoutCalendarInput)
    connectOrCreate?: Array<daily_reportsCreateOrConnectWithoutCalendarInput>;
    @Field(() => daily_reportsCreateManyCalendarInputEnvelope, {nullable:true})
    @Type(() => daily_reportsCreateManyCalendarInputEnvelope)
    createMany?: InstanceType<typeof daily_reportsCreateManyCalendarInputEnvelope>;
    @Field(() => [daily_reportsWhereUniqueInput], {nullable:true})
    @Type(() => daily_reportsWhereUniqueInput)
    connect?: Array<daily_reportsWhereUniqueInput>;
}

@InputType()
export class daily_reportsCreateNestedManyWithoutEmployeesInput {
    @Field(() => [daily_reportsCreateWithoutEmployeesInput], {nullable:true})
    @Type(() => daily_reportsCreateWithoutEmployeesInput)
    create?: Array<daily_reportsCreateWithoutEmployeesInput>;
    @Field(() => [daily_reportsCreateOrConnectWithoutEmployeesInput], {nullable:true})
    @Type(() => daily_reportsCreateOrConnectWithoutEmployeesInput)
    connectOrCreate?: Array<daily_reportsCreateOrConnectWithoutEmployeesInput>;
    @Field(() => daily_reportsCreateManyEmployeesInputEnvelope, {nullable:true})
    @Type(() => daily_reportsCreateManyEmployeesInputEnvelope)
    createMany?: InstanceType<typeof daily_reportsCreateManyEmployeesInputEnvelope>;
    @Field(() => [daily_reportsWhereUniqueInput], {nullable:true})
    @Type(() => daily_reportsWhereUniqueInput)
    connect?: Array<daily_reportsWhereUniqueInput>;
}

@InputType()
export class daily_reportsCreateNestedOneWithoutDaily_itemized_reportsInput {
    @Field(() => daily_reportsCreateWithoutDaily_itemized_reportsInput, {nullable:true})
    @Type(() => daily_reportsCreateWithoutDaily_itemized_reportsInput)
    create?: InstanceType<typeof daily_reportsCreateWithoutDaily_itemized_reportsInput>;
    @Field(() => daily_reportsCreateOrConnectWithoutDaily_itemized_reportsInput, {nullable:true})
    @Type(() => daily_reportsCreateOrConnectWithoutDaily_itemized_reportsInput)
    connectOrCreate?: InstanceType<typeof daily_reportsCreateOrConnectWithoutDaily_itemized_reportsInput>;
    @Field(() => daily_reportsWhereUniqueInput, {nullable:true})
    @Type(() => daily_reportsWhereUniqueInput)
    connect?: InstanceType<typeof daily_reportsWhereUniqueInput>;
}

@InputType()
export class daily_reportsCreateOrConnectWithoutCalendarInput {
    @Field(() => daily_reportsWhereUniqueInput, {nullable:false})
    @Type(() => daily_reportsWhereUniqueInput)
    where!: InstanceType<typeof daily_reportsWhereUniqueInput>;
    @Field(() => daily_reportsCreateWithoutCalendarInput, {nullable:false})
    @Type(() => daily_reportsCreateWithoutCalendarInput)
    create!: InstanceType<typeof daily_reportsCreateWithoutCalendarInput>;
}

@InputType()
export class daily_reportsCreateOrConnectWithoutDaily_itemized_reportsInput {
    @Field(() => daily_reportsWhereUniqueInput, {nullable:false})
    @Type(() => daily_reportsWhereUniqueInput)
    where!: InstanceType<typeof daily_reportsWhereUniqueInput>;
    @Field(() => daily_reportsCreateWithoutDaily_itemized_reportsInput, {nullable:false})
    @Type(() => daily_reportsCreateWithoutDaily_itemized_reportsInput)
    create!: InstanceType<typeof daily_reportsCreateWithoutDaily_itemized_reportsInput>;
}

@InputType()
export class daily_reportsCreateOrConnectWithoutEmployeesInput {
    @Field(() => daily_reportsWhereUniqueInput, {nullable:false})
    @Type(() => daily_reportsWhereUniqueInput)
    where!: InstanceType<typeof daily_reportsWhereUniqueInput>;
    @Field(() => daily_reportsCreateWithoutEmployeesInput, {nullable:false})
    @Type(() => daily_reportsCreateWithoutEmployeesInput)
    create!: InstanceType<typeof daily_reportsCreateWithoutEmployeesInput>;
}

@InputType()
export class daily_reportsCreateWithoutCalendarInput {
    @Field(() => Date, {nullable:true})
    start_time?: Date | string;
    @Field(() => Date, {nullable:true})
    end_time?: Date | string;
    @Field(() => Date, {nullable:true})
    work_time?: Date | string;
    @Field(() => employeesCreateNestedOneWithoutDaily_reportsInput, {nullable:false})
    employees!: InstanceType<typeof employeesCreateNestedOneWithoutDaily_reportsInput>;
    @Field(() => daily_itemized_reportsCreateNestedManyWithoutDaily_reportsInput, {nullable:true})
    daily_itemized_reports?: InstanceType<typeof daily_itemized_reportsCreateNestedManyWithoutDaily_reportsInput>;
}

@InputType()
export class daily_reportsCreateWithoutDaily_itemized_reportsInput {
    @Field(() => Date, {nullable:true})
    start_time?: Date | string;
    @Field(() => Date, {nullable:true})
    end_time?: Date | string;
    @Field(() => Date, {nullable:true})
    work_time?: Date | string;
    @Field(() => employeesCreateNestedOneWithoutDaily_reportsInput, {nullable:false})
    employees!: InstanceType<typeof employeesCreateNestedOneWithoutDaily_reportsInput>;
    @Field(() => calendarCreateNestedOneWithoutDaily_reportsInput, {nullable:false})
    calendar!: InstanceType<typeof calendarCreateNestedOneWithoutDaily_reportsInput>;
}

@InputType()
export class daily_reportsCreateWithoutEmployeesInput {
    @Field(() => Date, {nullable:true})
    start_time?: Date | string;
    @Field(() => Date, {nullable:true})
    end_time?: Date | string;
    @Field(() => Date, {nullable:true})
    work_time?: Date | string;
    @Field(() => calendarCreateNestedOneWithoutDaily_reportsInput, {nullable:false})
    calendar!: InstanceType<typeof calendarCreateNestedOneWithoutDaily_reportsInput>;
    @Field(() => daily_itemized_reportsCreateNestedManyWithoutDaily_reportsInput, {nullable:true})
    daily_itemized_reports?: InstanceType<typeof daily_itemized_reportsCreateNestedManyWithoutDaily_reportsInput>;
}

@InputType()
export class daily_reportsCreateInput {
    @Field(() => Date, {nullable:true})
    start_time?: Date | string;
    @Field(() => Date, {nullable:true})
    end_time?: Date | string;
    @Field(() => Date, {nullable:true})
    work_time?: Date | string;
    @Field(() => employeesCreateNestedOneWithoutDaily_reportsInput, {nullable:false})
    employees!: InstanceType<typeof employeesCreateNestedOneWithoutDaily_reportsInput>;
    @Field(() => calendarCreateNestedOneWithoutDaily_reportsInput, {nullable:false})
    calendar!: InstanceType<typeof calendarCreateNestedOneWithoutDaily_reportsInput>;
    @Field(() => daily_itemized_reportsCreateNestedManyWithoutDaily_reportsInput, {nullable:true})
    daily_itemized_reports?: InstanceType<typeof daily_itemized_reportsCreateNestedManyWithoutDaily_reportsInput>;
}

@InputType()
export class daily_reportsMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    year_month?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    day?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    employees_id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    start_time?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    end_time?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    work_time?: keyof typeof SortOrder;
}

@InputType()
export class daily_reportsMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    year_month?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    day?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    employees_id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    start_time?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    end_time?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    work_time?: keyof typeof SortOrder;
}

@InputType()
export class daily_reportsOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: keyof typeof SortOrder;
}

@InputType()
export class daily_reportsOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    year_month?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    day?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    employees_id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    start_time?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    end_time?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    work_time?: keyof typeof SortOrder;
    @Field(() => daily_reportsCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof daily_reportsCountOrderByAggregateInput>;
    @Field(() => daily_reportsAvgOrderByAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof daily_reportsAvgOrderByAggregateInput>;
    @Field(() => daily_reportsMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof daily_reportsMaxOrderByAggregateInput>;
    @Field(() => daily_reportsMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof daily_reportsMinOrderByAggregateInput>;
    @Field(() => daily_reportsSumOrderByAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof daily_reportsSumOrderByAggregateInput>;
}

@InputType()
export class daily_reportsOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    year_month?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    day?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    employees_id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    start_time?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    end_time?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    work_time?: keyof typeof SortOrder;
    @Field(() => employeesOrderByWithRelationInput, {nullable:true})
    employees?: InstanceType<typeof employeesOrderByWithRelationInput>;
    @Field(() => calendarOrderByWithRelationInput, {nullable:true})
    calendar?: InstanceType<typeof calendarOrderByWithRelationInput>;
    @Field(() => daily_itemized_reportsOrderByRelationAggregateInput, {nullable:true})
    daily_itemized_reports?: InstanceType<typeof daily_itemized_reportsOrderByRelationAggregateInput>;
}

@InputType()
export class daily_reportsScalarWhereWithAggregatesInput {
    @Field(() => [daily_reportsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<daily_reportsScalarWhereWithAggregatesInput>;
    @Field(() => [daily_reportsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<daily_reportsScalarWhereWithAggregatesInput>;
    @Field(() => [daily_reportsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<daily_reportsScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    year_month?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    day?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    employees_id?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    start_time?: InstanceType<typeof DateTimeNullableWithAggregatesFilter>;
    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    end_time?: InstanceType<typeof DateTimeNullableWithAggregatesFilter>;
    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    work_time?: InstanceType<typeof DateTimeNullableWithAggregatesFilter>;
}

@InputType()
export class daily_reportsScalarWhereInput {
    @Field(() => [daily_reportsScalarWhereInput], {nullable:true})
    AND?: Array<daily_reportsScalarWhereInput>;
    @Field(() => [daily_reportsScalarWhereInput], {nullable:true})
    OR?: Array<daily_reportsScalarWhereInput>;
    @Field(() => [daily_reportsScalarWhereInput], {nullable:true})
    NOT?: Array<daily_reportsScalarWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    year_month?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    day?: InstanceType<typeof StringFilter>;
    @Field(() => IntFilter, {nullable:true})
    employees_id?: InstanceType<typeof IntFilter>;
    @Field(() => DateTimeNullableFilter, {nullable:true})
    start_time?: InstanceType<typeof DateTimeNullableFilter>;
    @Field(() => DateTimeNullableFilter, {nullable:true})
    end_time?: InstanceType<typeof DateTimeNullableFilter>;
    @Field(() => DateTimeNullableFilter, {nullable:true})
    work_time?: InstanceType<typeof DateTimeNullableFilter>;
}

@InputType()
export class daily_reportsSumOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    employees_id?: keyof typeof SortOrder;
}

@InputType()
export class daily_reportsUncheckedCreateNestedManyWithoutCalendarInput {
    @Field(() => [daily_reportsCreateWithoutCalendarInput], {nullable:true})
    @Type(() => daily_reportsCreateWithoutCalendarInput)
    create?: Array<daily_reportsCreateWithoutCalendarInput>;
    @Field(() => [daily_reportsCreateOrConnectWithoutCalendarInput], {nullable:true})
    @Type(() => daily_reportsCreateOrConnectWithoutCalendarInput)
    connectOrCreate?: Array<daily_reportsCreateOrConnectWithoutCalendarInput>;
    @Field(() => daily_reportsCreateManyCalendarInputEnvelope, {nullable:true})
    @Type(() => daily_reportsCreateManyCalendarInputEnvelope)
    createMany?: InstanceType<typeof daily_reportsCreateManyCalendarInputEnvelope>;
    @Field(() => [daily_reportsWhereUniqueInput], {nullable:true})
    @Type(() => daily_reportsWhereUniqueInput)
    connect?: Array<daily_reportsWhereUniqueInput>;
}

@InputType()
export class daily_reportsUncheckedCreateNestedManyWithoutEmployeesInput {
    @Field(() => [daily_reportsCreateWithoutEmployeesInput], {nullable:true})
    @Type(() => daily_reportsCreateWithoutEmployeesInput)
    create?: Array<daily_reportsCreateWithoutEmployeesInput>;
    @Field(() => [daily_reportsCreateOrConnectWithoutEmployeesInput], {nullable:true})
    @Type(() => daily_reportsCreateOrConnectWithoutEmployeesInput)
    connectOrCreate?: Array<daily_reportsCreateOrConnectWithoutEmployeesInput>;
    @Field(() => daily_reportsCreateManyEmployeesInputEnvelope, {nullable:true})
    @Type(() => daily_reportsCreateManyEmployeesInputEnvelope)
    createMany?: InstanceType<typeof daily_reportsCreateManyEmployeesInputEnvelope>;
    @Field(() => [daily_reportsWhereUniqueInput], {nullable:true})
    @Type(() => daily_reportsWhereUniqueInput)
    connect?: Array<daily_reportsWhereUniqueInput>;
}

@InputType()
export class daily_reportsUncheckedCreateWithoutCalendarInput {
    @Field(() => Int, {nullable:false})
    employees_id!: number;
    @Field(() => Date, {nullable:true})
    start_time?: Date | string;
    @Field(() => Date, {nullable:true})
    end_time?: Date | string;
    @Field(() => Date, {nullable:true})
    work_time?: Date | string;
    @Field(() => daily_itemized_reportsUncheckedCreateNestedManyWithoutDaily_reportsInput, {nullable:true})
    daily_itemized_reports?: InstanceType<typeof daily_itemized_reportsUncheckedCreateNestedManyWithoutDaily_reportsInput>;
}

@InputType()
export class daily_reportsUncheckedCreateWithoutDaily_itemized_reportsInput {
    @Field(() => String, {nullable:false})
    year_month!: string;
    @Field(() => String, {nullable:false})
    day!: string;
    @Field(() => Int, {nullable:false})
    employees_id!: number;
    @Field(() => Date, {nullable:true})
    start_time?: Date | string;
    @Field(() => Date, {nullable:true})
    end_time?: Date | string;
    @Field(() => Date, {nullable:true})
    work_time?: Date | string;
}

@InputType()
export class daily_reportsUncheckedCreateWithoutEmployeesInput {
    @Field(() => String, {nullable:false})
    year_month!: string;
    @Field(() => String, {nullable:false})
    day!: string;
    @Field(() => Date, {nullable:true})
    start_time?: Date | string;
    @Field(() => Date, {nullable:true})
    end_time?: Date | string;
    @Field(() => Date, {nullable:true})
    work_time?: Date | string;
    @Field(() => daily_itemized_reportsUncheckedCreateNestedManyWithoutDaily_reportsInput, {nullable:true})
    daily_itemized_reports?: InstanceType<typeof daily_itemized_reportsUncheckedCreateNestedManyWithoutDaily_reportsInput>;
}

@InputType()
export class daily_reportsUncheckedCreateInput {
    @Field(() => String, {nullable:false})
    year_month!: string;
    @Field(() => String, {nullable:false})
    day!: string;
    @Field(() => Int, {nullable:false})
    employees_id!: number;
    @Field(() => Date, {nullable:true})
    start_time?: Date | string;
    @Field(() => Date, {nullable:true})
    end_time?: Date | string;
    @Field(() => Date, {nullable:true})
    work_time?: Date | string;
    @Field(() => daily_itemized_reportsUncheckedCreateNestedManyWithoutDaily_reportsInput, {nullable:true})
    daily_itemized_reports?: InstanceType<typeof daily_itemized_reportsUncheckedCreateNestedManyWithoutDaily_reportsInput>;
}

@InputType()
export class daily_reportsUncheckedUpdateManyWithoutCalendarInput {
    @Field(() => [daily_reportsCreateWithoutCalendarInput], {nullable:true})
    @Type(() => daily_reportsCreateWithoutCalendarInput)
    create?: Array<daily_reportsCreateWithoutCalendarInput>;
    @Field(() => [daily_reportsCreateOrConnectWithoutCalendarInput], {nullable:true})
    @Type(() => daily_reportsCreateOrConnectWithoutCalendarInput)
    connectOrCreate?: Array<daily_reportsCreateOrConnectWithoutCalendarInput>;
    @Field(() => [daily_reportsUpsertWithWhereUniqueWithoutCalendarInput], {nullable:true})
    @Type(() => daily_reportsUpsertWithWhereUniqueWithoutCalendarInput)
    upsert?: Array<daily_reportsUpsertWithWhereUniqueWithoutCalendarInput>;
    @Field(() => daily_reportsCreateManyCalendarInputEnvelope, {nullable:true})
    @Type(() => daily_reportsCreateManyCalendarInputEnvelope)
    createMany?: InstanceType<typeof daily_reportsCreateManyCalendarInputEnvelope>;
    @Field(() => [daily_reportsWhereUniqueInput], {nullable:true})
    @Type(() => daily_reportsWhereUniqueInput)
    set?: Array<daily_reportsWhereUniqueInput>;
    @Field(() => [daily_reportsWhereUniqueInput], {nullable:true})
    @Type(() => daily_reportsWhereUniqueInput)
    disconnect?: Array<daily_reportsWhereUniqueInput>;
    @Field(() => [daily_reportsWhereUniqueInput], {nullable:true})
    @Type(() => daily_reportsWhereUniqueInput)
    delete?: Array<daily_reportsWhereUniqueInput>;
    @Field(() => [daily_reportsWhereUniqueInput], {nullable:true})
    @Type(() => daily_reportsWhereUniqueInput)
    connect?: Array<daily_reportsWhereUniqueInput>;
    @Field(() => [daily_reportsUpdateWithWhereUniqueWithoutCalendarInput], {nullable:true})
    @Type(() => daily_reportsUpdateWithWhereUniqueWithoutCalendarInput)
    update?: Array<daily_reportsUpdateWithWhereUniqueWithoutCalendarInput>;
    @Field(() => [daily_reportsUpdateManyWithWhereWithoutCalendarInput], {nullable:true})
    @Type(() => daily_reportsUpdateManyWithWhereWithoutCalendarInput)
    updateMany?: Array<daily_reportsUpdateManyWithWhereWithoutCalendarInput>;
    @Field(() => [daily_reportsScalarWhereInput], {nullable:true})
    @Type(() => daily_reportsScalarWhereInput)
    deleteMany?: Array<daily_reportsScalarWhereInput>;
}

@InputType()
export class daily_reportsUncheckedUpdateManyWithoutDaily_reportsInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    employees_id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    start_time?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    end_time?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    work_time?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class daily_reportsUncheckedUpdateManyWithoutEmployeesInput {
    @Field(() => [daily_reportsCreateWithoutEmployeesInput], {nullable:true})
    @Type(() => daily_reportsCreateWithoutEmployeesInput)
    create?: Array<daily_reportsCreateWithoutEmployeesInput>;
    @Field(() => [daily_reportsCreateOrConnectWithoutEmployeesInput], {nullable:true})
    @Type(() => daily_reportsCreateOrConnectWithoutEmployeesInput)
    connectOrCreate?: Array<daily_reportsCreateOrConnectWithoutEmployeesInput>;
    @Field(() => [daily_reportsUpsertWithWhereUniqueWithoutEmployeesInput], {nullable:true})
    @Type(() => daily_reportsUpsertWithWhereUniqueWithoutEmployeesInput)
    upsert?: Array<daily_reportsUpsertWithWhereUniqueWithoutEmployeesInput>;
    @Field(() => daily_reportsCreateManyEmployeesInputEnvelope, {nullable:true})
    @Type(() => daily_reportsCreateManyEmployeesInputEnvelope)
    createMany?: InstanceType<typeof daily_reportsCreateManyEmployeesInputEnvelope>;
    @Field(() => [daily_reportsWhereUniqueInput], {nullable:true})
    @Type(() => daily_reportsWhereUniqueInput)
    set?: Array<daily_reportsWhereUniqueInput>;
    @Field(() => [daily_reportsWhereUniqueInput], {nullable:true})
    @Type(() => daily_reportsWhereUniqueInput)
    disconnect?: Array<daily_reportsWhereUniqueInput>;
    @Field(() => [daily_reportsWhereUniqueInput], {nullable:true})
    @Type(() => daily_reportsWhereUniqueInput)
    delete?: Array<daily_reportsWhereUniqueInput>;
    @Field(() => [daily_reportsWhereUniqueInput], {nullable:true})
    @Type(() => daily_reportsWhereUniqueInput)
    connect?: Array<daily_reportsWhereUniqueInput>;
    @Field(() => [daily_reportsUpdateWithWhereUniqueWithoutEmployeesInput], {nullable:true})
    @Type(() => daily_reportsUpdateWithWhereUniqueWithoutEmployeesInput)
    update?: Array<daily_reportsUpdateWithWhereUniqueWithoutEmployeesInput>;
    @Field(() => [daily_reportsUpdateManyWithWhereWithoutEmployeesInput], {nullable:true})
    @Type(() => daily_reportsUpdateManyWithWhereWithoutEmployeesInput)
    updateMany?: Array<daily_reportsUpdateManyWithWhereWithoutEmployeesInput>;
    @Field(() => [daily_reportsScalarWhereInput], {nullable:true})
    @Type(() => daily_reportsScalarWhereInput)
    deleteMany?: Array<daily_reportsScalarWhereInput>;
}

@InputType()
export class daily_reportsUncheckedUpdateManyInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    year_month?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    day?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    employees_id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    start_time?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    end_time?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    work_time?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class daily_reportsUncheckedUpdateWithoutCalendarInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    employees_id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    start_time?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    end_time?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    work_time?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => daily_itemized_reportsUncheckedUpdateManyWithoutDaily_reportsInput, {nullable:true})
    daily_itemized_reports?: InstanceType<typeof daily_itemized_reportsUncheckedUpdateManyWithoutDaily_reportsInput>;
}

@InputType()
export class daily_reportsUncheckedUpdateWithoutDaily_itemized_reportsInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    year_month?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    day?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    employees_id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    start_time?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    end_time?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    work_time?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class daily_reportsUncheckedUpdateWithoutEmployeesInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    year_month?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    day?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    start_time?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    end_time?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    work_time?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => daily_itemized_reportsUncheckedUpdateManyWithoutDaily_reportsInput, {nullable:true})
    daily_itemized_reports?: InstanceType<typeof daily_itemized_reportsUncheckedUpdateManyWithoutDaily_reportsInput>;
}

@InputType()
export class daily_reportsUncheckedUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    year_month?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    day?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    employees_id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    start_time?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    end_time?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    work_time?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => daily_itemized_reportsUncheckedUpdateManyWithoutDaily_reportsInput, {nullable:true})
    daily_itemized_reports?: InstanceType<typeof daily_itemized_reportsUncheckedUpdateManyWithoutDaily_reportsInput>;
}

@InputType()
export class daily_reportsUpdateManyMutationInput {
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    start_time?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    end_time?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    work_time?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class daily_reportsUpdateManyWithWhereWithoutCalendarInput {
    @Field(() => daily_reportsScalarWhereInput, {nullable:false})
    @Type(() => daily_reportsScalarWhereInput)
    where!: InstanceType<typeof daily_reportsScalarWhereInput>;
    @Field(() => daily_reportsUpdateManyMutationInput, {nullable:false})
    @Type(() => daily_reportsUpdateManyMutationInput)
    data!: InstanceType<typeof daily_reportsUpdateManyMutationInput>;
}

@InputType()
export class daily_reportsUpdateManyWithWhereWithoutEmployeesInput {
    @Field(() => daily_reportsScalarWhereInput, {nullable:false})
    @Type(() => daily_reportsScalarWhereInput)
    where!: InstanceType<typeof daily_reportsScalarWhereInput>;
    @Field(() => daily_reportsUpdateManyMutationInput, {nullable:false})
    @Type(() => daily_reportsUpdateManyMutationInput)
    data!: InstanceType<typeof daily_reportsUpdateManyMutationInput>;
}

@InputType()
export class daily_reportsUpdateManyWithoutCalendarInput {
    @Field(() => [daily_reportsCreateWithoutCalendarInput], {nullable:true})
    @Type(() => daily_reportsCreateWithoutCalendarInput)
    create?: Array<daily_reportsCreateWithoutCalendarInput>;
    @Field(() => [daily_reportsCreateOrConnectWithoutCalendarInput], {nullable:true})
    @Type(() => daily_reportsCreateOrConnectWithoutCalendarInput)
    connectOrCreate?: Array<daily_reportsCreateOrConnectWithoutCalendarInput>;
    @Field(() => [daily_reportsUpsertWithWhereUniqueWithoutCalendarInput], {nullable:true})
    @Type(() => daily_reportsUpsertWithWhereUniqueWithoutCalendarInput)
    upsert?: Array<daily_reportsUpsertWithWhereUniqueWithoutCalendarInput>;
    @Field(() => daily_reportsCreateManyCalendarInputEnvelope, {nullable:true})
    @Type(() => daily_reportsCreateManyCalendarInputEnvelope)
    createMany?: InstanceType<typeof daily_reportsCreateManyCalendarInputEnvelope>;
    @Field(() => [daily_reportsWhereUniqueInput], {nullable:true})
    @Type(() => daily_reportsWhereUniqueInput)
    set?: Array<daily_reportsWhereUniqueInput>;
    @Field(() => [daily_reportsWhereUniqueInput], {nullable:true})
    @Type(() => daily_reportsWhereUniqueInput)
    disconnect?: Array<daily_reportsWhereUniqueInput>;
    @Field(() => [daily_reportsWhereUniqueInput], {nullable:true})
    @Type(() => daily_reportsWhereUniqueInput)
    delete?: Array<daily_reportsWhereUniqueInput>;
    @Field(() => [daily_reportsWhereUniqueInput], {nullable:true})
    @Type(() => daily_reportsWhereUniqueInput)
    connect?: Array<daily_reportsWhereUniqueInput>;
    @Field(() => [daily_reportsUpdateWithWhereUniqueWithoutCalendarInput], {nullable:true})
    @Type(() => daily_reportsUpdateWithWhereUniqueWithoutCalendarInput)
    update?: Array<daily_reportsUpdateWithWhereUniqueWithoutCalendarInput>;
    @Field(() => [daily_reportsUpdateManyWithWhereWithoutCalendarInput], {nullable:true})
    @Type(() => daily_reportsUpdateManyWithWhereWithoutCalendarInput)
    updateMany?: Array<daily_reportsUpdateManyWithWhereWithoutCalendarInput>;
    @Field(() => [daily_reportsScalarWhereInput], {nullable:true})
    @Type(() => daily_reportsScalarWhereInput)
    deleteMany?: Array<daily_reportsScalarWhereInput>;
}

@InputType()
export class daily_reportsUpdateManyWithoutEmployeesInput {
    @Field(() => [daily_reportsCreateWithoutEmployeesInput], {nullable:true})
    @Type(() => daily_reportsCreateWithoutEmployeesInput)
    create?: Array<daily_reportsCreateWithoutEmployeesInput>;
    @Field(() => [daily_reportsCreateOrConnectWithoutEmployeesInput], {nullable:true})
    @Type(() => daily_reportsCreateOrConnectWithoutEmployeesInput)
    connectOrCreate?: Array<daily_reportsCreateOrConnectWithoutEmployeesInput>;
    @Field(() => [daily_reportsUpsertWithWhereUniqueWithoutEmployeesInput], {nullable:true})
    @Type(() => daily_reportsUpsertWithWhereUniqueWithoutEmployeesInput)
    upsert?: Array<daily_reportsUpsertWithWhereUniqueWithoutEmployeesInput>;
    @Field(() => daily_reportsCreateManyEmployeesInputEnvelope, {nullable:true})
    @Type(() => daily_reportsCreateManyEmployeesInputEnvelope)
    createMany?: InstanceType<typeof daily_reportsCreateManyEmployeesInputEnvelope>;
    @Field(() => [daily_reportsWhereUniqueInput], {nullable:true})
    @Type(() => daily_reportsWhereUniqueInput)
    set?: Array<daily_reportsWhereUniqueInput>;
    @Field(() => [daily_reportsWhereUniqueInput], {nullable:true})
    @Type(() => daily_reportsWhereUniqueInput)
    disconnect?: Array<daily_reportsWhereUniqueInput>;
    @Field(() => [daily_reportsWhereUniqueInput], {nullable:true})
    @Type(() => daily_reportsWhereUniqueInput)
    delete?: Array<daily_reportsWhereUniqueInput>;
    @Field(() => [daily_reportsWhereUniqueInput], {nullable:true})
    @Type(() => daily_reportsWhereUniqueInput)
    connect?: Array<daily_reportsWhereUniqueInput>;
    @Field(() => [daily_reportsUpdateWithWhereUniqueWithoutEmployeesInput], {nullable:true})
    @Type(() => daily_reportsUpdateWithWhereUniqueWithoutEmployeesInput)
    update?: Array<daily_reportsUpdateWithWhereUniqueWithoutEmployeesInput>;
    @Field(() => [daily_reportsUpdateManyWithWhereWithoutEmployeesInput], {nullable:true})
    @Type(() => daily_reportsUpdateManyWithWhereWithoutEmployeesInput)
    updateMany?: Array<daily_reportsUpdateManyWithWhereWithoutEmployeesInput>;
    @Field(() => [daily_reportsScalarWhereInput], {nullable:true})
    @Type(() => daily_reportsScalarWhereInput)
    deleteMany?: Array<daily_reportsScalarWhereInput>;
}

@InputType()
export class daily_reportsUpdateOneRequiredWithoutDaily_itemized_reportsInput {
    @Field(() => daily_reportsCreateWithoutDaily_itemized_reportsInput, {nullable:true})
    @Type(() => daily_reportsCreateWithoutDaily_itemized_reportsInput)
    create?: InstanceType<typeof daily_reportsCreateWithoutDaily_itemized_reportsInput>;
    @Field(() => daily_reportsCreateOrConnectWithoutDaily_itemized_reportsInput, {nullable:true})
    @Type(() => daily_reportsCreateOrConnectWithoutDaily_itemized_reportsInput)
    connectOrCreate?: InstanceType<typeof daily_reportsCreateOrConnectWithoutDaily_itemized_reportsInput>;
    @Field(() => daily_reportsUpsertWithoutDaily_itemized_reportsInput, {nullable:true})
    @Type(() => daily_reportsUpsertWithoutDaily_itemized_reportsInput)
    upsert?: InstanceType<typeof daily_reportsUpsertWithoutDaily_itemized_reportsInput>;
    @Field(() => daily_reportsWhereUniqueInput, {nullable:true})
    @Type(() => daily_reportsWhereUniqueInput)
    connect?: InstanceType<typeof daily_reportsWhereUniqueInput>;
    @Field(() => daily_reportsUpdateWithoutDaily_itemized_reportsInput, {nullable:true})
    @Type(() => daily_reportsUpdateWithoutDaily_itemized_reportsInput)
    update?: InstanceType<typeof daily_reportsUpdateWithoutDaily_itemized_reportsInput>;
}

@InputType()
export class daily_reportsUpdateWithWhereUniqueWithoutCalendarInput {
    @Field(() => daily_reportsWhereUniqueInput, {nullable:false})
    @Type(() => daily_reportsWhereUniqueInput)
    where!: InstanceType<typeof daily_reportsWhereUniqueInput>;
    @Field(() => daily_reportsUpdateWithoutCalendarInput, {nullable:false})
    @Type(() => daily_reportsUpdateWithoutCalendarInput)
    data!: InstanceType<typeof daily_reportsUpdateWithoutCalendarInput>;
}

@InputType()
export class daily_reportsUpdateWithWhereUniqueWithoutEmployeesInput {
    @Field(() => daily_reportsWhereUniqueInput, {nullable:false})
    @Type(() => daily_reportsWhereUniqueInput)
    where!: InstanceType<typeof daily_reportsWhereUniqueInput>;
    @Field(() => daily_reportsUpdateWithoutEmployeesInput, {nullable:false})
    @Type(() => daily_reportsUpdateWithoutEmployeesInput)
    data!: InstanceType<typeof daily_reportsUpdateWithoutEmployeesInput>;
}

@InputType()
export class daily_reportsUpdateWithoutCalendarInput {
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    start_time?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    end_time?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    work_time?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => employeesUpdateOneRequiredWithoutDaily_reportsInput, {nullable:true})
    employees?: InstanceType<typeof employeesUpdateOneRequiredWithoutDaily_reportsInput>;
    @Field(() => daily_itemized_reportsUpdateManyWithoutDaily_reportsInput, {nullable:true})
    daily_itemized_reports?: InstanceType<typeof daily_itemized_reportsUpdateManyWithoutDaily_reportsInput>;
}

@InputType()
export class daily_reportsUpdateWithoutDaily_itemized_reportsInput {
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    start_time?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    end_time?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    work_time?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => employeesUpdateOneRequiredWithoutDaily_reportsInput, {nullable:true})
    employees?: InstanceType<typeof employeesUpdateOneRequiredWithoutDaily_reportsInput>;
    @Field(() => calendarUpdateOneRequiredWithoutDaily_reportsInput, {nullable:true})
    calendar?: InstanceType<typeof calendarUpdateOneRequiredWithoutDaily_reportsInput>;
}

@InputType()
export class daily_reportsUpdateWithoutEmployeesInput {
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    start_time?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    end_time?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    work_time?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => calendarUpdateOneRequiredWithoutDaily_reportsInput, {nullable:true})
    calendar?: InstanceType<typeof calendarUpdateOneRequiredWithoutDaily_reportsInput>;
    @Field(() => daily_itemized_reportsUpdateManyWithoutDaily_reportsInput, {nullable:true})
    daily_itemized_reports?: InstanceType<typeof daily_itemized_reportsUpdateManyWithoutDaily_reportsInput>;
}

@InputType()
export class daily_reportsUpdateInput {
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    start_time?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    end_time?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    work_time?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => employeesUpdateOneRequiredWithoutDaily_reportsInput, {nullable:true})
    employees?: InstanceType<typeof employeesUpdateOneRequiredWithoutDaily_reportsInput>;
    @Field(() => calendarUpdateOneRequiredWithoutDaily_reportsInput, {nullable:true})
    calendar?: InstanceType<typeof calendarUpdateOneRequiredWithoutDaily_reportsInput>;
    @Field(() => daily_itemized_reportsUpdateManyWithoutDaily_reportsInput, {nullable:true})
    daily_itemized_reports?: InstanceType<typeof daily_itemized_reportsUpdateManyWithoutDaily_reportsInput>;
}

@InputType()
export class daily_reportsUpsertWithWhereUniqueWithoutCalendarInput {
    @Field(() => daily_reportsWhereUniqueInput, {nullable:false})
    @Type(() => daily_reportsWhereUniqueInput)
    where!: InstanceType<typeof daily_reportsWhereUniqueInput>;
    @Field(() => daily_reportsUpdateWithoutCalendarInput, {nullable:false})
    @Type(() => daily_reportsUpdateWithoutCalendarInput)
    update!: InstanceType<typeof daily_reportsUpdateWithoutCalendarInput>;
    @Field(() => daily_reportsCreateWithoutCalendarInput, {nullable:false})
    @Type(() => daily_reportsCreateWithoutCalendarInput)
    create!: InstanceType<typeof daily_reportsCreateWithoutCalendarInput>;
}

@InputType()
export class daily_reportsUpsertWithWhereUniqueWithoutEmployeesInput {
    @Field(() => daily_reportsWhereUniqueInput, {nullable:false})
    @Type(() => daily_reportsWhereUniqueInput)
    where!: InstanceType<typeof daily_reportsWhereUniqueInput>;
    @Field(() => daily_reportsUpdateWithoutEmployeesInput, {nullable:false})
    @Type(() => daily_reportsUpdateWithoutEmployeesInput)
    update!: InstanceType<typeof daily_reportsUpdateWithoutEmployeesInput>;
    @Field(() => daily_reportsCreateWithoutEmployeesInput, {nullable:false})
    @Type(() => daily_reportsCreateWithoutEmployeesInput)
    create!: InstanceType<typeof daily_reportsCreateWithoutEmployeesInput>;
}

@InputType()
export class daily_reportsUpsertWithoutDaily_itemized_reportsInput {
    @Field(() => daily_reportsUpdateWithoutDaily_itemized_reportsInput, {nullable:false})
    @Type(() => daily_reportsUpdateWithoutDaily_itemized_reportsInput)
    update!: InstanceType<typeof daily_reportsUpdateWithoutDaily_itemized_reportsInput>;
    @Field(() => daily_reportsCreateWithoutDaily_itemized_reportsInput, {nullable:false})
    @Type(() => daily_reportsCreateWithoutDaily_itemized_reportsInput)
    create!: InstanceType<typeof daily_reportsCreateWithoutDaily_itemized_reportsInput>;
}

@InputType()
export class daily_reportsWhereUniqueInput {
    @Field(() => daily_reportsYear_monthDayEmployees_idCompoundUniqueInput, {nullable:true})
    year_month_day_employees_id?: InstanceType<typeof daily_reportsYear_monthDayEmployees_idCompoundUniqueInput>;
}

@InputType()
export class daily_reportsWhereInput {
    @Field(() => [daily_reportsWhereInput], {nullable:true})
    AND?: Array<daily_reportsWhereInput>;
    @Field(() => [daily_reportsWhereInput], {nullable:true})
    OR?: Array<daily_reportsWhereInput>;
    @Field(() => [daily_reportsWhereInput], {nullable:true})
    NOT?: Array<daily_reportsWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    year_month?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    day?: InstanceType<typeof StringFilter>;
    @Field(() => IntFilter, {nullable:true})
    employees_id?: InstanceType<typeof IntFilter>;
    @Field(() => DateTimeNullableFilter, {nullable:true})
    start_time?: InstanceType<typeof DateTimeNullableFilter>;
    @Field(() => DateTimeNullableFilter, {nullable:true})
    end_time?: InstanceType<typeof DateTimeNullableFilter>;
    @Field(() => DateTimeNullableFilter, {nullable:true})
    work_time?: InstanceType<typeof DateTimeNullableFilter>;
    @Field(() => EmployeesRelationFilter, {nullable:true})
    employees?: InstanceType<typeof EmployeesRelationFilter>;
    @Field(() => CalendarRelationFilter, {nullable:true})
    calendar?: InstanceType<typeof CalendarRelationFilter>;
    @Field(() => Daily_itemized_reportsListRelationFilter, {nullable:true})
    daily_itemized_reports?: InstanceType<typeof Daily_itemized_reportsListRelationFilter>;
}

@InputType()
export class daily_reportsYear_monthDayEmployees_idCompoundUniqueInput {
    @Field(() => String, {nullable:false})
    year_month!: string;
    @Field(() => String, {nullable:false})
    day!: string;
    @Field(() => Int, {nullable:false})
    employees_id!: number;
}

@ObjectType()
export class daily_reports {
    @Field(() => String, {nullable:false})
    year_month!: string;
    @Field(() => String, {nullable:false})
    day!: string;
    @Field(() => Int, {nullable:false})
    employees_id!: number;
    @Field(() => Date, {nullable:true})
    start_time!: Date | null;
    @Field(() => Date, {nullable:true})
    end_time!: Date | null;
    @Field(() => Date, {nullable:true})
    work_time!: Date | null;
    @Field(() => employees, {nullable:false})
    employees?: InstanceType<typeof employees>;
    @Field(() => calendar, {nullable:false})
    calendar?: InstanceType<typeof calendar>;
    @Field(() => [daily_itemized_reports], {nullable:true})
    daily_itemized_reports?: Array<daily_itemized_reports>;
    @Field(() => Daily_reportsCount, {nullable:false})
    _count?: InstanceType<typeof Daily_reportsCount>;
}

@ArgsType()
export class CreateManydepartmentArgs {
    @Field(() => [departmentCreateManyInput], {nullable:false})
    @Type(() => departmentCreateManyInput)
    data!: Array<departmentCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOnedepartmentArgs {
    @Field(() => departmentCreateInput, {nullable:false})
    @Type(() => departmentCreateInput)
    data!: InstanceType<typeof departmentCreateInput>;
}

@ArgsType()
export class DeleteManydepartmentArgs {
    @Field(() => departmentWhereInput, {nullable:true})
    @Type(() => departmentWhereInput)
    where?: InstanceType<typeof departmentWhereInput>;
}

@ArgsType()
export class DeleteOnedepartmentArgs {
    @Field(() => departmentWhereUniqueInput, {nullable:false})
    @Type(() => departmentWhereUniqueInput)
    where!: InstanceType<typeof departmentWhereUniqueInput>;
}

@ArgsType()
export class departmentAggregateArgs {
    @Field(() => departmentWhereInput, {nullable:true})
    @Type(() => departmentWhereInput)
    where?: InstanceType<typeof departmentWhereInput>;
    @Field(() => [departmentOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<departmentOrderByWithRelationInput>;
    @Field(() => departmentWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof departmentWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
}

@InputType()
export class departmentAvgOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    department_id?: keyof typeof SortOrder;
}

@InputType()
export class departmentCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    department_id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    department_name?: keyof typeof SortOrder;
}

@InputType()
export class departmentCreateManyInput {
    @Field(() => Int, {nullable:false})
    department_id!: number;
    @Field(() => String, {nullable:false})
    department_name!: string;
}

@InputType()
export class departmentCreateNestedOneWithoutEmployeesInput {
    @Field(() => departmentCreateWithoutEmployeesInput, {nullable:true})
    @Type(() => departmentCreateWithoutEmployeesInput)
    create?: InstanceType<typeof departmentCreateWithoutEmployeesInput>;
    @Field(() => departmentCreateOrConnectWithoutEmployeesInput, {nullable:true})
    @Type(() => departmentCreateOrConnectWithoutEmployeesInput)
    connectOrCreate?: InstanceType<typeof departmentCreateOrConnectWithoutEmployeesInput>;
    @Field(() => departmentWhereUniqueInput, {nullable:true})
    @Type(() => departmentWhereUniqueInput)
    connect?: InstanceType<typeof departmentWhereUniqueInput>;
}

@InputType()
export class departmentCreateOrConnectWithoutEmployeesInput {
    @Field(() => departmentWhereUniqueInput, {nullable:false})
    @Type(() => departmentWhereUniqueInput)
    where!: InstanceType<typeof departmentWhereUniqueInput>;
    @Field(() => departmentCreateWithoutEmployeesInput, {nullable:false})
    @Type(() => departmentCreateWithoutEmployeesInput)
    create!: InstanceType<typeof departmentCreateWithoutEmployeesInput>;
}

@InputType()
export class departmentCreateWithoutEmployeesInput {
    @Field(() => Int, {nullable:false})
    department_id!: number;
    @Field(() => String, {nullable:false})
    department_name!: string;
}

@InputType()
export class departmentCreateInput {
    @Field(() => Int, {nullable:false})
    department_id!: number;
    @Field(() => String, {nullable:false})
    department_name!: string;
    @Field(() => employeesCreateNestedManyWithoutDepartmentInput, {nullable:true})
    employees?: InstanceType<typeof employeesCreateNestedManyWithoutDepartmentInput>;
}

@ArgsType()
export class departmentGroupByArgs {
    @Field(() => departmentWhereInput, {nullable:true})
    @Type(() => departmentWhereInput)
    where?: InstanceType<typeof departmentWhereInput>;
    @Field(() => [departmentOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<departmentOrderByWithAggregationInput>;
    @Field(() => [DepartmentScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof DepartmentScalarFieldEnum>;
    @Field(() => departmentScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof departmentScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
}

@InputType()
export class departmentMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    department_id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    department_name?: keyof typeof SortOrder;
}

@InputType()
export class departmentMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    department_id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    department_name?: keyof typeof SortOrder;
}

@InputType()
export class departmentOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    department_id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    department_name?: keyof typeof SortOrder;
    @Field(() => departmentCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof departmentCountOrderByAggregateInput>;
    @Field(() => departmentAvgOrderByAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof departmentAvgOrderByAggregateInput>;
    @Field(() => departmentMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof departmentMaxOrderByAggregateInput>;
    @Field(() => departmentMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof departmentMinOrderByAggregateInput>;
    @Field(() => departmentSumOrderByAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof departmentSumOrderByAggregateInput>;
}

@InputType()
export class departmentOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    department_id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    department_name?: keyof typeof SortOrder;
    @Field(() => employeesOrderByRelationAggregateInput, {nullable:true})
    employees?: InstanceType<typeof employeesOrderByRelationAggregateInput>;
}

@InputType()
export class departmentScalarWhereWithAggregatesInput {
    @Field(() => [departmentScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<departmentScalarWhereWithAggregatesInput>;
    @Field(() => [departmentScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<departmentScalarWhereWithAggregatesInput>;
    @Field(() => [departmentScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<departmentScalarWhereWithAggregatesInput>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    department_id?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    department_name?: InstanceType<typeof StringWithAggregatesFilter>;
}

@InputType()
export class departmentSumOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    department_id?: keyof typeof SortOrder;
}

@InputType()
export class departmentUncheckedCreateWithoutEmployeesInput {
    @Field(() => Int, {nullable:false})
    department_id!: number;
    @Field(() => String, {nullable:false})
    department_name!: string;
}

@InputType()
export class departmentUncheckedCreateInput {
    @Field(() => Int, {nullable:false})
    department_id!: number;
    @Field(() => String, {nullable:false})
    department_name!: string;
    @Field(() => employeesUncheckedCreateNestedManyWithoutDepartmentInput, {nullable:true})
    employees?: InstanceType<typeof employeesUncheckedCreateNestedManyWithoutDepartmentInput>;
}

@InputType()
export class departmentUncheckedUpdateManyInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    department_id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    department_name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class departmentUncheckedUpdateWithoutEmployeesInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    department_id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    department_name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class departmentUncheckedUpdateInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    department_id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    department_name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => employeesUncheckedUpdateManyWithoutDepartmentInput, {nullable:true})
    employees?: InstanceType<typeof employeesUncheckedUpdateManyWithoutDepartmentInput>;
}

@InputType()
export class departmentUpdateManyMutationInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    department_id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    department_name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class departmentUpdateOneRequiredWithoutEmployeesInput {
    @Field(() => departmentCreateWithoutEmployeesInput, {nullable:true})
    @Type(() => departmentCreateWithoutEmployeesInput)
    create?: InstanceType<typeof departmentCreateWithoutEmployeesInput>;
    @Field(() => departmentCreateOrConnectWithoutEmployeesInput, {nullable:true})
    @Type(() => departmentCreateOrConnectWithoutEmployeesInput)
    connectOrCreate?: InstanceType<typeof departmentCreateOrConnectWithoutEmployeesInput>;
    @Field(() => departmentUpsertWithoutEmployeesInput, {nullable:true})
    @Type(() => departmentUpsertWithoutEmployeesInput)
    upsert?: InstanceType<typeof departmentUpsertWithoutEmployeesInput>;
    @Field(() => departmentWhereUniqueInput, {nullable:true})
    @Type(() => departmentWhereUniqueInput)
    connect?: InstanceType<typeof departmentWhereUniqueInput>;
    @Field(() => departmentUpdateWithoutEmployeesInput, {nullable:true})
    @Type(() => departmentUpdateWithoutEmployeesInput)
    update?: InstanceType<typeof departmentUpdateWithoutEmployeesInput>;
}

@InputType()
export class departmentUpdateWithoutEmployeesInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    department_id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    department_name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class departmentUpdateInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    department_id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    department_name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => employeesUpdateManyWithoutDepartmentInput, {nullable:true})
    employees?: InstanceType<typeof employeesUpdateManyWithoutDepartmentInput>;
}

@InputType()
export class departmentUpsertWithoutEmployeesInput {
    @Field(() => departmentUpdateWithoutEmployeesInput, {nullable:false})
    @Type(() => departmentUpdateWithoutEmployeesInput)
    update!: InstanceType<typeof departmentUpdateWithoutEmployeesInput>;
    @Field(() => departmentCreateWithoutEmployeesInput, {nullable:false})
    @Type(() => departmentCreateWithoutEmployeesInput)
    create!: InstanceType<typeof departmentCreateWithoutEmployeesInput>;
}

@InputType()
export class departmentWhereUniqueInput {
    @Field(() => Int, {nullable:true})
    department_id?: number;
}

@InputType()
export class departmentWhereInput {
    @Field(() => [departmentWhereInput], {nullable:true})
    AND?: Array<departmentWhereInput>;
    @Field(() => [departmentWhereInput], {nullable:true})
    OR?: Array<departmentWhereInput>;
    @Field(() => [departmentWhereInput], {nullable:true})
    NOT?: Array<departmentWhereInput>;
    @Field(() => IntFilter, {nullable:true})
    department_id?: InstanceType<typeof IntFilter>;
    @Field(() => StringFilter, {nullable:true})
    department_name?: InstanceType<typeof StringFilter>;
    @Field(() => EmployeesListRelationFilter, {nullable:true})
    employees?: InstanceType<typeof EmployeesListRelationFilter>;
}

@ObjectType()
export class department {
    @Field(() => ID, {nullable:false})
    department_id!: number;
    @Field(() => String, {nullable:false})
    department_name!: string;
    @Field(() => [employees], {nullable:true})
    employees?: Array<employees>;
    @Field(() => DepartmentCount, {nullable:false})
    _count?: InstanceType<typeof DepartmentCount>;
}

@ArgsType()
export class FindFirstdepartmentArgs {
    @Field(() => departmentWhereInput, {nullable:true})
    @Type(() => departmentWhereInput)
    where?: InstanceType<typeof departmentWhereInput>;
    @Field(() => [departmentOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<departmentOrderByWithRelationInput>;
    @Field(() => departmentWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof departmentWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [DepartmentScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof DepartmentScalarFieldEnum>;
}

@ArgsType()
export class FindManydepartmentArgs {
    @Field(() => departmentWhereInput, {nullable:true})
    @Type(() => departmentWhereInput)
    where?: InstanceType<typeof departmentWhereInput>;
    @Field(() => [departmentOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<departmentOrderByWithRelationInput>;
    @Field(() => departmentWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof departmentWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [DepartmentScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof DepartmentScalarFieldEnum>;
}

@ArgsType()
export class FindUniquedepartmentArgs {
    @Field(() => departmentWhereUniqueInput, {nullable:false})
    @Type(() => departmentWhereUniqueInput)
    where!: InstanceType<typeof departmentWhereUniqueInput>;
}

@ArgsType()
export class UpdateManydepartmentArgs {
    @Field(() => departmentUpdateManyMutationInput, {nullable:false})
    @Type(() => departmentUpdateManyMutationInput)
    data!: InstanceType<typeof departmentUpdateManyMutationInput>;
    @Field(() => departmentWhereInput, {nullable:true})
    @Type(() => departmentWhereInput)
    where?: InstanceType<typeof departmentWhereInput>;
}

@ArgsType()
export class UpdateOnedepartmentArgs {
    @Field(() => departmentUpdateInput, {nullable:false})
    @Type(() => departmentUpdateInput)
    data!: InstanceType<typeof departmentUpdateInput>;
    @Field(() => departmentWhereUniqueInput, {nullable:false})
    @Type(() => departmentWhereUniqueInput)
    where!: InstanceType<typeof departmentWhereUniqueInput>;
}

@ArgsType()
export class UpsertOnedepartmentArgs {
    @Field(() => departmentWhereUniqueInput, {nullable:false})
    @Type(() => departmentWhereUniqueInput)
    where!: InstanceType<typeof departmentWhereUniqueInput>;
    @Field(() => departmentCreateInput, {nullable:false})
    @Type(() => departmentCreateInput)
    create!: InstanceType<typeof departmentCreateInput>;
    @Field(() => departmentUpdateInput, {nullable:false})
    @Type(() => departmentUpdateInput)
    update!: InstanceType<typeof departmentUpdateInput>;
}

@ArgsType()
export class CreateManyemployeesArgs {
    @Field(() => [employeesCreateManyInput], {nullable:false})
    @Type(() => employeesCreateManyInput)
    data!: Array<employeesCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneemployeesArgs {
    @Field(() => employeesCreateInput, {nullable:false})
    @Type(() => employeesCreateInput)
    data!: InstanceType<typeof employeesCreateInput>;
}

@ArgsType()
export class DeleteManyemployeesArgs {
    @Field(() => employeesWhereInput, {nullable:true})
    @Type(() => employeesWhereInput)
    where?: InstanceType<typeof employeesWhereInput>;
}

@ArgsType()
export class DeleteOneemployeesArgs {
    @Field(() => employeesWhereUniqueInput, {nullable:false})
    @Type(() => employeesWhereUniqueInput)
    where!: InstanceType<typeof employeesWhereUniqueInput>;
}

@ArgsType()
export class employeesAggregateArgs {
    @Field(() => employeesWhereInput, {nullable:true})
    @Type(() => employeesWhereInput)
    where?: InstanceType<typeof employeesWhereInput>;
    @Field(() => [employeesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<employeesOrderByWithRelationInput>;
    @Field(() => employeesWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof employeesWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
}

@InputType()
export class employeesAvgOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    employees_id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    department_id?: keyof typeof SortOrder;
}

@InputType()
export class employeesCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    employees_id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    employees_name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    department_id?: keyof typeof SortOrder;
}

@InputType()
export class employeesCreateManyDepartmentInputEnvelope {
    @Field(() => [employeesCreateManyDepartmentInput], {nullable:false})
    @Type(() => employeesCreateManyDepartmentInput)
    data!: Array<employeesCreateManyDepartmentInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class employeesCreateManyDepartmentInput {
    @Field(() => Int, {nullable:false})
    employees_id!: number;
    @Field(() => String, {nullable:false})
    employees_name!: string;
}

@InputType()
export class employeesCreateManyInput {
    @Field(() => Int, {nullable:false})
    employees_id!: number;
    @Field(() => String, {nullable:false})
    employees_name!: string;
    @Field(() => Int, {nullable:false})
    department_id!: number;
}

@InputType()
export class employeesCreateNestedManyWithoutDepartmentInput {
    @Field(() => [employeesCreateWithoutDepartmentInput], {nullable:true})
    @Type(() => employeesCreateWithoutDepartmentInput)
    create?: Array<employeesCreateWithoutDepartmentInput>;
    @Field(() => [employeesCreateOrConnectWithoutDepartmentInput], {nullable:true})
    @Type(() => employeesCreateOrConnectWithoutDepartmentInput)
    connectOrCreate?: Array<employeesCreateOrConnectWithoutDepartmentInput>;
    @Field(() => employeesCreateManyDepartmentInputEnvelope, {nullable:true})
    @Type(() => employeesCreateManyDepartmentInputEnvelope)
    createMany?: InstanceType<typeof employeesCreateManyDepartmentInputEnvelope>;
    @Field(() => [employeesWhereUniqueInput], {nullable:true})
    @Type(() => employeesWhereUniqueInput)
    connect?: Array<employeesWhereUniqueInput>;
}

@InputType()
export class employeesCreateNestedOneWithoutDaily_reportsInput {
    @Field(() => employeesCreateWithoutDaily_reportsInput, {nullable:true})
    @Type(() => employeesCreateWithoutDaily_reportsInput)
    create?: InstanceType<typeof employeesCreateWithoutDaily_reportsInput>;
    @Field(() => employeesCreateOrConnectWithoutDaily_reportsInput, {nullable:true})
    @Type(() => employeesCreateOrConnectWithoutDaily_reportsInput)
    connectOrCreate?: InstanceType<typeof employeesCreateOrConnectWithoutDaily_reportsInput>;
    @Field(() => employeesWhereUniqueInput, {nullable:true})
    @Type(() => employeesWhereUniqueInput)
    connect?: InstanceType<typeof employeesWhereUniqueInput>;
}

@InputType()
export class employeesCreateOrConnectWithoutDaily_reportsInput {
    @Field(() => employeesWhereUniqueInput, {nullable:false})
    @Type(() => employeesWhereUniqueInput)
    where!: InstanceType<typeof employeesWhereUniqueInput>;
    @Field(() => employeesCreateWithoutDaily_reportsInput, {nullable:false})
    @Type(() => employeesCreateWithoutDaily_reportsInput)
    create!: InstanceType<typeof employeesCreateWithoutDaily_reportsInput>;
}

@InputType()
export class employeesCreateOrConnectWithoutDepartmentInput {
    @Field(() => employeesWhereUniqueInput, {nullable:false})
    @Type(() => employeesWhereUniqueInput)
    where!: InstanceType<typeof employeesWhereUniqueInput>;
    @Field(() => employeesCreateWithoutDepartmentInput, {nullable:false})
    @Type(() => employeesCreateWithoutDepartmentInput)
    create!: InstanceType<typeof employeesCreateWithoutDepartmentInput>;
}

@InputType()
export class employeesCreateWithoutDaily_reportsInput {
    @Field(() => Int, {nullable:false})
    employees_id!: number;
    @Field(() => String, {nullable:false})
    employees_name!: string;
    @Field(() => departmentCreateNestedOneWithoutEmployeesInput, {nullable:false})
    department!: InstanceType<typeof departmentCreateNestedOneWithoutEmployeesInput>;
}

@InputType()
export class employeesCreateWithoutDepartmentInput {
    @Field(() => Int, {nullable:false})
    employees_id!: number;
    @Field(() => String, {nullable:false})
    employees_name!: string;
    @Field(() => daily_reportsCreateNestedManyWithoutEmployeesInput, {nullable:true})
    daily_reports?: InstanceType<typeof daily_reportsCreateNestedManyWithoutEmployeesInput>;
}

@InputType()
export class employeesCreateInput {
    @Field(() => Int, {nullable:false})
    employees_id!: number;
    @Field(() => String, {nullable:false})
    employees_name!: string;
    @Field(() => departmentCreateNestedOneWithoutEmployeesInput, {nullable:false})
    department!: InstanceType<typeof departmentCreateNestedOneWithoutEmployeesInput>;
    @Field(() => daily_reportsCreateNestedManyWithoutEmployeesInput, {nullable:true})
    daily_reports?: InstanceType<typeof daily_reportsCreateNestedManyWithoutEmployeesInput>;
}

@ArgsType()
export class employeesGroupByArgs {
    @Field(() => employeesWhereInput, {nullable:true})
    @Type(() => employeesWhereInput)
    where?: InstanceType<typeof employeesWhereInput>;
    @Field(() => [employeesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<employeesOrderByWithAggregationInput>;
    @Field(() => [EmployeesScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof EmployeesScalarFieldEnum>;
    @Field(() => employeesScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof employeesScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
}

@InputType()
export class employeesMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    employees_id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    employees_name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    department_id?: keyof typeof SortOrder;
}

@InputType()
export class employeesMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    employees_id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    employees_name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    department_id?: keyof typeof SortOrder;
}

@InputType()
export class employeesOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: keyof typeof SortOrder;
}

@InputType()
export class employeesOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    employees_id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    employees_name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    department_id?: keyof typeof SortOrder;
    @Field(() => employeesCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof employeesCountOrderByAggregateInput>;
    @Field(() => employeesAvgOrderByAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof employeesAvgOrderByAggregateInput>;
    @Field(() => employeesMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof employeesMaxOrderByAggregateInput>;
    @Field(() => employeesMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof employeesMinOrderByAggregateInput>;
    @Field(() => employeesSumOrderByAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof employeesSumOrderByAggregateInput>;
}

@InputType()
export class employeesOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    employees_id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    employees_name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    department_id?: keyof typeof SortOrder;
    @Field(() => departmentOrderByWithRelationInput, {nullable:true})
    department?: InstanceType<typeof departmentOrderByWithRelationInput>;
    @Field(() => daily_reportsOrderByRelationAggregateInput, {nullable:true})
    daily_reports?: InstanceType<typeof daily_reportsOrderByRelationAggregateInput>;
}

@InputType()
export class employeesScalarWhereWithAggregatesInput {
    @Field(() => [employeesScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<employeesScalarWhereWithAggregatesInput>;
    @Field(() => [employeesScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<employeesScalarWhereWithAggregatesInput>;
    @Field(() => [employeesScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<employeesScalarWhereWithAggregatesInput>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    employees_id?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    employees_name?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    department_id?: InstanceType<typeof IntWithAggregatesFilter>;
}

@InputType()
export class employeesScalarWhereInput {
    @Field(() => [employeesScalarWhereInput], {nullable:true})
    AND?: Array<employeesScalarWhereInput>;
    @Field(() => [employeesScalarWhereInput], {nullable:true})
    OR?: Array<employeesScalarWhereInput>;
    @Field(() => [employeesScalarWhereInput], {nullable:true})
    NOT?: Array<employeesScalarWhereInput>;
    @Field(() => IntFilter, {nullable:true})
    employees_id?: InstanceType<typeof IntFilter>;
    @Field(() => StringFilter, {nullable:true})
    employees_name?: InstanceType<typeof StringFilter>;
    @Field(() => IntFilter, {nullable:true})
    department_id?: InstanceType<typeof IntFilter>;
}

@InputType()
export class employeesSumOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    employees_id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    department_id?: keyof typeof SortOrder;
}

@InputType()
export class employeesUncheckedCreateNestedManyWithoutDepartmentInput {
    @Field(() => [employeesCreateWithoutDepartmentInput], {nullable:true})
    @Type(() => employeesCreateWithoutDepartmentInput)
    create?: Array<employeesCreateWithoutDepartmentInput>;
    @Field(() => [employeesCreateOrConnectWithoutDepartmentInput], {nullable:true})
    @Type(() => employeesCreateOrConnectWithoutDepartmentInput)
    connectOrCreate?: Array<employeesCreateOrConnectWithoutDepartmentInput>;
    @Field(() => employeesCreateManyDepartmentInputEnvelope, {nullable:true})
    @Type(() => employeesCreateManyDepartmentInputEnvelope)
    createMany?: InstanceType<typeof employeesCreateManyDepartmentInputEnvelope>;
    @Field(() => [employeesWhereUniqueInput], {nullable:true})
    @Type(() => employeesWhereUniqueInput)
    connect?: Array<employeesWhereUniqueInput>;
}

@InputType()
export class employeesUncheckedCreateWithoutDaily_reportsInput {
    @Field(() => Int, {nullable:false})
    employees_id!: number;
    @Field(() => String, {nullable:false})
    employees_name!: string;
    @Field(() => Int, {nullable:false})
    department_id!: number;
}

@InputType()
export class employeesUncheckedCreateWithoutDepartmentInput {
    @Field(() => Int, {nullable:false})
    employees_id!: number;
    @Field(() => String, {nullable:false})
    employees_name!: string;
    @Field(() => daily_reportsUncheckedCreateNestedManyWithoutEmployeesInput, {nullable:true})
    daily_reports?: InstanceType<typeof daily_reportsUncheckedCreateNestedManyWithoutEmployeesInput>;
}

@InputType()
export class employeesUncheckedCreateInput {
    @Field(() => Int, {nullable:false})
    employees_id!: number;
    @Field(() => String, {nullable:false})
    employees_name!: string;
    @Field(() => Int, {nullable:false})
    department_id!: number;
    @Field(() => daily_reportsUncheckedCreateNestedManyWithoutEmployeesInput, {nullable:true})
    daily_reports?: InstanceType<typeof daily_reportsUncheckedCreateNestedManyWithoutEmployeesInput>;
}

@InputType()
export class employeesUncheckedUpdateManyWithoutDepartmentInput {
    @Field(() => [employeesCreateWithoutDepartmentInput], {nullable:true})
    @Type(() => employeesCreateWithoutDepartmentInput)
    create?: Array<employeesCreateWithoutDepartmentInput>;
    @Field(() => [employeesCreateOrConnectWithoutDepartmentInput], {nullable:true})
    @Type(() => employeesCreateOrConnectWithoutDepartmentInput)
    connectOrCreate?: Array<employeesCreateOrConnectWithoutDepartmentInput>;
    @Field(() => [employeesUpsertWithWhereUniqueWithoutDepartmentInput], {nullable:true})
    @Type(() => employeesUpsertWithWhereUniqueWithoutDepartmentInput)
    upsert?: Array<employeesUpsertWithWhereUniqueWithoutDepartmentInput>;
    @Field(() => employeesCreateManyDepartmentInputEnvelope, {nullable:true})
    @Type(() => employeesCreateManyDepartmentInputEnvelope)
    createMany?: InstanceType<typeof employeesCreateManyDepartmentInputEnvelope>;
    @Field(() => [employeesWhereUniqueInput], {nullable:true})
    @Type(() => employeesWhereUniqueInput)
    set?: Array<employeesWhereUniqueInput>;
    @Field(() => [employeesWhereUniqueInput], {nullable:true})
    @Type(() => employeesWhereUniqueInput)
    disconnect?: Array<employeesWhereUniqueInput>;
    @Field(() => [employeesWhereUniqueInput], {nullable:true})
    @Type(() => employeesWhereUniqueInput)
    delete?: Array<employeesWhereUniqueInput>;
    @Field(() => [employeesWhereUniqueInput], {nullable:true})
    @Type(() => employeesWhereUniqueInput)
    connect?: Array<employeesWhereUniqueInput>;
    @Field(() => [employeesUpdateWithWhereUniqueWithoutDepartmentInput], {nullable:true})
    @Type(() => employeesUpdateWithWhereUniqueWithoutDepartmentInput)
    update?: Array<employeesUpdateWithWhereUniqueWithoutDepartmentInput>;
    @Field(() => [employeesUpdateManyWithWhereWithoutDepartmentInput], {nullable:true})
    @Type(() => employeesUpdateManyWithWhereWithoutDepartmentInput)
    updateMany?: Array<employeesUpdateManyWithWhereWithoutDepartmentInput>;
    @Field(() => [employeesScalarWhereInput], {nullable:true})
    @Type(() => employeesScalarWhereInput)
    deleteMany?: Array<employeesScalarWhereInput>;
}

@InputType()
export class employeesUncheckedUpdateManyWithoutEmployeesInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    employees_id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    employees_name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class employeesUncheckedUpdateManyInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    employees_id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    employees_name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    department_id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
}

@InputType()
export class employeesUncheckedUpdateWithoutDaily_reportsInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    employees_id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    employees_name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    department_id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
}

@InputType()
export class employeesUncheckedUpdateWithoutDepartmentInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    employees_id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    employees_name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => daily_reportsUncheckedUpdateManyWithoutEmployeesInput, {nullable:true})
    daily_reports?: InstanceType<typeof daily_reportsUncheckedUpdateManyWithoutEmployeesInput>;
}

@InputType()
export class employeesUncheckedUpdateInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    employees_id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    employees_name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    department_id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => daily_reportsUncheckedUpdateManyWithoutEmployeesInput, {nullable:true})
    daily_reports?: InstanceType<typeof daily_reportsUncheckedUpdateManyWithoutEmployeesInput>;
}

@InputType()
export class employeesUpdateManyMutationInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    employees_id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    employees_name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class employeesUpdateManyWithWhereWithoutDepartmentInput {
    @Field(() => employeesScalarWhereInput, {nullable:false})
    @Type(() => employeesScalarWhereInput)
    where!: InstanceType<typeof employeesScalarWhereInput>;
    @Field(() => employeesUpdateManyMutationInput, {nullable:false})
    @Type(() => employeesUpdateManyMutationInput)
    data!: InstanceType<typeof employeesUpdateManyMutationInput>;
}

@InputType()
export class employeesUpdateManyWithoutDepartmentInput {
    @Field(() => [employeesCreateWithoutDepartmentInput], {nullable:true})
    @Type(() => employeesCreateWithoutDepartmentInput)
    create?: Array<employeesCreateWithoutDepartmentInput>;
    @Field(() => [employeesCreateOrConnectWithoutDepartmentInput], {nullable:true})
    @Type(() => employeesCreateOrConnectWithoutDepartmentInput)
    connectOrCreate?: Array<employeesCreateOrConnectWithoutDepartmentInput>;
    @Field(() => [employeesUpsertWithWhereUniqueWithoutDepartmentInput], {nullable:true})
    @Type(() => employeesUpsertWithWhereUniqueWithoutDepartmentInput)
    upsert?: Array<employeesUpsertWithWhereUniqueWithoutDepartmentInput>;
    @Field(() => employeesCreateManyDepartmentInputEnvelope, {nullable:true})
    @Type(() => employeesCreateManyDepartmentInputEnvelope)
    createMany?: InstanceType<typeof employeesCreateManyDepartmentInputEnvelope>;
    @Field(() => [employeesWhereUniqueInput], {nullable:true})
    @Type(() => employeesWhereUniqueInput)
    set?: Array<employeesWhereUniqueInput>;
    @Field(() => [employeesWhereUniqueInput], {nullable:true})
    @Type(() => employeesWhereUniqueInput)
    disconnect?: Array<employeesWhereUniqueInput>;
    @Field(() => [employeesWhereUniqueInput], {nullable:true})
    @Type(() => employeesWhereUniqueInput)
    delete?: Array<employeesWhereUniqueInput>;
    @Field(() => [employeesWhereUniqueInput], {nullable:true})
    @Type(() => employeesWhereUniqueInput)
    connect?: Array<employeesWhereUniqueInput>;
    @Field(() => [employeesUpdateWithWhereUniqueWithoutDepartmentInput], {nullable:true})
    @Type(() => employeesUpdateWithWhereUniqueWithoutDepartmentInput)
    update?: Array<employeesUpdateWithWhereUniqueWithoutDepartmentInput>;
    @Field(() => [employeesUpdateManyWithWhereWithoutDepartmentInput], {nullable:true})
    @Type(() => employeesUpdateManyWithWhereWithoutDepartmentInput)
    updateMany?: Array<employeesUpdateManyWithWhereWithoutDepartmentInput>;
    @Field(() => [employeesScalarWhereInput], {nullable:true})
    @Type(() => employeesScalarWhereInput)
    deleteMany?: Array<employeesScalarWhereInput>;
}

@InputType()
export class employeesUpdateOneRequiredWithoutDaily_reportsInput {
    @Field(() => employeesCreateWithoutDaily_reportsInput, {nullable:true})
    @Type(() => employeesCreateWithoutDaily_reportsInput)
    create?: InstanceType<typeof employeesCreateWithoutDaily_reportsInput>;
    @Field(() => employeesCreateOrConnectWithoutDaily_reportsInput, {nullable:true})
    @Type(() => employeesCreateOrConnectWithoutDaily_reportsInput)
    connectOrCreate?: InstanceType<typeof employeesCreateOrConnectWithoutDaily_reportsInput>;
    @Field(() => employeesUpsertWithoutDaily_reportsInput, {nullable:true})
    @Type(() => employeesUpsertWithoutDaily_reportsInput)
    upsert?: InstanceType<typeof employeesUpsertWithoutDaily_reportsInput>;
    @Field(() => employeesWhereUniqueInput, {nullable:true})
    @Type(() => employeesWhereUniqueInput)
    connect?: InstanceType<typeof employeesWhereUniqueInput>;
    @Field(() => employeesUpdateWithoutDaily_reportsInput, {nullable:true})
    @Type(() => employeesUpdateWithoutDaily_reportsInput)
    update?: InstanceType<typeof employeesUpdateWithoutDaily_reportsInput>;
}

@InputType()
export class employeesUpdateWithWhereUniqueWithoutDepartmentInput {
    @Field(() => employeesWhereUniqueInput, {nullable:false})
    @Type(() => employeesWhereUniqueInput)
    where!: InstanceType<typeof employeesWhereUniqueInput>;
    @Field(() => employeesUpdateWithoutDepartmentInput, {nullable:false})
    @Type(() => employeesUpdateWithoutDepartmentInput)
    data!: InstanceType<typeof employeesUpdateWithoutDepartmentInput>;
}

@InputType()
export class employeesUpdateWithoutDaily_reportsInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    employees_id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    employees_name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => departmentUpdateOneRequiredWithoutEmployeesInput, {nullable:true})
    department?: InstanceType<typeof departmentUpdateOneRequiredWithoutEmployeesInput>;
}

@InputType()
export class employeesUpdateWithoutDepartmentInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    employees_id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    employees_name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => daily_reportsUpdateManyWithoutEmployeesInput, {nullable:true})
    daily_reports?: InstanceType<typeof daily_reportsUpdateManyWithoutEmployeesInput>;
}

@InputType()
export class employeesUpdateInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    employees_id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    employees_name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => departmentUpdateOneRequiredWithoutEmployeesInput, {nullable:true})
    department?: InstanceType<typeof departmentUpdateOneRequiredWithoutEmployeesInput>;
    @Field(() => daily_reportsUpdateManyWithoutEmployeesInput, {nullable:true})
    daily_reports?: InstanceType<typeof daily_reportsUpdateManyWithoutEmployeesInput>;
}

@InputType()
export class employeesUpsertWithWhereUniqueWithoutDepartmentInput {
    @Field(() => employeesWhereUniqueInput, {nullable:false})
    @Type(() => employeesWhereUniqueInput)
    where!: InstanceType<typeof employeesWhereUniqueInput>;
    @Field(() => employeesUpdateWithoutDepartmentInput, {nullable:false})
    @Type(() => employeesUpdateWithoutDepartmentInput)
    update!: InstanceType<typeof employeesUpdateWithoutDepartmentInput>;
    @Field(() => employeesCreateWithoutDepartmentInput, {nullable:false})
    @Type(() => employeesCreateWithoutDepartmentInput)
    create!: InstanceType<typeof employeesCreateWithoutDepartmentInput>;
}

@InputType()
export class employeesUpsertWithoutDaily_reportsInput {
    @Field(() => employeesUpdateWithoutDaily_reportsInput, {nullable:false})
    @Type(() => employeesUpdateWithoutDaily_reportsInput)
    update!: InstanceType<typeof employeesUpdateWithoutDaily_reportsInput>;
    @Field(() => employeesCreateWithoutDaily_reportsInput, {nullable:false})
    @Type(() => employeesCreateWithoutDaily_reportsInput)
    create!: InstanceType<typeof employeesCreateWithoutDaily_reportsInput>;
}

@InputType()
export class employeesWhereUniqueInput {
    @Field(() => Int, {nullable:true})
    employees_id?: number;
}

@InputType()
export class employeesWhereInput {
    @Field(() => [employeesWhereInput], {nullable:true})
    AND?: Array<employeesWhereInput>;
    @Field(() => [employeesWhereInput], {nullable:true})
    OR?: Array<employeesWhereInput>;
    @Field(() => [employeesWhereInput], {nullable:true})
    NOT?: Array<employeesWhereInput>;
    @Field(() => IntFilter, {nullable:true})
    employees_id?: InstanceType<typeof IntFilter>;
    @Field(() => StringFilter, {nullable:true})
    employees_name?: InstanceType<typeof StringFilter>;
    @Field(() => IntFilter, {nullable:true})
    department_id?: InstanceType<typeof IntFilter>;
    @Field(() => DepartmentRelationFilter, {nullable:true})
    department?: InstanceType<typeof DepartmentRelationFilter>;
    @Field(() => Daily_reportsListRelationFilter, {nullable:true})
    daily_reports?: InstanceType<typeof Daily_reportsListRelationFilter>;
}

@ObjectType()
export class employees {
    @Field(() => ID, {nullable:false})
    employees_id!: number;
    @Field(() => String, {nullable:false})
    employees_name!: string;
    @Field(() => Int, {nullable:false})
    department_id!: number;
    @Field(() => department, {nullable:false})
    department?: InstanceType<typeof department>;
    @Field(() => [daily_reports], {nullable:true})
    daily_reports?: Array<daily_reports>;
    @Field(() => EmployeesCount, {nullable:false})
    _count?: InstanceType<typeof EmployeesCount>;
}

@ArgsType()
export class FindFirstemployeesArgs {
    @Field(() => employeesWhereInput, {nullable:true})
    @Type(() => employeesWhereInput)
    where?: InstanceType<typeof employeesWhereInput>;
    @Field(() => [employeesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<employeesOrderByWithRelationInput>;
    @Field(() => employeesWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof employeesWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [EmployeesScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof EmployeesScalarFieldEnum>;
}

@ArgsType()
export class FindManyemployeesArgs {
    @Field(() => employeesWhereInput, {nullable:true})
    @Type(() => employeesWhereInput)
    where?: InstanceType<typeof employeesWhereInput>;
    @Field(() => [employeesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<employeesOrderByWithRelationInput>;
    @Field(() => employeesWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof employeesWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [EmployeesScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof EmployeesScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueemployeesArgs {
    @Field(() => employeesWhereUniqueInput, {nullable:false})
    @Type(() => employeesWhereUniqueInput)
    where!: InstanceType<typeof employeesWhereUniqueInput>;
}

@ArgsType()
export class UpdateManyemployeesArgs {
    @Field(() => employeesUpdateManyMutationInput, {nullable:false})
    @Type(() => employeesUpdateManyMutationInput)
    data!: InstanceType<typeof employeesUpdateManyMutationInput>;
    @Field(() => employeesWhereInput, {nullable:true})
    @Type(() => employeesWhereInput)
    where?: InstanceType<typeof employeesWhereInput>;
}

@ArgsType()
export class UpdateOneemployeesArgs {
    @Field(() => employeesUpdateInput, {nullable:false})
    @Type(() => employeesUpdateInput)
    data!: InstanceType<typeof employeesUpdateInput>;
    @Field(() => employeesWhereUniqueInput, {nullable:false})
    @Type(() => employeesWhereUniqueInput)
    where!: InstanceType<typeof employeesWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneemployeesArgs {
    @Field(() => employeesWhereUniqueInput, {nullable:false})
    @Type(() => employeesWhereUniqueInput)
    where!: InstanceType<typeof employeesWhereUniqueInput>;
    @Field(() => employeesCreateInput, {nullable:false})
    @Type(() => employeesCreateInput)
    create!: InstanceType<typeof employeesCreateInput>;
    @Field(() => employeesUpdateInput, {nullable:false})
    @Type(() => employeesUpdateInput)
    update!: InstanceType<typeof employeesUpdateInput>;
}

@ArgsType()
export class CreateManyoperationArgs {
    @Field(() => [operationCreateManyInput], {nullable:false})
    @Type(() => operationCreateManyInput)
    data!: Array<operationCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneoperationArgs {
    @Field(() => operationCreateInput, {nullable:false})
    @Type(() => operationCreateInput)
    data!: InstanceType<typeof operationCreateInput>;
}

@ArgsType()
export class DeleteManyoperationArgs {
    @Field(() => operationWhereInput, {nullable:true})
    @Type(() => operationWhereInput)
    where?: InstanceType<typeof operationWhereInput>;
}

@ArgsType()
export class DeleteOneoperationArgs {
    @Field(() => operationWhereUniqueInput, {nullable:false})
    @Type(() => operationWhereUniqueInput)
    where!: InstanceType<typeof operationWhereUniqueInput>;
}

@ArgsType()
export class FindFirstoperationArgs {
    @Field(() => operationWhereInput, {nullable:true})
    @Type(() => operationWhereInput)
    where?: InstanceType<typeof operationWhereInput>;
    @Field(() => [operationOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<operationOrderByWithRelationInput>;
    @Field(() => operationWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof operationWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [OperationScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof OperationScalarFieldEnum>;
}

@ArgsType()
export class FindManyoperationArgs {
    @Field(() => operationWhereInput, {nullable:true})
    @Type(() => operationWhereInput)
    where?: InstanceType<typeof operationWhereInput>;
    @Field(() => [operationOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<operationOrderByWithRelationInput>;
    @Field(() => operationWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof operationWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [OperationScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof OperationScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueoperationArgs {
    @Field(() => operationWhereUniqueInput, {nullable:false})
    @Type(() => operationWhereUniqueInput)
    where!: InstanceType<typeof operationWhereUniqueInput>;
}

@ArgsType()
export class operationAggregateArgs {
    @Field(() => operationWhereInput, {nullable:true})
    @Type(() => operationWhereInput)
    where?: InstanceType<typeof operationWhereInput>;
    @Field(() => [operationOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<operationOrderByWithRelationInput>;
    @Field(() => operationWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof operationWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
}

@InputType()
export class operationAvgOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    operation_id?: keyof typeof SortOrder;
}

@InputType()
export class operationCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    operation_id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    operation_name?: keyof typeof SortOrder;
}

@InputType()
export class operationCreateManyInput {
    @Field(() => Int, {nullable:false})
    operation_id!: number;
    @Field(() => String, {nullable:false})
    operation_name!: string;
}

@InputType()
export class operationCreateNestedOneWithoutDaily_itemized_reportsInput {
    @Field(() => operationCreateWithoutDaily_itemized_reportsInput, {nullable:true})
    @Type(() => operationCreateWithoutDaily_itemized_reportsInput)
    create?: InstanceType<typeof operationCreateWithoutDaily_itemized_reportsInput>;
    @Field(() => operationCreateOrConnectWithoutDaily_itemized_reportsInput, {nullable:true})
    @Type(() => operationCreateOrConnectWithoutDaily_itemized_reportsInput)
    connectOrCreate?: InstanceType<typeof operationCreateOrConnectWithoutDaily_itemized_reportsInput>;
    @Field(() => operationWhereUniqueInput, {nullable:true})
    @Type(() => operationWhereUniqueInput)
    connect?: InstanceType<typeof operationWhereUniqueInput>;
}

@InputType()
export class operationCreateOrConnectWithoutDaily_itemized_reportsInput {
    @Field(() => operationWhereUniqueInput, {nullable:false})
    @Type(() => operationWhereUniqueInput)
    where!: InstanceType<typeof operationWhereUniqueInput>;
    @Field(() => operationCreateWithoutDaily_itemized_reportsInput, {nullable:false})
    @Type(() => operationCreateWithoutDaily_itemized_reportsInput)
    create!: InstanceType<typeof operationCreateWithoutDaily_itemized_reportsInput>;
}

@InputType()
export class operationCreateWithoutDaily_itemized_reportsInput {
    @Field(() => Int, {nullable:false})
    operation_id!: number;
    @Field(() => String, {nullable:false})
    operation_name!: string;
}

@InputType()
export class operationCreateInput {
    @Field(() => Int, {nullable:false})
    operation_id!: number;
    @Field(() => String, {nullable:false})
    operation_name!: string;
    @Field(() => daily_itemized_reportsCreateNestedManyWithoutOperationInput, {nullable:true})
    daily_itemized_reports?: InstanceType<typeof daily_itemized_reportsCreateNestedManyWithoutOperationInput>;
}

@ArgsType()
export class operationGroupByArgs {
    @Field(() => operationWhereInput, {nullable:true})
    @Type(() => operationWhereInput)
    where?: InstanceType<typeof operationWhereInput>;
    @Field(() => [operationOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<operationOrderByWithAggregationInput>;
    @Field(() => [OperationScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof OperationScalarFieldEnum>;
    @Field(() => operationScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof operationScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
}

@InputType()
export class operationMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    operation_id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    operation_name?: keyof typeof SortOrder;
}

@InputType()
export class operationMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    operation_id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    operation_name?: keyof typeof SortOrder;
}

@InputType()
export class operationOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    operation_id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    operation_name?: keyof typeof SortOrder;
    @Field(() => operationCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof operationCountOrderByAggregateInput>;
    @Field(() => operationAvgOrderByAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof operationAvgOrderByAggregateInput>;
    @Field(() => operationMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof operationMaxOrderByAggregateInput>;
    @Field(() => operationMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof operationMinOrderByAggregateInput>;
    @Field(() => operationSumOrderByAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof operationSumOrderByAggregateInput>;
}

@InputType()
export class operationOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    operation_id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    operation_name?: keyof typeof SortOrder;
    @Field(() => daily_itemized_reportsOrderByRelationAggregateInput, {nullable:true})
    daily_itemized_reports?: InstanceType<typeof daily_itemized_reportsOrderByRelationAggregateInput>;
}

@InputType()
export class operationScalarWhereWithAggregatesInput {
    @Field(() => [operationScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<operationScalarWhereWithAggregatesInput>;
    @Field(() => [operationScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<operationScalarWhereWithAggregatesInput>;
    @Field(() => [operationScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<operationScalarWhereWithAggregatesInput>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    operation_id?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    operation_name?: InstanceType<typeof StringWithAggregatesFilter>;
}

@InputType()
export class operationSumOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    operation_id?: keyof typeof SortOrder;
}

@InputType()
export class operationUncheckedCreateWithoutDaily_itemized_reportsInput {
    @Field(() => Int, {nullable:false})
    operation_id!: number;
    @Field(() => String, {nullable:false})
    operation_name!: string;
}

@InputType()
export class operationUncheckedCreateInput {
    @Field(() => Int, {nullable:false})
    operation_id!: number;
    @Field(() => String, {nullable:false})
    operation_name!: string;
    @Field(() => daily_itemized_reportsUncheckedCreateNestedManyWithoutOperationInput, {nullable:true})
    daily_itemized_reports?: InstanceType<typeof daily_itemized_reportsUncheckedCreateNestedManyWithoutOperationInput>;
}

@InputType()
export class operationUncheckedUpdateManyInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    operation_id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    operation_name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class operationUncheckedUpdateWithoutDaily_itemized_reportsInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    operation_id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    operation_name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class operationUncheckedUpdateInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    operation_id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    operation_name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => daily_itemized_reportsUncheckedUpdateManyWithoutOperationInput, {nullable:true})
    daily_itemized_reports?: InstanceType<typeof daily_itemized_reportsUncheckedUpdateManyWithoutOperationInput>;
}

@InputType()
export class operationUpdateManyMutationInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    operation_id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    operation_name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class operationUpdateOneRequiredWithoutDaily_itemized_reportsInput {
    @Field(() => operationCreateWithoutDaily_itemized_reportsInput, {nullable:true})
    @Type(() => operationCreateWithoutDaily_itemized_reportsInput)
    create?: InstanceType<typeof operationCreateWithoutDaily_itemized_reportsInput>;
    @Field(() => operationCreateOrConnectWithoutDaily_itemized_reportsInput, {nullable:true})
    @Type(() => operationCreateOrConnectWithoutDaily_itemized_reportsInput)
    connectOrCreate?: InstanceType<typeof operationCreateOrConnectWithoutDaily_itemized_reportsInput>;
    @Field(() => operationUpsertWithoutDaily_itemized_reportsInput, {nullable:true})
    @Type(() => operationUpsertWithoutDaily_itemized_reportsInput)
    upsert?: InstanceType<typeof operationUpsertWithoutDaily_itemized_reportsInput>;
    @Field(() => operationWhereUniqueInput, {nullable:true})
    @Type(() => operationWhereUniqueInput)
    connect?: InstanceType<typeof operationWhereUniqueInput>;
    @Field(() => operationUpdateWithoutDaily_itemized_reportsInput, {nullable:true})
    @Type(() => operationUpdateWithoutDaily_itemized_reportsInput)
    update?: InstanceType<typeof operationUpdateWithoutDaily_itemized_reportsInput>;
}

@InputType()
export class operationUpdateWithoutDaily_itemized_reportsInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    operation_id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    operation_name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class operationUpdateInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    operation_id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    operation_name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => daily_itemized_reportsUpdateManyWithoutOperationInput, {nullable:true})
    daily_itemized_reports?: InstanceType<typeof daily_itemized_reportsUpdateManyWithoutOperationInput>;
}

@InputType()
export class operationUpsertWithoutDaily_itemized_reportsInput {
    @Field(() => operationUpdateWithoutDaily_itemized_reportsInput, {nullable:false})
    @Type(() => operationUpdateWithoutDaily_itemized_reportsInput)
    update!: InstanceType<typeof operationUpdateWithoutDaily_itemized_reportsInput>;
    @Field(() => operationCreateWithoutDaily_itemized_reportsInput, {nullable:false})
    @Type(() => operationCreateWithoutDaily_itemized_reportsInput)
    create!: InstanceType<typeof operationCreateWithoutDaily_itemized_reportsInput>;
}

@InputType()
export class operationWhereUniqueInput {
    @Field(() => Int, {nullable:true})
    operation_id?: number;
}

@InputType()
export class operationWhereInput {
    @Field(() => [operationWhereInput], {nullable:true})
    AND?: Array<operationWhereInput>;
    @Field(() => [operationWhereInput], {nullable:true})
    OR?: Array<operationWhereInput>;
    @Field(() => [operationWhereInput], {nullable:true})
    NOT?: Array<operationWhereInput>;
    @Field(() => IntFilter, {nullable:true})
    operation_id?: InstanceType<typeof IntFilter>;
    @Field(() => StringFilter, {nullable:true})
    operation_name?: InstanceType<typeof StringFilter>;
    @Field(() => Daily_itemized_reportsListRelationFilter, {nullable:true})
    daily_itemized_reports?: InstanceType<typeof Daily_itemized_reportsListRelationFilter>;
}

@ObjectType()
export class operation {
    @Field(() => ID, {nullable:false})
    operation_id!: number;
    @Field(() => String, {nullable:false})
    operation_name!: string;
    @Field(() => [daily_itemized_reports], {nullable:true})
    daily_itemized_reports?: Array<daily_itemized_reports>;
    @Field(() => OperationCount, {nullable:false})
    _count?: InstanceType<typeof OperationCount>;
}

@ArgsType()
export class UpdateManyoperationArgs {
    @Field(() => operationUpdateManyMutationInput, {nullable:false})
    @Type(() => operationUpdateManyMutationInput)
    data!: InstanceType<typeof operationUpdateManyMutationInput>;
    @Field(() => operationWhereInput, {nullable:true})
    @Type(() => operationWhereInput)
    where?: InstanceType<typeof operationWhereInput>;
}

@ArgsType()
export class UpdateOneoperationArgs {
    @Field(() => operationUpdateInput, {nullable:false})
    @Type(() => operationUpdateInput)
    data!: InstanceType<typeof operationUpdateInput>;
    @Field(() => operationWhereUniqueInput, {nullable:false})
    @Type(() => operationWhereUniqueInput)
    where!: InstanceType<typeof operationWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneoperationArgs {
    @Field(() => operationWhereUniqueInput, {nullable:false})
    @Type(() => operationWhereUniqueInput)
    where!: InstanceType<typeof operationWhereUniqueInput>;
    @Field(() => operationCreateInput, {nullable:false})
    @Type(() => operationCreateInput)
    create!: InstanceType<typeof operationCreateInput>;
    @Field(() => operationUpdateInput, {nullable:false})
    @Type(() => operationUpdateInput)
    update!: InstanceType<typeof operationUpdateInput>;
}

@ObjectType()
export class AffectedRows {
    @Field(() => Int, {nullable:false})
    count!: number;
}

@ObjectType()
export class AggregateCalendar {
    @Field(() => CalendarCountAggregate, {nullable:true})
    _count?: InstanceType<typeof CalendarCountAggregate>;
    @Field(() => CalendarMinAggregate, {nullable:true})
    _min?: InstanceType<typeof CalendarMinAggregate>;
    @Field(() => CalendarMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof CalendarMaxAggregate>;
}

@ObjectType()
export class AggregateDaily_itemized_reports {
    @Field(() => Daily_itemized_reportsCountAggregate, {nullable:true})
    _count?: InstanceType<typeof Daily_itemized_reportsCountAggregate>;
    @Field(() => Daily_itemized_reportsAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof Daily_itemized_reportsAvgAggregate>;
    @Field(() => Daily_itemized_reportsSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof Daily_itemized_reportsSumAggregate>;
    @Field(() => Daily_itemized_reportsMinAggregate, {nullable:true})
    _min?: InstanceType<typeof Daily_itemized_reportsMinAggregate>;
    @Field(() => Daily_itemized_reportsMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof Daily_itemized_reportsMaxAggregate>;
}

@ObjectType()
export class AggregateDaily_reports {
    @Field(() => Daily_reportsCountAggregate, {nullable:true})
    _count?: InstanceType<typeof Daily_reportsCountAggregate>;
    @Field(() => Daily_reportsAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof Daily_reportsAvgAggregate>;
    @Field(() => Daily_reportsSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof Daily_reportsSumAggregate>;
    @Field(() => Daily_reportsMinAggregate, {nullable:true})
    _min?: InstanceType<typeof Daily_reportsMinAggregate>;
    @Field(() => Daily_reportsMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof Daily_reportsMaxAggregate>;
}

@ObjectType()
export class AggregateDepartment {
    @Field(() => DepartmentCountAggregate, {nullable:true})
    _count?: InstanceType<typeof DepartmentCountAggregate>;
    @Field(() => DepartmentAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof DepartmentAvgAggregate>;
    @Field(() => DepartmentSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof DepartmentSumAggregate>;
    @Field(() => DepartmentMinAggregate, {nullable:true})
    _min?: InstanceType<typeof DepartmentMinAggregate>;
    @Field(() => DepartmentMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof DepartmentMaxAggregate>;
}

@ObjectType()
export class AggregateEmployees {
    @Field(() => EmployeesCountAggregate, {nullable:true})
    _count?: InstanceType<typeof EmployeesCountAggregate>;
    @Field(() => EmployeesAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof EmployeesAvgAggregate>;
    @Field(() => EmployeesSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof EmployeesSumAggregate>;
    @Field(() => EmployeesMinAggregate, {nullable:true})
    _min?: InstanceType<typeof EmployeesMinAggregate>;
    @Field(() => EmployeesMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof EmployeesMaxAggregate>;
}

@ObjectType()
export class AggregateOperation {
    @Field(() => OperationCountAggregate, {nullable:true})
    _count?: InstanceType<typeof OperationCountAggregate>;
    @Field(() => OperationAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof OperationAvgAggregate>;
    @Field(() => OperationSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof OperationSumAggregate>;
    @Field(() => OperationMinAggregate, {nullable:true})
    _min?: InstanceType<typeof OperationMinAggregate>;
    @Field(() => OperationMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof OperationMaxAggregate>;
}

@ArgsType()
export class AggregatedailyItemizedReportsArgs {
    @Field(() => daily_itemized_reportsWhereInput, {nullable:true})
    @Type(() => daily_itemized_reportsWhereInput)
    where?: InstanceType<typeof daily_itemized_reportsWhereInput>;
    @Field(() => [daily_itemized_reportsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<daily_itemized_reportsOrderByWithRelationInput>;
    @Field(() => daily_itemized_reportsWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof daily_itemized_reportsWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
}

@ArgsType()
export class AggregatedailyReportsArgs {
    @Field(() => daily_reportsWhereInput, {nullable:true})
    @Type(() => daily_reportsWhereInput)
    where?: InstanceType<typeof daily_reportsWhereInput>;
    @Field(() => [daily_reportsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<daily_reportsOrderByWithRelationInput>;
    @Field(() => daily_reportsWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof daily_reportsWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
}

@InputType()
export class BoolFieldUpdateOperationsInput {
    @Field(() => Boolean, {nullable:true})
    set?: boolean;
}

@InputType()
export class BoolFilter {
    @Field(() => Boolean, {nullable:true})
    equals?: boolean;
    @Field(() => NestedBoolFilter, {nullable:true})
    not?: InstanceType<typeof NestedBoolFilter>;
}

@InputType()
export class BoolWithAggregatesFilter {
    @Field(() => Boolean, {nullable:true})
    equals?: boolean;
    @Field(() => NestedBoolWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedBoolWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedBoolFilter, {nullable:true})
    _min?: InstanceType<typeof NestedBoolFilter>;
    @Field(() => NestedBoolFilter, {nullable:true})
    _max?: InstanceType<typeof NestedBoolFilter>;
}

@ObjectType()
export class CalendarCountAggregate {
    @Field(() => Int, {nullable:false})
    year_month!: number;
    @Field(() => Int, {nullable:false})
    day!: number;
    @Field(() => Int, {nullable:false})
    workday!: number;
    @Field(() => Int, {nullable:false})
    saturday!: number;
    @Field(() => Int, {nullable:false})
    holiday!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@ObjectType()
export class CalendarCount {
    @Field(() => Int, {nullable:false})
    daily_reports!: number;
}

@ObjectType()
export class CalendarGroupBy {
    @Field(() => String, {nullable:false})
    year_month!: string;
    @Field(() => String, {nullable:false})
    day!: string;
    @Field(() => Boolean, {nullable:false})
    workday!: boolean;
    @Field(() => Boolean, {nullable:false})
    saturday!: boolean;
    @Field(() => Boolean, {nullable:false})
    holiday!: boolean;
    @Field(() => CalendarCountAggregate, {nullable:true})
    _count?: InstanceType<typeof CalendarCountAggregate>;
    @Field(() => CalendarMinAggregate, {nullable:true})
    _min?: InstanceType<typeof CalendarMinAggregate>;
    @Field(() => CalendarMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof CalendarMaxAggregate>;
}

@ObjectType()
export class CalendarMaxAggregate {
    @Field(() => String, {nullable:true})
    year_month?: string;
    @Field(() => String, {nullable:true})
    day?: string;
    @Field(() => Boolean, {nullable:true})
    workday?: boolean;
    @Field(() => Boolean, {nullable:true})
    saturday?: boolean;
    @Field(() => Boolean, {nullable:true})
    holiday?: boolean;
}

@ObjectType()
export class CalendarMinAggregate {
    @Field(() => String, {nullable:true})
    year_month?: string;
    @Field(() => String, {nullable:true})
    day?: string;
    @Field(() => Boolean, {nullable:true})
    workday?: boolean;
    @Field(() => Boolean, {nullable:true})
    saturday?: boolean;
    @Field(() => Boolean, {nullable:true})
    holiday?: boolean;
}

@InputType()
export class CalendarRelationFilter {
    @Field(() => calendarWhereInput, {nullable:true})
    is?: InstanceType<typeof calendarWhereInput>;
    @Field(() => calendarWhereInput, {nullable:true})
    isNot?: InstanceType<typeof calendarWhereInput>;
}

@ArgsType()
export class CreateManydailyItemizedReportsArgs {
    @Field(() => [daily_itemized_reportsCreateManyInput], {nullable:false})
    @Type(() => daily_itemized_reportsCreateManyInput)
    data!: Array<daily_itemized_reportsCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateManydailyReportsArgs {
    @Field(() => [daily_reportsCreateManyInput], {nullable:false})
    @Type(() => daily_reportsCreateManyInput)
    data!: Array<daily_reportsCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOnedailyItemizedReportsArgs {
    @Field(() => daily_itemized_reportsCreateInput, {nullable:false})
    @Type(() => daily_itemized_reportsCreateInput)
    data!: InstanceType<typeof daily_itemized_reportsCreateInput>;
}

@ArgsType()
export class CreateOnedailyReportsArgs {
    @Field(() => daily_reportsCreateInput, {nullable:false})
    @Type(() => daily_reportsCreateInput)
    data!: InstanceType<typeof daily_reportsCreateInput>;
}

@ObjectType()
export class Daily_itemized_reportsAvgAggregate {
    @Field(() => Float, {nullable:true})
    employees_id?: number;
    @Field(() => Float, {nullable:true})
    operation_id?: number;
}

@ObjectType()
export class Daily_itemized_reportsCountAggregate {
    @Field(() => Int, {nullable:false})
    year_month!: number;
    @Field(() => Int, {nullable:false})
    day!: number;
    @Field(() => Int, {nullable:false})
    employees_id!: number;
    @Field(() => Int, {nullable:false})
    operation_id!: number;
    @Field(() => Int, {nullable:false})
    operation_time!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@ObjectType()
export class Daily_itemized_reportsGroupBy {
    @Field(() => String, {nullable:false})
    year_month!: string;
    @Field(() => String, {nullable:false})
    day!: string;
    @Field(() => Int, {nullable:false})
    employees_id!: number;
    @Field(() => Int, {nullable:false})
    operation_id!: number;
    @Field(() => Date, {nullable:true})
    operation_time?: Date | string;
    @Field(() => Daily_itemized_reportsCountAggregate, {nullable:true})
    _count?: InstanceType<typeof Daily_itemized_reportsCountAggregate>;
    @Field(() => Daily_itemized_reportsAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof Daily_itemized_reportsAvgAggregate>;
    @Field(() => Daily_itemized_reportsSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof Daily_itemized_reportsSumAggregate>;
    @Field(() => Daily_itemized_reportsMinAggregate, {nullable:true})
    _min?: InstanceType<typeof Daily_itemized_reportsMinAggregate>;
    @Field(() => Daily_itemized_reportsMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof Daily_itemized_reportsMaxAggregate>;
}

@InputType()
export class Daily_itemized_reportsListRelationFilter {
    @Field(() => daily_itemized_reportsWhereInput, {nullable:true})
    every?: InstanceType<typeof daily_itemized_reportsWhereInput>;
    @Field(() => daily_itemized_reportsWhereInput, {nullable:true})
    some?: InstanceType<typeof daily_itemized_reportsWhereInput>;
    @Field(() => daily_itemized_reportsWhereInput, {nullable:true})
    none?: InstanceType<typeof daily_itemized_reportsWhereInput>;
}

@ObjectType()
export class Daily_itemized_reportsMaxAggregate {
    @Field(() => String, {nullable:true})
    year_month?: string;
    @Field(() => String, {nullable:true})
    day?: string;
    @Field(() => Int, {nullable:true})
    employees_id?: number;
    @Field(() => Int, {nullable:true})
    operation_id?: number;
    @Field(() => Date, {nullable:true})
    operation_time?: Date | string;
}

@ObjectType()
export class Daily_itemized_reportsMinAggregate {
    @Field(() => String, {nullable:true})
    year_month?: string;
    @Field(() => String, {nullable:true})
    day?: string;
    @Field(() => Int, {nullable:true})
    employees_id?: number;
    @Field(() => Int, {nullable:true})
    operation_id?: number;
    @Field(() => Date, {nullable:true})
    operation_time?: Date | string;
}

@ObjectType()
export class Daily_itemized_reportsSumAggregate {
    @Field(() => Int, {nullable:true})
    employees_id?: number;
    @Field(() => Int, {nullable:true})
    operation_id?: number;
}

@ObjectType()
export class Daily_reportsAvgAggregate {
    @Field(() => Float, {nullable:true})
    employees_id?: number;
}

@ObjectType()
export class Daily_reportsCountAggregate {
    @Field(() => Int, {nullable:false})
    year_month!: number;
    @Field(() => Int, {nullable:false})
    day!: number;
    @Field(() => Int, {nullable:false})
    employees_id!: number;
    @Field(() => Int, {nullable:false})
    start_time!: number;
    @Field(() => Int, {nullable:false})
    end_time!: number;
    @Field(() => Int, {nullable:false})
    work_time!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@ObjectType()
export class Daily_reportsCount {
    @Field(() => Int, {nullable:false})
    daily_itemized_reports!: number;
}

@ObjectType()
export class Daily_reportsGroupBy {
    @Field(() => String, {nullable:false})
    year_month!: string;
    @Field(() => String, {nullable:false})
    day!: string;
    @Field(() => Int, {nullable:false})
    employees_id!: number;
    @Field(() => Date, {nullable:true})
    start_time?: Date | string;
    @Field(() => Date, {nullable:true})
    end_time?: Date | string;
    @Field(() => Date, {nullable:true})
    work_time?: Date | string;
    @Field(() => Daily_reportsCountAggregate, {nullable:true})
    _count?: InstanceType<typeof Daily_reportsCountAggregate>;
    @Field(() => Daily_reportsAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof Daily_reportsAvgAggregate>;
    @Field(() => Daily_reportsSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof Daily_reportsSumAggregate>;
    @Field(() => Daily_reportsMinAggregate, {nullable:true})
    _min?: InstanceType<typeof Daily_reportsMinAggregate>;
    @Field(() => Daily_reportsMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof Daily_reportsMaxAggregate>;
}

@InputType()
export class Daily_reportsListRelationFilter {
    @Field(() => daily_reportsWhereInput, {nullable:true})
    every?: InstanceType<typeof daily_reportsWhereInput>;
    @Field(() => daily_reportsWhereInput, {nullable:true})
    some?: InstanceType<typeof daily_reportsWhereInput>;
    @Field(() => daily_reportsWhereInput, {nullable:true})
    none?: InstanceType<typeof daily_reportsWhereInput>;
}

@ObjectType()
export class Daily_reportsMaxAggregate {
    @Field(() => String, {nullable:true})
    year_month?: string;
    @Field(() => String, {nullable:true})
    day?: string;
    @Field(() => Int, {nullable:true})
    employees_id?: number;
    @Field(() => Date, {nullable:true})
    start_time?: Date | string;
    @Field(() => Date, {nullable:true})
    end_time?: Date | string;
    @Field(() => Date, {nullable:true})
    work_time?: Date | string;
}

@ObjectType()
export class Daily_reportsMinAggregate {
    @Field(() => String, {nullable:true})
    year_month?: string;
    @Field(() => String, {nullable:true})
    day?: string;
    @Field(() => Int, {nullable:true})
    employees_id?: number;
    @Field(() => Date, {nullable:true})
    start_time?: Date | string;
    @Field(() => Date, {nullable:true})
    end_time?: Date | string;
    @Field(() => Date, {nullable:true})
    work_time?: Date | string;
}

@InputType()
export class Daily_reportsRelationFilter {
    @Field(() => daily_reportsWhereInput, {nullable:true})
    is?: InstanceType<typeof daily_reportsWhereInput>;
    @Field(() => daily_reportsWhereInput, {nullable:true})
    isNot?: InstanceType<typeof daily_reportsWhereInput>;
}

@ObjectType()
export class Daily_reportsSumAggregate {
    @Field(() => Int, {nullable:true})
    employees_id?: number;
}

@InputType()
export class DateTimeNullableFilter {
    @Field(() => Date, {nullable:true})
    equals?: Date | string;
    @Field(() => [Date], {nullable:true})
    in?: Array<Date> | Array<string>;
    @Field(() => [Date], {nullable:true})
    notIn?: Array<Date> | Array<string>;
    @Field(() => Date, {nullable:true})
    lt?: Date | string;
    @Field(() => Date, {nullable:true})
    lte?: Date | string;
    @Field(() => Date, {nullable:true})
    gt?: Date | string;
    @Field(() => Date, {nullable:true})
    gte?: Date | string;
    @Field(() => NestedDateTimeNullableFilter, {nullable:true})
    not?: InstanceType<typeof NestedDateTimeNullableFilter>;
}

@InputType()
export class DateTimeNullableWithAggregatesFilter {
    @Field(() => Date, {nullable:true})
    equals?: Date | string;
    @Field(() => [Date], {nullable:true})
    in?: Array<Date> | Array<string>;
    @Field(() => [Date], {nullable:true})
    notIn?: Array<Date> | Array<string>;
    @Field(() => Date, {nullable:true})
    lt?: Date | string;
    @Field(() => Date, {nullable:true})
    lte?: Date | string;
    @Field(() => Date, {nullable:true})
    gt?: Date | string;
    @Field(() => Date, {nullable:true})
    gte?: Date | string;
    @Field(() => NestedDateTimeNullableWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedDateTimeNullableWithAggregatesFilter>;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    @Field(() => NestedDateTimeNullableFilter, {nullable:true})
    _min?: InstanceType<typeof NestedDateTimeNullableFilter>;
    @Field(() => NestedDateTimeNullableFilter, {nullable:true})
    _max?: InstanceType<typeof NestedDateTimeNullableFilter>;
}

@ArgsType()
export class DeleteManydailyItemizedReportsArgs {
    @Field(() => daily_itemized_reportsWhereInput, {nullable:true})
    @Type(() => daily_itemized_reportsWhereInput)
    where?: InstanceType<typeof daily_itemized_reportsWhereInput>;
}

@ArgsType()
export class DeleteManydailyReportsArgs {
    @Field(() => daily_reportsWhereInput, {nullable:true})
    @Type(() => daily_reportsWhereInput)
    where?: InstanceType<typeof daily_reportsWhereInput>;
}

@ArgsType()
export class DeleteOnedailyItemizedReportsArgs {
    @Field(() => daily_itemized_reportsWhereUniqueInput, {nullable:false})
    @Type(() => daily_itemized_reportsWhereUniqueInput)
    where!: InstanceType<typeof daily_itemized_reportsWhereUniqueInput>;
}

@ArgsType()
export class DeleteOnedailyReportsArgs {
    @Field(() => daily_reportsWhereUniqueInput, {nullable:false})
    @Type(() => daily_reportsWhereUniqueInput)
    where!: InstanceType<typeof daily_reportsWhereUniqueInput>;
}

@ObjectType()
export class DepartmentAvgAggregate {
    @Field(() => Float, {nullable:true})
    department_id?: number;
}

@ObjectType()
export class DepartmentCountAggregate {
    @Field(() => Int, {nullable:false})
    department_id!: number;
    @Field(() => Int, {nullable:false})
    department_name!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@ObjectType()
export class DepartmentCount {
    @Field(() => Int, {nullable:false})
    employees!: number;
}

@ObjectType()
export class DepartmentGroupBy {
    @Field(() => Int, {nullable:false})
    department_id!: number;
    @Field(() => String, {nullable:false})
    department_name!: string;
    @Field(() => DepartmentCountAggregate, {nullable:true})
    _count?: InstanceType<typeof DepartmentCountAggregate>;
    @Field(() => DepartmentAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof DepartmentAvgAggregate>;
    @Field(() => DepartmentSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof DepartmentSumAggregate>;
    @Field(() => DepartmentMinAggregate, {nullable:true})
    _min?: InstanceType<typeof DepartmentMinAggregate>;
    @Field(() => DepartmentMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof DepartmentMaxAggregate>;
}

@ObjectType()
export class DepartmentMaxAggregate {
    @Field(() => Int, {nullable:true})
    department_id?: number;
    @Field(() => String, {nullable:true})
    department_name?: string;
}

@ObjectType()
export class DepartmentMinAggregate {
    @Field(() => Int, {nullable:true})
    department_id?: number;
    @Field(() => String, {nullable:true})
    department_name?: string;
}

@InputType()
export class DepartmentRelationFilter {
    @Field(() => departmentWhereInput, {nullable:true})
    is?: InstanceType<typeof departmentWhereInput>;
    @Field(() => departmentWhereInput, {nullable:true})
    isNot?: InstanceType<typeof departmentWhereInput>;
}

@ObjectType()
export class DepartmentSumAggregate {
    @Field(() => Int, {nullable:true})
    department_id?: number;
}

@ObjectType()
export class EmployeesAvgAggregate {
    @Field(() => Float, {nullable:true})
    employees_id?: number;
    @Field(() => Float, {nullable:true})
    department_id?: number;
}

@ObjectType()
export class EmployeesCountAggregate {
    @Field(() => Int, {nullable:false})
    employees_id!: number;
    @Field(() => Int, {nullable:false})
    employees_name!: number;
    @Field(() => Int, {nullable:false})
    department_id!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@ObjectType()
export class EmployeesCount {
    @Field(() => Int, {nullable:false})
    daily_reports!: number;
}

@ObjectType()
export class EmployeesGroupBy {
    @Field(() => Int, {nullable:false})
    employees_id!: number;
    @Field(() => String, {nullable:false})
    employees_name!: string;
    @Field(() => Int, {nullable:false})
    department_id!: number;
    @Field(() => EmployeesCountAggregate, {nullable:true})
    _count?: InstanceType<typeof EmployeesCountAggregate>;
    @Field(() => EmployeesAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof EmployeesAvgAggregate>;
    @Field(() => EmployeesSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof EmployeesSumAggregate>;
    @Field(() => EmployeesMinAggregate, {nullable:true})
    _min?: InstanceType<typeof EmployeesMinAggregate>;
    @Field(() => EmployeesMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof EmployeesMaxAggregate>;
}

@InputType()
export class EmployeesListRelationFilter {
    @Field(() => employeesWhereInput, {nullable:true})
    every?: InstanceType<typeof employeesWhereInput>;
    @Field(() => employeesWhereInput, {nullable:true})
    some?: InstanceType<typeof employeesWhereInput>;
    @Field(() => employeesWhereInput, {nullable:true})
    none?: InstanceType<typeof employeesWhereInput>;
}

@ObjectType()
export class EmployeesMaxAggregate {
    @Field(() => Int, {nullable:true})
    employees_id?: number;
    @Field(() => String, {nullable:true})
    employees_name?: string;
    @Field(() => Int, {nullable:true})
    department_id?: number;
}

@ObjectType()
export class EmployeesMinAggregate {
    @Field(() => Int, {nullable:true})
    employees_id?: number;
    @Field(() => String, {nullable:true})
    employees_name?: string;
    @Field(() => Int, {nullable:true})
    department_id?: number;
}

@InputType()
export class EmployeesRelationFilter {
    @Field(() => employeesWhereInput, {nullable:true})
    is?: InstanceType<typeof employeesWhereInput>;
    @Field(() => employeesWhereInput, {nullable:true})
    isNot?: InstanceType<typeof employeesWhereInput>;
}

@ObjectType()
export class EmployeesSumAggregate {
    @Field(() => Int, {nullable:true})
    employees_id?: number;
    @Field(() => Int, {nullable:true})
    department_id?: number;
}

@ArgsType()
export class FindFirstdailyItemizedReportsArgs {
    @Field(() => daily_itemized_reportsWhereInput, {nullable:true})
    @Type(() => daily_itemized_reportsWhereInput)
    where?: InstanceType<typeof daily_itemized_reportsWhereInput>;
    @Field(() => [daily_itemized_reportsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<daily_itemized_reportsOrderByWithRelationInput>;
    @Field(() => daily_itemized_reportsWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof daily_itemized_reportsWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [Daily_itemized_reportsScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Daily_itemized_reportsScalarFieldEnum>;
}

@ArgsType()
export class FindFirstdailyReportsArgs {
    @Field(() => daily_reportsWhereInput, {nullable:true})
    @Type(() => daily_reportsWhereInput)
    where?: InstanceType<typeof daily_reportsWhereInput>;
    @Field(() => [daily_reportsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<daily_reportsOrderByWithRelationInput>;
    @Field(() => daily_reportsWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof daily_reportsWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [Daily_reportsScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Daily_reportsScalarFieldEnum>;
}

@ArgsType()
export class FindManydailyItemizedReportsArgs {
    @Field(() => daily_itemized_reportsWhereInput, {nullable:true})
    @Type(() => daily_itemized_reportsWhereInput)
    where?: InstanceType<typeof daily_itemized_reportsWhereInput>;
    @Field(() => [daily_itemized_reportsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<daily_itemized_reportsOrderByWithRelationInput>;
    @Field(() => daily_itemized_reportsWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof daily_itemized_reportsWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [Daily_itemized_reportsScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Daily_itemized_reportsScalarFieldEnum>;
}

@ArgsType()
export class FindManydailyReportsArgs {
    @Field(() => daily_reportsWhereInput, {nullable:true})
    @Type(() => daily_reportsWhereInput)
    where?: InstanceType<typeof daily_reportsWhereInput>;
    @Field(() => [daily_reportsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<daily_reportsOrderByWithRelationInput>;
    @Field(() => daily_reportsWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof daily_reportsWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [Daily_reportsScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Daily_reportsScalarFieldEnum>;
}

@ArgsType()
export class FindUniquedailyItemizedReportsArgs {
    @Field(() => daily_itemized_reportsWhereUniqueInput, {nullable:false})
    @Type(() => daily_itemized_reportsWhereUniqueInput)
    where!: InstanceType<typeof daily_itemized_reportsWhereUniqueInput>;
}

@ArgsType()
export class FindUniquedailyReportsArgs {
    @Field(() => daily_reportsWhereUniqueInput, {nullable:false})
    @Type(() => daily_reportsWhereUniqueInput)
    where!: InstanceType<typeof daily_reportsWhereUniqueInput>;
}

@ArgsType()
export class GroupBydailyItemizedReportsArgs {
    @Field(() => daily_itemized_reportsWhereInput, {nullable:true})
    @Type(() => daily_itemized_reportsWhereInput)
    where?: InstanceType<typeof daily_itemized_reportsWhereInput>;
    @Field(() => [daily_itemized_reportsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<daily_itemized_reportsOrderByWithAggregationInput>;
    @Field(() => [Daily_itemized_reportsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Daily_itemized_reportsScalarFieldEnum>;
    @Field(() => daily_itemized_reportsScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof daily_itemized_reportsScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
}

@ArgsType()
export class GroupBydailyReportsArgs {
    @Field(() => daily_reportsWhereInput, {nullable:true})
    @Type(() => daily_reportsWhereInput)
    where?: InstanceType<typeof daily_reportsWhereInput>;
    @Field(() => [daily_reportsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<daily_reportsOrderByWithAggregationInput>;
    @Field(() => [Daily_reportsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Daily_reportsScalarFieldEnum>;
    @Field(() => daily_reportsScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof daily_reportsScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
}

@InputType()
export class IntFieldUpdateOperationsInput {
    @Field(() => Int, {nullable:true})
    set?: number;
    @Field(() => Int, {nullable:true})
    increment?: number;
    @Field(() => Int, {nullable:true})
    decrement?: number;
    @Field(() => Int, {nullable:true})
    multiply?: number;
    @Field(() => Int, {nullable:true})
    divide?: number;
}

@InputType()
export class IntFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => NestedIntFilter, {nullable:true})
    not?: InstanceType<typeof NestedIntFilter>;
}

@InputType()
export class IntWithAggregatesFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => NestedIntWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedIntWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedFloatFilter, {nullable:true})
    _avg?: InstanceType<typeof NestedFloatFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _sum?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _min?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _max?: InstanceType<typeof NestedIntFilter>;
}

@InputType()
export class NestedBoolFilter {
    @Field(() => Boolean, {nullable:true})
    equals?: boolean;
    @Field(() => NestedBoolFilter, {nullable:true})
    not?: InstanceType<typeof NestedBoolFilter>;
}

@InputType()
export class NestedBoolWithAggregatesFilter {
    @Field(() => Boolean, {nullable:true})
    equals?: boolean;
    @Field(() => NestedBoolWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedBoolWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedBoolFilter, {nullable:true})
    _min?: InstanceType<typeof NestedBoolFilter>;
    @Field(() => NestedBoolFilter, {nullable:true})
    _max?: InstanceType<typeof NestedBoolFilter>;
}

@InputType()
export class NestedDateTimeNullableFilter {
    @Field(() => Date, {nullable:true})
    equals?: Date | string;
    @Field(() => [Date], {nullable:true})
    in?: Array<Date> | Array<string>;
    @Field(() => [Date], {nullable:true})
    notIn?: Array<Date> | Array<string>;
    @Field(() => Date, {nullable:true})
    lt?: Date | string;
    @Field(() => Date, {nullable:true})
    lte?: Date | string;
    @Field(() => Date, {nullable:true})
    gt?: Date | string;
    @Field(() => Date, {nullable:true})
    gte?: Date | string;
    @Field(() => NestedDateTimeNullableFilter, {nullable:true})
    not?: InstanceType<typeof NestedDateTimeNullableFilter>;
}

@InputType()
export class NestedDateTimeNullableWithAggregatesFilter {
    @Field(() => Date, {nullable:true})
    equals?: Date | string;
    @Field(() => [Date], {nullable:true})
    in?: Array<Date> | Array<string>;
    @Field(() => [Date], {nullable:true})
    notIn?: Array<Date> | Array<string>;
    @Field(() => Date, {nullable:true})
    lt?: Date | string;
    @Field(() => Date, {nullable:true})
    lte?: Date | string;
    @Field(() => Date, {nullable:true})
    gt?: Date | string;
    @Field(() => Date, {nullable:true})
    gte?: Date | string;
    @Field(() => NestedDateTimeNullableWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedDateTimeNullableWithAggregatesFilter>;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    @Field(() => NestedDateTimeNullableFilter, {nullable:true})
    _min?: InstanceType<typeof NestedDateTimeNullableFilter>;
    @Field(() => NestedDateTimeNullableFilter, {nullable:true})
    _max?: InstanceType<typeof NestedDateTimeNullableFilter>;
}

@InputType()
export class NestedFloatFilter {
    @Field(() => Float, {nullable:true})
    equals?: number;
    @Field(() => [Float], {nullable:true})
    in?: Array<number>;
    @Field(() => [Float], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Float, {nullable:true})
    lt?: number;
    @Field(() => Float, {nullable:true})
    lte?: number;
    @Field(() => Float, {nullable:true})
    gt?: number;
    @Field(() => Float, {nullable:true})
    gte?: number;
    @Field(() => NestedFloatFilter, {nullable:true})
    not?: InstanceType<typeof NestedFloatFilter>;
}

@InputType()
export class NestedIntFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => NestedIntFilter, {nullable:true})
    not?: InstanceType<typeof NestedIntFilter>;
}

@InputType()
export class NestedIntNullableFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    not?: InstanceType<typeof NestedIntNullableFilter>;
}

@InputType()
export class NestedIntWithAggregatesFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => NestedIntWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedIntWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedFloatFilter, {nullable:true})
    _avg?: InstanceType<typeof NestedFloatFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _sum?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _min?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _max?: InstanceType<typeof NestedIntFilter>;
}

@InputType()
export class NestedStringFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => NestedStringFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringFilter>;
}

@InputType()
export class NestedStringWithAggregatesFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => NestedStringWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedStringFilter, {nullable:true})
    _min?: InstanceType<typeof NestedStringFilter>;
    @Field(() => NestedStringFilter, {nullable:true})
    _max?: InstanceType<typeof NestedStringFilter>;
}

@InputType()
export class NullableDateTimeFieldUpdateOperationsInput {
    @Field(() => Date, {nullable:true})
    set?: Date | string;
}

@ObjectType()
export class OperationAvgAggregate {
    @Field(() => Float, {nullable:true})
    operation_id?: number;
}

@ObjectType()
export class OperationCountAggregate {
    @Field(() => Int, {nullable:false})
    operation_id!: number;
    @Field(() => Int, {nullable:false})
    operation_name!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@ObjectType()
export class OperationCount {
    @Field(() => Int, {nullable:false})
    daily_itemized_reports!: number;
}

@ObjectType()
export class OperationGroupBy {
    @Field(() => Int, {nullable:false})
    operation_id!: number;
    @Field(() => String, {nullable:false})
    operation_name!: string;
    @Field(() => OperationCountAggregate, {nullable:true})
    _count?: InstanceType<typeof OperationCountAggregate>;
    @Field(() => OperationAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof OperationAvgAggregate>;
    @Field(() => OperationSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof OperationSumAggregate>;
    @Field(() => OperationMinAggregate, {nullable:true})
    _min?: InstanceType<typeof OperationMinAggregate>;
    @Field(() => OperationMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof OperationMaxAggregate>;
}

@ObjectType()
export class OperationMaxAggregate {
    @Field(() => Int, {nullable:true})
    operation_id?: number;
    @Field(() => String, {nullable:true})
    operation_name?: string;
}

@ObjectType()
export class OperationMinAggregate {
    @Field(() => Int, {nullable:true})
    operation_id?: number;
    @Field(() => String, {nullable:true})
    operation_name?: string;
}

@InputType()
export class OperationRelationFilter {
    @Field(() => operationWhereInput, {nullable:true})
    is?: InstanceType<typeof operationWhereInput>;
    @Field(() => operationWhereInput, {nullable:true})
    isNot?: InstanceType<typeof operationWhereInput>;
}

@ObjectType()
export class OperationSumAggregate {
    @Field(() => Int, {nullable:true})
    operation_id?: number;
}

@InputType()
export class StringFieldUpdateOperationsInput {
    @Field(() => String, {nullable:true})
    set?: string;
}

@InputType()
export class StringFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => QueryMode, {nullable:true})
    mode?: keyof typeof QueryMode;
    @Field(() => NestedStringFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringFilter>;
}

@InputType()
export class StringWithAggregatesFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => QueryMode, {nullable:true})
    mode?: keyof typeof QueryMode;
    @Field(() => NestedStringWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedStringFilter, {nullable:true})
    _min?: InstanceType<typeof NestedStringFilter>;
    @Field(() => NestedStringFilter, {nullable:true})
    _max?: InstanceType<typeof NestedStringFilter>;
}

@ArgsType()
export class UpdateManydailyItemizedReportsArgs {
    @Field(() => daily_itemized_reportsUpdateManyMutationInput, {nullable:false})
    @Type(() => daily_itemized_reportsUpdateManyMutationInput)
    data!: InstanceType<typeof daily_itemized_reportsUpdateManyMutationInput>;
    @Field(() => daily_itemized_reportsWhereInput, {nullable:true})
    @Type(() => daily_itemized_reportsWhereInput)
    where?: InstanceType<typeof daily_itemized_reportsWhereInput>;
}

@ArgsType()
export class UpdateManydailyReportsArgs {
    @Field(() => daily_reportsUpdateManyMutationInput, {nullable:false})
    @Type(() => daily_reportsUpdateManyMutationInput)
    data!: InstanceType<typeof daily_reportsUpdateManyMutationInput>;
    @Field(() => daily_reportsWhereInput, {nullable:true})
    @Type(() => daily_reportsWhereInput)
    where?: InstanceType<typeof daily_reportsWhereInput>;
}

@ArgsType()
export class UpdateOnedailyItemizedReportsArgs {
    @Field(() => daily_itemized_reportsUpdateInput, {nullable:false})
    @Type(() => daily_itemized_reportsUpdateInput)
    data!: InstanceType<typeof daily_itemized_reportsUpdateInput>;
    @Field(() => daily_itemized_reportsWhereUniqueInput, {nullable:false})
    @Type(() => daily_itemized_reportsWhereUniqueInput)
    where!: InstanceType<typeof daily_itemized_reportsWhereUniqueInput>;
}

@ArgsType()
export class UpdateOnedailyReportsArgs {
    @Field(() => daily_reportsUpdateInput, {nullable:false})
    @Type(() => daily_reportsUpdateInput)
    data!: InstanceType<typeof daily_reportsUpdateInput>;
    @Field(() => daily_reportsWhereUniqueInput, {nullable:false})
    @Type(() => daily_reportsWhereUniqueInput)
    where!: InstanceType<typeof daily_reportsWhereUniqueInput>;
}

@ArgsType()
export class UpsertOnedailyItemizedReportsArgs {
    @Field(() => daily_itemized_reportsWhereUniqueInput, {nullable:false})
    @Type(() => daily_itemized_reportsWhereUniqueInput)
    where!: InstanceType<typeof daily_itemized_reportsWhereUniqueInput>;
    @Field(() => daily_itemized_reportsCreateInput, {nullable:false})
    @Type(() => daily_itemized_reportsCreateInput)
    create!: InstanceType<typeof daily_itemized_reportsCreateInput>;
    @Field(() => daily_itemized_reportsUpdateInput, {nullable:false})
    @Type(() => daily_itemized_reportsUpdateInput)
    update!: InstanceType<typeof daily_itemized_reportsUpdateInput>;
}

@ArgsType()
export class UpsertOnedailyReportsArgs {
    @Field(() => daily_reportsWhereUniqueInput, {nullable:false})
    @Type(() => daily_reportsWhereUniqueInput)
    where!: InstanceType<typeof daily_reportsWhereUniqueInput>;
    @Field(() => daily_reportsCreateInput, {nullable:false})
    @Type(() => daily_reportsCreateInput)
    create!: InstanceType<typeof daily_reportsCreateInput>;
    @Field(() => daily_reportsUpdateInput, {nullable:false})
    @Type(() => daily_reportsUpdateInput)
    update!: InstanceType<typeof daily_reportsUpdateInput>;
}
