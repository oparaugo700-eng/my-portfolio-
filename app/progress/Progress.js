import { Stack, LinearProgress } from '@mui/material'
import React from 'react'
Stack

export default function Progress() {
    return (
        <main className='mb-10 w-[300px] md:w-[500px]'>
            <Stack spacing={1}>
                <p>HTML</p>
                <LinearProgress variant='determinate' value={85} />
                <p>CSS</p>
                <LinearProgress variant='determinate' value={80} />
                <p>TAILWIND CSS</p>
                <LinearProgress variant='determinate' value={75} />
                <p>JAVASCRIPT</p>
                <LinearProgress variant='determinate' value={56} />
                <p>REACT JS</p>
                <LinearProgress variant='determinate' value={40} />
                <p>NEXT JS</p>
                <LinearProgress variant='determinate' value={40} />
            </Stack>
        </main>
    )
}
