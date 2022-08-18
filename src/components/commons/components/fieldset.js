import React from 'react';
import createCustomizableLunaticField from '../../commons/create-customizable-field';
import safetyLabel from '../safety-label';

function Fieldset({ children, legend }) {
	return (
		<fieldset>
			<legend>{safetyLabel(legend)}</legend>
			{children}
		</fieldset>
	);
}

export default createCustomizableLunaticField(Fieldset);