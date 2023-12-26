import React, { useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";

export default function AddTodoSection({ sectionTitle, updateTitle, onAdd }) {
	const [input, setInput] = useState();

	function handleChange(e) {
		setInput(e.target.value);
	}

	function handleSubmit(e) {
		console.log(input);
		if (sectionTitle.find((section) => section === input)) {
			alert("Section already exists");
		} else {
			if (input) {
				if (input.trim() === "") {
					alert("type something ffs");
				} else {
					onAdd(input);
					setInput("");
				}
			} else {
				console.log(input);
				alert("type something ffs");
			}
		}

		e.preventDefault();
	}

	return (
		<div className="pl-5 pr-[0.5rem] my-4">
			<form className="flex flex-row" onSubmit={handleSubmit}>
				<input
					className="basis-5/6 rounded p-2 flex-grow"
					placeholder="New Todo Section"
					onChange={handleChange}
					value={input}
				></input>
				<button className="basis-2/12 rounded p-0 m-0 text-lg max-w-[3rem]" type="submit">
					<AddCircleIcon htmlColor="#fff" fontSize="large" />
				</button>
			</form>
		</div>
	);
}
