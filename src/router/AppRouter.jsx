import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { LoginPage } from '../auth/pages/LoginPage'
import { MarvelPage, DcPage, HeroesRoutes } from '../heroes'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'

export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path='login' element={
            <PublicRoute>
                <LoginPage/>
            </PublicRoute>
        }>

            </Route>
                <Route path='/*' element={
                <PrivateRoute>
                    <HeroesRoutes/>
                </PrivateRoute> 
            }/>
        </Routes>
    </>
    )
}
