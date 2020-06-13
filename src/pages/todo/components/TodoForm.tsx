import * as React from "react"
import { FormControl, InputLabel, OutlinedInput, Button } from "@material-ui/core"
import AddIcon from "@material-ui/icons/Add"
import useTodoForm from "./todoForm.handler"

export interface TodoFormProps {}

const TodoForm: React.SFC<TodoFormProps> = (props) => {
    const { formik } = useTodoForm()
    return (
        <FormControl fullWidth variant='outlined'>
            <InputLabel htmlFor='todo-input'>What needs to be done?</InputLabel>
            <OutlinedInput
                id='task'
                name='task'
                type='text'
                onChange={formik.handleChange}
                onKeyPress={(event: any) => {
                    if (event.which === 13 || event.keyCode === 13) {
                        formik.handleSubmit()
                    }
                }}
                aria-describedby='standard-weight-helper-text'
                inputProps={{
                    "aria-label": "weight",
                }}
                endAdornment={
                    <Button
                        onClick={(event: any) => {
                            event.preventDefault()
                            formik.handleSubmit()
                        }}
                        type='button'
                    >
                        <AddIcon></AddIcon>
                    </Button>
                }
                labelWidth={175}
            ></OutlinedInput>
        </FormControl>
    )
}

export default TodoForm
