//Auth URLS
export const GET_USER_URL = "/user/user";
export const LOGIN_URL = "/user/login";
export const LOGOUT_URL = "/user/logout";
export const REGISTER_URL = "/user/create";
export const GET_USER_PROFILE_URL = "/user/profile"; //pass userId as urlparams

//Event URLS
export const CREATE_EVENT_URL = "/event/create";
export const GET_EVENT_URL = "/event/events";
export const DELETE_EVENT_URL = "/event/delete";
export const UPDATE_EVENT_URL = "/event/updateEvent";

//Comment URLS
export const ADD_COMMENT_URL = "/event/comments/addComment";
export const GET_COMMENT_URL = "/event/comments/getComments"; //pass eventId as urlparams
export const DELETE_COMMENT_URL = "/event/comments/deleteComment"; //pass comment id as urlparams
export const REPLY_COMMENT_URL = "/event/comments/replyComment"; //pass comment id as urlparams
export const DELETE_REPLY_URL = "/event/comments/deleteReply"; //pass comment id as urlparams and replyId and repliedby with body

//Apply URLS
export const APPLY_EVENT_URL = "/event/applications/apply"; //pass eventId as urlparams
export const GET_APPLICATION_URL = "/event/applications/getapplication"; //pass eventId as urlparams
export const GET_APPLICATION_COUNT_URL = "/event/applications/numberofapplications"; //pass eventId as urlparams

//autocomplete url
//Example
//https://maps.googleapis.com/maps/api/place/autocomplete/json?input=Paris&types=geocode&key=YOUR_API_KEY
export const GOOGLE_AUTOCOMPLETE_URL = "https://maps.googleapis.com/maps/api/place/autocomplete/json";

//place details url
//Example
//https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJN1t_tDeuEmsRUsoyG83frY4&key=YOUR_API_KEY
export const GOOGLE_PLACE_DETAILS_URL = "https://maps.googleapis.com/maps/api/place/details/json";

//places search url
//Example
//https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670,151.1957&radius=500&types=food&name=cruise&key=YOUR_API_KEY
export const GOOGLE_PLACES_SEARCH_URL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json";
