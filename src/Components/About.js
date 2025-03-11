
// import React from 'react'
// import { FaInstagram } from "react-icons/fa";
// import { FaLinkedin } from "react-icons/fa";
// import { SiGmail } from "react-icons/si";

// export default function About(props) {

//     // const [myStyle, setMyStyle] = useState({
//     //     color: 'black',
//     //     backgroundColor: 'white'
//     // }) 
//     let myStyle = {
//         color: props.mode === 'dark' ? 'white' : '#042743',
//         backgroundColor: props.mode === 'dark' ? '#473939' : 'white',
//     }
//     let iconStyles = { margin:"1rem", fontSize: "1.5em" };
//     return (
//         <div className="container">
//             <h1 className="my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>About Us</h1>
//             <div className="accordion" id="accordionExample">
//                 <div className="accordion-item">
//                     <h2 className="accordion-header" id="headingOne">
//                         <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
//                             <strong>Analyze Your text </strong>
//                         </button>
//                     </h2>
//                     <div id="collapseOne" className="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
//                         <div className="accordion-body" style={myStyle}>
//                             Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count.

//                         </div>
//                     </div>
//                 </div>
//                 <div className="accordion-item">
//                     <h2 className="accordion-header" id="headingTwo">
//                         <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
//                             <strong>Free to use </strong>
//                         </button>
//                     </h2>
//                     <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
//                         <div className="accordion-body" style={myStyle}>
//                             TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
//                         </div>
//                     </div>
//                 </div>
//                 <div className="accordion-item">
//                     <h2 className="accordion-header" id="headingThree">
//                         <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
//                             <strong>Browser Compatible </strong>
//                         </button>
//                     </h2>
//                     <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
//                         <div className="accordion-body" style={myStyle}>
//                             This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.

//                         </div>
//                     </div>
//                 </div>
                
//                 <div className="accordion-item">
//                     <h2 className="accordion-header" id="headingFour">
//                         <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
//                             <strong>Developer of Text Analyzer </strong>
//                         </button>
//                     </h2>
//                     <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
//                         <div className="accordion-body" style={myStyle}>
//                             It is developed by Jeeshan
//                         </div>
//                     </div>
//                 </div>
//                 <div className="accordion-item">
//                     <h2 className="accordion-header" id="headingFive">
//                         <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
//                             <strong>Contact us </strong>
//                         </button>
//                     </h2>
//                     <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
//                         <div className="accordion-body" style={myStyle}>
//                         <a href="https://www.linkedin.com/in/jeeshan-gosain/">
//                                 <FaLinkedin style={iconStyles} />
//                                 </a>
//                                 <a href="mailto:jeeshankmr2004@gmail.com
//                                 ?subject=Hello">
//                                 <SiGmail style={iconStyles}/>
//                                 </a>
//                                 <a href="https://www.instagram.com/jaanu_._.7?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
//                                 <FaInstagram style={iconStyles} /> 
//                                 </a>

//                         </div>
//                     </div>
//                 </div>

//             </div>

//         </div>
//     )
// }
