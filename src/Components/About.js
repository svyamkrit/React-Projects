import React from 'react'
function About(props) {

  let myStyle = {

    color: props.mode === 'light'? 'black': 'white', 
    backgroundColor: props.mode === 'dark'? '#040015': 'white'
  
   }

  return (
  <div className="container mt-5" style={myStyle}>
      <div>
      <div className="accordion" id="accordionExample" >
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}  >
      Text Transformation Hub
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" >
      Explore a dynamic platform that effortlessly converts text between uppercase and lowercase, trims extra spaces, and facilitates seamless copy-to-clipboard functionality.
      Elevate your content with our user-friendly tool, offering word and lines counters, uppercase to lowercase, and vice versa. Time-to-read estimates ensure smart time management.
      Embark on a journey of expressive communication. Experience the power of words with <strong>TextUtils</strong>, where efficiency meets creativity.
      </div>
    </div>
  </div>
  <div className="accordion-item"style={myStyle} >
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
      Efficiency and Precision
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body"   >
      Elevate your content with our user-friendly tool, offering word and lines counters, uppercase to lowercase, and vice versa. Time-to-read estimates ensure smart time management.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
      Join the Transformation
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body" >
      Embark on a journey of expressive communication. Experience the power of words with <strong>TextUtils</strong>, where efficiency meets creativity.
      </div>
    </div>
  </div>
</div>
    </div>
  </div>
  )
}

export default About
