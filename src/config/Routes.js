import React, {Component} from "react";
import {Router, Scene} from "react-native-router-flux";

import {Login, Register, Dashboard, CreateEvent} from "./../screens";

export default class Routes extends Component<{}> {

		render() {

				let {loggedIn} = this.props;

				return(
						<Router>
								<Scene>
										<Scene key="auth" hideNavBar={true} initial={!loggedIn} >
												<Scene key="login" component={Login} title="Login" />
												<Scene key="signup" component={Register} title="Register"/>
										</Scene>
										<Scene key="user" hideNavBar={true} initial={loggedIn}>
												<Scene key="dashboard" component={Dashboard} title="Dashboard"/>
												<Scene key="createEvent" component={CreateEvent} title="Create Event"/>
										</Scene>
								</Scene>
						</Router>
				);
		}
}
