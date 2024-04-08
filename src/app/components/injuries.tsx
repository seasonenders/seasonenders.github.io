'use client';

import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue} from "@nextui-org/react";

const columns = [
  {
    key: "date",
    label: "DATE",
  },
  {
    key: "name",
    label: "NAME",
  },
  {
    key: "league",
    label: "LEAGUE",
  },
];

export const Injuries = ({data}: any) => {
    return (
    <div className="px-7">
    <Table aria-label="Example static collection table">
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={data.injuries}>
        {(item: any) => (
        <TableRow key={item.date}>
          {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
        </TableRow>
        )}
      </TableBody>
    </Table>
    </div>
    )
}