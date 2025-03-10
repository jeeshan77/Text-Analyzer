import React, { Component } from 'react';
// import { AiOutlineGithub } from 'react-icons/ai';
import { FaGithub } from "react-icons/fa";
export class Footer extends Component {
  render() {
    let styles = {
      fontSize: '2em',
      color: 'black',
      marginLeft: '.9rem',
    };
    //bolt emoji &#128498;
    return (
      <div>
        <footer className="footer mt-auto py-2 bg-light">
          <div className="container mb-2 text-center">
            <span className="text-muted">
              Made with ❤️ by Jeeshan.
              <a style={styles} href="https://github.com/jeeshan77/TextUtils">
                <FaGithub /> 
              </a>
            </span>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;

