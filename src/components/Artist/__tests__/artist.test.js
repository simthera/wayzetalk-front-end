import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Artist from '../index';

afterEach(cleanup);

test('does component render', () => {
const { asFragment } = render(
<Artist />);
expect(asFragment()).toMatchSnapshot();
})