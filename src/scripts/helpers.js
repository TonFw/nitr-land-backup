function isItEnv(type) {
  var envLocal = (location.hostname === "localhost" || location.hostname === "127.0.0.1");

  if(type == 'production') {
    return !envLocal;
  } else if(type == 'test' || type == 'development') {
    return envLocal;
  } else {
    return !envLocal;
  }
}

function currentLead() {
  return JSON.parse(localStorage.lead);
}
