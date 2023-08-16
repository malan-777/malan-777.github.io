export function readCoordinate() {
	const data = fetch("data/coordinate.json")
		.then((res) => res.text())
		.then((data) => {
			const resolvedData = data
				.slice(1)
				.slice(0, data.length - 2)
				.replaceAll("\\", "")
			return JSON.parse(resolvedData)
		})

	return data
}

function loadDistrictSearch(map) {
	new AMap.DistrictSearch({
		extensions: "all",
		subdistrict: 0,
	}).search("香港", function (status, result) {
		// 外多边形坐标数组和内多边形坐标数组
		const outer = [new AMap.LngLat(-360, 90, true), new AMap.LngLat(-360, -90, true), new AMap.LngLat(360, -90, true), new AMap.LngLat(360, 90, true)]
		const holes = result.districtList[0].boundaries

		const pathArray = [outer]
		pathArray.push.apply(pathArray, holes)
		const polygon = new AMap.Polygon({
			pathL: pathArray,
			strokeColor: "#000",
			strokeWeight: 0,
			fillColor: "#fcf7e3",
			fillOpacity: 0.8,
		})

		polygon.setPath(pathArray)
		map.add(polygon)
	})
}

export function loadMap(containerId, { markRadius = 1 }) {
	const markers = []
	let map = null

	map = new AMap.Map(containerId, {
		resizeEnable: true,
		expendZoomRange: true,
		zoom: 10,
		zooms: [8, 30],
		center: [114.15818, 22.281928],
		showIndoorMap: false,
		mapStyle: "amap://styles/grey",
		showLabel: true,
	})

	const layer = new AMap.LabelsLayer({
		zooms: [3, 20],
		zIndex: 1000,
		collision: false,
	})
	map.add(layer)

	loadDistrictSearch(map)

	//失焦锁定
	function lock() {
		const mybounds = new AMap.Bounds([114.438838, 22.537208], [113.841456, 22.153618])
		map.setLimitBounds(mybounds)
	}

	function clearAndmark(data, ids) {
		markers.forEach((item) => {
			item.remove()
		})
		markers.splice(0)

		const arrs = []
		ids.forEach((id) => {
			const axisArr = data[id]
			arrs.push(...axisArr)
		})

		arrs.forEach((arr) => {
			const position = [arr[1], arr[0]]

			const labelMarker = new AMap.LabelMarker({
				position: position,
				icon: {
					type: "image",
					image: "static/mass1.png",
					size: [markRadius, markRadius],
					alwaysRender: false,
					anchor: "bottom-center",
				},
			})

			markers.push(labelMarker)
		})

		layer.add(markers)
	}

	lock()

	const mouseTool = new AMap.MouseTool(map)

	let polygonObject = null
	function drawPolygon(callback) {
		if (polygonObject !== null) return

		polygonObject = mouseTool.polygon({
			strokeColor: "#FF33FF",
			strokeOpacity: 1,
			strokeWeight: 6,
			strokeOpacity: 0.2,
			fillColor: "#1791fc",
			fillOpacity: 0.4,
			// 线样式还支持 'dashed'
			strokeStyle: "solid",
			// strokeStyle是dashed时有效
			// strokeDasharray: [30,10],
		})

		mouseTool.on("draw", (event) => {
			const coordinates = [...event.obj.getPath()]

			callback(event.obj, coordinates)
		})
	}

	return {
		clearAndmark,
		drawPolygon,
	}
}
