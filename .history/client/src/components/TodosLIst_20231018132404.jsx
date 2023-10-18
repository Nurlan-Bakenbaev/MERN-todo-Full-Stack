import { List, ListItem, ListItemText } from "@mui/material";

const TodosLIst = ({ task }) => {
  return (
    <>
      <List>
        <ListItem>
          <ListItemText sx={{ maxWidth: "380px",overflowWr }} primary={task} />
        </ListItem>
      </List>
    </>
  );
};

export default TodosLIst;
