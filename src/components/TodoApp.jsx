import React, { useState } from "react";
import InputArea from "./core-todo-components/InputArea";
import TodoList from "./core-todo-components/TodoList";

export default function TodoApp({ todo, updateTodo, selected }) {
	const [input, setInput] = useState("");

	function addTodo() {
		if (input.trim() === "") {
			alert("type something ffs");
		} else {
			console.log(todo);
			updateTodo((prevList) => [
				...prevList,
				{
					id: prevList[prevList.length - 1] ? prevList[prevList.length - 1].id + 1 : 0,
					title: selected,
					todoItem: input,
					completed: false,
				},
			]);
		}
	}

	function completeTodo(idToComplete) {
		updateTodo((prevList) => {
			let array = [...prevList];
			array[idToComplete].completed = true;
			console.log(array);
			return array;
		});
	}
	return (
		<div className="max-h-screen overflow-y-auto font-ubuntu">
			<InputArea input={input} setInput={setInput} onAdd={addTodo} />
			<TodoList todoList={todo} updateTodo={updateTodo} onComplete={completeTodo} selected={selected} />
		</div>
	);
}
