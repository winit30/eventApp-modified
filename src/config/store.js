import {AsyncStorage} from "react-native";
import {applyMiddleware, compose, createStore} from "redux";
import hardSet from "redux-persist/lib/stateReconciler/hardSet";
import {persistStore, persistReducer} from "redux-persist";

import reducers from "../reducers";

const persistConfig = {
    key: "root",
    storage: AsyncStorage,
    whitelist: ["auth", "form"],
    blacklist: ["utils", "event", "userProfile"]
}

const persistedReducer = persistReducer(persistConfig, reducers);

export default () => {
    let store = createStore(persistedReducer);
    let persistor = persistStore(store);
    return {store, persistor};
}
