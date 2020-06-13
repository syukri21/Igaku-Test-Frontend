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
import { Checkbox, IconButton, Typography } from "@material-ui/core"
import TodoGetAll from "../providers/todo-getAll.provider"
import { TodoType } from "../@types/todo.types"

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
})

export default function TodoTable() {
    const classes = useStyles()
    const [todosState] = TodoGetAll.useGlobal()

    return (
        <TableContainer component={"div"}>
            <Table className={classes.table} aria-label='simple table' size='small'>
                <TableHead>
                    <TableRow>
                        <TableCell size='small'></TableCell>
                        <TableCell>Task Name</TableCell>
                        <TableCell align='right' size='small'>
                            Status
                        </TableCell>
                        <TableCell size='small'></TableCell>
                        <TableCell size='small'></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {todosState.data &&
                        todosState.data.map((todo: TodoType) => (
                            <TableRow key={todo.id}>
                                <TableCell padding='checkbox' size='small'>
                                    <Checkbox color='primary'></Checkbox>
                                </TableCell>
                                <TableCell component='th' scope='row'>
                                    {todo.task}
                                </TableCell>
                                <TableCell align='right' size='small'>
                                    {todo.status ? (
                                        <Typography color='primary'>active</Typography>
                                    ) : (
                                        <Typography color='secondary'>completed</Typography>
                                    )}
                                </TableCell>
                                <TableCell padding='checkbox' size='small'>
                                    <IconButton color='primary'>
                                        <EditIcon></EditIcon>
                                    </IconButton>
                                </TableCell>
                                <TableCell padding='checkbox' size='small'>
                                    <IconButton color='secondary'>
                                        <CloseIcon></CloseIcon>
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
