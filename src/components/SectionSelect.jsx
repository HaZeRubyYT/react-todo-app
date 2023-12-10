import React from "react";
import ChecklistRtlIcon from "@mui/icons-material/ChecklistRtl";

export default function SectionSelect() {
	return (
		<div className="flex flex-col section-select bg-[#444444] h-screen w-1/5">
			<div className="flex flex-row mt-5">
				<h1 className="justify-center text-5xl font-ubuntu font-bold text-white">
					<ChecklistRtlIcon color="inherit" fontSize="large" />
					Todo.io
				</h1>
			</div>
			<div className="flex flex-col mt-24 mx-2 bg-[#3F3F3F]">
				<button className="w-full">Todo 1</button>
			</div>
		</div>
	);
}
