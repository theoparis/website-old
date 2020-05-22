import React, { useState, Component, useEffect } from 'react'
import './App.css'
import { motion } from 'framer-motion'

import { Container } from 'react-bootstrap'
import { getBoxes } from '../../api'
import { useHistory } from 'react-router-dom'

export function Home() {
	const [ boxes, setBoxes ] = useState([])
	const [ animated, setAnimated ] = useState(false)

	useEffect(() => {
		setBoxes(getBoxes())
		return () => {}
	}, [])

	const history = useHistory()
	return (
		<div>
			<main id="content">
				<Container>
					<div className="showcase-banner" />

					<section id="showcase">
						<h1 className="page-title">Hello there.</h1>
						<p>Welcome to my website! Click on my About Me box link to learn more about me.</p>
					</section>

					<section id="boxes">
						{boxes.map((box: any) => (
							<motion.div
								className="box"
								initial={{ scale: 1, rotate: 0 }}
								animate={{ scale: animated ? 0.1 : 1, rotate: animated ? 360 : 0 }}
								transition={{ duration: 1.5 }}
								onClick={() => {
									setAnimated(true)
									setTimeout(() => history.push(box.link), 1500)
								}}
							>
								<a>
									<img
										src={box.image}
										alt={box.imageDescription || "Box Image"}
									/>
								</a>
								{/* <img src="{{ box.iconUrl }}" /> */}
								<h3>{box.title}</h3>
								<p dangerouslySetInnerHTML={{ __html: box.description }} />
							</motion.div>
						))}
					</section>
				</Container>
			</main>
		</div>
	)
}
