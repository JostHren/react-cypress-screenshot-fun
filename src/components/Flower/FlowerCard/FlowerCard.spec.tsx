import { render } from '@testing-library/react';

import { FlowerCard } from './FlowerCard';
import { MOCKED_FLOWER } from '../../../mocks/MockData';

describe('Flower component', () => {
  it('Flower component to render', () => {
    const { container } = render(<FlowerCard flower={MOCKED_FLOWER} />);

    expect(container).toMatchSnapshot();
  });

  it('Flower component should render if flower is favorite', () => {
    const { container } = render(<FlowerCard flower={{ ...MOCKED_FLOWER, isFavorite: true }} />);

    expect(container).toMatchSnapshot();
  });
});
