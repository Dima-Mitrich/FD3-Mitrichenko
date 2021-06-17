import FiltrBtns, { pow2 } from './components/FiltrBtns';
import AbonentContainer from './components/AbonentsContainer';
import { mtsClients } from './App'
import { Fragment } from 'react';
import renderer from 'react-test-renderer';

test('проверка возведения 2 в разные степени', () => {

    expect(pow2(3)).toBe(6);

    expect(pow2(6)).toBe(12);

    expect(pow2(10)).toBe(20);

});

/*test('проверка кнопки фильтрации "все"', () => {

    const component = renderer.create(
        <Fragment>
            <FiltrBtns />
            <AbonentContainer mtsClients={mtsClients} />
        </Fragment>
    )

    let componentTree = component.toJSON();
    expect(componentTree).toMatchSnapshot();

    const allButton = component.root.findByProps({ id: 'allBtn' });
    allButton.props.onClick();

    componentTree = component.toJSON();
    expect(componentTree).toMatchSnapshot();

    allButton.props.onClick();

    componentTree = component.toJSON();
    expect(componentTree).toMatchSnapshot();
});

test('проверка кнопки фильтрации "активные"', () => {

    const component = renderer.create(
        <Fragment>
            <FiltrBtns />
            <AbonentContainer mtsClients={mtsClients} />
        </Fragment>
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

test('проверка кнопки фильтрации "заблокированные"', () => {

    const component = renderer.create(
        <Fragment>
            <FiltrBtns />
            <AbonentContainer mtsClients={mtsClients} />
        </Fragment>
    )

    let componentTree = component.toJSON();
    expect(componentTree).toMatchSnapshot();

    const allButton = component.root.findByProps({ id: 'blockedBtn' });
    allButton.props.onClick();

    componentTree = component.toJSON();
    expect(componentTree).toMatchSnapshot();

    allButton.props.onClick();

    componentTree = component.toJSON();
    expect(componentTree).toMatchSnapshot();
});


test('проверка кнопки "редактировать"', () => {

    const component = renderer.create(
        <Fragment>
            <FiltrBtns />
            <AbonentContainer mtsClients={mtsClients} />
        </Fragment>
    )

    let componentTree = component.toJSON();
    expect(componentTree).toMatchSnapshot();

    const allButton = component.root.findAllByProps({ id: 'editBtn' }).find(elem => elem.type === 'button');
    console.log(allButton);
    allButton.props.onClick();

    componentTree = component.toJSON();
    expect(componentTree).toMatchSnapshot();

    allButton.props.onClick();

    componentTree = component.toJSON();
    expect(componentTree).toMatchSnapshot();
});


test('проверка кнопки "удалить"', () => {

    const component = renderer.create(
        <Fragment>
            <FiltrBtns />
            <AbonentContainer mtsClients={mtsClients} />
        </Fragment>
    )

    let componentTree = component.toJSON();
    expect(componentTree).toMatchSnapshot();

    const allButton = component.root.findByProps({ id: 'deleteBtn' });
    allButton.props.onClick();

    componentTree = component.toJSON();
    expect(componentTree).toMatchSnapshot();

    allButton.props.onClick();

    componentTree = component.toJSON();
    expect(componentTree).toMatchSnapshot();
});


test('проверка кнопки "отмена"', () => {

    const component = renderer.create(
        <Fragment>
            <FiltrBtns />
            <AbonentContainer mtsClients={mtsClients} />
        </Fragment>
    )

    let componentTree = component.toJSON();
    expect(componentTree).toMatchSnapshot();

    const allButton = component.root.findByProps({ id: 'cancelChngBtn' });
    allButton.props.onClick();

    componentTree = component.toJSON();
    expect(componentTree).toMatchSnapshot();

    allButton.props.onClick();

    componentTree = component.toJSON();
    expect(componentTree).toMatchSnapshot();
});*/

