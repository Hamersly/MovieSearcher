import * as React from 'react';
import {useState} from 'react';
import {alpha, styled} from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import {useDispatch} from "react-redux";
import {searchValue} from "../store/movieLayer/actions";
import {Link} from "react-router-dom";

const SearchTag = styled('div')(({theme}) => ({
	position: 'relative',
	borderRadius: theme.shape.borderRadius,
	backgroundColor: alpha(theme.palette.common.black, 0.15),
	'&:hover': {
		backgroundColor: alpha(theme.palette.common.white, 0.25),
	},
	marginRight: theme.spacing(2),
	marginLeft: 0,
	width: '100%',
	[theme.breakpoints.up('sm')]: {
		marginLeft: theme.spacing(3),
		width: 'auto',
	},
}));

const SearchIconWrapper = styled('div')(({theme}) => ({
	padding: theme.spacing(0, 2),
	height: '100%',
	position: 'absolute',
	pointerEvents: 'none',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({theme}) => ({
	color: 'black',
	'& .MuiInputBase-input': {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('md')]: {
			width: '20ch',
		},
	},
}));


export const Search = () => {
	const [query, setQuery] = useState("");
	const dispatch = useDispatch();

	const searchText = () => {
		if (query.trim().length) {
			dispatch(searchValue({query, page: 1}));
			setQuery("");
		}
	};

	const handleSubmit = (e: any) => {
		if (e.key === "Enter") {
			searchText();
		}
	};

	return (
		<SearchTag>
			<SearchIconWrapper>
				<SearchIcon sx={{color: "black"}}/>
			</SearchIconWrapper>
			<Link className="link" to="/search_results">
			<StyledInputBase
				placeholder="Search…"
				inputProps={{'aria-label': 'search'}}
				value={query}
				onChange={(e) => setQuery(e.target.value)}
				onKeyDown={handleSubmit}
			/>
				</Link>
		</SearchTag>
	);
};