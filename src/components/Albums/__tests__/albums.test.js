import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Albums from '../index';

afterEach(cleanup);

test('does component render', () => {
const { asFragment } = render(
<Albums />);
expect(asFragment()).toMatchSnapshot();
})