export default {
	nextMenu: {
		zh: "下一页",
		en: "Next Page",
	},

	TitlePic: {
		zh: "static/page2-title.png",
		en: "static/page2-title-en.png",
	},

	contentTitle: {
		zh: `基于 视觉复杂度 的  香港"城市街景索引"`,
		en: "HongKong Streetscape Indexing                              Based on Visual Complexity",
	},
	contentText_1: {
		zh: `
			通过在线街景来探索城市形象已不是什么新鲜事儿了，谷歌街景、百度街景等地图应用便可以实现足不出户地轻松浏览世界各地。
			如今，社会的信息数字化发展已进入快车道，人们对城市形象探索有了更高的需求，例如，快速搜索特定街景、智能交互城市环境，明智决策规划发展。 
			然而，现有的在线街景应用却无法摆脱线性单一的探索模式，人们只能被限制在虚拟的街道上单向点击前进，无法对城市形象进行多样化的交互探索体验。 
			因此，我们开发了一个“城市街景索引”应用，通过收集、分析和描述整个城市街景的视觉信息数据流，以达到灵活、多维度、高效地深入挖掘城市视觉环境特征的目的，从而改变现代城市形象的管理与探索的方式。
			<br /><br />街景的数字信息化需要对街景进行视觉特征的提取与量化。对此，我们着眼于街景的纹理、形状、色彩这三个基于感知的视觉特征，并以视觉复杂度的方式去量化。这样做的原因有三：
			<br /><br />1. 凯文林奇在《城市意象》中提出，沿街的砖墙老屋、门前的热闹集市、街边的葱郁大树等，这些具有不同纹理、形状、色彩与组合模式的视觉肌理，往往会形成生动、强烈的心理图像，
			是强化城市意象性(imageability)与易辨性(legibility)的感知方式。因此，纹理、形状、色彩是认识城市意象、印象、风貌形象的典型视觉特征。
			`,
		en: `
			Exploring the urban landscape through online street view is no longer a novelty. For instance, map applications such as Google Street View and Baidu Street
			View allow users to effortlessly navigate different parts of the world from the comfort of their homes.
			<br/><br/>

			However, these online street views still remain constrained by a "monotonous" exploration mode, where users are limited to one-way clicks, navigating virtual streets without the opportunity for
			diverse and interactive urban experiences.
			<br/><br/>

			In the era of digital
			information, people have higher expectations for accessing urban images, including faster searching for desired streetscapes, smarter interaction with the
			environment to respond to human input, and wiser decision-making for informed planning development.
			<br/><br/>
			
			In this context, developing a digital indexing system to collect, analyze, and characterize the data stream of streetscapes across the city can efficiently
			derive multifaceted insights in the explo- ration of the urban visual environment, and potentially change the way the modern city image is managed and explored.
			<br/><br/>

			The informatization of street views requires the extraction and quantification of visual characteristics from streetscapes. We specifically focus on three
			perception-based visual characteristics: texture, shape, and color of the streetscape, which are quantified using visual complexity as the measurement. There are
			three compelling reasons behind this approach:
			<br/><br/>

			1. In "The Image of the City", Lynch argued that "it is that shape, color, or arrangement which facilitates the making of vividly identified, powerfully
			structured, highly useful mental images of the environment ... the mental image involves its shape, color, texture, and detail" Various visual impressions, such as
			the brick walls of old houses, lively markets at the doorstep, and boulevards with lush trees, creating vibrant and vivid mental images. These elements: texture,
			shape, and color, therefore play a significant role in strengthening the imageability and legibility of the city.			
		`,
	},

	contentText_2: {
		zh: `<br />2. 在以往对城市街景与人类认知的耦合研究中，不难发现“视觉复杂度”可被看作是街景多种认知体验的底层逻辑与描述机制。因此，视觉复杂度是视觉信息传递中数量与能量的有效量化方式。`,
		en: '<br />2. In previous research exploring the connection between urban street views and human cognition, it becomes apparent that visual complexity can be seen as the foundational logic and descriptive mechanism underlying various cognitive experiences of streetscapes. Consequently, visual complexity serves as an effective quantitative measure of the amount and intensity of visual perception.',

	},

	contentText_3: {
		zh: `<br />3. 目前，数字语境下的街景解析通常依靠语义分割认知，即提取街景的天空、建筑、植物、道路等物质构成特征，并以其各自的像素占比来量化。但这种方法只能描述街景的“形态”，却并不能抓住街景的“神韵”。
		因此，街景纹理、形状、色彩特征的视觉复杂度“另辟蹊径”，为城市形象认知提供了一个新颖的探索角度。同时，也可作为现有方法的有效补充，在数字语境下更全面的掌握城市街景形象。`,
		en: `<br />3. Currently, the analysis of streetscapes in the digital context typically relies on image semantic segmentation, which involves extracting object elements such
			as the sky, buildings, plants, and roads from the street scenes and quantifying them based on their pixel proportions. However, this method only captures the object of
			the streetscape, but fails to capture their impressions. As a result, the visual complexity of streetscape's texture, shape, and color provides a novel perspective for
			the city image. Simultaneously, it also serves as an effective complement to existing methods, enabling a more comprehensive understanding of the urban streetscape in
			the digital context.
			`,
	},
	picText_1: {
		zh: `安全性”由低到高的街景`,
		en: `Safety” from low to hig `,
	},
	picText_2: {
		zh: "（图片来源：Nikhil Naik, et al, 2014）",
		en: "(image courtesy: Nikhil Naik, et al, 2014)"
	},
	texture: {
		zh: "纹理",
		en: "Texture",
	},
	shape: {
		zh: "形状",
		en: "Shape",
	},
	color: {
		zh: "颜色",
		en: "Color",
	},
	default: {
		zh: "默认",
		en: "DEFAULT¸",
	},
	find: {
		zh: "寻址",
		en: "Find Geo-location",
	},
	range_btn_low: {
		zh: "低",
		en: "lowest",
	},
	range_btn_hign: {
		zh: "高",
		en: "highest",
	},
}
