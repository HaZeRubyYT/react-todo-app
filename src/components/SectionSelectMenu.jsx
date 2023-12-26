import React, { useState } from "react";
import ChecklistRtlIcon from "@mui/icons-material/ChecklistRtl";
import SelectTodo from "./section-components/SelectTodo";
import AddTodoSection from "./section-components/AddTodoSection";

export default function SectionSelect({
	sectionTitle,
	updateTitle,
	updateSelected,
	selected,
	deleteSection,
	isAmbient,
}) {
	function addSection(input) {
		updateTitle((prevItems) => {
			console.log(prevItems);
			return [...prevItems, input];
		});
		// console.log(sectionTitle);
	}
	return (
		<div
			className={`flex flex-col section-select h-screen w-1/4 bg-[#444444]${
				isAmbient ? "/[75%]" : " "
			}`}
		>
			<div className="flex flex-row mt-5 text-white justify-center gap-4 m-16 ">
				<div className="m-0 p-0 flex flex-col align-middle justify-evenly scale-[1.5] mt-2">
					<ChecklistRtlIcon color="inherit" fontSize="large" />
				</div>
				<h1 className="text-5xl font-ubuntu font-bold">Todo.io</h1>
			</div>
			<AddTodoSection sectionTitle={sectionTitle} updateTitle={updateTitle} onAdd={addSection} />
			<div className="flex flex-col gap-3 mt-24 mx-2 max-h-screen overflow-y-auto">
				{sectionTitle
					? sectionTitle.map((section, index) => (
							<SelectTodo
								key={index}
								sectionTitle={section}
								updateSelected={updateSelected}
								selected={selected}
								deleteSection={deleteSection}
							/>
					  ))
					: null}
			</div>
		</div>
	);
}
