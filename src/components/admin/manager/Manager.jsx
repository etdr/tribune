import React, { useState } from 'react'
import { Switch, Route, Link, Redirect } from 'react-router-dom'

import TribuneManager from './TribuneManager'
import CohortManager from './CohortManager'

export default function Manager (props) {
  
  
  
  return (
    <main>
      <ul className="horizontal-ul gray-underline">
        {/* <li><Link to="/admin/poster/p">Post</Link></li> */}
        <li><Link to="/admin/manager/t">Tribune</Link></li>
        <li><Link to="/admin/manager/i">Individual</Link></li>
        <li><Link to="/admin/manager/c">Cohort</Link></li>
        {/* <li><Link to="/admin/poster/r">Rank</Link></li> */}
      </ul>
      
      <Switch>
        <Route path="/admin/manager/t">
          <TribuneManager token={props.token} />
        </Route>
        <Route path="/admin/manager/c">
          <CohortManager token={props.token} />
        </Route>
      </Switch>
    </main>
  )
}