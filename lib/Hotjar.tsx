"use client"
import React, { useEffect } from 'react'
import { hotjar } from 'react-hotjar'

export default function Hotjar() {
    useEffect(() => {
        hotjar.initialize(3709792, 6)
    }, [])
    return <></>
}
