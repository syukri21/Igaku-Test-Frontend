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

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
})

function createData(name: string, calories: number, fat: number, carbs: number, protein: number) {
    return { name, calories, fat, carbs, protein }
}

const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
]

export default function TodoTable() {
    const classes = useStyles()

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
                    {rows.map((row) => (
                        <TableRow key={row.name}>
                            <TableCell padding='checkbox' size='small'>
                                <Checkbox color='primary'></Checkbox>
                            </TableCell>
                            <TableCell component='th' scope='row'>
                                {row.name}
                            </TableCell>
                            <TableCell align='right' size='small'>
                                <Typography color='primary'>active </Typography>
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
