import * as React from 'react';
import {mount} from 'enzyme';
import {render} from '@testing-library/react';
import IconButton, {iconButtonIdentifier} from '../lib/IconButton';
import {SystemIcon} from '@workday/canvas-kit-react-icon';
import {activityStreamIcon} from '@workday/canvas-system-icons-web';
import ReactDOMServer from 'react-dom/server';
import {axe} from 'jest-axe';

describe('Icon Button', () => {
  const cb = jest.fn();
  afterEach(() => {
    cb.mockReset();
  });

  test('render an icon button with id', () => {
    const component = mount(
      <IconButton id="myBtn" aria-label="Activity Stream">
        <SystemIcon icon={activityStreamIcon} />
      </IconButton>
    );
    expect(component.find('button').props().id).toBe('myBtn');
    component.unmount();
  });

  it('should have an identifier class', () => {
    const {getByRole} = render(
      <IconButton aria-label="Activity Stream">
        <SystemIcon icon={activityStreamIcon} />
      </IconButton>
    );

    expect(getByRole('button').className).toContain(iconButtonIdentifier);
  });
  it('should compose custom classNames with the identifier class', () => {
    const testClassName = 'test classname';
    const {getByRole} = render(
      <IconButton className={testClassName} aria-label="Activity Stream">
        <SystemIcon icon={activityStreamIcon} />
      </IconButton>
    );

    expect(getByRole('button').className).toContain(`${iconButtonIdentifier} ${testClassName}`);
  });

  test('should call a callback function', () => {
    const component = mount(
      <IconButton onClick={cb} aria-label="Activity Stream">
        <SystemIcon icon={activityStreamIcon} />
      </IconButton>
    );
    const button = component.find('button');
    button.simulate('click');
    expect(cb.mock.calls.length).toBe(1);
    component.unmount();
  });

  test('should not call a callback function when disabled', () => {
    const component = mount(
      <IconButton onClick={cb} disabled={true} aria-label="Activity Stream">
        <SystemIcon icon={activityStreamIcon} />
      </IconButton>
    );
    const button = component.find('button');
    button.simulate('click');
    expect(cb.mock.calls.length).toBe(0);
    component.unmount();
  });

  test('should call onToggleChange when toggle prop changes', () => {
    const wrapper = mount(
      <IconButton toggled={false} onToggleChange={cb} aria-label="Activity Stream">
        <SystemIcon icon={activityStreamIcon} />
      </IconButton>
    );

    wrapper.setProps({toggled: true});
    wrapper.update();
    wrapper.setProps({toggled: true});
    wrapper.update();
    wrapper.setProps({toggled: undefined});
    wrapper.update();

    expect(cb.mock.calls.length).toBe(2);
  });
});

describe('Icon Button Accessibility', () => {
  const cb = jest.fn();
  afterEach(() => {
    cb.mockReset();
  });

  test('icon button should be using HTML5 <button> tag', () => {
    const component = mount(
      <IconButton aria-label="Activity Stream">
        <SystemIcon icon={activityStreamIcon} />{' '}
      </IconButton>
    );
    expect(component.getDOMNode().tagName.toLowerCase()).toEqual('button');
    component.unmount();
  });

  test('enabled icon button should NOT have disabled attribute set', () => {
    const component = mount(
      <IconButton disabled={false} aria-label="Activity Stream">
        <SystemIcon icon={activityStreamIcon} />{' '}
      </IconButton>
    );
    expect(
      component
        .find('button')
        .getDOMNode()
        .hasAttribute('disabled')
    ).toEqual(false);
    component.unmount();
  });

  test('disabled icon button should have disabled attribute set', () => {
    const component = mount(
      <IconButton disabled={true} aria-label="Activity Stream">
        <SystemIcon icon={activityStreamIcon} />{' '}
      </IconButton>
    );
    expect(
      component
        .find('button')
        .getDOMNode()
        .hasAttribute('disabled')
    ).toEqual(true);
    component.unmount();
  });

  test('IconButton should pass axe DOM accessibility guidelines', async () => {
    const html = ReactDOMServer.renderToString(
      <IconButton title="Activity Stream" aria-label="Activity Stream">
        <SystemIcon icon={activityStreamIcon} />{' '}
      </IconButton>
    );
    expect(await axe(html)).toHaveNoViolations();
  });
});
