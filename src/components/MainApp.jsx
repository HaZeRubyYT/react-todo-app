import React, { useState } from "react";
import TodoApp from "./TodoApp.jsx";
import SectionSelect from "./SectionSelectMenu.jsx";

export default function MainApp() {
	const [todo, updateTodo] = useState([]);
	const [sectionTitle, updateTitle] = useState([]);
	const [selected, updateSelected] = useState("");
	const [isAmbient, setAmbient] = useState(false);
	const [imgList, changeList] = useState(["bridge", "monolith", "space"]);
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
		if (!isAmbient) {
			updateImg((prevValue) => {
				if (prevValue === "space") {
					return "bridge";
				} else {
					console.log(prevValue);
					let index = imgList.findIndex((img) => img === prevValue);
					return imgList[index + 1];
				}
			});
		}

		console.log(currImg);
	}

	return (
		<div
			style={{ "--image-url": `url('/src/components/images/${currImg}.jpg')` }}
			className={`flex flex-row max-h-screen font-ubuntu ${
				isAmbient
					? "bg-[image:var(--image-url)] bg-center bg-no-repeat bg-[length:1600px_800px]"
					: " bg-none"
			} `}
		>
			<SectionSelect
				sectionTitle={sectionTitle}
				updateTitle={updateTitle}
				updateSelected={updateSelected}
				selected={selected}
				deleteSection={deleteSection}
				isAmbient={isAmbient}
			/>
			<div className="w-3/4">
				<div className="absolute top-[2.5rem] left-[28rem] font-sans">
					<label className="relative inline-flex items-center cursor-pointer">
						<input type="checkbox" value="" className="sr-only peer" onChange={handleToggle} />
						<div className="w-11 h-6 bg-gray-200 peer-focus:outline-none  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
						<span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-500">
							Ambient Mode
						</span>
					</label>
				</div>
				{sectionTitle && selected.length > 0 ? (
					<TodoApp todo={todo} updateTodo={updateTodo} selected={selected} />
				) : null}
			</div>
		</div>
	);
}

// [{id, title, list:[{id, todo, completed}, ] }, ]
