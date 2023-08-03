import React, { useState } from 'react'

export default function About() {
    let head = {
        textAlign :'center'
    }

    const [btnText,setBtnText]=useState("Enable Dark mode")

    const [myStyle,setmyStyle]=useState({
        color : 'Black',
        backgroundColor : 'White'
    })
    const handleDarkMode = ()=>{
        if(myStyle.color === 'Black'){
            setmyStyle({
                color:'White',
                backgroundColor:'Black'
            })
            setBtnText("Enable Light mode")
        }
        else{
            setmyStyle({
                color:'Black',
                backgroundColor:'White'
            })
            setBtnText("Enable Dark mode")
        }
    }

   
  return (
      <>
      <div className='container' style={myStyle}>
        <h1 style={head}>About US</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button style={myStyle} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Project Name: TEXTUTILS
                    </button>
                    </h2>
                    <div style={myStyle} id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <b>Description:</b>

                        TEXTUTILS is a comprehensive and robust software toolkit designed to facilitate seamless and efficient text processing and manipulation tasks. This project is aimed at harnessing the power of natural language processing (NLP) and machine learning algorithms to help individuals, developers, and businesses streamline their text-related tasks. 

                        The toolkit provides a wide range of functionalities that include text extraction, text summarization, sentiment analysis, topic modeling, named entity recognition, language detection, and many more. The sophisticated underlying algorithms enable users to perform complex text analysis tasks in real-time, providing valuable insights into their text data.

                        The TEXTUTILS project is developed with an easy-to-use API, making it accessible for developers with varying experience levels. It also includes a user-friendly GUI for non-tech users, enabling them to execute text-related tasks without any coding.

                        The toolkit can be utilized in various fields like market research, customer service, content creation, academia, etc. For instance, it can be used for processing customer reviews, doing sentiment analysis, performing academic research, creating summaries of long articles, and much more.

                        Furthermore, TEXTUTILS provides a scalable solution that can handle large volumes of text data, making it a reliable choice for big data applications. This robust tool opens up new horizons for text data processing, bringing in more efficiency and productivity. 

                        Overall, TEXTUTILS is a powerful tool designed to make text manipulation tasks faster, more reliable, and highly accurate.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Accordion Item #2
                </button>
                </h2>
                <div style={myStyle} id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Accordion Item #3
                </button>
                </h2>
                <div style={myStyle} id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
            </div>
            <div className="container">
            <button onClick={handleDarkMode} type="button" className="btn btn-primary my-1">{btnText}</button>
            </div>
        </div>
    </>
  )
}
