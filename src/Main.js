import {connect} from "react-redux";
import { DrawerLayoutAndroid, StatusBar, Text, View} from "react-native";
import React, {Component} from "react";

import Loader from "./components/modals/Loader";
import Routes from "./config/Routes";
import Sidebar from "./components/sidebar/Sidebar";

import styles from "./styles/styles";

class Main extends Component<{}> {

    componentDidMount() {
        this.autoLogin();
    }

    autoLogin() {}

    renderComponent(loggedIn) {

        let {mapInput} = this.props;

        if (loggedIn) {

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
            );

        } else if (!loggedIn) {
              return <Routes loggedIn={loggedIn}/>;
        }
    }

    render() {

        let {loggedIn} = this.props;

        return (
            <View style={styles.mainContainer}>
                <StatusBar backgroundColor="#001970" barStyle="light-content"/>
                {this.renderComponent(loggedIn)}
                <Loader />
            </View>
        );
    }
}

const mapStateToProps = state => ({
    token: state.auth.token,
    loggedIn: state.auth.loggedIn
});

const mapDispatchToProps = dispatch => ({
    mapInput: (property, node) => dispatch({
        type:"MAP_INPUT",
        property,
        node
    })
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
