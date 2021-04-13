import React from 'react'
import RingLoader from 'react-spinners/RingLoader'
import { css } from '@emotion/react'
import Section from './Section'

const ringcss = css`
  place-self: center center;
`


export default function Tribune ({content, intro, outro}) {


  if (!content) return (
    <main className="centercenter"><RingLoader size={200}  /></main>
  )

  return (
    <main>
      <section className="int-out-ro" id="intro-section">
        <p>{intro}</p>
      </section>
      {[content.wd, content.sd, content.cy, content.ux]
         .map((sec, i) => <Section sec={sec} key={i} />)}
      <section id="outro-section">
        <p>{outro}</p>
      </section>
    </main>
  )
}
