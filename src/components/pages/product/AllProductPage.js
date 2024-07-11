import React from 'react'
import BoneNut from './bonenut/BoneNut'
import { Routes, Route } from 'react-router-dom'

function AllProductPage() {
    return (
        <>
            <Routes>
                <Route path='/bone-nut' element={<BoneNut />} />
            </Routes>
        </>
    )
}

export default AllProductPage
