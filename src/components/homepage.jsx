// React Dependencies
import React from "react"

// Bootstrap Dependencies
import {Container, Row, Col} from 'react-bootstrap'

// Import Templates
import Navigation from "../components/navigation"
import Head from "../components/head"


export default function HomePage({children}) {
	return (
		<div>
			<Head/>
			<Navigation></Navigation>

			<Container fluid>
				<Row className="justify-content-center">
					<Col style={{maxWidth: "768px"}}>
						{children}
					</Col>
				</Row>
			</Container>
			
		</div>
	)
}
