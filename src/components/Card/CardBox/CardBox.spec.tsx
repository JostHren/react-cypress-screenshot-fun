import { render } from '@testing-library/react';

import { CardBox } from './CardBox';
import { MOCKED_ENTITY } from '../../../mocks/MockData';

describe('Card component', () => {
  it('Card component to render', () => {
    const { container } = render(<CardBox card={MOCKED_ENTITY} />);

    expect(container).toMatchSnapshot();
  });

  it('Card component should render if entity is favorite', () => {
    const { container } = render(<CardBox card={{ ...MOCKED_ENTITY, isFavorite: true }} />);

    expect(container).toMatchSnapshot();
  });
});
