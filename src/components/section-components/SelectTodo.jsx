import React from "react";

export default function SelectTodo({ sectionTitle, updateSelected, selected }) {
	function handleClick() {
		console.log(sectionTitle);
		updateSelected(sectionTitle);
	}
	return (
		<button
			onClick={handleClick}
			className={"w-full " + (selected == sectionTitle ? "bg-[#5F5F5F]" : "bg-[#3F3F3F]")}
		>
			{sectionTitle}
		</button>
	);
}
