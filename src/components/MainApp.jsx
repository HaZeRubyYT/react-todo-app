import React, { useState } from "react";
import TodoApp from "./TodoApp.jsx";
import SectionSelect from "./SectionSelectMenu.jsx";
import bridge from "/public/images/bridge.jpg";
import monolith from "/public/images/monolith.jpg"
import space from "/public/images/space.jpg";

export default function MainApp() {
	const [todo, updateTodo] = useState([]);
	const [sectionTitle, updateTitle] = useState([]);
	const [selected, updateSelected] = useState("");
	const [isAmbient, setAmbient] = useState(false);
	const [imgList, changeList] = useState([bridge, space, monolith]);
	const [currImg, updateImg] = useState(imgList[0]);

	function deleteSection(titleToDel) {
		updateTodo((prevItems) => {
			return prevItems.filter((todo) => todo.title != titleToDel);
		});
		updateTitle((prevItems) => prevItems.filter((title) => title != titleToDel));
		console.log(todo, sectionTitle);
	}

	function handleToggle() {
		setAmbient((prevValue) => !prevValue);
		if (isAmbient) {
			updateImg((prevValue) => {
				if (prevValue === imgList[2]) {
					return imgList[0];
				} else {
					// console.log(prevValue);
					let index = imgList.findIndex((img) => img === prevValue);
					return imgList[index + 1];
				}
			});
		}

		// console.log(currImg);
	}

	return (
		<div
			style={isAmbient ? { "backgroundImage": `url(${currImg})` } : null}
			className={`flex flex-row max-h-screen font-ubuntu ${
				isAmbient
					? `bg-center bg-no-repeat bg-[length:1600px_800px]`
					: "bg-none"
			}`}
		>
			<SectionSelect
				sectionTitle={sectionTitle}
				updateTitle={updateTitle}
				updateSelected={updateSelected}
				selected={selected}
				deleteSection={deleteSection}
				isAmbient={isAmbient}
				handleToggle={handleToggle}
			/>
			<div className="w-3/4">
				{sectionTitle && selected.length > 0 ? (
					<TodoApp todo={todo} updateTodo={updateTodo} selected={selected} />
				) : null}
			</div>
		</div>
	);
}
