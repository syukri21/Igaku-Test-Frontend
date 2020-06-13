import React from "react"
import Avatar from "@material-ui/core/Avatar"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import Link from "@material-ui/core/Link"
import { Link as RouterLink } from "react-router-dom"
import Box from "@material-ui/core/Box"
import LockOutlinedIcon from "@material-ui/icons/LockOutlined"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import Container from "@material-ui/core/Container"
import useLogin from "./login.provider"

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

const Login: React.SFC<LoginProps> = () => {
    const classes = useStyles()
    const { loginState, formik } = useLogin()

    return (
        <Container component='main' maxWidth='xs'>
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component='h1' variant='h5'>
                    Sign in
                </Typography>
                <form className={classes.form} noValidate onSubmit={formik.handleSubmit}>
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
                        onChange={formik.handleChange}
                        error={!!formik.errors.email && formik.touched.email}
                        helperText={formik.touched.email && formik.errors.email}
                        FormHelperTextProps={{ style: { fontSize: 10 } }}
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
                        onChange={formik.handleChange}
                        helperText={formik.touched.email && formik.errors.email}
                        error={formik.touched.email && !!formik.errors.email}
                        FormHelperTextProps={{ style: { fontSize: 10 } }}
                    />
                    <Button type='submit' fullWidth variant='contained' color='primary' className={classes.submit} disabled={loginState.loading}>
                        {loginState.loading ? "Loading..." : "Sign In"}
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
