export const fetchPostApi = async (url, body, headers = {}) => {
    try {
        headers["Accept"] = "application/json";
        headers["Content-Type"] = "application/json";

        const fetchPromise = fetch(url, {method: 'POST', headers: headers, body: JSON.stringify(body)});

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
    try {

        const fetchPromise = fetch(url, {method: 'GET', headers: headers});

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
    try {

        const fetchPromise = fetch(url, {method: 'DELETE', headers: headers});

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
