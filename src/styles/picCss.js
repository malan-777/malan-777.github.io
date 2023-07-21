export default (config) => {
	return ` 
	.pics {
		position: relative;
		margin: 0;
		padding: 0;
		display: grid;
		overflow: hidden;
		grid-template-columns: repeat(${config.numberPerRow[0]}, 1fr);
	}

	.img_container {
		aspect-ratio: 1;
		cursor: pointer;
		overflow: hidden;
		position: relative;
	}

	.img_container > img {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		transition: all ease-in-out ${config.picHighLightTransitionDuration[0]};
	}

	.img_container > img:hover {
		scale: 1.5;
	}

	.img.mask+.img_mask {
		height: 100%;
		width: 100%;
		inset: 0;
		position: absolute;
		border: ${config.borderWidth[0]} solid ${config.borderColor[0]};
		z-index: 1;
	}

	.img_mask {
		pointer-events: none;
	}
	`
}
