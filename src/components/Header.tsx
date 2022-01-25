import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import {useDispatch} from "react-redux";
import IconButton from "@mui/material/IconButton";
import {getContentList} from "../store/movieLayer/actions";

export const Header = () => {
	const dispatch = useDispatch();

	const handleFormat = (value: string): any => {
		dispatch(getContentList({format: value, page: 1}));
	};

	return (
		<AppBar position="static" sx={{width: "100%"}}>
			<Toolbar>
				<IconButton
					size="large"
					edge="start"
					color="inherit"
					aria-label="menu"
					sx={{mr: 2}}
					onClick={() => handleFormat("movie")}
				>
					<LocalMoviesIcon/>
				</IconButton>
				<IconButton
					size="large"
					edge="start"
					color="inherit"
					aria-label="menu"
					sx={{mr: 2}}
					onClick={() => handleFormat("tv")}
				>
					<LiveTvIcon/>
				</IconButton>
			</Toolbar>
		</AppBar>
	);
};
