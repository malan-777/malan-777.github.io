import resolvePictures from "./resolvePictures.js"
import picCss from "./styles/picCss.js"
import layoutCss from "./styles/layoutCss.js"

const pictureFunctionComponent = (container) => {
	const state = {
		selectIdList: [],
		container,
	}

	/**
	 * 根据路径和数目来创建指定数目的图片容器DOM
	 * @param {*} picPath 图片文件夹所在位置的路径
	 * @param {*} picCount 所需要渲染的图片的数目
	 * @returns Array: 生成的DOMs
	 */
	function createPictureDOM(picPath, picCount) {
		const picPaths = resolvePictures(picPath, picCount)
		return Array.from({ length: picCount })
			.map((_, index) => {
				return {
					path: picPaths[index],
					index,
				}
			})
			.map((item) => {
				const { path, index } = item

				const tempImageDOM = document.createElement("img")
				const tempImageContainerDOM = document.createElement("div")
				const tempImageMask = document.createElement("div")

				tempImageMask.classList.add("img_mask")

				tempImageDOM.src = path
				tempImageDOM.classList.add("img")
				tempImageDOM.setAttribute("id", index.toString())

				tempImageContainerDOM.classList.add("img_container")

				tempImageContainerDOM.appendChild(tempImageDOM)
				tempImageContainerDOM.appendChild(tempImageMask)
				return tempImageContainerDOM
			})
	}

	/**
	 * 用于将一些对象绑定到state中
	 */
	function bindState() {
		state.container = container
	}

	/**
	 * 将一个DOM数组，以指定的数量，通过分布渲染渲染到绑定的容器中。
	 * @param {*} domArray DOMs 数组
	 * @param {*} count 范围：0 - 数组最大角标
	 */
	function renderDOMToContainer(domArray, count) {
		let currentCount = 0

		while (currentCount < count) {
			container.appendChild(domArray[currentCount++])
		}
	}

	/**
	 * 为容器绑定点击事件实现内部元素的事件委托，对不需要产生事件的元素可以再次排除或者在css里面排除pointer-events。
	 */
	function bindEventContainer() {
		container.onclick = (event) => {
			const { container, selectIdList } = state
			//点击事件委托
			const target = event.target
			if (target === container || target === null) return

			const targetId = target.getAttribute("id")
			let isCurrentImageMask = true

			if (state.selectIdList.length !== 0) {
				if (target.classList.contains("mask")) {
					target.classList.remove("mask")
					isCurrentImageMask = false
				} else {
					target.classList.add("mask")
				}
			}

			if (isCurrentImageMask) {
				!selectIdList.includes(targetId) && selectIdList.push(targetId)
			} else {
				const tempSelectId = selectIdList.filter((item) => item !== targetId)

				selectIdList.includes(targetId) && selectIdList.splice(0) && selectIdList.push(...tempSelectId)
			}

			state.selectIdList = [...selectIdList]
			highlightPic()
		}
	}

	/**
	 * 根据state中的容器和已选中元素的id列表，来对选中的id对应的元素进行高亮处理。
	 */
	function highlightPic() {
		const { selectIdList, container } = state
		if (selectIdList.length === 0) {
			for (let i = 0; i < container.children.length; i++) {
				const targetContainer = container.childNodes[i]
				const target = targetContainer.childNodes[0]

				target.classList.contains("mask") && target.classList.remove("mask")
			}
		} else {
			for (let i = 0; i < container.children.length; i++) {
				const targetContainer = container.childNodes[i]
				const target = targetContainer.childNodes[0]

				if (selectIdList.includes(target.getAttribute("id"))) {
					target.classList.add("mask")
				} else {
					target.classList.remove("mask")
				}
			}
		}
	}

	/**
	 * 将配置文件注入到css样式中,实现用配置设置样式。
	 */
	function injectCustomStyles(config) {
		const style = document.createElement("style")

		const css = picCss(config)
		const css2 = layoutCss(config)

		style.innerHTML = css + css2

		document.getElementsByTagName("head").item(0).appendChild(style)
		document.getElementsByTagName("head").item(0).appendChild(style)
	}

	function updateSelectIdList(arr) {
		state.selectIdList.splice(0)
		state.selectIdList.push(...arr)

		highlightPic()
	}

	/**
	 * 进行统一渲染的函数
	 * @param {*} path 渲染文件夹的路径
	 * @param {*} count 渲染的数目
	 */
	function render(path, count, config) {
		return new Promise((resolve) => {
			const doms = createPictureDOM(path, count)

			bindState()
			renderDOMToContainer(doms, count)
			bindEventContainer()
			injectCustomStyles(config)

			resolve(true)
		})
	}

	return {
		render,
		updateSelectIdList,
	}
}

export default pictureFunctionComponent
