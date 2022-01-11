import React from "react";
import { BackgroundImage } from "./BackgroundImage";
import styled from "styled-components";
import { Container } from "../Context/GlobalStyles";

const About = () => {
	return (
		<Wrapper>
			<Container>
				<AboutPage>
					<ImageSection>
						<svg
							viewBox="0 0 200 200"
							xmlns="http://www.w3.org/2000/svg"
						>
							<defs>
								<clipPath
									id="user-space"
									clipPathUnits="userSpaceOnUse"
								>
									<path
										fill="#FF0066"
										d="M36.7,-52.9C47.9,-42.4,57.6,-32.1,66,-18.6C74.4,-5,81.4,11.9,78.1,26.4C74.8,40.9,61,53,46.3,62.1C31.5,71.2,15.8,77.2,-1.3,79C-18.3,80.7,-36.6,78.2,-48.7,68.2C-60.8,58.2,-66.7,40.9,-71.2,23.9C-75.8,6.8,-79,-9.9,-73.6,-23.1C-68.3,-36.3,-54.3,-46,-40.6,-55.7C-26.9,-65.3,-13.5,-75,-0.4,-74.6C12.8,-74.1,25.5,-63.4,36.7,-52.9Z"
										transform="translate(100 100)"
									/>
								</clipPath>
							</defs>

							<image
								x="12"
								y="18"
								width="100%"
								height="100%"
								preserveAspectRatio="xMidYMid slice"
								xlinkHref="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F1128949137%2F960x0.jpg%3Ffit%3Dscale"
								clipPath="url(#user-space)"
							/>
						</svg>
						<span>
							<h2>Nipsey Hussle</h2>
							<i> ~ We honor the ones who stayed down</i>
						</span>
					</ImageSection>
					<TextSection>
						<p>
							On Saturday (June 17,2012), Nipsey Hussle opened up
							the doors to his Marathon Clothing store (co-owned
							by Adam Andebrhan and Stephen Donelson) at the
							corner of Slauson and Crenshaw in Los Angeles, an
							Urban clothing store specializing in bold print
							T-shirts, hats, sweatpants and accessories. Not just
							another retail brick and mortar shop but a
							smartstore where customers can purchase merch and
							use an app to preview exclusive content from the
							West Coast rapper.
						</p>
						<p>
							Nip fused his love of business and technology by
							trying to disrupt retail. He was trying to create a
							retail network to become vertically integrated.
							Nipsey told Billboard in 2017, He trying to super
							serve the core with an upgraded experience. The
							whole game plan was to fuse hip-hop, fashion, and
							tech
						</p>
						<p>
							The Marathon Clothing store has become a fixture in
							the South Los Angeles community that late rapper
							Nipsey Hussle worked to develop over the years of
							his life. Although it has been over a year since we
							lost the Los Angeles rap legend, the center of his
							legacy, outside of music, is the corner plaza
							located at Crenshaw and Slauson, which has become a
							mecca for not only all things Hussle, but a
							statement and example of growing generational wealth
							and entrepreneurship.
						</p>
					</TextSection>
				</AboutPage>
			</Container>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	width: 100%;
	background: url("${BackgroundImage}");
	padding: 1rem 0;
`;

const AboutPage = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	align-items: center;

	@media screen and (max-width: 768px) {
		grid-template-columns: 1fr;
	}
`;

const ImageSection = styled.div`
	image {
		width: 200px;
	}
	span {
		margin-bottom: 2rem;
		display: block;
	}
`;

const TextSection = styled.div`
	p {
		line-height: 2.5rem;
		font-size: 1.2rem;
	}
`;

export default About;
