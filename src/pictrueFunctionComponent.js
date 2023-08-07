import resolvePictures from "./resolvePictures.js"
import picCss from "./styles/picCss.js"
const pictureFunctionComponent = (container) => {
	const state = {
		selectIdList: [],
		container,
		clickIdList: [],
		rowCount: 0,
		domArr: null,
		resolvedDomArr: null,
	}

	const mouseRecord = {
		startId: 0,
		endId: 0,
		isMousedown: false,
		isMove: false,
		selection: [],
	}

	function getClickIdList() {
		return Array.from(new Set([...state.clickIdList, ...mouseRecord.selection]))
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
				const tempImageClickMask = document.createElement("div")

				tempImageMask.classList.add("img_mask")
				tempImageClickMask.classList.add("img_click_mask")

				tempImageDOM.src = path
				tempImageDOM.classList.add("img")
				tempImageDOM.setAttribute("id", index.toString())
				tempImageDOM.setAttribute("dragable", false)

				tempImageContainerDOM.classList.add("img_container")

				tempImageContainerDOM.appendChild(tempImageDOM)
				tempImageContainerDOM.appendChild(tempImageMask)
				tempImageContainerDOM.appendChild(tempImageClickMask)
				return tempImageContainerDOM
			})
	}

	/**
	 * 用于将一些对象绑定到state中
	 */
	function bindState(domArr, rowCount) {
		state.container = container
		state.domArr = domArr
		state.rowCount = rowCount

		const towDimensionalArr = []
		for (let i = 0; i < state.domArr.length; i += state.rowCount) {
			towDimensionalArr.push(state.domArr.slice(i, i + state.rowCount))
		}
		state.resolvedDomArr = towDimensionalArr
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

	function getTargetId(event) {
		const { container } = state
		const target = event.target
		if (target === container || target === null) return
		const targetId = target.getAttribute("id")
		return targetId
	}

	function getImgDOMIDInContainer(container) {
		return container.firstChild
	}

	function addNewClickIds(newAxisArr) {
		if (newAxisArr.length === 0 || !(newAxisArr instanceof Array)) return
		newAxisArr.forEach((item) => {
			if (!state.clickIdList.includes(item)) {
				state.clickIdList.push(item)
			}
		})
	}

	/**
	 * 为容器绑定点击事件实现内部元素的事件委托，对不需要产生事件的元素可以再次排除或者在css里面排除pointer-events。
	 */
	function bindEventContainer() {
		container.onmousedown = (event) => {
			event.preventDefault()

			const { clickIdList } = state

			const targetId = getTargetId(event)

			if (!clickIdList.includes(targetId)) {
				clickIdList.push(targetId)
			} else {
				const tempSelectId = clickIdList.filter((item) => item !== targetId)
				clickIdList.includes(targetId) && clickIdList.splice(0) && clickIdList.push(...tempSelectId)
			}

			addNewClickIds(clickIdList)

			// 记录选中的id
			hightlightClickPic()
			mouseRecord.isMousedown = true
			mouseRecord.startId = targetId
			mouseRecord.endId = targetId
		}

		container.onmousemove = (event) => {
			event.preventDefault()
			const id = getTargetId(event)
			mouseRecord.endId = id

			if (!mouseRecord.isMove && mouseRecord.endId === mouseRecord.startId) return

			if (mouseRecord.isMousedown) {
				mouseRecord.isMove = true
				const startIdRowIndex = Math.floor(mouseRecord.startId / state.rowCount)
				const endIdRowIndex = Math.floor(mouseRecord.endId / state.rowCount)
				const startIdColumnIndex = mouseRecord.startId % state.rowCount
				const endIdColumnIndex = mouseRecord.endId % state.rowCount

				//得到所有xy坐标点
				const axisArr = []
				for (let i = Math.min(startIdRowIndex, endIdRowIndex); i < Math.max(startIdRowIndex, endIdRowIndex) + 1; i++) {
					for (let j = Math.min(startIdColumnIndex, endIdColumnIndex); j < Math.max(startIdColumnIndex, endIdColumnIndex) + 1; j++) {
						axisArr.push([i, j])
					}
				}

				//selectionIds: 所有的id
				const selectionIds = []
				axisArr.forEach(([x, y]) => {
					const target = state.resolvedDomArr[x][y]
					selectionIds.push(getImgDOMIDInContainer(target).getAttribute("id"))
				})

				mouseRecord.selection = selectionIds
				hightlightClickPic()
			}
		}

		container.onmouseup = () => {
			mouseRecord.isMousedown = false
			mouseRecord.isMove = false
			mouseRecord.selection.forEach((item) => {
				if (!state.clickIdList.includes(item)) {
					state.clickIdList.push(item)
				}
			})
			mouseRecord.selection.splice(0)
		}
	}

	function hightlightClickPic() {
		const { container } = state
		const clickIds = getClickIdList()
		if (clickIds.length === 0) {
			for (let i = 0; i < container.children.length; i++) {
				const targetContainer = container.childNodes[i]
				const target = targetContainer.childNodes[0]

				target.classList.contains("mask_click") && target.classList.remove("mask_click")
			}
		} else {
			for (let i = 0; i < container.children.length; i++) {
				const targetContainer = container.childNodes[i]
				const target = targetContainer.childNodes[0]

				if (clickIds.includes(target.getAttribute("id"))) {
					target.classList.add("mask_click")
				} else {
					target.classList.remove("mask_click")
				}
			}
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

		style.innerHTML = css

		document.getElementsByTagName("head").item(0).appendChild(style)
		document.getElementsByTagName("head").item(0).appendChild(style)
	}

	function updateSelectIdList(arr) {
		state.selectIdList.splice(0)
		state.selectIdList.push(...arr)

		highlightPic()
	}

	function updateClickIdList(arr) {
		state.clickIdList.splice(0)
		state.clickIdList.push(...arr)
		hightlightClickPic()
	}

	/**
	 * 进行统一渲染的函数
	 * @param {*} path 渲染文件夹的路径
	 * @param {*} count 渲染的数目
	 */
	function render(path, count, rowCount, config) {
		return new Promise((resolve) => {
			const doms = createPictureDOM(path, count)

			bindState(doms, rowCount)
			renderDOMToContainer(doms, count)
			bindEventContainer()
			injectCustomStyles(config)

			resolve(true)
		})
	}

	return {
		state,
		render,
		updateSelectIdList,
		updateClickIdList,
	}
}

export default pictureFunctionComponent
