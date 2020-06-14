import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableContainer from "@material-ui/core/TableContainer"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import CloseIcon from "@material-ui/icons/Close"
import EditIcon from "@material-ui/icons/Edit"
import SaveIcon from "@material-ui/icons/Save"

import { Checkbox, IconButton, Typography, Button, Switch } from "@material-ui/core"
import TodoGetAll from "../providers/todo-getAll.provider"
import { TodoType } from "../@types/todo.types"
import useTodoTable from "./todoTable.handler"
import TextField from "@material-ui/core/TextField"

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
})

export default function TodoTable() {
    const classes = useStyles()
    const { todosState, editId, handleChangeCheck, setEditId, handleSubmitEdit, handleChangeSwitch, handleChangeTask } = useTodoTable()

    return (
        <TableContainer component={"div"}>
            <Table className={classes.table} aria-label='simple table' size='small'>
                <TableHead>
                    <TableRow>
                        <TableCell size='small' padding='checkbox'></TableCell>
                        <TableCell>Task Name</TableCell>
                        <TableCell align='center' size='small'>
                            Status
                        </TableCell>
                        <TableCell size='small' padding='checkbox'></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {todosState.data &&
                        todosState.data.map((todo: TodoType) => (
                            <TableRow key={todo.id}>
                                <TableCell padding='checkbox' size='small'>
                                    <Checkbox color='primary' onChange={handleChangeCheck(todo.id)}></Checkbox>
                                </TableCell>
                                <TableCell component='th' scope='row'>
                                    {editId === todo.id ? (
                                        <TextField
                                            defaultValue={todo.task}
                                            name='task-edit'
                                            id='task-edit'
                                            fullWidth
                                            onChange={handleChangeTask}
                                        ></TextField>
                                    ) : (
                                        todo.task
                                    )}
                                </TableCell>
                                <TableCell align='center' size='small'>
                                    {editId === todo.id ? (
                                        <Switch
                                            color='primary'
                                            defaultChecked={todo.status}
                                            name='checkedB'
                                            onChange={handleChangeSwitch}
                                            inputProps={{ "aria-label": "primary checkbox" }}
                                        />
                                    ) : todo.status ? (
                                        <Typography color='primary'>active</Typography>
                                    ) : (
                                        <Typography color='textPrimary'>completed</Typography>
                                    )}
                                </TableCell>
                                <TableCell padding='checkbox' size='small'>
                                    {editId === todo.id ? (
                                        <IconButton color='primary' onClick={handleSubmitEdit}>
                                            <SaveIcon></SaveIcon>
                                        </IconButton>
                                    ) : (
                                        <IconButton color='primary' onClick={() => setEditId(todo.id)}>
                                            <EditIcon></EditIcon>
                                        </IconButton>
                                    )}
                                </TableCell>
                            </TableRow>
                        ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
