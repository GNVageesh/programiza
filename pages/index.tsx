import { useTheme } from "next-themes";
import Head from "next/head";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Programiza | Home</title>
				<meta name="description" content="Programiza Homepage" />
			</Head>
			<div className="flex flex-col justify-center text-center mt-32 m-10">
				<div>
					<div>
						<h1 className="text-8xl font-arima text-green-500">
							Progra
							<span className="font-megrim text-black dark:text-white">
								miza
							</span>
						</h1>
						<p className="font-varela mt-2">
							A Paradise For Programmers
						</p>
					</div>

					<div className="grid grid-cols-2 mt-4">
						<Link href="/quiz">
							<div className="dark:shadow-cardDark shadow-cardLight m-10 rounded-2xl p-2 hover:cursor-pointer transition duration-700 ease-in-out transform hover:-translate-y-8">
								<Image
									src="/images/quiz.png"
									width={400}
									height={400}
									alt="Quiz image"
									placeholder="blur"
									blurDataURL="/image/quiz.png"
									className="rounded-2xl"
								/>
								<h2 className="text-2xl text-green-500">
									Quiz
								</h2>
								<p className="mt-4 p-2 font-varela">
									Interactive Quiz for enhancing your
									programming skill stack
								</p>
							</div>
						</Link>
						<div className="dark:shadow-cardDark shadow-cardLight m-10 rounded-2xl p-2 hover:cursor-pointer transition duration-700 ease-in-out transform hover:-translate-y-8">
							<Image
								src="/images/discuss.png"
								width={400}
								height={400}
								alt="Quiz image"
								placeholder="blur"
								blurDataURL="/image/discuss.png"
								className="rounded-2xl"
							/>
							<h2 className="text-2xl text-green-500">
								Discussion
							</h2>
							<p className="mt-4 p-2 font-varela">
								Interactive Quiz for enhancing your programming
								skill stack
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
