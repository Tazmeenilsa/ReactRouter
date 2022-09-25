import React from 'react'
import { Link, Route, Switch, useRouteMatch, } from 'react-router-dom'
import About from './About';
export default function Home() {
  let { url, path } = useRouteMatch();
  return (
    <div>
     
      <ul>
        <li>
          <Link to={`${url}/rendring`} >rendring</Link>
        </li>
        <li>
          <Link to={`${url}/components `} >components</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path={path} >
        <h2>Please Select A Topic</h2>
        </Route>
        <Route path={`${path}/:subId`} >
          <About />
          </Route>

      </Switch>
    </div>
  )
}
