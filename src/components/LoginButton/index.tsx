import { useAuth0 } from "@auth0/auth0-react";
import Button from "../Button";

import "./style.css";

const LoginButton = () => {
	const { loginWithRedirect } = useAuth0();

	return (
		<>
			<div className="loginButtonWrapper">
				<Button className="loginButton" onClick={() => loginWithRedirect()}>
					Log In
				</Button>
			</div>
		</>
	);
};

export default LoginButton;
