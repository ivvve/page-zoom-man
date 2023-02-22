function onMouseWheel(callback) {
  document.addEventListener("wheel", callback, { passive: false });
}

function isCommandKeyPressed(event) {
  return event.metaKey;
}

function isMouseWheelUp(event) {
    return event.deltaY < 0;
}

function sendMessageToBackground(message) {
    chrome.runtime.sendMessage(message);
}

// main content function
onMouseWheel((event) => {
  if (!isCommandKeyPressed(event)) {
    return;
  }

  sendMessageToBackground({ direction: isMouseWheelUp(event) ? "zoomIn" : "zoomOut" });
  event.preventDefault();
});