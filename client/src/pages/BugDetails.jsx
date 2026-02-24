/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useBugStore } from "../store/bugStore";
import { useParams } from "react-router-dom";
import BugDetails from "../components/bugs/BugDetails";

const BugDetailsPage = () => {
	const { id } = useParams();
	const { selectedBug, fetchBug } = useBugStore();

	useEffect(() => {
		fetchBug(id);
	}, [id]);

	return <BugDetails bug={selectedBug} />;
};

export default BugDetailsPage;
