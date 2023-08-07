export default () => {
	const xyzDatas = []

	function setXyzDatas(arr) {
		xyzDatas.splice(0)
		xyzDatas.push(...arr)
	}

	//返回在滑块范围内的数据的ids
	function calcIds(ranges, callback) {
		let targetXYZ = null
		const targetIds = xyzDatas
			.filter((item) => {
				const { x, y, z } = item

				const targetX = ranges["x"]
				const targetY = ranges["y"]
				const targetZ = ranges["z"]

				targetXYZ = {
					targetX,
					targetY,
					targetZ,
				}

				return x >= targetX[0] && x <= targetX[1] && y >= targetY[0] && y <= targetY[1] && z >= targetZ[0] && z <= targetZ[1]
			})
			.map((item) => `${item.id}`)

		callback && callback(targetXYZ)
		return targetIds
	}

	return {
		calcIds,
		setXyzDatas,
	}
}
