import React, { useState } from "react";
import Todo from "./Todo";

export default function TodoList({ todoList, updateTodo }) {
	function editTodo(indexToEdit, newTodo) {
		const array = [...todoList];
		array[indexToEdit] = { ...array[indexToEdit], todoItem: newTodo };
		updateTodo(array);
	}

	function delTodo(indexToDel) {
		updateTodo((prevList) => {
			console.log(prevList.filter((todo, index) => index != indexToDel));
			return prevList.filter((todo, index) => index != indexToDel);
		});
	}

	function completeTodo(idToComplete) {
		updateTodo((prevList) => {
			let array = [...prevList];
			array[idToComplete].completed = !array[idToComplete].completed;
			console.log(array);
			return array;
		});
		updateCompleted(true);
	}
	return (
		<div className="todo-div text-white grid grid-cols-1 px-36 py-2.5">
			{todoList.map(
				(todoObj, index) =>
					!todoObj.completed && (
						<Todo
							key={todoObj.id}
							todoObj={todoObj}
							index={index}
							onDel={delTodo}
							onEdit={editTodo}
							onComplete={completeTodo}
						/>
					),
			)}
			<br />
			{todoList.map(
				(todoObj, index) =>
					todoObj.completed && (
						<Todo
							key={todoObj.id}
							todoObj={todoObj}
							index={index}
							onDel={delTodo}
							onEdit={editTodo}
							onComplete={completeTodo}
						/>
					),
			)}
		</div>
	);
}
