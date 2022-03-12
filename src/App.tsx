import React from "react";
import Box from "@mui/material/Box";
import {HashRouter, Redirect, Route, Switch} from "react-router-dom";
import {ContentPage} from "./pages/ContentPage";
import {DetailPage} from "./pages/DetailPage";
import {Header} from "./components/Header";
import {SearchPage} from "./pages/SearchPage";
import {TitlePage} from "./pages/TitlePage";
import {Footer} from "./components/Footer";

export function App() {

	return (
		<Box sx={{
			display: "flex",
			flexDirection: "column",
		}}>
			<HashRouter>
				<Header/>
				<Switch>
					<Route exact path="/">
						<TitlePage/>
					</Route>
					<Route path="/movie">
						<ContentPage format={"movie"}/>
					</Route>
					<Route path="/tv">
						<ContentPage format={"tv"}/>
					</Route>
					<Route path="/search_results">
						<SearchPage/>
					</Route>
					<Route path={"/:info"}>
						<DetailPage/>
					</Route>
					<Redirect to="/"/>
				</Switch>

			</HashRouter>
			<Footer/>
		</Box>
	);
}
