<<<<<<< HEAD
import React, {Component} from 'react'

let quizData = require('./quiz_data.json')

class Quiz extends Component{
  constructor(props){
    super(props){
      this.state= {quiz.position: 1 }
    }
  }

  render(){
    return(
      <div><div className="QuizQuestion">{quizData.quiz_questions[0]
        .instruction_text/div> </div>

    )

    
  }
}

export default Quiz
=======
import React, { Component } from 'react'

let quizData = require('./quiz_data.json')

class Quiz extends Component {
  constructor(props) {
    super(props)
    this.state = { quiz_position: 1 }
  }
  render() {
    return (
      <div>
        <div className="QuizQuestion">{quizData.quiz_questions[0].instruction_text}</div>
      </div>
    )
  }
}

export default Quiz
>>>>>>> 37462b6bb73bc7fd1a69c8bce537b4ad294986dd
