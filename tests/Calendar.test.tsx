import React from 'react';
import renderer from 'react-test-renderer';
import {Calendar} from './../src/components'

describe('Hello component', () => {
  test('should render component properly', () => {
    // given
    const dummyProps = {
      date: '12/12/1995', // MM/DD/YYYY
      canEdit: true, 
    };

  
    const componentRenderer = renderer.create(<Calendar {...dummyProps} />);
    const tree = componentRenderer.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
