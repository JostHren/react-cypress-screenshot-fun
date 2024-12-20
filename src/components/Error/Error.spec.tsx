import { render } from '@testing-library/react';
import { ErrorPage } from './Error';

describe('Error component', () => {
  it('CCChat component to render', () => {
    const { container } = render(<ErrorPage title="mock-title" message="mock-message" />);

    expect(container).toMatchSnapshot();
  });
});
