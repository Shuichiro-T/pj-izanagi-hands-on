import { MenuItem, Select, SelectChangeEvent, TableCell, TableRow, TextField } from "@mui/material";
import { ChangeEvent, useContext, useState } from "react";
import { MainContext } from "../pages/main/[employees_id]";

import { format, subHours } from 'date-fns' 

type Props = {
  yearMonth:string
  day:string
};


//曜日を取得する関数
const getDayname = (yearMonth: string, day: string) => {
  const parameterDate = new Date(yearMonth.slice(0,4) + "/" + 
    yearMonth.slice(4,6) + "/" + 
    day)
  const dayNames = ['日','月','火','水','木','金','土']
  return dayNames[parameterDate.getDay()]
}


const DailyRowComponents = (props: Props) => {

  const { operationData } = useContext(MainContext);

  const [startTime, setStartTime] = useState("09:00")

  const [endTime, setEndTime] = useState("17:30")

  const [operationValue1, setOperationValue1] = useState("1")

  const [operationTime1, setOperationTime1] = useState("00:00")

  const [operationValue2, setOperationValue2] = useState("2")

  const [operationTime2, setOperationTime2] = useState("00:00")

  //開始時刻が変更された場合
  const startTimeChangeHandler = (event:ChangeEvent<HTMLInputElement>) => {
    setStartTime(event.target.value)
    setOperationTime1(diffTime(event.target.value, endTime))
    setOperationTime2("00:00")
  }

  //終了時刻が変更された場合
  const endTimeChangeHandler = (event:ChangeEvent<HTMLInputElement>) => {
    setEndTime(event.target.value)
    setOperationTime1(diffTime(startTime, event.target.value))
    setOperationTime2("00:00")
  }

  //作業１の時間が変更された場合
  const operationTime1ChangeHandler = (event:ChangeEvent<HTMLInputElement>) => {
    setOperationTime1(event.target.value)
  }

  //作業２の時間が変更された場合
  const operationTime2ChangeHandler = (event:ChangeEvent<HTMLInputElement>) => {
    setOperationTime2(event.target.value)

    //残りの時間を作業1の時間へ反映させる
    setOperationTime1(diffTime(event.target.value, operationTime1))
  }

  //HH:MM形式の差分を計算し、HH:MM形式で返す。
  const diffTime = (startTime:string, endTime:string) => {
    
    const startDate = new Date(`1972-01-01 ${startTime}`)  

    const endDate = new Date(`1972-01-01 ${endTime}`)  

    const diffDate = new Date(endDate.getTime() - startDate.getTime())

    //TZを外せなかったので、9時間減らす
    return format(subHours(diffDate, 9), "HH:mm")
  }

  return (
    <TableRow key={props.day}>
      <TableCell>
        {props.yearMonth.slice(0,4) + "年" + 
          props.yearMonth.slice(4,6) + "月" + 
          props.day + "日"}
      </TableCell>
      <TableCell>
        {getDayname(props.yearMonth, props.day)}
      </TableCell>
      <TableCell>
        <TextField
          id="startTime"
          type="time"
          value={startTime}
          onChange = {startTimeChangeHandler}
        />
      </TableCell>
      <TableCell>
        <TextField
          id="endTime"
          type="time"
          value={endTime}
          onChange = {endTimeChangeHandler}
        />
      </TableCell>
      <TableCell>
        <Select
          labelId="label-operation1"
          id="operation1"
          value={operationValue1}
          onChange={(event: SelectChangeEvent) => {
            setOperationValue1(event.target.value)
          }}
        >
          {operationData?.OperationList.map((operationItem) => (
            <MenuItem 
              key={"key-operation1-" + operationItem.operation_id} 
              value={operationItem.operation_id}
            >
              {operationItem.operation_name}
            </MenuItem>
          ))}
        </Select>
      </TableCell>
      <TableCell>
        <TextField
          id="operationTime1"
          type="time"
          disabled
          value={operationTime1}
          onChange = {operationTime1ChangeHandler}
        />
      </TableCell>
      <TableCell>
        <Select
          labelId="label-operation2"
          id="operation2"
          value={operationValue2}
          onChange={(event: SelectChangeEvent) => {
            setOperationValue2(event.target.value)
          }}
        >
          {operationData?.OperationList.map((operationItem) => (
            <MenuItem 
              key={"key-operation2-" + operationItem.operation_id} 
              value={operationItem.operation_id}
            >
              {operationItem.operation_name}
            </MenuItem>
          ))}
        </Select>
      </TableCell>
      <TableCell>
        <TextField
          id="operationTime2"
          type="time"
          value={operationTime2}
          onChange = {operationTime2ChangeHandler}
        />
      </TableCell>
    </TableRow>
  )
}

export default DailyRowComponents;