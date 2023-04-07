chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.local.set({ testData: "Hello, World!" }, () => {
      console.log("Data saved.");
    });
  
    chrome.storage.local.get("testData", (result) => {
      console.log("Data retrieved:", result.testData);
    });
  });
  