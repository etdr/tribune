import React, { useEffect, useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css'

import Tribune from './components/Tribune'

function App() {

  const [tribune, setTribune] = useState({
    vol: 1,
    iss: 1,
    date: '2021-04-10',
    content: {
      wd: {
        name: 'Web Development',
        articles: [
          {
            cohort: {
              name: "70B",
              instructors: "Eli T. Drumm",
              las: "Summer Kerkeres, Hustin Jeffers, Shane Cox, Cris Matson & Tristan Oshier"
            },
            content: "This past week was project week, the moment when all the hard work of the badge comes together. Seeing the classes projects turn out, all deployed to the internet and working is the highlight. Every class feels like a journey and we get to celebrate making it two thirds of the way through the program. It is times like this that make Teaching worth it."
          },
          {
            cohort: {
              name: "70A",
              instructors: "Rob Vanarsdall",
              las: "Amruta Kanvinde, Marco Lopez, Nav Loveday, Ellie Hong & Kayla Bullard"
            },
            content: "This past week was project week, the moment when all the hard work of the badge comes together. Seeing the classes projects turn out, all deployed to the internet and working is the highlight. Every class feels like a journey and we get to celebrate making it two thirds of the way through the program. It is times like this that make Teaching worth it."
          },
          {
            cohort: {
              name: "75",
              instructors: "Zach Maynard & Tayor Dickens",
              las: "Xzavier Dunn, Adam Clouse, Britany Magee"
            },
            content: "This past week was project week, the moment when all the hard work of the badge comes together. Seeing the classes projects turn out, all deployed to the internet and working is the highlight. Every class feels like a journey and we get to celebrate making it two thirds of the way through the program. It is times like this that make Teaching worth it."
          }
        ]
      },
      sd: {
        name: 'Software Development',
        articles: []
      },
      cy: {
        name: 'Cybersecurity',
        articles: []
      },
      ux: {
        name: 'UX/UI',
        articles: []
      }
    }
  })

  useEffect(() => {
    // fetch latest tribune
  })

  return (
    <div className="App">
      <h1 id="maintitle">Learning Team Tribune</h1>
      <div id="info">
        <h2 id="edition">Volume {tribune?.vol}, Issue {tribune?.iss}</h2>
        <div id="info-spacer"></div>
        <h2 id="date">{tribune?.date}</h2>
      </div>
      <BrowserRouter>

        <Switch>
          <Route path="/admin">
            <Route path="/post"></Route>
            <Route path="/manage"></Route>
          </Route>
          <Route path="/"><Tribune content={tribune?.content} /></Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
