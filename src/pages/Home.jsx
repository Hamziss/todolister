import React from "react"
import AddTask from "../components/AddTask"
import ListTask from "../components/ListTask"

export default function Home() {
	return (
		<div>
			<h1>My todo app</h1>
			<AddTask />
			<ListTask />
		</div>
	)
}
