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

	.img.mask~.img_mask {
		height: 100%;
		width: 100%;
		inset: 0;
		position: absolute;
		border: ${config.borderWidth[0]} solid ${config.borderColor[0]};
		z-index: 1;
	}

	.img.mask_click~.img_click_mask{
		height: 100%;
		width: 100%;
		inset: 0;
		position: absolute;
		border: ${config.clickBorderWidth[0]} solid ${config.clickBorderColor[0]};
		z-index: 1;
	}

	.img_degree_mask{
		opacity: var(--opacity);
		width:100%;
		height:100%;
		background-color:rgb(237,202,2);
		position:absolute;
	}
	
	.img_degree_mask.hidden{
		opacity:0;
	}

	.img_click_mask,.img_mask,.img_degree_mask,.img_color_mask {
		pointer-events: none;
	}

	.img_color_mask {
		opacity: 0.5;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color:var(--color);
	}

	.img_color_mask.hidden{
		opacity:0;
	}
	`
}
