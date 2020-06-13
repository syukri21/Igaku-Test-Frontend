import React from "react"
import Avatar from "@material-ui/core/Avatar"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import Link from "@material-ui/core/Link"
import Box from "@material-ui/core/Box"
import LockOutlinedIcon from "@material-ui/icons/Person"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import Container from "@material-ui/core/Container"
import { Link as RouterLink } from "react-router-dom"
import useRegister from "./register.handler"

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(4),
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
    textName: {
        display: "flex",
    },
    spacer: {
        width: theme.spacing(4),
    },
}))

export interface RegisterProps {}

const Register: React.SFC<RegisterProps> = (props) => {
    const classes = useStyles()
    const { formik, registerState } = useRegister()
    return (
        <Container component='main' maxWidth='xs'>
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component='h1' variant='h5'>
                    Sign up
                </Typography>
                <form className={classes.form} noValidate autoComplete='none' onSubmit={formik.handleSubmit}>
                    <div className={classes.textName}>
                        <TextField
                            variant='outlined'
                            margin='normal'
                            required
                            fullWidth
                            id='firstName'
                            label='First Name'
                            name='firstName'
                            onChange={formik.handleChange}
                            autoComplete='none'
                            autoFocus
                            FormHelperTextProps={{ style: { fontSize: 10 } }}
                            helperText={formik.touched.firstName && formik.errors.firstName}
                            error={!!formik.errors.firstName && formik.touched.firstName}
                        />
                        <div className={classes.spacer}></div>
                        <TextField
                            variant='outlined'
                            margin='normal'
                            required
                            fullWidth
                            id='lastName'
                            label='Last Name'
                            onChange={formik.handleChange}
                            name='lastName'
                            autoComplete='none'
                            autoFocus
                            FormHelperTextProps={{ style: { fontSize: 10 } }}
                            helperText={formik.touched.lastName && formik.errors.lastName}
                            error={!!formik.errors.lastName && formik.touched.lastName}
                        />
                    </div>
                    <TextField
                        variant='outlined'
                        margin='normal'
                        required
                        fullWidth
                        id='email'
                        onChange={formik.handleChange}
                        label='Email Address'
                        name='email'
                        autoComplete='none'
                        FormHelperTextProps={{ style: { fontSize: 10 } }}
                        autoFocus
                        helperText={formik.touched.email && formik.errors.email}
                        error={!!formik.errors.email && formik.touched.email}
                    />
                    <TextField
                        variant='outlined'
                        margin='normal'
                        required
                        fullWidth
                        name='password'
                        label='Password'
                        onChange={formik.handleChange}
                        type='password'
                        id='password'
                        FormHelperTextProps={{ style: { fontSize: 10 } }}
                        autoComplete='none'
                        helperText={formik.touched.password && formik.errors.password}
                        error={!!formik.errors.password && formik.touched.password}
                    />
                    <TextField
                        variant='outlined'
                        margin='normal'
                        required
                        fullWidth
                        name='confirmPassword'
                        label='Confirm Password'
                        type='password'
                        onChange={formik.handleChange}
                        id='confirmPassword'
                        autoComplete='none'
                        FormHelperTextProps={{ style: { fontSize: 10 } }}
                        helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                        error={!!formik.errors.confirmPassword && formik.touched.confirmPassword}
                    />
                    <Button type='submit' fullWidth variant='contained' color='primary' className={classes.submit} disabled={registerState.loading}>
                        {registerState.loading ? "Loading.." : "Sign Up"}
                    </Button>
                    <Box component='div' display='flex' justifyContent='flex-end'>
                        <RouterLink to='/login'>
                            <Link href='#' variant='body2'>
                                {"Sign In"}
                            </Link>
                        </RouterLink>
                    </Box>
                </form>
            </div>
        </Container>
    )
}

export default Register
