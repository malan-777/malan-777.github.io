export default (config) => {
	const [ratioLeft, ratioRight] = config.asideMainRatio[0].split("/")

	return `
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}
	
	body,
	html {
		height: 100%;
	}
	
	.app {
		display: flex;
		height: 100%;
	}
	
	.aside {
		padding:20px;
		flex: ${parseInt(ratioLeft)};
		border-right: 2px solid rgba(0, 0, 0, 0.15);
		overflow:hidden;
	}
	
	.main {
		flex: ${parseInt(ratioRight)};
		overflow: auto;
		padding: 20px;
	}
	`
}
