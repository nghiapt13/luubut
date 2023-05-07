import React from 'react'
import { Fab } from '@mui/material'
import DarkModeIcon from '@mui/icons-material/DarkMode';

const ThemeButton = ({setMode, modeTheme}) => {
  return (
    <Fab variant="contained" color="primary"
    aria-label="change theme"
    sx={{
        position: 'fixed',
        bottom: {xs: 16, md: 30,},
        right: {xs: 16, md: 30,},
        zIndex: 1000,
    }}
    onClick={() => {setMode(!modeTheme)}}
    >
        <DarkModeIcon/>
    </Fab>
  )
}

export default ThemeButton