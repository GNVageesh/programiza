import React, { useState } from "react";
import Image from "next/image";
import axios from "axios";
import Script from "next/script";

const NewQuiz = () => {
	const [question, setQuestion] = useState("");
	const [options, setOptions] = useState([]);
	const [tags, setTags] = useState([]);
	const [correct, setCorrect] = useState("");
	const [diff, setDiff] = useState("");

	const data = { question, options, correct, tags, difficulty: diff };

	const handleSubmit = async () => {
		// console.log(typeof options);
		// for (let i = 0; i < options.length; i++) {
		// 	if (options[i] === options.toString().trim().split(",")) {

		// 	console.log("Correct option is there");
		// } else {
		// 	console.log(
		// 		"There is no such option to determine as the correct one"
		// 	);
		// }
		// }

		await axios
			.post(
				"https://programmerapi-production.up.railway.app/api/questions",
				data
			)
			.then(() => alert("Added New Question"))
			.catch((e) => alert(e.message));
	};

	const clearForm = () => {
		setCorrect("");
		setQuestion("");
		setOptions([]);
		setTags([]);
		setDiff("");
	};

	return (
		<div>
			<div className="flex flex-col justify-center text-center mx-20">
				<div>
					<div className="mt-32 flex justify-center items-center">
						<div>
							<Image
								src="/images/new.png"
								width={600}
								height={600}
								alt="Quiz image"
								placeholder="blur"
								blurDataURL="/image/new.png"
								className="rounded-2xl"
							/>
						</div>
						<div className="flex-1 sm:w-full">
							<form
								onSubmit={(e) => {
									e.preventDefault();
									handleSubmit();
								}}
							>
								<div>
									<input
										type="text"
										name="question"
										id="question"
										placeholder="Question"
										className="w-3/4 py-2 px-4 shadow-cardLight dark:shadow-cardDark rounded-2xl text-xl m-4 focus:outline-none"
										required
										value={question}
										onChange={(e) =>
											setQuestion(e.target.value)
										}
									/>
								</div>
								<div>
									<textarea
										cols={20}
										rows={10}
										placeholder={
											'Options separated by a comma(",")'
										}
										name="options"
										id="options"
										className="w-3/4 py-2 px-4 shadow-cardLight dark:shadow-cardDark m-2 rounded-2xl focus:outline-none"
										value={options}
										required
										onChange={(e) => {
											setOptions(
												e.target.value.split(",")
											);
										}}
									/>
								</div>
								<div>
									<input
										type="text"
										placeholder="Tags"
										name="tags"
										id="tags"
										className="dark:shadow-cardDark shadow-cardLight w-3/4 focus:outline-none py-2 px-4 m-2 rounded-2xl"
										value={tags}
										required
										onChange={(e) =>
											setTags(e.target.value.split(","))
										}
									/>
								</div>
								<div className="flex justify-center mt-2">
									<input
										type="text"
										placeholder="Correct Option..."
										name="correctOption"
										id="correctOption"
										className="dark:shadow-cardDark shadow-cardLight focus:outline-none py-2 px-4 m-2 rounded-2xl"
										value={correct}
										required
										onChange={(e) =>
											setCorrect(e.target.value)
										}
									/>
									{/* <select name="options" id="options">
										<Script>
																					}
										</Script>
									</select> */}
									<input
										type="text"
										placeholder="Question's Difficulty..."
										name="diff"
										id="diff"
										className="dark:shadow-cardDark shadow-cardLight focus:outline-none py-2 px-4 m-2 rounded-2xl"
										value={diff}
										onChange={(e) =>
											setDiff(e.target.value)
										}
									/>
								</div>

								<div>
									<button
										className="bg-blue-500 px-4 py-2 rounded-2xl text-xl mt-4 m-4"
										type="submit"
									>
										Add Question
									</button>
									<button
										className="bg-yellow-500 dark:text-black text-white m-4 px-4 py-2 rounded-2xl text-xl mt-4"
										onClick={() => clearForm()}
									>
										Clear Form
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NewQuiz;
