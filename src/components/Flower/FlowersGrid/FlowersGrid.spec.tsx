import { render } from '@testing-library/react';

import { FlowersGrid } from './FlowersGrid';
import { MOCKED_FLOWERS } from '../../../mocks/MockData';

describe('FlowersGrid component', () => {
  it('FlowersGrid component to render', () => {
    const { container } = render(<FlowersGrid flowers={MOCKED_FLOWERS} isLoading={false} />);

    expect(container).toMatchSnapshot();
  });

  it('FlowersGrid component to render when loading', () => {
    const { container } = render(<FlowersGrid flowers={MOCKED_FLOWERS} isLoading={true} />);

    expect(container).toMatchSnapshot();
  });

  it('FlowersGrid component to render when no flowers', () => {
    const { container } = render(<FlowersGrid flowers={{ ...MOCKED_FLOWERS, items: [] }} isLoading={false} />);

    expect(container).toMatchSnapshot();
  });
});
