import React from 'react'
import { Switch, Route, Link, Redirect } from 'react-router-dom'

import Poster from './poster/Poster'
import Manager from './manager/Manager'

export default function Admin (props) {

  if (!props.admin) return <Redirect to="/" />

  return (
    <>
      <h1 id="maintitle"><Link to="/admin">Admin Portal</Link></h1>
      <div id="info">
        <div id="info-line1">
          <h2 id="edition"><em>You are logged in as</em> {props.email}</h2>
          <div className="info-spacer"></div>
          <h2 id="date">Today is {(new Date()).toISOString()}</h2>
        </div>
        <div className="info-spacer"></div>
        <div id="info-line2">
          <Route path="/admin/poster"><h2 id="title">Poster</h2></Route>
          <Route path="/admin/manager"><h2 id="title">Manager</h2></Route>
        </div>
      </div>

      <Switch>
        <Route path="/admin/poster">
          <Poster token={props.token} />
        </Route>
        <Route path="/admin/manager">
          <Manager token={props.token} />
        </Route>
        <Route path="/admin">
          <ul className="in-tribune horizontal-ul">
            <li><h3><Link to="/admin/poster">Poster</Link></h3></li>
            <li><h3><Link to="/admin/manager">Manager</Link></h3></li>
          </ul>
        </Route>
      </Switch>
    </>
  )
}