chrome.contextMenus.create({ 
    id: 'HeadlineFetcher',
    title: 'Ciphora/Decrypt',
    contexts: ['all']
  });
  
  function getActiveTab(callback) {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const activeTab = tabs[0]
      callback(activeTab)
    })
  }
  
  // When a context menu item is clicked
  chrome.contextMenus.onClicked.addListener((info) => {
      console.log(info["selectionText"]);
      var ciphertext = info["selectionText"];
  
      //     /*Whats App*/
      //    //if(document.URL === "https://web.whatsapp.com/"){
      //       var whatt = document.getElementsByClassName("_1VzZY selectable-text invisible-space copyable-text");
      //       console.log(whatt);
      
                  const password = 'L0ck it up saf3';
                   var plaintext = ddecrypt(ciphertext, password , 256);
                   console.log(plaintext);
  
                  alert(plaintext);
                  //whatt[1].innerHTML = ; // replace it wiht inner content
                    // return encrypted file as Blob; UI thread can then use saveAs()
                  //var blob = new Blob([ciphertext], { type: 'text/plain' });
                  //self.postMessage({ progress: 'complete', ciphertext: blob });
      
         
          //}
          
  })