import resolveXLSX from "./resolveXLSX.js"

export default (rootPath, fileNameArray) => {
	return new Promise(async (resolve, reject) => {
		const fileNames = fileNameArray.map((fileName) => {
			return `${rootPath}/${fileName}`
		})
		try {
			const allDatas = await Promise.all(
				fileNames.map((filename) => {
					return new Promise(async (resolve) => {
						const datas = await resolveXLSX(filename)
						resolve(datas)
					})
				})
			)
			resolve(allDatas)
		} catch (err) {
			reject("导入数据表时出现错误")
		}
	})
}
