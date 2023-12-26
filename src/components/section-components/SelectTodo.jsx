import React, { useState } from "react";
import ClearIcon from "@mui/icons-material/Clear";

export default function SelectTodo({ sectionTitle, updateSelected, selected, deleteSection }) {
	const [isHover, setHover] = useState(false);

	function handleSelectClick() {
		console.log(sectionTitle);
		updateSelected(sectionTitle);
	}
	function handleDeleteClick() {
		deleteSection(sectionTitle);
	}
	function handleHover() {
		setHover((prevValue) => !prevValue);
	}
	return (
		<div
			className={
				"flex flex-row justify-center text-white min-h-[2rem] bg-[#1F1F1F] " +
				(selected == sectionTitle ? "border rounded-md border-white" : null)
			}
			onMouseOver={handleHover}
			onMouseOut={handleHover}
		>
			<button onClick={handleSelectClick} className={`${isHover ? "w-11/12 p-auto" : "w-full"}`}>
				{sectionTitle}
			</button>
			{isHover ? (
				<button className="w-1/12" onClick={handleDeleteClick}>
					<ClearIcon />
				</button>
			) : null}
		</div>
	);
}
