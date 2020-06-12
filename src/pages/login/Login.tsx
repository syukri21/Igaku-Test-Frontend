import React from "react"
import Avatar from "@material-ui/core/Avatar"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Checkbox from "@material-ui/core/Checkbox"
import Link from "@material-ui/core/Link"
import { Link as RouterLink, useHistory } from "react-router-dom"
import Box from "@material-ui/core/Box"
import LockOutlinedIcon from "@material-ui/icons/LockOutlined"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import Container from "@material-ui/core/Container"

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}))

export interface LoginProps {}

const Login: React.SFC<LoginProps> = (props) => {
    const classes = useStyles()
    const history = useHistory()

    return (
        <Container component='main' maxWidth='xs'>
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component='h1' variant='h5'>
                    Sign in
                </Typography>
                <form className={classes.form} noValidate>
                    <TextField
                        variant='outlined'
                        margin='normal'
                        required
                        fullWidth
                        id='email'
                        label='Email Address'
                        name='email'
                        autoComplete='email'
                        autoFocus
                    />
                    <TextField
                        variant='outlined'
                        margin='normal'
                        required
                        fullWidth
                        name='password'
                        label='Password'
                        type='password'
                        id='password'
                        autoComplete='current-password'
                    />
                    <FormControlLabel control={<Checkbox value='remember' color='primary' />} label='Remember me' />
                    <Button
                        type='submit'
                        fullWidth
                        variant='contained'
                        color='primary'
                        onClick={() => history.push("/todo")}
                        className={classes.submit}
                    >
                        Sign In
                    </Button>

                    <Box component='div' display='flex' justifyContent='flex-end'>
                        <RouterLink to='/register'>
                            <Link href='#' variant='body2'>
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </RouterLink>
                    </Box>
                </form>
            </div>
        </Container>
    )
}

export default Login
