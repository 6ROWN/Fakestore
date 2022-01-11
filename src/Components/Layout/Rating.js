import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Rating = ({ rate }) => {
	if (rate < 2) {
		return (
			<div>
				{rate} <AiFillStar />
				<AiOutlineStar /> <AiOutlineStar /> <AiOutlineStar />{" "}
				<AiOutlineStar />
			</div>
		);
	} else if (rate > 2 && rate < 3) {
		return (
			<div>
				{rate} <AiFillStar /> <AiFillStar />
				<AiOutlineStar /> <AiOutlineStar /> <AiOutlineStar />
			</div>
		);
	} else if (rate > 3 && rate < 4) {
		return (
			<div>
				{rate} <AiFillStar /> <AiFillStar /> <AiFillStar />{" "}
				<AiOutlineStar /> <AiOutlineStar />
			</div>
		);
	} else {
		return (
			<div>
				{rate} <AiFillStar /> <AiFillStar /> <AiFillStar />{" "}
				<AiFillStar />
				<AiOutlineStar />
			</div>
		);
	}
};

export default Rating;
