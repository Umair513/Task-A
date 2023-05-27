import React, { useEffect, useState } from 'react'

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
    const [obj1, setObj] = useState({})
    // const test = 10;
    // obj.choices[0].votes = test
    const [jsVote, setJsVote] = useState(0);
    const [pyVote, setPyVote] = useState(0);
    const [javaVote, setJavaVote] = useState(0);
    const [cVote, setCVote] = useState(0);
    console.log(jsVote)
    const onSubmit = () => {
        console.log("submitted")
        obj.choices[0].votes += jsVote
        obj.choices[1].votes += pyVote
        obj.choices[2].votes += javaVote
        obj.choices[3].votes += cVote
        alert(obj.choices[0].votes)
        // setObj([...obj, obj.choices[0].votes = jsVote ])
        
    }
    const handleChange = e => {
        const { name, value } = e.target;
        if (value == "javaScript") {
            setJsVote(jsVote + 1)
        }
        else if (value == "python") { 
            setPyVote(pyVote + 1)
        }
        else if (value == "java") {
            setJavaVote(javaVote + 1)
        }
        else if (value == "c#") {
            setCVote(cVote + 1)
        }

    }

    
    
  return (
      <div>
          <div>
              <h1>Question</h1>
              <h1>{obj.question}</h1>
              {/* <h3 style={{ cursor: "pointer" }} onClick={() => setJsVote(jsVote + 1)}>{obj.choices[0].label}</h3>
              <h3 style={{ cursor: "pointer" }}>{obj.choices[1].label}</h3>
              <h3 style={{ cursor: "pointer" }}>{obj.choices[2].label}</h3>
              <h3 style={{ cursor: "pointer" }}>{obj.choices[3].label}</h3> */}
          </div>
          <div>
              <h3>Votes for are {obj.choices[0].label} are {obj.choices[0].votes}</h3>
              <h3>Votes for are {obj.choices[1].label} are {obj.choices[1].votes}</h3>
              <h3>Votes for are {obj.choices[2].label} are {obj.choices[2].votes}</h3>
              <h3>Votes for are {obj.choices[3].label} are {obj.choices[3].votes}</h3>
              
          </div>
          <div>
              <div className="radio-buttons">
                  javaScript
                  <input
                      id= "1"
                      value="javaScript"
                      name="platform"
                      type="radio"
                      onChange={handleChange}
                  />
                  <br></br>
                  Python
                  <input
                      id="2"
                      value="python"
                      name="platform"
                      type="radio"
                      onChange={handleChange}
                  />
                  <br></br>
                  Java
                  <input
                      id="3"
                      value="java"
                      name="platform"
                      type="radio"
                      onChange={handleChange}
                  />
                  <br></br>
                  C#
                  <input
                      id="4"
                      value="c#"
                      name="platform"
                      type="radio"
                    onChange={handleChange}
                  />
              </div>
              <button onClick={() => onSubmit()}>Submit</button>
          </div>


    </div>
  )
}

export default PollDisplay
