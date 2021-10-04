import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import { AllMoviesPage } from '../pages/AllMoviesPage'
import { LessValuedMoviesPage } from '../pages/LessValuedMoviesPage'
import { MostValuedMoviesPage } from '../pages/MostValuedMoviesPage'
import { Wrapper } from '../components/Wrapper'
import { Header } from '../components/Header'
import { Slider } from '../components/Slider'
import { MovieSearchPage } from '../pages/MovieSearchPage'

export const BlockMasterRouter = () => {
  return (
    <BrowserRouter>
      <Wrapper>
        <Header />

        <Slider />

        <Switch>
          <Route exact path="/all" component={AllMoviesPage} />
          <Route exact path="/most-valued" component={MostValuedMoviesPage} />
          <Route exact path="/less-valued" component={LessValuedMoviesPage} />
          <Route exact path="/search" component={MovieSearchPage} />
          <Redirect to="/all" />
        </Switch>
      </Wrapper>
    </BrowserRouter>
  )
}
