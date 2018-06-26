import {connect} from "react-redux";
import React, {Component} from "react";
import {ToolbarAndroid, View} from "react-native";

import style from "./../../styles/ComponentStyles";

class BottomToolBar extends Component<{}> {

    render() {
        return (
            <View style={style.BottomToolBar.wrapper}>
                <View style={style.BottomToolBar.columnWrap}>
                    {this.props.children}
                </View>
            </View>
        );
    }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps )(BottomToolBar);
