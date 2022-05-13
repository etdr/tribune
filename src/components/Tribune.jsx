import React, { useEffect, useState } from 'react'
import RingLoader from 'react-spinners/RingLoader'
import { css } from '@emotion/react'
import Section from './Section'

const ringcss = css`
  place-self: center center;
`


export default function Tribune ({programs, intro, outro}) {

  // const [wd, setWd] = useState({
  //   name: 'Web Development',
  //   posts: posts.filter(p => p.cohort.program === 'wd')
  // })
  // const [sd, setSd] = useState([])
  // const [cy, setCy] = useState([])
  // const [ux, setUx] = useState([])
  // py


  // useEffect(() => {
  //   setWd({posts.filter(p => p.cohort.program === 'wd'))
  //   setSd(posts.filter(p => p.cohort.program === 'sd'))
  //   setCy(posts.filter(p => p.cohort.program === 'cy'))
  //   setUx(posts.filter(p => p.cohort.program === 'ux'))
  // }, [posts])


  if (!programs) return (
    <main className="centercenter"><RingLoader size={200}  /></main>
  )

  return (
    <main>
      { intro ? <section className="int-out-ro" id="intro-section">
        <p>{intro}</p>
      </section> : null }
      { Object.values(programs)
         .map((sec, i) => <Section sec={sec} key={i} />)}
      { outro ? <section id="outro-section">
        <p>{outro}</p>
      </section> : null }
    </main>
  )
}
