import React from 'react';
import { shallow } from 'enzyme';
import { CheckboxOne } from 'components';

describe('checkbox-one', () => {
	const onChange = jest.fn();
	const options = [
		{ value: 'france', label: 'France' },
		{ value: 'italy', label: 'Italy' },
	];

	it('renders without crashing', () => {
		shallow(<CheckboxOne id={''} handleChange={onChange} options={options} />);
	});

	it('test state changes', () => {
		const wrapper = shallow(
			<CheckboxOne id="id" handleChange={onChange} options={options} />
		);
		expect(wrapper.state(['selectedValue'])).toBe('');
		wrapper.setState({ selectedValue: 'france' });
		expect(wrapper.state(['selectedValue'])).toBe('france');
		wrapper.setState({ selectedValue: 'italy' });
		expect(wrapper.state(['selectedValue'])).toBe('italy');
	});

	it('test handler', () => {
		const wrapper = shallow(
			<CheckboxOne id="id" handleChange={onChange} options={options} />
		);
		// Select first checkbox
		wrapper
			.find('.checkbox-lunatic')
			.first()
			.simulate('change');
		expect(wrapper.state(['selectedValue'])).toBe('france');
		// Change selected checkbox
		wrapper
			.find('.checkbox-lunatic')
			.at(1)
			.simulate('change');
		expect(wrapper.state(['selectedValue'])).toBe('italy');
		// Cancel selected checkbox
		wrapper
			.find('.checkbox-lunatic')
			.at(1)
			.simulate('change');
		expect(wrapper.state(['selectedValue'])).toBe('');
	});
});
