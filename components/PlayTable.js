import Link from "next/link";

import {
  Button,
  Table,
  Tbody,
  Tr,
  Td,
} from "@chakra-ui/react";

export default function PlayTable({ playTable }) {
  return (
    <Table colorScheme="blackAlpha" size="sm">
      <Tbody>
        {playTable.map((row, index) => {
          return (
            <Tr>
              <Td>
                <Button width="130px" mb="1" size="sm" variant="wiha">
                  <Link href={row.link}>{row.title}</Link>
                </Button>
              </Td>
              <Td>{row.description}</Td>
              <Td>
                {row.day}
                <br />
                {row.time}
              </Td>
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  );
}
