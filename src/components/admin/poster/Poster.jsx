import React, { useState } from 'react'
import { Switch, Route, Link } from 'react-router-dom'

import PostPoster from './PostPoster'
import TribunePoster from './TribunePoster'
import IndividualPoster from './IndividualPoster'

export default function Poster (props) {


  return (
    <main>
      <ul className="horizontal-ul gray-underline">
        <li><Link to="/admin/poster/p">Post</Link></li>
        <li><Link to="/admin/poster/t">Tribune</Link></li>
        <li><Link to="/admin/poster/i">Individual</Link></li>
        <li><Link to="/admin/poster/c">Cohort</Link></li>
        <li><Link to="/admin/poster/r">Rank</Link></li>
      </ul>
      
      <Switch>
        <Route path="/admin/poster/p">
          <PostPoster token={props.token} />
        </Route>
        <Route path="/admin/poster/t">
          <TribunePoster token={props.token} />
        </Route>
        <Route path="/admin/poster/i">
          <IndividualPoster token={props.token} />
        </Route>
      </Switch>
    </main>
  )
}