import * as XLSX from "../plugins/xlsx.mjs"

export default (path) => {
	return fetch(path)
		.then((res) => {
			return res.arrayBuffer()
		})
		.then((data) => {
			const sheet = XLSX.read(data, { type: "array" })

			const arr = sheet.SheetNames.map((sheetName) => {
				const json = XLSX.utils.sheet_to_json(sheet.Sheets[sheetName], { header: 1 })
				return json
			})[0].map((item) => item[1])

			return arr
		})
}
