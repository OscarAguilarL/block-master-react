import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import { AllMoviesPage } from '../pages/AllMoviesPage'
import { LessValuedMoviesPage } from '../pages/LessValuedMoviesPage'
import { MostValuedMoviesPage } from '../pages/MostValuedMoviesPage'
import { Navbar } from '../components/Navbar'

export const BlockMasterRouter = () => {
  return (
    <BrowserRouter>
      <>
        <Navbar />

        <Switch>
          <Route exact path="/all" component={AllMoviesPage} />
          <Route exact path="/most-valued" component={MostValuedMoviesPage} />
          <Route exact path="/less-valued" component={LessValuedMoviesPage} />
          <Redirect to="/all" />
        </Switch>
      </>
    </BrowserRouter>
  )
}
