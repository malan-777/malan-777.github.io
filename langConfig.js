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
		en: "HongKong Streetscape Indexing <br />Based on Visual Complexity",
	},
	contentText_1: {
		zh: `
			实体已不再是城市存在的唯一方式，人们通过在线街景应用（谷歌街景、百度街景等）便可以足不出户地探索世界各地的城市形象与风貌。
			随着智慧城市的信息建设与数字化发展进入快车道，人们对城市形象探索有了更高的需求，例如，快速搜索特定街景、智能交互城市环境，明智决策规划发展。 
			然而，现有的在线街景应用却无法摆脱线性单一的探索模式，人们只能被限制在虚拟的街道上单向点击前进，无法对城市形象进行多样化的交互探索体验。 
			因此，我们开发了一个“城市街景索引”应用，通过收集、分析和描述整个城市街景的视觉信息数据流，以达到灵活、多维度、高效地深入挖掘城市视觉环境特征的目的，从而改变现代城市形象的管理与探索的方式。
			<br /><br />在此“城市街景索引”中，我们着眼于街景的纹理、形状、色彩这三个基于感知的视觉特征，并以视觉复杂度的方式去度量其视觉信息量。这样做的原因有三：
			<br /><br />1. 凯文林奇在《城市意象》中提出，沿街的砖墙老屋、门前的热闹集市、街边的葱郁大树等，这些具有不同纹理、形状、色彩与组合模式的视觉肌理，往往会形成生动、强烈的心理图像，
			是强化城市意象性(imageability)与易辨性(legibility)的感知方式。因此，纹理、形状、色彩是认识城市意象、印象、风貌形象的典型视觉特征。
			`,
		en: `
			Physical presence is no longer the exclusive mode of experiencing cities. Through online street view applications like Google Street View or Baidu Street View, 
			one can seamlessly explore city images worldwide without stepping out of your home.
			<br/><br/>With the advancement of information infrastructure and digital progress in smart cities, the desire for urban image exploration has surged. 
			This includes the rapid retrieval of specific streetscapes, intelligent interaction with urban environments, and informed decision-making for urban planning and development.

			However, these online street views still remain constrained by a "monotonous" exploration mode, where users are limited to one-way clicks, navigating virtual streets without the opportunity for
			diverse and interactive urban experiences.
			<br/><br/>

			Hence, we have introduced an "Urban Streetscape Indexing" application, which systematically collects, analyzes, and characterize the visual information stream of the city streetscapes. 
			Aiming to achieve a dynamic, multi-dimensional, and efficient exploration of urban streetscapes, ultimately revolutionizing the methods of managing and exploring modern urban images.
			<br/><br/>

			In this "Urban Streetscape Indexing", we specifically focus on three perception-based visual characteristics: texture, shape, and color of the streetscape, which are quantified using visual complexity as the measurement. There are
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
		zh: `<br />3. 目前，街景的数字解析通常依靠语义分割技术，即提取街景的天空、建筑、植物、道路等物质构成特征，并测算其各自的像素占比。但这种方法只能描述街景的“形态”，却并不能抓住街景的“神韵”，街景往往拥有相似的物质元素构成，却给人完全不同的视觉感受。
		对此，街景纹理、形状、色彩特征的视觉复杂度为城市形象认知提供了一个新颖的探索角度。同时，也可作为现有方法的有效补充，在数字语境下更全面的掌握城市街景形象。`,
		en: `<br />3. Currently, the digital analysis of streetscapes typically relies on image semantic segmentation, which involves extracting object elements such
			as the sky, buildings, plants, and roads from the streetscape and quantifying them based on their pixel proportions. However, this method only depicts the object of
			the streetscape, but fails to capture their impressions. As a result, the visual complexity of streetscape's texture, shape, and color provides a novel perspective for
			the city image. Simultaneously, it also serves as an effective complement to existing methods, enabling a more comprehensive understanding of the urban streetscape in
			the digital context.
			`,
	},
	contentText_4: {
		zh: `<br />综上，纹理、形状、颜色的视觉复杂度代表了城市视觉感知的信息量，基于此的“城市街景索引”将视觉感知特征、街景及其地理信息融合，创造了一个有趣的城市探索方式。点击“下一页”，让我们一同来探索城市丰富的视觉体验吧！
		<br />同时，在左侧的视频中，您可以了解有关“城市街景索引”的应用方法。此应用是基于论文XXXXXX而开发的。`,
		en: `<br />To sum up, the visual complexity of texture, shape, and color encapsulates the volume of information in urban visual perception. 
		Building upon this notion, the "Urban Streetscape Indexing" seamlessly merges visual perceptual characteristics,  treetscapes, and their geographical information, crafting an intriguing approach to the exploration of city images.
		Click "Next page" to embark on a journey through the city's vibrant visual experiences together!
		<br />Furthermore, the video on the left provides insights into the application techniques of the "Urban Streetscape Indexing". It's worth noting that this application has been developed based on the research paper XXXXXX.
			`,
	},
	picText_0a: {
		zh: `*街景的纹理特征`,
		en: `*The texture characteristics of streetscapes`,
	},
	picText_0b: {
		zh: `*街景的形状特征`,
		en: `*The shape characteristics of streetscapes`,
	},
	picText_0c: {
		zh: `*街景的色彩特征`,
		en: `*The color characteristics of streetscapes`,
	},
	picText_1: {
		zh: `*"安全性”由低到高的街景`,
		en: `*Streetscapes graded from low to high on the scale of "sefety"`,
	},
	picText_2: {
		zh: "（图片来源：Nikhil Naik, et al, 2014）",
		en: "(image courtesy: Nikhil Naik, et al, 2014)"
	},
	picText_3: {
		zh: `*"视觉质量”由低到高的街景`,
		en: `*Streetscapes graded from low to high on the scale of "visual quality"`,
	},
	picText_4: {
		zh: "（图片来源：Yu Ye, et al, 2019）",
		en: "(image courtesy: Yu Ye, et al, 2019)"
	},
	picText_5: {
		zh: `*"美观性”由低到高的街景`,
		en: `*Streetscapes graded from low to high on the scale of "beauty"`,
	},
	picText_6: {
		zh: "（图片来源：Abhimanyu Dubey, et al, 2016）",
		en: "(image courtesy: Abhimanyu Dubey, et al, 2016)"
	},
	picText_7: {
		zh: `*"疗愈性”由低到高的街景`,
		en: `*Streetscapes graded from low to high on the scale of "healing perception"`,
	},
	picText_8: {
		zh: "（图片来源：徐磊青, 等, 2020）",
		en: "(image courtesy: Leiqing Xu, et al, 2020)"
	},
	picText_9: {
		zh: "*物质构成相似的街景却有着完全不同的视觉感受",
		en: "*Streetscapes share similar object-based configurations but exhibit distinct visual perceptions"
	},
	page_change_1: {
		zh: `上一页`,
		en: `Last page`
	},
	page_change_2: {
		zh: `下一页`,
		en: `Next page`
	},
	texture: {
		zh: "纹理复杂度:",
		en: "Texture Complexity:",
	},
	texture_tip: {
		zh: `街景中的表面细节与纹理质感`,
		en: `Streetscapes' surface intricacies and textural nuances.`
	},
	shape: {
		zh: "形状复杂度:",
		en: "Shape Complexity:",
	},
	shape_tip: {
		zh: `街景的结构组成异质性与不确定性`,
		en: `Heterogeneity and uncertainty in the structural composition of streetscapes.`
	},
	color: {
		zh: "颜色复杂度:",
		en: "Color Complexity:",
	},
	color_tip: {
		zh: `街景的色彩丰富程度与差异对比度`,
		en: `The color richness and the contrasting differences in streetscapes.`
	},
	default: {
		zh: "清 空",
		en: "Default",
	},
	find: {
		zh: "寻 址",
		en: "Find Geo-location",
	},
	range_btn_low: {
		zh: "低",
		en: "low",
	},
	range_btn_hign: {
		zh: "高",
		en: "high",
	},
	indexing: {
		zh: `香  港  街  景  索  引`,
		en: `HongKong Streetscape Indexing`,
	},
	indexing_intro_1: {
		zh: `通过分析街景中纹理、形状、颜色，形成香港城市街景的“特征地图”，将香港全境的街景按“视觉感知相似性”重新排列。
		相较于“地理地图”，“特征地图”是一种全新的城市形象呈现逻辑。因此，我们对城市的探索将变得更加灵活与有趣！现在，你可以尝试以下操作来探索城市形象：`,
		en: `Through an analysis of the visual perceptual characteristics like "texture," "shape," and "color", we craft a distinctive "Feature Map" of Hong Kong's urban streetscapes. 
		This map re-organizes Hong Kong's streetscapes based on their "visual perceptual similarity". 
		In comparison with a "geographic map", this "Feature Map" presents urban streetscapes in a novel alternative logic. 
		Consequently, our exploration of the city image gains flexibility and fun! Now, feel free to begin your exploration of the city images by engaging with the following actions:`,
	},
	indexing_intro_2: {
		zh: `1.  拖动左边的量值滑动条，看看“纹理”、“形状”、“颜色”的视觉复杂度变化，会在特征地图中形成怎样的街景？点击“寻址”按键，进一步发现这些街景在“地理地图”中的分布。
		这项操作可应用于：城市色彩研究或艺术家寻找城市中色彩组合丰富的场址，城市驾驶导航中选择视觉体验简洁的道路，等场景。
		<br />2.  按照你的喜好与想法，在“特征地图”中选择街景，点击“寻址”，发现这些街景在“地理地图”中分布。
		这项操作可应用于：城市热岛效应研究中定位城市高密度建筑街区，旅游者在城市中搜寻自然风光地带，等场景。`,
		en: `1.  Slide the bars on the left to witness the effect of the visual complexity level of "texture", "shape", and "color" in formalizing various streetscapes in the "Feature Map".
		Furthermore, Click on the left-side "Find geo-location" to explore where these streetscapes are positioned on the left "geo-map". 
		This action can be useful in different situations, like seeking locations with vibrant color combinations for urban color planners or art painters, choosing visually simple routes for city navigation, and more.
		<br />2.  Based on your preferences and ideas, handpick streetscapes within the "feature map", then click "Find geo-location" to uncover how these chosen streetscapes are distributed on the "geo-map".
		This action can be useful in identifying high-density urban areas for urban heat studies, or assisting tourists in discovering natural scenic spots within the city.`,
	},
	sub_title_1: {
		zh: `-- 街 景 “特 征 地 图” --`,
		en: `-- "Feature map" of streetscapes --`,
	},
	sub_title_2: {
		zh: `-- 街 景 “地 理 地 图” --`,
		en: `-- "Geo-map" of streetscapes --`,
	},
}
