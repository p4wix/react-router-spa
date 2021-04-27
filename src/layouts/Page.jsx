import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../pages/HomePage";

const Page = () => {
	return (
		<Switch>
			<Route path="/" exact component={HomePage} />;
			<Route path="/" exact component={ProductPage} />;
			<Route path="/" exact component={ContactPage} />;
			<Route path="/" exact component={AdminPage} />;
			<Route path="/" exact component={ErrorPage} />;
		</Switch>
	);
};

export default Page;
