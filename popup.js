document.addEventListener('DOMContentLoaded', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            files: ['content.js']
        });
    });

    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
        if (message.content) {
            const contentElement = document.getElementById('content');

            const regex = /<span class="m.*?">.*?<\/span>|<m.*?>.*?<\/m.*?>|<(?:.|\n)*?>|&nbsp;/g;
        //  const regex = /<span class="m.*?">.*?<\/span>|<m.*?>.*?<\/m.*?>|<(?:.|\n)*?>|&nbsp;|[Gg]ive your answer to [0-9].*?[ds].*?[pf](.|)/g;
            const cleanedContent = message.content.replace(regex, '');

            contentElement.textContent = cleanedContent;
        }
    });
});

