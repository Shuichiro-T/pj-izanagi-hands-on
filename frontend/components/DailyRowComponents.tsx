import { MenuItem, Select, TableCell, TableRow, TextField } from "@mui/material";

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
          defaultValue="09:00"
        />
      </TableCell>
      <TableCell>
        <TextField
          id="endTime"
          type="time"
          defaultValue="17:30"
        />
      </TableCell>
      <TableCell>
        {/* <Select
          labelId="label-operation1"
          id="operation1"
          value={"1"}
        >
          {operationData?.OperationList.map((operationItem) => (
            <MenuItem 
              key={"key-operation1-" + operationItem.operation_id} 
              value={operationItem.operation_id}
              >
              {operationItem.operation_name}
            </MenuItem>
          ))}
        </Select> */}
      </TableCell>
      <TableCell>
        <TextField size="small" inputProps={{maxLength: 5, size:5}}></TextField>
      </TableCell>
      <TableCell>
        {/* <Select
          labelId="label-operation1"
          id="operation1"
          value={"2"}
        >
          {operationData?.OperationList.map((operationItem) => (
          <MenuItem 
            key={"key-operation1-" + operationItem.operation_id} 
            value={operationItem.operation_id}
            >
            {operationItem.operation_name}
          </MenuItem>
          ))}
        </Select> */}
      </TableCell>
      <TableCell>
        <TextField size="small" inputProps={{maxLength: 5, size:5}}></TextField>
      </TableCell>
    </TableRow>
  )
}

export default DailyRowComponents;