import React, { Fragment} from 'react'
import {connect} from 'react-redux'
import {addUser} from '../actions/index'
import {Grid} from '@material-ui/core'
import Table from './Table'
import UserForm from './Form'
import NavBar from './Header'

const Tan = props =>{
    return(
        <Fragment>
            <Grid container style={{ display: "flex", justifyContent: "center" }}>
                <UserForm onSubmit = {user =>{
                    props.dispatch(addUser(user))
                }}/>
                <Table/>
                <NavBar/>
            </Grid>
        </Fragment>
    )
}
export default connect()(Tan)