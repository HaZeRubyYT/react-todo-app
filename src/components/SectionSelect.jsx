import React from "react";
import ChecklistRtlIcon from "@mui/icons-material/ChecklistRtl";
import SelectTodo from "./section-components/SelectTodo";

export default function SectionSelect() {
	return (
		<div className="flex flex-col section-select bg-[#444444] h-screen w-1/5">
			<div className="flex flex-row mt-5 text-white justify-center gap-4">
				<div className="m-0 p-0 flex flex-col align-middle justify-evenly scale-[1.5] mt-2">
					<ChecklistRtlIcon color="inherit" fontSize="large" />
				</div>
				<h1 className="text-5xl font-ubuntu font-bold">Todo.io</h1>
			</div>
			<SelectTodo />
		</div>
	);
}
