import Blogs from '@/lib/sections/blogs/blog'
import React from 'react'

import { Metadata } from "next";


export const metadata: Metadata = {
    title: 'FitTech - Blogs',
    description: `Blogs are coming soon!`
}


export default function page() {
    return (
        <Blogs />
    )
}
