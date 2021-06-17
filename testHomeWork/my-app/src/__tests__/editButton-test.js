import React from 'react';
import App from '../App';
import renderer from 'react-test-renderer';

test("проверка кнопки 'редактировать'", () => {

    const component = renderer.create(
        <App />
    )

    let componentTree = component.toJSON();
    expect(componentTree).toMatchSnapshot();

    const allButton = component.root.findAllByProps({ id: 'editBtn' });

    for (let i = 0; i < allButton.length; i++) {
        allButton[i].props.onClick();
        const cancelButton = component.root.findByProps({ id: 'cancelChngBtn' });

        componentTree = component.toJSON();
        expect(componentTree).toMatchSnapshot();

        cancelButton.props.onClick();
        componentTree = component.toJSON();
        expect(componentTree).toMatchSnapshot();
    }


    /*
    componentTree = component.toJSON();
    expect(componentTree).toMatchSnapshot();

    allButton.props.onClick();

    componentTree = component.toJSON();
    expect(componentTree).toMatchSnapshot();*/
})