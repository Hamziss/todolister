import React from "react"
import Task from "../Task"
import classes from "./styles.module.css"

export default function ListTask() {
	const Tasks = [
		{
			id: 1,
			title: "Task 1",
			desc: "Description 1",
		},
		{
			id: 2,
			title: "Task 2",
			desc: "Description 2",
		},
		{
			id: 3,
			title: "Task 3",
			desc: "Description 3",
		},
	]

	return (
		<div className={classes.container}>
			{Tasks.map((el) => (
				<Task key={el.id} {...el} />
			))}
		</div>
	)
}
