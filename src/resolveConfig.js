export default (path) => {
	return fetch(path)
		.then((res) => res.json())
		.then((data) => data)
}
