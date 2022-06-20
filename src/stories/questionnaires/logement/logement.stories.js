import React from 'react';
import Orchestrator from '../../utils/orchestrator';
import logement from './source';
import logementSequence from './source-sequence';
import data from './data';
import defaultArgTypes from '../../utils/default-arg-types';

const stories = {
	title: 'Questionnaires/Logement',
	component: Orchestrator,
	argTypes: {
		...defaultArgTypes,
		missing: {
			table: { disable: false },
			control: 'boolean',
			defaultValue: true,
		},
		activeGoNextForMissing: {
			table: { disable: false },
			control: 'boolean',
			defaultValue: true,
		},
	},
};

export default stories;

const Template = (args) => <Orchestrator {...args} />;
export const Default = Template.bind({});

Default.args = {
	id: 'logement-default',
	source: logement,
	data,
	pagination: true,
};

export const Sequence = Template.bind({});

Sequence.args = {
	id: 'logement-sequence',
	source: logementSequence,
	data,
	pagination: true,
};
