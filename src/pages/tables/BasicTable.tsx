import {
  Table,
  TableCell,
  TableBody,
  TableHead,
  TableRow,
  Button,
} from "@aws-amplify/ui-react";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { generateClient } from "aws-amplify/data";
const client = generateClient<Schema>();
import { MdModeEditOutline } from "react-icons/md";

function BasicTable() {
  const navigate = useNavigate();
  const [skips, setSkips] = useState<Array<Schema["Skip"]["type"]>>([]);

   useEffect(() => {
      client.models.Skip.observeQuery().subscribe({
        next: (data) => setSkips([...data.items]),
      });
    }, []);

  return (
    <>
      <Table caption="" highlightOnHover={false}>
        <TableHead>
          <TableRow>
            <TableCell as="th">Name</TableCell>
            <TableCell as="th">Location</TableCell>
            <TableCell as="th">Volume</TableCell>
            <TableCell as="th">Size</TableCell>
            <TableCell as="th"></TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {skips?.map((item) => {
            return (
              <TableRow key={item.id}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.location}</TableCell>
                <TableCell>{item.volume}</TableCell>
                <TableCell>{item.size}</TableCell>
                <TableCell>
                  <Button onClick={() => navigate(`/forms/${item.id}`)}><MdModeEditOutline /></Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
};

export default BasicTable;
