import React from 'react'
import { Route } from 'react-router'
import { Home } from './home/Home'

interface Props {}

const Routes: React.FC<Props> = () => {
  return (
    <div>
      <Route exact path="/">
        <Home />
      </Route>
    </div>
  )
}

export default Routes
