import { render } from '@testing-library/react';
import { FlowerCardLoader } from './FlowerCardLoader';

describe('FlowerCardLoader component', () => {
  it('Flower component to render', () => {
    const { container } = render(<FlowerCardLoader />);

    expect(container).toMatchSnapshot();
  });
});
