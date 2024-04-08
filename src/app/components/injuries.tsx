'use client';

import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Link} from "@nextui-org/react";

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
    <div className="px-7 pb-5 md:min-w-[650px]">
    <Table isStriped aria-label="Example static collection table">
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={data.injuries}>
        {(item: any) => (
        <TableRow key={item.date}>
          <TableCell>
            {item.date}
          </TableCell>
          <TableCell>
            <Link href={item.link} isExternal color="foreground" underline="hover">{item.name}</Link>
          </TableCell>
          <TableCell>
            {item.league}
          </TableCell>
        </TableRow>
        )}
      </TableBody>
    </Table>
    </div>
    )
}