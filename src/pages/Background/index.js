console.log('This is the background page.');
console.log('Put the background scripts here 4.');

function decodeShadowProducts() {
  console.log('Decode shadows')
}

chrome.tabs.onActivated.addListener(tab => {
  chrome.tabs.get(tab.tabId, current_tab_info => {
    if (/^https:\/\/lod-proof-of-concept\.myshopify.com/.test(current_tab_info.url)) {
      console.log(current_tab_info.url);

      chrome.scripting.executeScript({
        target: { tabId: current_tab_info.id },
        func: decodeShadowProducts
      })
    } else {
      console.log('another tab');
    }
  })
});