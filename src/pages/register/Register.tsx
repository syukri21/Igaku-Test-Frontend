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
import { Link as RouterLink, useHistory } from "react-router-dom"

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
    return (
        <Container component='main' maxWidth='xs'>
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component='h1' variant='h5'>
                    Sign up
                </Typography>
                <form className={classes.form} noValidate autoComplete='none'>
                    <div className={classes.textName}>
                        <TextField
                            variant='outlined'
                            margin='normal'
                            required
                            fullWidth
                            id='firstName'
                            label='First Name'
                            name='firstName'
                            autoComplete='none'
                            autoFocus
                        />
                        <div className={classes.spacer}></div>
                        <TextField
                            variant='outlined'
                            margin='normal'
                            required
                            fullWidth
                            id='lastname'
                            label='Last Name'
                            name='lastname'
                            autoComplete='none'
                            autoFocus
                        />
                    </div>
                    <TextField
                        variant='outlined'
                        margin='normal'
                        required
                        fullWidth
                        id='email'
                        label='Email Address'
                        name='email'
                        autoComplete='none'
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
                        autoComplete='none'
                    />
                    <TextField
                        variant='outlined'
                        margin='normal'
                        required
                        fullWidth
                        name='confirmPassword'
                        label='Confirm Password'
                        type='confirmPassword'
                        id='confirmPassword'
                        autoComplete='none'
                    />
                    <Button type='submit' fullWidth variant='contained' color='primary' className={classes.submit}>
                        Sign Up
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
