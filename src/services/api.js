import {BASE_URL} from "./../config/settings";

export const fetchPostApi = async (url, body, headers = {}) => {
    const URL = BASE_URL.concat(url);
    try {
        headers["Accept"] = "application/json";
        headers["Content-Type"] = "application/json";

        const fetchPromise = fetch(URL, {method: 'POST', headers: headers, body: JSON.stringify(body)});

        const timerPromise = new Promise((resolve, reject) => {
            setTimeout(function() {
                reject("Request timeout");
            }, 15000);
        });

        const response = await Promise.race([fetchPromise, timerPromise]);
        return response;

    } catch(err) {
          return err;
    }
}

export const fetchGetApi = async (url, headers = {}) => {
    const URL = BASE_URL.concat(url);
    try {

        const fetchPromise = fetch(URL, {method: 'GET', headers: headers});

        const timerPromise = new Promise((resolve, reject) => {
            setTimeout(function() {
                reject("Request timeout");
            }, 15000);
        });

        const response = await Promise.race([fetchPromise, timerPromise]);
        return response;

    } catch(err) {
          return err;
    }
}

export const logoutApi = async (url, headers = {}) => {
    const URL = BASE_URL.concat(url);
    try {

        const fetchPromise = fetch(URL, {method: 'DELETE', headers: headers});

        const timerPromise = new Promise((resolve, reject) => {
            setTimeout(function() {
                reject("Request timeout");
            }, 15000);
        });

        const response = await Promise.race([fetchPromise, timerPromise]);
        return response;

    } catch(err) {
          return err;
    }
  }
