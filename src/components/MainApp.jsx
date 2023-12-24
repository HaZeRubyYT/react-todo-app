import React, { useState } from "react";
import TodoApp from "./TodoApp.jsx";
import SectionSelect from "./SectionSelectMenu.jsx";

export default function MainApp() {
	const [todo, updateTodo] = useState([]);
	const [sectionTitle, updateTitle] = useState([]);
	const [selected, updateSelected] = useState("");

	return (
		<div className="flex flex-row max-h-screen">
			<SectionSelect
				sectionTitle={sectionTitle}
				updateTitle={updateTitle}
				updateSelected={updateSelected}
				selected={selected}
			/>
			<div className="w-3/4">
				{sectionTitle && selected.length > 0 ? <TodoApp todo={todo} updateTodo={updateTodo} selected={selected} /> : null}
			</div>
		</div>
	);
}

// [{id, title, list:[{id, todo, completed}, ] }, ]
