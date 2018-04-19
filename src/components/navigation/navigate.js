import {Actions, ActionConst} from "react-native-router-flux";

export const redirectTo = (scene) => {
    if (Actions.currentScene) {
        Actions.reset(scene);
    }
}
