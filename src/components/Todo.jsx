import React, { useState } from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import CheckIcon from "@mui/icons-material/Check";
import EditIcon from "@mui/icons-material/Edit";
import UnpublishedIcon from "@mui/icons-material/Unpublished";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function Todo({ todoObj, index, onDel, onEdit, onComplete }) {
	// console.log(todoObj);
	const [isHover, setHover] = useState(false);
	const [isEdit, setIsEdit] = useState(false);
	const [inputEdit, setInputEdit] = useState(todoObj.todoItem);

	function handleMouse() {
		setHover((prevValue) => !prevValue);
	}

	function handleEdit() {
		setIsEdit((prevValue) => !prevValue);
	}

	function handleChange(e) {
		setInputEdit(e.target.value);
		console.log(inputEdit);
	}

	return (
		<div
			className={
				"todo-item " +
				(!todoObj.completed ? "bg-[#333] pl-6" : "bg-green-500 pl-3") +
				" my-1.5 py-3.5 pr-2 text-lg rounded-md flex flex-row justify-between transition delay-100 ease-out hover:scale-[102%] duration-50"
			}
			onMouseOver={handleMouse}
			onMouseOut={handleMouse}
		>
			{/* When Editing */}
			<input
				className={
					(!isEdit ? "hidden" : "") +
					" pl-2 bg-transparent outline-none border-b-2 border-gray-400 w-[90%]"
				}
				onChange={handleChange}
				value={inputEdit}
			/>
			<button
				onClick={() => {
					if (inputEdit.trim() === "") {
						alert("type something ffs");
					} else {
						onEdit(index, inputEdit);
					}
					handleEdit();
				}}
				className={!isEdit ? "hidden" : ""}
			>
				<CheckIcon />
			</button>

			{/* When Displaying */}
			<div className="flex flex-row gap-2">
				<div className={!todoObj.completed ? "hidden" : ""}> <CheckCircleIcon /></div>
				<p className={isEdit ? "hidden" : ""}>{todoObj.todoItem}</p>
			</div>

			{!todoObj.completed ? (
				<div className="flex flex-row justify-between gap-1">
					<button
						onClick={() => {
							onComplete(index);
						}}
						className={isHover && !isEdit ? "visible opacity-80 hover:opacity-50" : "hidden"}
					>
						<CheckIcon />
					</button>
					<button
						onClick={handleEdit}
						className={isHover && !isEdit ? "visible opacity-80 hover:opacity-50" : "hidden"}
					>
						<EditIcon />
					</button>
					<button
						onClick={() => {
							onDel(index);
						}}
						className={isHover && !isEdit ? "visible opacity-80 hover:opacity-50" : "hidden"}
					>
						<DeleteForeverIcon />
					</button>
				</div>
			) : (
				<div className="flex flex-row justify-between gap-3">
					<button
						onClick={() => {
							onComplete(index);
						}}
						className={isHover && !isEdit ? "visible opacity-80 hover:opacity-50" : "hidden"}
					>
						<UnpublishedIcon />
					</button>
					<button
						onClick={() => {
							onDel(index);
						}}
						className={isHover && !isEdit ? "visible opacity-80 hover:opacity-50" : "hidden"}
					>
						<DeleteForeverIcon />
					</button>
				</div>
			)}
		</div>
	);
}
