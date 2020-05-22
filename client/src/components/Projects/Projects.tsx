import React, { useState, Component, useEffect } from 'react'
import { motion } from 'framer-motion'

import { Container } from 'react-bootstrap'
import { getProjects } from '../../api'

export function Projects() {
	const [ projects, setProjects ] = useState([] as any[])
	const [ query, setQuery ] = useState('')

	useEffect(() => {
		getProjects().then(newProjects => {
            setProjects(newProjects)
        }).catch(console.error)
		return () => {}
	}, [])
	return (
		<div>
			<main id="content">
				<Container>
					<div className="container mt-4 mb-4">
						<h1 className="page-title">Projects</h1>
						<p>{projects.length} Projects</p>
						<div className="search-container">
							<form action={'/projects?search=' + query}>
								<div className="form-group">
									<input
										className="form-control"
										type="text"
										placeholder="Search query..."
										name="search"
                                        value={query}
                                        onChange={event => setQuery(event.target.value)}
									/>
								</div>
								<div className="form-group">
									<button className="form-control btn btn-primary" type="submit">
										Search
									</button>
								</div>
							</form>
						</div>
						<div id="projects">
							{projects.map((project: any) => (
								<div className="border-panel card mt-4">
									<div className="card-body">
										<h2 className="post-title card-title">
											<a target="_blank" href={project.url || project.codeUrl}>
												{project.name
													.split('-')
													.map((s: string) => s[0].toUpperCase() + s.substr(1))
													.join(' ')}
											</a>
										</h2>
										<a
											className="text-muted card-subtitle"
											target="_blank"
											href={project.codeUrl || '#'}
										>
											Source Code
										</a>
										<div className="post-description card-text">
											<p dangerouslySetInnerHTML={project.description} />
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</Container>
			</main>
		</div>
	)
}
