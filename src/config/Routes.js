import React, {Component} from "react";
import {Router, Scene} from "react-native-router-flux";

import {Login, Register, Dashboard, CreateEvent} from "./../screens";
import {EventFirstScreen, EventSecondScreen} from "./../screens/createEventScreens";
import ViewEvent from "./../screens/users/eventPages/ViewEvent";
import AppliersList from "./../screens/users/eventPages/AppliersList";
import UserProfile from "./../screens/users/profile/UserProfile";

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
												<Scene tabs key="createEvent" hideNavBar={true} hideTabBar={true} swipeEnabled={false} tabBarPosition="bottom">
														<Scene key="firstScreen" hideNavBar={true}  component={EventFirstScreen} />
														<Scene key="secondScreen" hideNavBar={true}  component={EventSecondScreen} />
												</Scene>
												<Scene key="viewEvent" component={ViewEvent} title="View Event"/>
												<Scene key="viewAppliers" component={AppliersList} title="View Appliers List"/>
												<Scene key="viewProfile" component={UserProfile} title="View Profile"/>
										</Scene>
								</Scene>
						</Router>
				);
		}
}
