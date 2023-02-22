function onReceiveMessageFromContent(callback) {
  chrome.runtime.onMessage.addListener(callback);
}

function shouldZoomIn(request) {
  return request.direction === "zoomIn";
}

function shouldZoomOut(request) {
  return request.direction === "zoomOut";
}

function addPageZoomFactor(amount) {
  chrome.tabs.getZoom(null, function(zoomFactor) {
    chrome.tabs.setZoom(null, zoomFactor + amount);
  });
}

// main background function
onReceiveMessageFromContent((request, _sender, _sendResponse) => {
  if (shouldZoomIn(request)) {
    addPageZoomFactor(0.1);
    return;
  }

  if (shouldZoomOut(request)) {
    addPageZoomFactor(-0.1);
    return;
  }
});