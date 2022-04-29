import React from "react";
import { Link } from "react-router-dom";
import PreviewIcon from "@mui/icons-material/Preview";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { Container, Table } from "react-bootstrap";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

//Users component with two arguments from Home component
export const Users = ({ users, delUser }) => {
  //passing users and id from Users to Sidebar component by calling delHandler
  const delHandler = (user, id) => {
    console.log(user, id);
    delUser(user, id);
  };

  //displaying  table of users
  return (
    // bootstarp component Container
    <Container>
      {/* bootstap component Table */}
      <Table striped hover variant="dark" responsive size="sm">
        <thead>
          <tr className="text-center">
            <th scope="col">#</th>
            <th scope="col">User</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {/* maping the users */}
          {users.map((e, i) => (
            <tr key={i} className="text-center">
              <th scope="row">{i + 1}</th>
              <td>{e.Firstname}</td>
              <td>
                {/*create a link to buttons */}
                <Link to={`/profile/${e.Empid}`}>
                  <IconButton color="success" aria-label="profile">
                    <AccountBoxIcon />
                  </IconButton>
                </Link>
                <Link to={`/view/${e.Empid}`}>
                  <IconButton color="primary" aria-label="view">
                    <PreviewIcon />
                  </IconButton>
                </Link>
                <IconButton
                  color="error"
                  aria-label="delete"
                  onClick={() => {
                    delHandler(e, e.Empid);
                  }}
                >
                  <DeleteIcon />
                </IconButton>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};