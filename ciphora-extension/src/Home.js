/*global chrome*/
import React, { Component } from 'react';

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      uniqueCode: `<ciphora>`,// 
      inputs: {
        priceperword: '0.05'
      }
    }
  }

  nextTapped_det = () => {

    var config = {
      code: this.state.uniqueCode
    };

    if(this.state.inputs.priceperword > 0) {
      config['priceperword'] = this.state.inputs.priceperword;
    }

    var css = "@import url('https://fonts.googleapis.com/css2?family=Special+Elite&display=swap'); #ciphora-flt-dv { padding: 8px; z-index: 999; position: fixed; width: 140px; bottom: 40%; right: 40px; background-color: #B0FF8B; color: black; border-radius: 20px; text-align: center; box-shadow: 2px 2px 3px #999; } .ciphora-flt-p { margin: 2px; font-family: 'Special Elite'; font-size: 22px; } .ciphora-pfnt { margin: 2px; font-family: 'Special Elite'; font-size: 14px; }";
    chrome.tabs.insertCSS({code: css});

    chrome.tabs.executeScript({
      file: 'jquery.js'
    });

    chrome.tabs.executeScript({
      code: 'var config = ' + JSON.stringify(config)
    }, function() {
      chrome.tabs.executeScript({
        file: 'ciphora/ciphora.js'
      });
    })

    chrome.runtime.onMessage.addListener(request => {
      if (request.type == 'getHeadlines') {
          console.log("dadasdasdsad");
        const modal = document.createElement('dialog');
        modal.setAttribute("style", "height:40%");
        modal.innerHTML = `<iframe id="headlineFetcher"style="height:100%"></iframe>
            <div style="position:absolute; top:0px; left:5px;">  
                <button>x</button>
            </div>`;
        document.body.appendChild(modal);
        const dialog = document.querySelector("dialog");
        dialog.showModal();
        const iframe = document.getElementById("headlineFetcher");  
        iframe.src = chrome.extension.getURL("index.html");
        iframe.frameBorder = 0;
        dialog.querySelector("button").addEventListener("click", () => {
            dialog.close();
         });
      }
    });
    
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    var inputs = this.state.inputs;
    inputs[name] = value;
    this.setState({
      inputs: inputs
    })
  }

  render() {
    return (
      <div>
        <div className="header">
          <h1>Ciphora</h1>
          <p>Plugin for High End AES E2E Client Side Encryption</p>
        </div>
        <div className="contentBox">
          <div className="no-tf-dtctd">
            <p>To start analysing on websites, <span className="resalted">follow the steps</span>:</p>
            <p>1. <span className="resalted">Locate the field</span> you want to analyze</p>
            <p>2. Replace or <span className="resalted">add</span> anywhere on the field <span className="resalted">the following code</span>:</p>
            <p>Code: <span className="resalted">{this.state.uniqueCode}</span></p>
            <p>3. When ready, click start</p>
            <a href="#" onClick={this.nextTapped_det}>Start</a>
            <hr/>
            <p>Word PPi </p><input id="priceperwordInput" name="priceperword" value={this.state.inputs.priceperword} onChange={this.handleInputChange} type="number" step="0.01"/>
          </div>
        </div>
        <div className="footer">
          <a href="https://github.com/andrewflik/Ciphora-CodeBreak2.0" target="_blank"><p> Team Turing - 2020 </p></a>
        </div>
      </div>
    )
  };
}

export default Home;