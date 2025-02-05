import { render } from '@testing-library/react';
import { CardLoader } from './CardLoader';

describe('CardLoader component', () => {
  it('Card component to render', () => {
    const { container } = render(<CardLoader />);

    expect(container).toMatchSnapshot();
  });
});
