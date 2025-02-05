import { render } from '@testing-library/react';

import { CardsGrid } from './CardGrid';
import { MOCKED_DATA } from '../../../mocks/MockData';

describe('CardGrid component', () => {
  it('CardGrid component to render', () => {
    const { container } = render(<CardsGrid cards={MOCKED_DATA} isLoading={false} />);

    expect(container).toMatchSnapshot();
  });

  it('CardGrid component to render when loading', () => {
    const { container } = render(<CardsGrid cards={MOCKED_DATA} isLoading={true} />);

    expect(container).toMatchSnapshot();
  });

  it('CardGrid component to render when no cards', () => {
    const { container } = render(<CardsGrid cards={{ ...MOCKED_DATA, items: [] }} isLoading={false} />);

    expect(container).toMatchSnapshot();
  });
});
