import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import DropdownSimple from './dropdown-simple';
import DropdownEdit from './dropdown-edit';
import Declarations from '../declarations';
import * as U from '../../utils/lib';
import * as C from '../../utils/constants';
import { interpret } from '../../utils/to-expose';
import './dropdown.scss';

const Dropdown = ({
	id,
	label,
	preferences,
	response,
	handleChange,
	options,
	writable,
	declarations,
	features,
	bindings,
	tooltip,
	freezeOptions,
	...rest
}) => {
	const [opts, setOpts] = useState(options);
	const [value, setValue] = useState(
		U.getResponseByPreference(preferences)(response)
	);

	useEffect(() => {
		if (!freezeOptions) {
			const featOptions = options.map(({ value, label: labelOption }) => ({
				value,
				label: interpret(features)(bindings)(labelOption),
			}));
			setOpts(featOptions);
		}
	}, [freezeOptions, features, bindings, options]);

	const interpretedLabel = interpret(features)(bindings)(label);

	useEffect(() => {
		setValue(U.getResponseByPreference(preferences)(response));
	}, [preferences, response]);

	const onSelect = (e) =>
		handleChange({
			[U.getResponseName(response)]: e.value,
		});
	return (
		<>
			<Declarations
				id={id}
				type={C.BEFORE_QUESTION_TEXT}
				declarations={declarations}
				features={features}
				bindings={bindings}
			/>
			<Declarations
				id={id}
				type={C.AFTER_QUESTION_TEXT}
				declarations={declarations}
				features={features}
				bindings={bindings}
			/>
			{writable ? (
				<DropdownEdit
					{...rest}
					id={id}
					value={value}
					response={response}
					label={interpretedLabel}
					options={opts}
					onSelect={onSelect}
					tooltip={tooltip}
				/>
			) : (
				<DropdownSimple
					{...rest}
					id={id}
					value={value}
					response={response}
					label={interpretedLabel}
					options={opts}
					onSelect={onSelect}
					tooltip={tooltip}
				/>
			)}
			<Declarations
				id={id}
				type={C.DETACHABLE}
				declarations={declarations}
				features={features}
				bindings={bindings}
			/>
		</>
	);
};

Dropdown.propTypes = {
	disabled: PropTypes.bool,
	writable: PropTypes.bool,
	handleChange: PropTypes.func,
	label: PropTypes.string,
	className: PropTypes.string,
	zIndex: PropTypes.number,
	freezeOptions: PropTypes.bool,
};

Dropdown.defaultProps = {
	writable: false,
	handleChange: () => null,
	label: undefined,
	className: undefined,
	zIndex: 0,
	disabled: false,
	freezeOptions: false,
};

export default Dropdown;
