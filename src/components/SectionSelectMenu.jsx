import React, { useState } from "react";
import ChecklistRtlIcon from "@mui/icons-material/ChecklistRtl";
import SelectTodo from "./section-components/SelectTodo";
import AddTodoSection from "./section-components/AddTodoSection";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

export default function SectionSelect({
	sectionTitle,
	updateTitle,
	updateSelected,
	selected,
	deleteSection,
	isAmbient,
	handleToggle,
}) {
	const [anchorEl, setAnchorEl] = useState(null);

	const handlePopoverOpen = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handlePopoverClose = () => {
		setAnchorEl(null);
	};

	const open = Boolean(anchorEl);

	function addSection(input) {
		updateTitle((prevItems) => {
			console.log(prevItems);
			return [...prevItems, input];
		});
	}
	return (
		<div
			className={`flex flex-col section-select ${
				isAmbient ? "bg-[#444]/75" : "bg-[#444]"
			} h-screen w-1/4 `}
		>
			<div className="flex flex-row my-8 mx-16 text-white justify-center gap-4">
				<div className="m-0 p-0 flex flex-col align-middle justify-evenly scale-[1.5] mt-2">
					<ChecklistRtlIcon color="inherit" fontSize="large" />
				</div>
				<h1 className="text-5xl font-ubuntu font-bold">Todo.io</h1>
			</div>
			<hr className="h-px my-8 bg-gray-200 border-0" />
			<AddTodoSection sectionTitle={sectionTitle} updateTitle={updateTitle} onAdd={addSection} />
			<div className="flex flex-col gap-3 mt-6 mx-2 max-h-[24rem] min-h-[24rem] overflow-y-auto">
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
			<hr className="h-px mt-8 mb-8 bg-gray-200 border-0" />
			<div className="footer font-sans flex flex-row justify-between">
				<div className="toggle p-0 m-0 ml-1">
					<label className="relative inline-flex items-center cursor-pointer">
						<input type="checkbox" value="" className="sr-only peer" onChange={handleToggle} />
						<div className="w-11 h-6 bg-gray-200 peer-focus:outline-none  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
						<span className="ms-3 text-sm font-medium text-white">Ambient Mode</span>
					</label>
				</div>
				<div className="mr-2 text-white hover:underline">
					<Typography
						aria-owns={open ? "mouse-over-popover" : undefined}
						aria-haspopup="true"
						onMouseEnter={handlePopoverOpen}
						onMouseLeave={handlePopoverClose}
					>
						<InfoOutlinedIcon fontSize="medium"/>
					</Typography>
					<Popover
						id="mouse-over-popover"
						sx={{
							pointerEvents: "none",
						}}
						open={open}
						anchorEl={anchorEl}
						anchorPosition={{ top: 100, left: 0 }}
						anchorOrigin={{
							vertical: "top",
							horizontal: "center",
						}}
						transformOrigin={{
							vertical: "bottom",
							horizontal: "center",
						}}
						transitionDuration={{appear: 0, enter: 550, exit: 300}}
						onClose={handlePopoverClose}
						disableRestoreFocus
					>
						<Typography sx={{ p: 1 }}>Made with ❤️ by HaZe_Ruby</Typography>
					</Popover>
				</div>
			</div>
		</div>
	);
}
