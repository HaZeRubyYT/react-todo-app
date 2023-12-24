import React, { useState } from "react";

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
			onAdd(input);
			setInput("");
		}

		e.preventDefault();
	}

	return (
		<div className="px-5">
			<form className="flex flex-row gap-2" onSubmit={handleSubmit}>
				<input
					className="basis-3/4 rounded"
					placeholder="New Todo Section"
					onChange={handleChange}
					value={input}
				></input>
				<button className="basis-1/4 border rounded" type="submit">
					Add
				</button>
			</form>
		</div>
	);
}
