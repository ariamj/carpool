import { useNavigate, useParams } from "react-router-dom";
import { db } from "../../lib/firebase";
import { doc, getDoc } from "@firebase/firestore";
import { Ride, Vehicle } from "../../lib/types";
import RideInfo from "./RideInfo";
import { useEffect, useState } from "react";
import VehicleInfo from "./VehicleInfo";
import Button from "../../components/Button";

const MoreInfoPage = () => {
	const { rideId } = useParams();
	const [ride, setRide] = useState<Ride | null>(null);
	const [vehicle, setVehicle] = useState<Vehicle | null>(null);

	const navigate = useNavigate();

	const getRideInfo = async () => {
		const rideDoc = await getDoc(doc(db, "rides", rideId!));
		setRide(rideDoc.data() as Ride);
	};

	const getVehicleInfo = async () => {
		const vehicleDoc = await getDoc(doc(db, "vehicles", ride!.vehicleId));
		setVehicle(vehicleDoc.data() as Vehicle);
	};

	const goBack = async () => {
		navigate("/my-rides");
	};

	useEffect(() => {
		getRideInfo();
		{
			ride && getVehicleInfo();
		}
	}, [ride]);

	return (
		<>
			<div className="content">
				{vehicle && <VehicleInfo vehicle={vehicle} />}
				{ride && <RideInfo ride={ride} />}

				<Button onClick={() => goBack()}> See Your Rides</Button>
			</div>
		</>
	);
};

export default MoreInfoPage;
