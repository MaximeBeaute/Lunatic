import React from 'react';
import RadioGroup from './radio-group';
import { createLunaticComponent } from '../commons';
import './radio.scss';

function LunaticRadioGroup(props) {
	const { id, options, value, onChange, checkboxStyle, custom, positioning } =
		props;
	return (
		<RadioGroup
			id={id}
			options={options}
			value={value}
			onClick={onChange}
			checkboxStyle={checkboxStyle}
			custom={custom}
			positioning={positioning}
		/>
	);
}

export default createLunaticComponent(LunaticRadioGroup, {
	fieldset: true,
	inputId: 'lunatic-radio-group',
});
