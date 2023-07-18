import resolvePictures from "./resolvePictures.js"

const pictureFunctionComponent = () => {
	const selectIdList = []

	function isSelectIdListClear() {
		return selectIdList.length === 0
	}

	// 构造DOM列表，用来渲染到容器中
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
				tempImageDOM.id = index + 1

				tempImageContainerDOM.classList.add("img_container")

				tempImageContainerDOM.appendChild(tempImageDOM)
				tempImageContainerDOM.appendChild(tempImageMask)

				return tempImageContainerDOM
			})
	}

	// 渲染DOM列表到容器中
	function renderDOMToContainer(container, targetArray, count) {
		container.appendChild(targetArray[count])
	}

	function bindEventContainer(container, selectIdList, callback) {
		container.onclick = (event) => {
			//点击事件委托
			const target = event.target
			if (target === container || target === null) return

			const targetId = target.id
			let isCurrentImageMask = true

			if (selectIdList.length !== 0) {
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

			maskPic(container, selectIdList)

			callback({
				targetId,
				isCurrentImageMask,
			})
		}
	}

	//根据提供的已选择列表，来对容器中的元素设置遮罩
	function maskPic(container, selectIdList) {
		if (isSelectIdListClear()) {
			for (let i = 0; i < container.children.length; i++) {
				const targetContainer = container.childNodes[i]
				const target = targetContainer.childNodes[0]
				targetContainer.classList.contains("mask") && target.classList.remove("mask")
			}
		} else {
			for (let i = 0; i < container.children.length; i++) {
				const targetContainer = container.childNodes[i]
				const target = targetContainer.childNodes[0]

				if (selectIdList.includes(target.id)) {
					!targetContainer.classList.contains("mask") && target.classList.add("mask")
				} else {
					targetContainer.classList.contains("mask") && target.classList.remove("mask")
				}
			}
		}
	}

	return {
		createPictureDOM,
		renderDOMToContainer,
		bindEventContainer,
		maskPic,
		selectIdList,
	}
}

export default pictureFunctionComponent
