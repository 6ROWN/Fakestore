import React from "react";
import { Container } from "../Context/GlobalStyles";
import styled from "styled-components";
import Map from "./Map";

const Contact = () => {
	return (
		<div style={{ padding: "2rem" }}>
			<Container>
				<ContactPage>
					<MapSection>
						<Map />
					</MapSection>
					<FormSection>
						<h4>Send The Marathon Store a message </h4>
						<div className="form-group">
							<input type="text" placeholder="Name" />
						</div>
						<div className="form-group">
							<input type="email" placeholder="Email" />
						</div>
						<div className="form-group">
							<textarea
								name=""
								id=""
								cols="30"
								rows="10"
								placeholder="Enter comments"
							></textarea>
						</div>
						<div>
							<button>
								<span> SEND MESSAGE </span>
							</button>
						</div>
					</FormSection>
				</ContactPage>
			</Container>
		</div>
	);
};

const ContactPage = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	align-items: center;
	min-height: 81vh;

	@media screen and (max-width: 786px) {
		grid-template-columns: 1fr;
	}
`;

const MapSection = styled.div`
	padding-bottom: 2rem;

	@media screen and (max-width: 480px) {
		display: none;
	}
`;

const FormSection = styled.form`
	h4 {
		padding: 2rem 0;
	}
	div {
		padding: 10px 0;
		input,
		textarea {
			padding: 10px;
			width: 100%;
			border-radius: 8px;
		}

		button {
			background: #4a4a4a;
			color: white;
			padding: 15px 0;
			align-items: center;
			border: none;
			border-radius: 8px;
			overflow: hidden;
			transition: all 0.3s ease-in-out;
			width: 100%;

			:hover {
				background: #fd3d3b;
				color: #4a4a4a;
			}
		}
	}
`;

export default Contact;
