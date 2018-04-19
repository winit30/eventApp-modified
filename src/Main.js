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

    autoLogin = () => {}

    mapElement = (node) => {
        let {mapElement} = this.props;
        mapElement("drawer", node);
    }

    renderComponent = () => {
        let {loggedIn, token, mapInput} = this.props;
        if (loggedIn && token) {
            const navigationView = (<Sidebar/>);
            return(
                <DrawerLayoutAndroid
                    drawerWidth={290}
                    ref={this.mapElement}
                    drawerPosition={DrawerLayoutAndroid.positions.Left}
                    renderNavigationView={() => navigationView}>
                    <Routes loggedIn={loggedIn}/>
                </DrawerLayoutAndroid>
            );
        } else {
              return <Routes loggedIn={loggedIn}/>;
        }
    }

    render() {
        return (
            <View style={styles.mainContainer}>
                <StatusBar backgroundColor="#001970" barStyle="light-content"/>
                {this.renderComponent()}
                <Loader />
            </View>
        );
    }
}

const mapStateToProps = state => ({
    token: state.auth.token,
    loggedIn: state.auth.loggedIn,
    drawer: state.element.drawer
});

const mapDispatchToProps = dispatch => ({
    mapElement: (property, node) => dispatch({
        type:"MAP_ELEMENT",
        property,
        node
    })
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
