import React, { useState } from "react";

export default function About(props) {
  let myStyle = {
    color: props.mode === 'dark'?'white':'black',
    backgroundColor: props.mode === 'dark'?'rgb(36 74 104)':'white'
  }



  // const [myStyle, setmyStyle] = useState({
  //   color: "black",
  //   backgroundColor: "white",
  // });

  // const [btntext, setBtntext] = useState("Enable Dark Mode");

  // const toggleStyle = () => {
  //   if (myStyle.color === "white") {
  //     setmyStyle({
  //       color: "black",
  //       backgroundColor: "white",
  //     });
  //     setBtntext("Enable Dark Mode");
  //   } else {
  //     setmyStyle({
  //       color: "white",
  //       backgroundColor: "black",
  //     });
  //     setBtntext("Enable Light Mode");
  //   }
  // };

  return (
    <div className="container" style={{color: props.mode === 'dark'?'white':'black'}}>
      <h2 className="my-3">About Us</h2>
      <div className="accordion my-2" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>Analyze Your text </strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            style={myStyle}
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Textutils gives you a way to analyze your text quickly and
              efficiently. Be it word count, character count or to removes extra
              spaces.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingTwo" style={myStyle}>
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>Free to use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            style={myStyle}
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              TextUtils is a free character counter tool that provides instant
              character count & word count statistics for a given text.
              TextUtils reports the number of words and characters. Thus it is
              suitable for writing text with word/ character limit.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingThree" style={myStyle}>
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            style={myStyle}
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              This word counter software works in any web browsers such as
              Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to
              count characters in facebook, blog, books, excel document, pdf
              document, essays, etc.
            </div>
          </div>
        </div>
      </div>
      {/* <button onClick={toggleStyle} className="btn btn-primary my-2">
        {btntext}
      </button> */}
    </div>
  );
}
