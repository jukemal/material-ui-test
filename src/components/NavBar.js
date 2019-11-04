import React from 'react'
import { makeStyles,useTheme } from '@material-ui/core/styles'

const useStyle = makeStyles(theme => ({
    box: {
        background: theme.background,
        border: 2,
        fontSize: 25,
        borderRadius: 5,
        color: 'white',
        height: 50,
        padding: '0px 50px'
    }
}))

const NavBar = ({cl}) => {
    const classes = useStyle(cl)
    const theme=useTheme()

    return (
        <>
            <button type='button' className={classes.box}>
                Hello {classes.lable}
            </button>
        </>
    )
}

export default NavBar