import React, {useEffect} from 'react';
import './Card.css';
import CoolButton from '../CoolButton/CoolButton';
import AOS from 'aos';
import "aos/dist/aos.css"

export default ({ imgName = false, header = 'Hello', text = 'Hello', hasButton = false, headerSize = '16px', headerWeight = 700, id = 'card' }) => {

	useEffect(() => {
		AOS.init({
			duration: 1500,
			mirror: true,
			offset: 150
		});
		AOS.refresh();
	}, [])
	return (
		<div data-aos="fade-up" id={id}  className="card">
			{imgName && <img className="card-img" src={require(`../../images/${imgName}.jpg`)} alt="beautiful hair" />}
			<h4 style={{fontSize: headerSize, fontWeight: headerWeight}}>{header}</h4>
			<p>{text}</p>
			
			{hasButton && <CoolButton />}
		</div>
	);
};
