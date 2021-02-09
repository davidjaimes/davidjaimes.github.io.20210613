// React Dependencies
import React from 'react'

// Bootstrap Dependencies
import {Navbar, Container, Row, Col} from 'react-bootstrap'
import {} from 'react-icons/fa'


export default function Footer() {
	return (
		<Navbar expand="lg" variant="dark" bg="secondary" fixed="sticky">
		  <Container className="justify-content-center mt-5 mb-4">
				<Row>
					<Col style={{maxWidth: "768px"}}>
						<p className="text-light text-center">&copy; 2021, David Jaimes. All rights reserved.</p>
						<p className="text-light text-center">Yo <span style={{color: "#f07199"}}>&hearts;</span> Naxiely</p>
					</Col>
				</Row>
			</Container>
		</Navbar>
	)
}