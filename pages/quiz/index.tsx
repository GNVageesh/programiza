import { GetServerSideProps } from "next";
import React, { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

export const getServerSideProps: GetServerSideProps = async () => {
	const res = await fetch(
		"https://programmerapi-production.up.railway.app/api/questions"
	);
	const data = await res.json();

	return {
		props: { data },
	};
};

const quiz = ({ data }) => {
	const router = useRouter();
	return (
		<div>
			<Head>
				<title>Programiza | Quiz</title>
				<meta
					name="description"
					content="The Quiz to strengthen your tech stack"
				/>
			</Head>
			<div className="flex flex-col justify-center text-center mt-32 m-4">
				<div>
					<div>
						<h1 className="font-megrim text-7xl capitalize font-bold">
							Quizzz
						</h1>
						<p>
							Let you know what you know about programming stack
						</p>
					</div>

					<div className="text-center justify-center">
						<div className="mt-16">
							{data.map((quest) => (
								<div key={quest.id}>
									<div className="w-3/4 mx-auto">
										{/* <div className="flex justify-between"> */}
										<div className="flex flex-row m-4 bg-gray-200 dark:bg-gray-700 items-center py-4 px-4 text-left rounded-lg">
											<h1 className="">{quest.id}</h1>
											<h1 className="flex-1 ml-4">
												{quest.question.length > 40
													? quest.question.substring(
															0,
															60
													  ) + "..."
													: quest.question}
											</h1>
											{/* <p>{quest.tags}</p> */}
											<div className="flex items-center">
												{/* <p id="diff" className="mx-4">
													{quest.difficulty}
												</p> */}
												{quest.difficulty.toLowerCase() ===
												"easy" ? (
													<p className="text-green-500">
														Easy
													</p>
												) : quest.difficulty.toLowerCase() ===
												  "moderate" ? (
													<p className="text-yellow-500">
														Moderate
													</p>
												) : quest.difficulty.toLowerCase() ===
												  "difficult" ? (
													<p className="text-red-500">
														Difficult
													</p>
												) : (
													<p className="text-blue-500">
														{quest.difficulty}
													</p>
												)}
												<button className="bg-green-500 px-4 py-2 mx-6 mr-0 rounded-xl">
													Answer
												</button>
												<button className="bg-yellow-400 px-4 py-2 mx-6 mr-0 text-black rounded-xl">
													Report
												</button>
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
				<div>
					<button
						onClick={() => {
							router.push("/quiz/new");
						}}
						className="bg-blue-500 absolute bottom-0 right-0 m-4 w-12 h-12 hover:text-2xl transition duration-700 ease-in-out transform rounded-full border-0 outline-none text-white font-xl"
					>
						+
					</button>
				</div>
			</div>
		</div>
	);
};

export default quiz;
