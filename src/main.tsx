import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Auth0Provider } from "@auth0/auth0-react";
import { AUTH_CLIENT_ID, AUTH_DOMAIN } from "./lib/constants.ts";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { GetRides } from "./pages/MyRides/index.tsx";
import CreatePage from "./pages/Create/index.tsx";
import JoinRidePage from "./pages/JoinRide/index.tsx";
import MoreInfoPage from "./pages/MoreInfo/index.tsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{
		path: "/joinRide/:rideId",
		element: <JoinRidePage />,
	},
	{
		path: "/create",
		element: <CreatePage />,
	},
	{
		path: "/my-rides",
		element: <GetRides />,
	},
	{
		path: "/more-info/:rideId",
		element: <MoreInfoPage />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<Auth0Provider
			domain={AUTH_DOMAIN}
			clientId={AUTH_CLIENT_ID}
			authorizationParams={{
				redirect_uri: window.location.origin,
			}}
		>
			<RouterProvider router={router} />
		</Auth0Provider>
	</React.StrictMode>
);
