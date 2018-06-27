import {connect} from "react-redux";
import React, {Component} from "react";
import {StatusBar, Text, View} from "react-native";

import Loader from "./components/modals/Loader";
import Routes from "./config/Routes";

import styles from "./styles/styles";
import theme from "./styles/theme";

class Main extends Component<{}> {

    componentDidMount() {
        this.autoLogin();
    }

    autoLogin = () => {}

    render() {
        let {loggedIn} = this.props;
        return (
            <View style={styles.mainContainer}>
                <StatusBar backgroundColor={theme.primary.dark} barStyle="light-content"/>
                <Routes loggedIn={loggedIn} />
                <Loader />
            </View>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.loggedIn
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
