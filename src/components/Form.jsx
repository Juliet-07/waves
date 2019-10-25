import React, {useState} from 'react'
import {Grid, TextField, Paper, Button} from '@material-ui/core'


const UserForm = props =>{
    const initialFormState = {
        firstName:'',
        lastName:'',
        birthday:'',
        age:'',
        hobby:''
    }
    const [user, setUser] = useState(initialFormState)

    const handleInput= ({target}) =>{
        const {name, value} = target
        setUser({...user,[name]:value})
        console.log(value)
    }
    const handleSubmit = e =>{
        e.preventDefault()
        if(user.firstName && user.lastName && user.birthday && user.age && user.hobby){
            setUser(initialFormState)
            props.onSubmit({
                firstName: user.firstName,
                lastName: user.lastName,
                birthday: user.birthday,
                age: user.age,
                hobby: user.hobby
              })
        }
    }
    return(
        <Paper style={{margin:30, padding:30, width:500}}>
            <form>
                <Grid>
                <Grid>
                    <TextField label='First Name' style={{}} name='firstName' value={user.firstName} onChange={handleInput}></TextField>
                </Grid>
                <Grid>
                    <TextField label='Last Name' style={{}} name='lastName' value={user.lastName} onChange={handleInput}></TextField>
                </Grid>
                <Grid>
                    <TextField label='Date Of Birth' style={{}} InputLabelProps={{shrink: true}} type='date' name='birthday' value={user.birthday} onChange={handleInput}></TextField>
                </Grid>
                <Grid>
                    <TextField label='Age' style={{}} name='age' value={user.age} onChange={handleInput}></TextField>
                </Grid>
                <Grid>
                    <TextField label='Hobby' style={{}} name='hobby' value={user.hobby} onChange={handleInput}></TextField>
                </Grid>
                <Grid>
                <Button type='submit' color='primary' variant='contained' onClick={handleSubmit}>Add</Button>
                </Grid>
                </Grid>
            </form>
        </Paper>
            
    )
}
export default UserForm