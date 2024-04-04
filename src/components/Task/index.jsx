import React from "react"
import CheckboxDemo from "../CheckBox"
import DeleteTask from "../DeleteTask"
import "./styles.css"

export default function Task({ id, title, desc, isDone }) {
	return (
		<div className="taskcontainer">
			<CheckboxDemo isDone={isDone} id={id} />
			<div className="containerText">
				<h2>{title}</h2>
				<p>{desc}</p>
			</div>

			<DeleteTask id={id} />
		</div>
	)
}
