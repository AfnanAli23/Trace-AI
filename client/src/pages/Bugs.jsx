/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useBugStore } from "../store/bugStore";
import BugCard from "../components/bugs/BugCard";
import { useNavigate } from "react-router-dom";

const Bugs = () => {
	const { bugs, fetchBugs } = useBugStore();
	const navigate = useNavigate();

	useEffect(() => {
		fetchBugs();
	}, []);

	return (
		<div>
			{bugs.map((bug) => (
				<BugCard
					key={bug._id}
					bug={bug}
					onClick={() => navigate(`/bugs/${bug._id}`)}
				/>
			))}
		</div>
	);
};

export default Bugs;
