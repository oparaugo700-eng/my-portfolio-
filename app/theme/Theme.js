import { Button } from '@mui/material'
import React, { useState, useEffect } from 'react'

export default function Theme() {
    const [text, setText] = useState("Light Mode")
    const [check, setCheck] = useState(false)

    const setDark = () => {
        document.querySelector("html").setAttribute("class", "dark_theme")
        localStorage.setItem("selectedTheme", "dark_theme")
    }
    const setLight = () => {
        document.querySelector("html").setAttribute("class", "light_theme")
        localStorage.setItem("selectedTheme", "light_theme")
    }


    function toggle(e) {
        const checked = e.target.checked
        setCheck(checked)

        if (checked) {
            setDark()
            setText("Dark Mode")
        } else {
            setLight()
            setText("Dark Mode")
        }

    }

    useEffect(() => {
        const saved = localStorage.getItem("selectedTheme")

        if (saved === "dark_theme") {
            setDark()
            setText("Dark Mode")
            setCheck(true)
        } else {
            setLight()
            setText("Light Mode")
            setCheck(false)
        }
    }, [])




    return (
        <div>
            <Button >
                <input
                    type='checkbox'
                    value={text}
                    onChange={toggle}
                    checked={check}

                    className='mx-2'
                />
                <span className='text-white'>{text}</span>
            </Button>

        </div>
    )
}
