import React from 'react'

import Section from './Section'

export default function Tribune ({content}) {



  return (
    <main>
      {[content.wd, content.sd, content.cy, content.ux].map(sec => <Section sec={sec} />)}
    </main>
  )
}
