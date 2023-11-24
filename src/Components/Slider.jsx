import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { SliderInfos } from '../Data/sliderDatas';
import { EffectCards } from 'swiper/modules';
import 'swiper/css/effect-cards';

const StyledSlider = styled.div`
	.swiper {
		width: 80vw;

		max-width: 100%;
		padding-bottom: 40px;
	}

	.swiper-slide {
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 18px;
		max-width: 100%;
		box-shadow: 3px 3px 10px #b4a2f8;
		border-radius: 0px;
	}

	.swiper-slide img {
		display: block;

		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	@media only screen and (max-width: 650px) {
		.swiper {
			width: 80vw;
			height: 60vh;
			max-width: 100%;
			padding-bottom: 40px;
		}
	}
`;

function Slider() {
	return (
		<StyledSlider>
			<>
				<Swiper effect={'cards'} grabCursor={true} modules={[EffectCards]} className="mySwiper">
					{SliderInfos.map((item, index) => (
						<SwiperSlide key={index}>
							<img src={item.image} alt="" />
						</SwiperSlide>
					))}
				</Swiper>
			</>
		</StyledSlider>
	);
}

export default Slider;
