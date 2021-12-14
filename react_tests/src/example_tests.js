import React from 'react';
import { render, screen, act, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Home from '../Home';
import { UserContext } from '../../../context/User';
import { getMessageByTypeCode } from '../../../api/messageConfig';
import { getTemplateById } from '../../../api/getTemplate';
import { response } from '../../../utils/__mocks__/mockTemplate';

jest.mock('../../../api/messageConfig');
jest.mock('../../../api/getTemplate');

const renderHome = (user) => {
  return render(
    <UserContext.Provider value={user}>
      <Home />
    </UserContext.Provider>
  );
};

const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const clickFindTemplate = async (isCodeValid) => {
  const user = { id: 'IRS034' };
  const mock = {
    messageTypeCode: '123456',
  };
  const templateMock = response;
  if (isCodeValid) {
    getMessageByTypeCode.mockReturnValue(Promise.resolve(mock));
    getTemplateById.mockReturnValue(Promise.resolve(templateMock));
  } else {
    getMessageByTypeCode.mockImplementation(() => {
      throw new Error('An error occurred');
    });
    getTemplateById.mockImplementation(() => {
      throw new Error('An error occurred');
    });
  }
  act(() => {
    renderHome(user);
    const button = screen.getByText(/Find Template/, { selector: 'cx-button' });
    userEvent.click(button);
  });
  await act(() => sleep(500));
};

describe('Home component', () => {
  test('it renders Home component', () => {
    const user = { id: 'IRS034' };

    act(() => {
      renderHome(user);
    });

    expect(screen.getByText(/Content Testing/, { selector: 'h1' })).toBeInTheDocument();
    expect(screen.getByText(/Find Message Template/, { selector: 'span' })).toBeInTheDocument();
    expect(screen.getByText(/Template Variables/, { selector: 'span' })).toBeInTheDocument();
    expect(screen.getByText(/Send Message/, { selector: 'span' })).toBeInTheDocument();
    expect(screen.getByText(/Message Type Code/, { selector: 'cx-input' })).toBeInTheDocument();
    expect(screen.getAllByText(/Language/)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/Are you using A\/B Gumbo Testing Tool?/)[0]).toBeInTheDocument();
  });

  test('it calls api on Find Template button click and shows Preview Template section', async () => {
    await clickFindTemplate(true);
    // userEvent.type(screen.getByTestId('searchMTC'), 'asdf')
    fireEvent.change(screen.getByTestId('searchMTC'), { target: { value: 'ffffff' } })
    expect(getMessageByTypeCode).toHaveBeenCalledTimes(1);
  });

  test('it calls api and sets error message on failed request', async () => {
    await clickFindTemplate(false);
    expect(screen.getByText(/An error occurred/)).toBeInTheDocument();
  });

  test('it resets', async () => {
    await clickFindTemplate(true);
    const button = screen.getByText(/Reset/, { selector: 'cx-button' });
    userEvent.click(button);
    // TODO: expect inputs to be reset
  });

  test('it previews', async () => {
    await clickFindTemplate(true);
    const button = screen.getByText(/Preview/, { selector: 'cx-button' });
    userEvent.click(button);
    // TODO: expect template to be updated
  });
});