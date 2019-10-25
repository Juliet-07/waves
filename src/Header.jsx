import React, {Component} from 'react'
import {AppBar, Toolbar, Typography} from '@material-ui/core/'



class NavBar extends Component{
    render(){
        return(
            <div>
                <AppBar>
                    <Toolbar>
                    <Typography variant='title' color='green'>USER FORM</Typography>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}
export default NavBar