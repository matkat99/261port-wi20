export function qs(query) {
  return document.querySelector(query);
}

export function qsa(query) {
  return document.querySelectorAll(query);
}

export function bindTouch(selector, callback) {
  qs(selector).addEventListener("touchend", e => {
    //e.preventDefault();
    console.log("touch", this);
    callback();
  });
  qs(selector).addEventListener("click", function(e) {
    callback();
    console.log("click", this);
  });
}

export function getJSON(url, options = null) {
  return fetch(url, options)
    .then(function(response) {
      if (!response.ok) {
        throw Error(response.statusText);
      } else {
        return response.json();
      }
    })
    .catch(function(error) {
      console.log(error);
    });
}

export const getLocation = function(options) {
  return new Promise(function(resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject, options);
  });
};
