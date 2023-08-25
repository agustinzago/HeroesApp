import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { LoginPage } from '../auth/pages/LoginPage'
import { MarvelPage, DcPage, HeroesRoutes } from '../heroes'

export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path='login' element={<LoginPage/>}/>
            <Route path='/*' element={<HeroesRoutes/>}/>
        </Routes>
    </>
    )
}
