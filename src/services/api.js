import {BASE_URL} from "./../config/settings";

export const fetchApi = async (url, method, reqBody = {}, headers = {}) => {
    try {
        const URL = BASE_URL.concat(url);
        const fetchParams = {method, headers};

        if (method === "POST") {
            fetchParams.headers["Accept"] = "application/json";
            fetchParams.headers["Content-Type"] = "application/json";
            const body = Object.keys(reqBody).length && JSON.stringify(reqBody);
            if(!body) {
                throw new Error("Request body required");
            } else {
                fetchParams["body"] = body;
            }
        }

        const fetchPromise = fetch(URL, fetchParams);

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
