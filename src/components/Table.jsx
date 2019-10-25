import React from 'react'
import {Paper, TableHead, TableBody, TableRow, TableCell} from '@material-ui/core'
import {useSelector} from 'react-redux'

const Table = props =>{
    const users = useSelector(state=>state.users)
    return(
        <Paper style={{padding:30, margin:30, width:500}}>
            <TableHead>
                <TableRow>
                    <TableCell>First Name</TableCell>
                    <TableCell>Last Name</TableCell>
                    <TableCell>Birthday</TableCell>
                    <TableCell>Age</TableCell>
                    <TableCell>Hobby</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    users.map(item=>{
                        return(
                            <TableRow>
                                <TableCell>{item.firstName}</TableCell>
                                <TableCell>{item.lastName}</TableCell>
                                <TableCell>{item.birthday}</TableCell>
                                <TableCell>{item.age}</TableCell>
                                <TableCell>{item.hobby}</TableCell>
                            </TableRow>
                        )
                    })
                }
            </TableBody>
        </Paper>
    )
    }
export default Table