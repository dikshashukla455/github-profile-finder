import Profile from "./components/Profile";
import Repos from "./components/Repos";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import React from "react";
import { makeStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import Pagination from "@material-ui/lab/Pagination";
import Loading from "./components/Loading";

function App() {
	const itemsPerPage = 10;
	const [Data, SetData] = React.useState(" ");
	const [InputSearch, SetInputSearch] = React.useState("");
	const [respositories, SetRespositories] = React.useState([]);
	const [page, setPage] = React.useState(1);
	const [loading, SetLoading] = React.useState(false);

	const handleChange = (event, value) => {
		setPage(value);
	};

	React.useEffect(() => {
		/*====================== Passing the static profile sample====================================== */
		fetch(`https://api.github.com/users/octocat`)
			.then((res) => res.json())
			.then((data) => SetData(data));
		SetLoading(true);
	}, []);
	const onSearchHandler = (e) => {
		SetInputSearch(e.target.value);
	};
	const onSubmitHandler = (e) => {
		/*==============================Fetching Api for the profile================================== */
		fetch(`https://api.github.com/users/${InputSearch}`)
			.then((res) => res.json())
			.then((data) => {
				if (data.message) {
					document.write("<h2> Invalid Username </h2>");
				}
				SetData(data);
				SetLoading(true);
			});

		/*==============================Fetching Api for the repository================================== */
		fetch(`https://api.github.com/users/${InputSearch}/repos`)
			.then((res) => res.json())
			.then((data) => {
				SetRespositories(data);
			});
		e.preventDefault();
	};

	const useStyles = makeStyles({
		btn: {
			marginLeft: 20,
		},
		textfield: {
			width: "50%",
		},
		pagin: {
			marginTop: "2rem",
			display: "flex",
			justifyContent: "center",
		},
	});

	const classes = useStyles();
	return (
		<div className="main-container">
			<center>
				{/*====================== Form for User Input ======================= */}
				<form onSubmit={onSubmitHandler}>
					<TextField
						id="filled-search"
						label="Github Username"
						type="search"
						onChange={onSearchHandler}
						className={classes.textfield}
					/>
					<Button
						variant="contained"
						color="primary"
						className={classes.btn}
						onClick={onSubmitHandler}
					>
						Search
					</Button>
				</form>
			</center>
			{/*========================== passing the user profile data ==================================*/}
			{loading ? (
				<Profile
					name={Data.name}
					url={Data.html_url}
					bio={Data.bio}
					image={Data.avatar_url}
					location={Data.location}
					followers={Data.followers}
					email={Data.email}
				/>
			) : (
				<Loading
					name={Data.name}
					url={Data.html_url}
					bio={Data.bio}
					image={Data.avatar_url}
					location={Data.location}
					followers={Data.followers}
					email={Data.email}
				/>
			)}
			<br />
			<br />
			{/*========================== passing the repository data ==================================*/}
			{respositories.length === 0 ? (
				<center>
					<h3> No repositories are found </h3>
				</center>
			) : (
				<Container>
					<Grid container spacing={6}>
						{respositories
							.slice((page - 1) * itemsPerPage, page * itemsPerPage)
							.map((repository) => (
								<Grid item xs={12} sm={12} md={6} key={repository.id} mx="auto">
									<Repos key={repository.name} {...repository} />
								</Grid>
							))}
					</Grid>
				</Container>
			)}
			{/*================================ Pagination ======================================= */}
			{respositories.length > 0 && (
				<Pagination
					className={classes.pagin}
					color="primary"
					count={Math.ceil(respositories.length / itemsPerPage)}
					page={page}
					onChange={handleChange}
					defaultPage={1}
				/>
			)}
		</div>
	);
}
export default App;
