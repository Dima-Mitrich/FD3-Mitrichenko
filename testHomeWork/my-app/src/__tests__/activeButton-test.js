import React from 'react';
import App from '../App';
import renderer from 'react-test-renderer';

test('проверка кнопки фильтрации "активные"', () => {

    const component = renderer.create(
        <App />
    )

    let componentTree = component.toJSON();
    expect(componentTree).toMatchSnapshot();

    const allButton = component.root.findByProps({ id: 'activeBtn' });
    allButton.props.onClick();

    componentTree = component.toJSON();
    expect(componentTree).toMatchSnapshot();

    allButton.props.onClick();

    componentTree = component.toJSON();
    expect(componentTree).toMatchSnapshot();
});