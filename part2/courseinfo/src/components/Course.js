import React from 'react'

const Header = ({ course }) => {
    return (
      <h2>{course.name}</h2>
    )
  }
  
  const Total = ({ course }) => {
    //console.log(course.parts)
    const parts = course.parts
    // let sum = 0
    // var part
    // for (part of course.parts) {
    //   sum += part.exercises
    // }
    const reducer = (accumulator, currentValue) => accumulator + currentValue.exercises;
    const total = parts.reduce(reducer, 0)
    return(
      <p><b>total of {total} exercises</b></p>
    ) 
  }
  
  const Part = (props) => {
    return (
      <p>
        {props.part.name} {props.part.exercises}
      </p>    
    )
  }
  
  const Content = ({ course }) => {
    return (
      <div>
        
        {course.parts.map(part => 
          <Part key={part.id} part={part}  />)
        }
        
      </div>
    )
  }
  
  const Course = ({course}) => {
    return (
      <div>
        <Header course={course} />
        <Content course={course} />
        <Total course={course} />
      </div>
    )
  }

  export default Course