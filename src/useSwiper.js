const useSwiper = ({ query }) => {
	let swiper = null

	swiper = new Swiper(query, {
		direction: "vertical",
	})

	function slidePrev() {
		swiper && swiper.slidePrev()
	}

	function slideNext() {
		swiper && swiper.slideNext()
	}

	return {
		slidePrev,
		slideNext,
	}
}

export default useSwiper
