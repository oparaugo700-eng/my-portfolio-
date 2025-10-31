import { Button } from '@mui/material'
import React, { useState } from 'react'

export default function Theme() {
    const [text, setText] = useState("Light Mode")

    const setDark = () => {
        document.querySelector("html").setAttribute("class", "dark_theme")

    }
    const setLight = () => {
        document.querySelector("html").setAttribute("class", "light_theme")

    }



    const toggle = (e) => {
        if (e.target.checked) {
            setDark()
            setText("Dark Mode")
        } else {
            setLight()
            setText("Light Mode")
        }
    }
    return (
        <div>
            <Button >
                <input
                    type='checkbox'
                    value={text}
                    onChange={toggle}
                    className='mx-2'
                />
                <span className='text-white'>{text}</span>
            </Button>

        </div>
    )
}
