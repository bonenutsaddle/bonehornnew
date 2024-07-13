import React from 'react'
import BoneNut from './BoneNut'
import { Routes, Route } from 'react-router-dom'
import WhiteBoneNutBlank from './whitebonenutblank/WhiteBoneNutBlank'

function BoneNutProductRouting() {
    return (
        <>
            <Routes>
                <Route path='/guitar-component/bone-nut' element={<BoneNut />} />
                <Route path='/guitar-component/bone-nut/white-bone-nut-blank' element={<WhiteBoneNutBlank />} />
            </Routes>
        </>
    )
}

export default BoneNutProductRouting
