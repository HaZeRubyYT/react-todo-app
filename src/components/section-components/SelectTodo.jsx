import React from "react";
import ClearIcon from "@mui/icons-material/Clear";

export default function SelectTodo({ sectionTitle, updateSelected, selected, deleteSection }) {
	function handleSelectClick() {
		console.log(sectionTitle);
		updateSelected(sectionTitle);
	}
	function handleDeleteClick() {
		deleteSection(sectionTitle);
	}
	return (
		<div
			className={
				"w-full flex flex-row justify-between " +
				(selected == sectionTitle ? "bg-[#5F5F5F]" : "bg-[#3F3F3F]")
			}
		>
			<button onClick={handleSelectClick} className="w-10/12">
				{sectionTitle}
			</button>
			<button className="w-2/12" onClick={handleDeleteClick}>
				<ClearIcon />
			</button>
		</div>
	);
}
