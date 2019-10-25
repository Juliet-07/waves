import React, { Fragment, useState} from 'react'
import {Grid} from '@material-ui/core'
import Table from './Table'
import UserForm from './Form'
import NavBar from './Header'

const Tan = () =>{
    const UserState = [
        {
            firstName:'',
            lastName:'',
            birthday:'',
            age:'',
            hobby:''
        }
    ]
    const [users, setUser]=useState(UserState)
    const addUser =user=>{
        setUser([...users, user])
    }
    return(
        <Fragment>
            <Grid container>
                <UserForm addUser={addUser}/>
                <Table users={users}/>
                <NavBar/>
            </Grid>
        </Fragment>
    )
}
export default Tan