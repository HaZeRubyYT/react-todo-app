import React, { useState } from "react";
import TodoApp from "./components/TodoApp.jsx";
import SectionSelect from "./components/SectionSelect.jsx";

export default function MainApp() {
	const [todo, updateTodo] = useState([]);
	return (
		<div className="flex flex-row max-h-screen">
			<SectionSelect />
			<div className="w-4/5 ">
				<TodoApp todo={todo} updateTodo={updateTodo} />
			</div>
		</div>
	);
}
