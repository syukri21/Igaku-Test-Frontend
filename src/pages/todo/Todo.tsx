import * as React from "react"
import { makeStyles, Theme } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"
import Container from "@material-ui/core/Container"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Alarm"
import AddIcon from "@material-ui/icons/Add"
import { TodoTable } from "./components"
import { CardHeader, TextField, FormControl, InputLabel, Input, OutlinedInput } from "@material-ui/core"

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        minWidth: 275,
        padding: theme.spacing(1),
    },
    bullet: {
        display: "inline-block",
        margin: "0 2px",
        transform: "scale(0.8)",
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    appbar: {
        flexGrow: 1,
    },
    appbarTitle: {
        flexGrow: 1,
    },
    todoWrap: {
        position: "relative",
    },
    background: {
        background: theme.palette.primary.main,
        width: "100%",
        height: theme.spacing(14),
        position: "absolute",
        top: 0,
        zIndex: 0,
    },
    containerTodo: {
        position: "relative",
        zIndex: 1,
        paddingTop: theme.spacing(2),
    },
    cardHeader: {
        display: "flex",
        alignItems: "center",
    },
    fieldTodo: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
    },
}))

export interface TodoProps {}

const Todo: React.SFC<TodoProps> = (props) => {
    const classes = useStyles()
    return (
        <>
            <div className={classes.appbar}>
                <AppBar position='static'>
                    <Toolbar>
                        <IconButton edge='start' className={classes.menuButton} color='inherit' aria-label='menu'>
                            <MenuIcon />
                        </IconButton>
                        <Typography variant='h6' className={classes.appbarTitle}>
                            Todos App
                        </Typography>
                        <Button color='inherit'>Login</Button>
                    </Toolbar>
                </AppBar>
            </div>
            <div className={classes.todoWrap}>
                <Container maxWidth='md' className={classes.containerTodo}>
                    <Card className={classes.root}>
                        <CardHeader title='To do List   ' className={classes.cardHeader} />
                        <CardActions className={classes.fieldTodo}>
                            <FormControl fullWidth variant='outlined'>
                                <InputLabel htmlFor='todo-input'>What needs to be done?</InputLabel>
                                <OutlinedInput
                                    id='todo-input'
                                    aria-describedby='standard-weight-helper-text'
                                    inputProps={{
                                        "aria-label": "weight",
                                    }}
                                    endAdornment={
                                        <Button>
                                            <AddIcon></AddIcon>
                                        </Button>
                                    }
                                    labelWidth={175}
                                ></OutlinedInput>
                            </FormControl>
                        </CardActions>
                        <CardContent>
                            <TodoTable></TodoTable>
                        </CardContent>
                        <CardActions>
                            <Button size='small'>Learn More</Button>
                        </CardActions>
                    </Card>
                </Container>
                <div className={classes.background}></div>
            </div>
        </>
    )
}

export default Todo
