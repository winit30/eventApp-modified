import { Actions, ActionConst } from 'react-native-router-flux';

module.exports = {
  redirectTo: (scene) => {
    Actions.reset(scene);
  }
}
