import React, { useState } from "react";

import {
	Container,
	ReferencesButton,
	ButtonIcon,
	ButtonText,
	ReferencesList
} from './References.style';

function References({references}) {
	const [ isOpen, setIsOpen ] = useState(false);

	function toggleClickHandler() {
		setIsOpen(!isOpen);
	}

	return (
		<Container>
			<ReferencesButton onClick={toggleClickHandler} show={isOpen}>
				<ButtonIcon size={23} /> 
				<ButtonText>References</ButtonText>
			</ReferencesButton>
			<ReferencesList show={ isOpen }>
				{references.map( r => (
					<li key={r}>{r}</li>
				))}
			</ReferencesList>
		</Container>
	)
}

export default References;