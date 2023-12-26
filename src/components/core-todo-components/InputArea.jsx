import React from "react";

export default function InputArea({ setInput, input, onAdd }) {
	function handleInput(event) {
		setInput(event.target.value);
	}
	function onSubmit(event) {
		onAdd();
		setInput("");
		event.preventDefault();
	}

	return (
		<div className="input-area pt-8 pb-5 px-72 mb-10">
			<form onSubmit={onSubmit} className="grid grid-cols-8 gap-3 h-10">
				<input
					type="text"
					className="col-span-7 px-3 py-1 text-lg rounded-md"
					placeholder="Enter Todo"
					value={input}
					onChange={handleInput}
				/>
				<button
					className="text-white border-solid border-2 border-spacing-4 border-white rounded-md text-lg"
					type="submit"
				>
					Add
				</button>
			</form>
		</div>
	);
}
