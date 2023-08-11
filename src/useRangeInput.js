let changeCallback = null

export let ranges = null

export const useRangeInputCallback = (callback) => {
	callback && (changeCallback = callback)
}

export const useRangeInput = (targetArr, { defaultRangeLeft, defaultRangeRight }, callback) => {
	ranges = new Proxy(
		{
			x: [defaultRangeLeft, defaultRangeRight],
			y: [defaultRangeLeft, defaultRangeRight],
			z: [defaultRangeLeft, defaultRangeRight],
		},
		{
			set: function (target, key, value) {
				target[key] = value
				changeCallback && changeCallback(target, key, value)
				return true
			},
		}
	)

	let sliders = []
	const multi = Math.pow(10, 15)
	const defaultRange = [defaultRangeLeft * multi, defaultRangeRight * multi]

	targetArr.forEach(({ id, index }) => {
		layui.use(function () {
			var slider = layui.slider

			const res = slider.render({
				elem: id,
				value: defaultRange,
				min: 0,
				tips: true,
				max: multi,
				step: 1,
				theme: "#cf6f09",
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

	callback && callback()
	return sliders
}
