import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Header = () => {
  return (
    <h1> 
      give feedback
    </h1>
  )
}

const Statistics = (props) => {
  if (props.badCount === 0 && props.goodCount === 0 && props.neutralCount === 0) {
    return (
      <div>
        <h1>
          statistics
        </h1>
        <p>
          No feedback given
        </p>
      </div>
    )
  }
  return (
    <div>
      <h1>
        statistics
      </h1>
      <p>
        good {props.goodCount}
      </p>
      <p>
        neutral {props.neutralCount}
      </p>
      <p>
        bad {props.badCount}
      </p>
      <p>
        all {props.goodCount + props.neutralCount + props.badCount}
      </p>
      <p>
        average {(props.goodCount - props.badCount)/
        (props.goodCount + props.neutralCount + props.badCount)}
      </p>
      <p>
        positive {props.goodCount*100/(props.goodCount + props.neutralCount + props.badCount)} %
      </p>
    </div>
  )
}

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)
 
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  //const [all, setAll] = useState(0)


  const handleClickGoodButton = () => {
    setGood(good + 1)
    //setAll(all + 1)
  }

  const handleClickNeutralButton = () => {
    setNeutral(neutral + 1)
    //setAll(all + 1)
  }

  const handleClickBadButton = () => {
    setBad(bad + 1)
    //setAll(all + 1)
  }

  return (
    <div>
      <Header/>
      <Button text="good" handleClick={handleClickGoodButton}/>
      <Button text="neutral" handleClick={handleClickNeutralButton}/>
      <Button text="bad"handleClick={handleClickBadButton} />      
      <Statistics goodCount={good} neutralCount={neutral} badCount={bad} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
