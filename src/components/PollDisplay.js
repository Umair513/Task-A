import React from 'react'

const PollDisplay = () => {
    const obj = {

        "question": "What is your favorite programming language?",

        "choices": [

            { "id": 1, "label": "JavaScript", "votes": 0 },

            { "id": 2, "label": "Python", "votes": 0 },

            { "id": 3, "label": "Java", "votes": 0 },

            { "id": 4, "label": "C#", "votes": 0 }


        ]
    }
  return (
      <div>
          <div>
              <h1>Question</h1>
              <h1>{obj.question}</h1>
              <h3 style={{ cursor: "pointer" }}>{obj.choices[0].label}</h3>
              <h3 style={{ cursor: "pointer" }}>{obj.choices[1].label}</h3>
              <h3 style={{ cursor: "pointer" }}>{obj.choices[2].label}</h3>
              <h3 style={{ cursor: "pointer" }}>{obj.choices[3].label}</h3>
          </div>
          <div>
              <h3>Votes for are {obj.choices[0].label} are {obj.choices[0].votes}</h3>
              <h3>Votes for are {obj.choices[1].label} are {obj.choices[1].votes}</h3>
              <h3>Votes for are {obj.choices[2].label} are {obj.choices[2].votes}</h3>
              <h3>Votes for are {obj.choices[3].label} are {obj.choices[3].votes}</h3>
          </div>
          <div>
              <button>Submit</button>
          </div>

    </div>
  )
}

export default PollDisplay
