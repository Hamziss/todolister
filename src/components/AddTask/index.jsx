import * as Dialog from "@radix-ui/react-dialog"
import { Cross2Icon } from "@radix-ui/react-icons"
import React, { useState } from "react"
import "./styles.css"

const AddTask = () => {
	const [isOpen, setIsOpen] = useState(false)

	const handleSubmit = (e) => {
		// Prevent the form from refreshing the page
	}

	return (
		<Dialog.Root open={isOpen}>
			<Dialog.Trigger asChild>
				<button
					onClick={() => setIsOpen(true)}
					className="Button violet"
					size="large"
				>
					Add Task
				</button>
			</Dialog.Trigger>
			<Dialog.Portal>
				<Dialog.Overlay className="DialogOverlay" />
				<Dialog.Content className="DialogContent">
					<Dialog.Title className="DialogTitle">Add Task</Dialog.Title>
					<Dialog.Description className="DialogDescription">
						Make changes to your profile here. Click save when you're done.
					</Dialog.Description>
					<form onSubmit={(e) => handleSubmit(e)}>
						<fieldset className="Fieldset">
							<label className="Label" htmlFor="title">
								title
							</label>
							<input className="Input" name="title" placeholder="title" />
						</fieldset>
						<fieldset className="Fieldset">
							<label className="Label" htmlFor="desc">
								Description
							</label>
							<input className="Input" name="desc" placeholder="Description" />
						</fieldset>
						<div
							style={{
								display: "flex",
								marginTop: 25,
								justifyContent: "flex-end",
							}}
						>
							<button type="submit" className="Button green">
								Add
							</button>
						</div>
					</form>
					<Dialog.Close asChild>
						<button
							onClick={() => setIsOpen(false)}
							className="IconButton"
							aria-label="Close"
						>
							<Cross2Icon />
						</button>
					</Dialog.Close>
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	)
}

export default AddTask
