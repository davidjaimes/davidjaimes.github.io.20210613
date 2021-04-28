// React Dependencies
import React from "react";
import {Helmet} from "react-helmet";

// Bootstrap Dependencies
import {Container, Row, Col} from 'react-bootstrap'

// Import Templates
import Navigation from "../components/navigation"
import Footer from "../components/footer"


export default function HomePage({children}) {
	return (
		<>
		<React.Fragment>
			<Helmet>
				<title>Cool</title>
				<html lang="en"/>
			</Helmet>

			<Navigation></Navigation>

			<Container fluid>
				<Row className="justify-content-center">
					<Col style={{maxWidth: "768px"}}>
						{children}
					</Col>
				</Row>
			</Container>

			<Footer></Footer>
		</React.Fragment>
		</>
	)
}
