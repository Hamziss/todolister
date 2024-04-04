import * as AlertDialog from "@radix-ui/react-alert-dialog"
import React from "react"
import "./style.css"

const DeleteTask = ({ id }) => {
	return (
		<AlertDialog.Root>
			<AlertDialog.Trigger asChild>
				<button className="Button violet">Delete</button>
			</AlertDialog.Trigger>
			<AlertDialog.Portal>
				<AlertDialog.Overlay className="AlertDialogOverlay" />
				<AlertDialog.Content className="AlertDialogContent">
					<AlertDialog.Title className="AlertDialogTitle">
						Are you absolutely sure?
					</AlertDialog.Title>
					<AlertDialog.Description className="AlertDialogDescription">
						This action cannot be undone. This will permanently delete your
						account and remove your data from our servers.
					</AlertDialog.Description>
					<div style={{ display: "flex", gap: 25, justifyContent: "flex-end" }}>
						<AlertDialog.Cancel asChild>
							<button className="Button mauve">Cancel</button>
						</AlertDialog.Cancel>
						<AlertDialog.Action asChild>
							<button className="Button red">Yes, delete Task</button>
						</AlertDialog.Action>
					</div>
				</AlertDialog.Content>
			</AlertDialog.Portal>
		</AlertDialog.Root>
	)
}

export default DeleteTask
