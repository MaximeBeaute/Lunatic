import React from 'react';
import { CheckboxOption } from '../commons';
import { createCustomizableLunaticField } from '../../commons';

function CheckboxBoolean({
	checked,
	id,
	disabled,
	onClick,
	labelId,
	positioning,
}) {
	return (
		<CheckboxOption
			disabled={disabled}
			checked={checked}
			id={id}
			onClick={onClick}
			labelledBy={labelId}
			value={checked}
			positioning={positioning}
		/>
	);
}

export default createCustomizableLunaticField(CheckboxBoolean);
