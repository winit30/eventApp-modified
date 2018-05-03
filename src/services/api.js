import {BASE_URL} from "./../config/settings";
import {GOOGLE_AUTOCOMPLETE_URL, GOOGLE_PLACE_DETAILS_URL} from "./../constants/urls";
import {PLACES_API_KEY} from "./../config/settings";

var requests = [];

_abortRequests = () => {
    requests.map(r => r.abort());
    requests = [];
}

export const fetchApi = async (url, method, reqBody = {}, headers = {}) => {
    try {
        const URL = BASE_URL.concat(url);
        const fetchParams = {method, headers};
        if (method === "POST" || method === "PUT") {
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
            }, 10000);
        });
        const response = await Promise.race([fetchPromise, timerPromise]);
        return response;
    } catch(err) {
          return err;
    }
}

export const fetchGoogleApi = (queryString, type) => {
    const xhr = new XMLHttpRequest();
    let url;
    if (queryString && type === "autocomplete") {
        _abortRequests();
        requests.push(xhr);
        url = `${GOOGLE_AUTOCOMPLETE_URL}?&input=${queryString}&key=${PLACES_API_KEY}`;
    } else if (queryString && type === "details") {
        url = `${GOOGLE_PLACE_DETAILS_URL}?&placeid=${queryString}&key=${PLACES_API_KEY}`;
    } else {
        return false;
    }
    xhr.open('GET', url, true);
    xhr.send();
    return new Promise(function (resolve, reject) {
        xhr.onreadystatechange = function() {
            if (this.readyState == 4 && this.status === 200) {
                if(typeof this.responseText === "string") {
                    const response = JSON.parse(this.responseText);
                    resolve(response);
                } else {
                    reject("Something went wrong");
                }
            } else if(this.readyState == 4 && this.status !== 200){
                reject("Something went wrong");
            }
        }
    });
}
