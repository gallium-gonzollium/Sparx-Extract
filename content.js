(function() {
    const spanElement = document.querySelector('span[class^="_TextElement_"]');
    
    if (spanElement) {
        chrome.runtime.sendMessage({ content: spanElement.innerHTML });
    } else {
        chrome.runtime.sendMessage({ content: '[No Sparx question found. Please try again.]' });
    }
})();

