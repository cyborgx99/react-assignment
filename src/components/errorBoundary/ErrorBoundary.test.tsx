import { render } from 'utils/test-utils';
import ErrorBoundary from '.';

const ErrorComponent = () => {
  throw new Error('Help');
};

describe('Error Boundary', () => {
  it('renders children if no error is present', () => {
    const { getByText } = render(<ErrorBoundary>children</ErrorBoundary>);
    expect(getByText('children')).toBeInTheDocument();
  });

  it('renders the error message if an error is thrown', () => {
    console.error = jest.fn();
    const { getByText, queryByText, getByRole } = render(
      <ErrorBoundary>
        children
        <ErrorComponent />
      </ErrorBoundary>,
    );
    expect(console.error).toHaveBeenCalled();

    expect(queryByText('children')).toBeNull();

    getByText('Something went wrong');

    getByRole('button', { name: 'Reload' });
  });
});
