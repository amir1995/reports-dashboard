import { render } from '@testing-library/react';

import App from '../../../pages/_app';

const userData = {
  userId: 'test',
  firstName: 'John',
  lastName: 'Doe',
  email: 'test@test.com',
};

describe('Root App Component', () => {
  it('renders without crashing', () => {
    const { getByText } = render(
      <App
        router={{} as any}
        pageProps={{}}
        Component={() => <div>Test _app</div>}
        userData={userData}
      />,
    );
    expect(getByText('Test _app')).toBeInTheDocument();
  });
});
