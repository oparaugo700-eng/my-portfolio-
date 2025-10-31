"use client"
import Theme from '@/app/theme/Theme'
import { AppBar, Stack, Toolbar, Typography } from '@mui/material'
import React from 'react'

export default function Navbar() {
    return (
        <header className=''>
            <AppBar position='static' variant='elevation' color='success'>
                <Toolbar>
                    <Typography sx={{ flexGrow: 2 }} >
                        MY PORTFOLIO
                    </Typography>
                    <Stack direction="row" spacing={2}>
                        <Theme />

                    </Stack>

                </Toolbar>
            </AppBar>
        </header>
    )
}
