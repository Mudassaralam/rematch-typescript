import React, { Fragment, useEffect } from "react";
import GlobalStyles from "./globalStyles";
import UserList from "./components/UserList";
import Header from "./components/Header";
import ToastList from "./components/ToastList";
import { Provider } from "react-redux";
import store, { RootState, Dispatch } from "./store/index";
import { useSelector, useDispatch } from "react-redux";
import User from "./components/Users/users";
const App = () => {
	const countState = useSelector((state: RootState) => state.count);
	console.log("state", countState);
	const dispatch = useDispatch<Dispatch>();
	// useEffect(() => {
	// 	dispatch.count.incrementAysnc(2);
	// }, []);
	// console.log(countState);

	return (
		<Fragment>
			<GlobalStyles />
			<Header />
			<User />
		</Fragment>
	);
};

export default App;
