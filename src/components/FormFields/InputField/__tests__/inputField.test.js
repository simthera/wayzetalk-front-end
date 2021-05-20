import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import InputField from '../index';

afterEach(cleanup);

test('does component render', () => {
  const { asFragment } = render(
    <InputField name="test" type="text" onChange={() => alert('changed')} />, // eslint-disable-line
  );
  expect(asFragment()).toMatchSnapshot();
});
