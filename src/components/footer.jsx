// React Dependencies
import React from "react"

// Bootstrap Dependencies
import {Navbar, Container, Row, Col} from 'react-bootstrap'
import {FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaFacebook, FaYoutube} from 'react-icons/fa'

import Comments from "../components/comments"


export default function Footer() {
	return (
		<Navbar expand="lg" fixed="sticky">
			<Container className="justify-content-center mt-5 mb-5">
				<Row className="mt-2 mb-2">
					<Col style={{maxWidth: "768px"}}>
						<p className="text-center">
							<FaGithub size={30} color={'grey'}/> &nbsp;&nbsp;&nbsp;&nbsp;
							<FaLinkedin size={30} color={'grey'}/> &nbsp;&nbsp;&nbsp;&nbsp;
							<FaTwitter size={30} color={'grey'}/> &nbsp;&nbsp;&nbsp;&nbsp;
							<FaInstagram size={30} color={'grey'}/> &nbsp;&nbsp;&nbsp;&nbsp;
							<FaFacebook size={30} color={'grey'}/> &nbsp;&nbsp;&nbsp;&nbsp;
							<FaYoutube size={30} color={'grey'}/>
						</p>
						<p className="text-dark text-center" style={{fontSize: "13px"}}>Copyright &copy; 2021 David Jaimes. All rights reserved.</p>
						<p className="text-dark text-center mb-5" style={{fontSize: "15px"}}>Yo <span style={{color: "#f07199"}}>&hearts;</span> Naxiely</p>

						<Comments></Comments>
					</Col>
				</Row>
			</Container>
		</Navbar>
	)
}