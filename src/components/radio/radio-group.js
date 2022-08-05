import React from 'react';
import RadioOption from './radio-option';
import { Label, useOptionsKeydown } from '../commons';
import { createCustomizableLunaticField } from '../commons';
import './radio.scss';
import getPosition from '../commons/components/getPosition';

function Radio({
	options,
	value,
	id,
	onClick,
	positioning,
	checkboxStyle = false,
}) {
	const positionRadioGroup = getPosition(positioning);
	const onKeyDown = useOptionsKeydown(options, onClick);
	return options.map(function (option, index) {
		const { value: valueOption, label } = option;
		const radioId = `lunatic-radio-${id}-${valueOption}`;
		const labelId = `lunatic-radio-label-${id}-${valueOption}`;

		return (
			<div
				key={radioId}
				className={`lunatic-radio-group-option-${positionRadioGroup}`}
			>
				<RadioOption
					id={radioId}
					labelledBy={labelId}
					index={index}
					checked={value === valueOption}
					onClick={onClick}
					value={valueOption}
					onKeyDown={onKeyDown}
					checkboxStyle={checkboxStyle}
					positioning={positioning}
				/>
				<Label className="lunatic-radio-label" id={labelId} htmlFor={radioId}>
					{label}
				</Label>
			</div>
		);
	});
}

export default createCustomizableLunaticField(Radio);
