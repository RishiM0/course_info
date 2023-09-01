import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }


  return (
    <div>
      <Header course={course}></Header>
      <Content parts={course}></Content>
      <Total exercises={course}></Total>
    </div>
  )
}

const Header = (props) => {
  return (
    <>
      <h1>{props.course['name']}</h1>
    </>
  )
}

const Content = (props) => {
  return (
    <>
      <p> {props.parts['parts'][0]['name']} exercises= {props.parts['parts'][0]['exercises']} </p>
      <p> {props.parts['parts'][1]['name']} exercises= {props.parts['parts'][1]['exercises']} </p>
      <p> {props.parts['parts'][2]['name']} exercises= {props.parts['parts'][2]['exercises']} </p>
    </>
  )
}

const Part = (props) => {
  return (
    <>
      <p>{props.part} {props.exercises}</p>
    </>
  )
}

const Total = (props) => {
  let exerciseCounts = props.exercises['parts'];
  let totalCount = 0;
  for (let count in exerciseCounts) {
    totalCount += exerciseCounts[count]['exercises'];
  }

  return (
    <>
      <p>Number of exercises {totalCount}</p>
    </>
  )

}

export default App
