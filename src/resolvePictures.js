const pictureName = (picFolderPath, number) => {
	return `${picFolderPath}/${number}.jpg`
}

const resolvePictures = (picFolderPath, picCount) => {
	return Array.from({ length: picCount }).map((_, index) => pictureName(picFolderPath, index))
}

export default resolvePictures
