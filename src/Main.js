import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, StatusBar, AsyncStorage, DrawerLayoutAndroid, Text} from 'react-native';
import { Actions, ActionConst } from 'react-native-router-flux';
import styles from './styles/styles';
import Routes from './config/Routes';
import Loader from './components/modals/Loader';
import Sidebar from './components/sidebar/Sidebar';

class Main extends Component<{}> {

  constructor(props) {
    super(props)
    this.autoLogin = this.autoLogin.bind(this);
    this.renderComponent = this.renderComponent.bind(this);
  }

  componentDidMount() {
    this.autoLogin();
  }

  autoLogin() {}

  renderComponent(loggedIn, loader) {

      if (loggedIn && !loader) {

          let { mapInput } = this.props;

          const navigationView = (
            <Sidebar/>
          );

          return(
            <DrawerLayoutAndroid
                drawerWidth={290}
                ref={(node) => mapInput("drawer", node)}
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                renderNavigationView={() => navigationView}>

                <Routes loggedIn={loggedIn}/>

            </DrawerLayoutAndroid>
          )

      } else if (!loggedIn && !loader) {

          return <Routes loggedIn={loggedIn}/>;

      }
  }

  render() {

    let {loggedIn, loader} = this.props;

    return (
      <View style={styles.mainContainer}>
        <StatusBar backgroundColor="#001970" barStyle="light-content"/>
        {this.renderComponent(loggedIn, loader)}
        <Loader loader={loader} />
      </View>
    );
  }
}

const mapStateToProps = state => ({
    token: state.auth.token,
    loggedIn: state.auth.loggedIn,
    loader: state.utils.loader
});

const mapDispatchToProps = dispatch => ({
    mapInput: (property, node) => dispatch({
        type:'MAP_INPUT',
        property,
        node
    })
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
