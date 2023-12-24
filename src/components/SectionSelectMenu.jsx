import React, { useState } from "react";
import ChecklistRtlIcon from "@mui/icons-material/ChecklistRtl";
import SelectTodo from "./section-components/SelectTodo";
import AddTodoSection from "./section-components/AddTodoSection";

export default function SectionSelect({ sectionTitle, updateTitle, updateSelected, selected }) {
	function addSection(input) {
		
		updateTitle((prevItems) => {
			console.log(prevItems);
			if (input) {
				if (input.trim() === "") {
					alert("type something ffs");
				} else {
					return [...prevItems, input];
				}
			} else {
				console.log(input);
				alert("type something ffs");
			}
		});
		// console.log(sectionTitle);
	}
	return (
		<div className="flex flex-col section-select bg-[#444444] h-screen w-1/4">
			<div className="flex flex-row mt-5 text-white justify-center gap-4 m-16">
				<div className="m-0 p-0 flex flex-col align-middle justify-evenly scale-[1.5] mt-2">
					<ChecklistRtlIcon color="inherit" fontSize="large" />
				</div>
				<h1 className="text-5xl font-ubuntu font-bold">Todo.io</h1>
			</div>
			<AddTodoSection sectionTitle={sectionTitle} updateTitle={updateTitle} onAdd={addSection} />
			<div className="flex flex-col mt-24 mx-2">
				{sectionTitle.map((section, index) => (
					<SelectTodo key={index} sectionTitle={section} updateSelected={updateSelected} selected={selected} />
				))}
			</div>
		</div>
	);
}
