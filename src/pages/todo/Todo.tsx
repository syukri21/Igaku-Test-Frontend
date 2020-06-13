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
import DeleteIcon from "@material-ui/icons/Delete"
import { TodoTable } from "./components"
import { CardHeader } from "@material-ui/core"
import TodoForm from "./components/TodoForm"
import Api from "../../api/api"
import { useHistory } from "react-router-dom"
import useTodo from "./todo.provider"
import TodoGetAllProvider from "./providers/todo-getAll.provider"

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
    deleteWrapper: {
        display: "flex",
        justifyContent: "flex-end",
    },
}))

export interface TodoProps {}

const Todo: React.SFC<TodoProps> = () => {
    const classes = useStyles()
    const history = useHistory()
    useTodo()
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
                        <Button
                            color='inherit'
                            onClick={(e: any) => {
                                window.localStorage.removeItem("token")
                                history.push("/login")
                            }}
                        >
                            Log out
                        </Button>
                    </Toolbar>
                </AppBar>
            </div>
            <div className={classes.todoWrap}>
                <Container maxWidth='md' className={classes.containerTodo}>
                    <Card className={classes.root}>
                        <CardHeader title='To do List   ' className={classes.cardHeader} />
                        <CardActions className={classes.fieldTodo}>
                            <TodoForm></TodoForm>
                        </CardActions>
                        <CardContent>
                            <TodoGetAllProvider>
                                <TodoTable></TodoTable>
                            </TodoGetAllProvider>
                        </CardContent>
                        <CardActions className={classes.deleteWrapper}>
                            <Button variant='contained' color='secondary' startIcon={<DeleteIcon />}>
                                Delete
                            </Button>
                        </CardActions>
                    </Card>
                </Container>
                <div className={classes.background}></div>
            </div>
        </>
    )
}

export default Todo
