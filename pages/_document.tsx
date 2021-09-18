import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDoc extends Document {
	render() {
		return (
			<Html>
				<Head>
					<link
						rel="stylesheet"
						href="https://fonts.googleapis.com/css?family=Megrim"
					/>
					<link
						rel="stylesheet"
						href="https://fonts.googleapis.com/css?family=Arima+Madurai"
					/>
					<link
						rel="stylesheet"
						href="https://fonts.googleapis.com/css?family=Varela"
					/>
				</Head>
				<body className="bg-white text-black dark:bg-darkbg dark:text-white">
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDoc;
