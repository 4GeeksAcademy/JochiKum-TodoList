import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [inputValue, setInputValue] = useState("");
	const [todos, setTodos] = useState([]);
	return (
		<div className="container">
			<h1>MyList</h1>
			<ul>
				<li>
					<input
						type="text"
						onChange={(e) => setInputValue(e.target.value)}
						value={inputValue}
						onKeyPress={(e) => {
							if (e.key === "Enter" && inputValue.trim() != "") {
								setTodos(todos.concat([inputValue]));
								setInputValue("");
							}
						}}
						placeholder="what do you need to?"></input>
				</li>
				{todos.map((item, index) => (
					<li className="d-flex">
						<span className="me-auto p-0">{item}</span>
						<i
							className="basura fas fa-trash-alt mt-1"
							onClick={() =>
								setTodos(
									todos.filter(
										(t, currentIndex) =>
											index != currentIndex
									)
								)
							}></i>
					</li>
				))}
			</ul>
			<div>{todos.length} tasks</div>
		</div>
	);
};

export default Home;
