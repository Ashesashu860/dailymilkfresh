import React from "react";
import { Grid } from "@material-ui/core";
import { colors } from "../../theme";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
const List = (props) => {
  return (
    <Grid>
      <h2 style={{ color: colors.primaryDark }} className="padding">
        {props.title}
      </h2>
      <Table>
        <TableBody>
          {props.items.map((item) => (
            <TableRow>
              <TableCell>{item.icon}</TableCell>
              <TableCell>{item.text}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Grid>
  );
};

export default List;
