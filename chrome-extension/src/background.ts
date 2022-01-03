let color = '#3aa757';

chrome.runtime.onInstalled.addListener(async () => {
  chrome.storage.sync.set({ color });
  console.log('Default background color set to %cgreen', `color: ${color}`);

  let url = chrome.runtime.getURL("hello.html");

  let tab = await chrome.tabs.create({ url });

  console.log(`Created tab ${tab.id}`);
});
