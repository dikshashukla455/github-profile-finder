import React from "react";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import LinkIcon from "@material-ui/icons/Link";
import { makeStyles } from "@material-ui/styles";
import PeopleIcon from "@material-ui/icons/People";
import EmailIcon from "@material-ui/icons/Email";

function Profile(props) {
	const useStyles = makeStyles({
		icon: {
			verticalAlign: "middle",
			fontSize: "16px",
		},
	});
	const classes = useStyles();
	return (
		<div className="profile-container">
			<div className="images">
				{/*==============Profile image ====================*/}
				<img src={props.image} alt="" />

				<br />
				<br />
				{/*==============Profile Github link ====================*/}
				<div className="profile-url">
					<LinkIcon className={classes.icon} /> {props.url}
				</div>
			</div>
			<div className="profile-info">
				{/*============== User name====================*/}
				<h2>{props.name}</h2>
				{props.bio && <p className="profile-bio"> {props.bio}</p>}
				{props.location && (
					<p>
						<LocationOnIcon className={classes.icon} /> {props.location}
					</p>
				)}
				{/*==============User email ====================*/}
				{props.email && (
					<p className="profile-email">
						<EmailIcon className={classes.icon} /> {props.email}
					</p>
				)}
				{/*==============User followers ====================*/}
				<p className="profile-email">
					<PeopleIcon className={classes.icon} /> {props.followers}{" "}
					{props.followers === 1 ? "follower" : "followers"}
				</p>
			</div>
		</div>
	);
}

export default Profile;
