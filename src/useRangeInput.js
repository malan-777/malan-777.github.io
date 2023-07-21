let changeCallback = null

export const ranges = new Proxy(
	{
		x: [0, 1],
		y: [0, 1],
		z: [0, 1],
	},
	{
		set: function (target, key, value) {
			target[key] = value
			changeCallback && changeCallback(target, key, value)
			return true
		},
	}
)
export const useRangeInputCallback = (callback) => {
	callback && (changeCallback = callback)
}

export const useRangeInput = (targetArr) => {
	let sliders = []
	targetArr.forEach(({ id, index }) => {
		layui.use(function () {
			var slider = layui.slider
			var layer = layui.layer

			const res = slider.render({
				elem: id,
				value: [0, 1000000000000000], // 初始值
				min: 0,
				tips: true,
				max: 1000000000000000,
				step: 1,
				theme: "#3f85ed",
				range: true, // 范围选择
				setTips: function (value) {
					return value / Math.pow(10, 15)
				},
				change: function (vals) {
					const min = vals[0] / Math.pow(10, 15)
					const max = vals[1] / Math.pow(10, 15)
					ranges[index] = [min, max]
				},
			})
			sliders.push(res)
		})
	})
	return sliders
}
