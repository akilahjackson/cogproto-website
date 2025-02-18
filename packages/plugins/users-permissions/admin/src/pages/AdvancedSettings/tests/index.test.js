import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import { IntlProvider } from 'react-intl';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider, lightTheme } from '@strapi/design-system';
import { useRBAC } from '@strapi/helper-plugin';
import ProtectedAdvancedSettingsPage from '../index';
import server from './utils/server';

jest.mock('@strapi/helper-plugin', () => ({
  ...jest.requireActual('@strapi/helper-plugin'),
  useNotification: jest.fn(),
  useFocusWhenNavigate: jest.fn(),
  useOverlayBlocker: jest.fn(() => ({ lockApp: jest.fn, unlockApp: jest.fn() })),
  useRBAC: jest.fn(),
  CheckPagePermissions: ({ children }) => children,
}));

const client = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const App = (
  <QueryClientProvider client={client}>
    <IntlProvider messages={{ en: {} }} textComponent="span" locale="en">
      <ThemeProvider theme={lightTheme}>
        <ProtectedAdvancedSettingsPage />
      </ThemeProvider>
    </IntlProvider>
  </QueryClientProvider>
);

describe('ADMIN | Pages | Settings | Advanced Settings', () => {
  beforeAll(() => server.listen());

  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterEach(() => {
    server.resetHandlers();
  });

  afterAll(() => {
    jest.resetAllMocks();
    server.close();
  });

  it('renders and matches the snapshot', async () => {
    useRBAC.mockImplementation(() => ({
      isLoading: false,
      allowedActions: { canUpdate: true },
    }));

    const { container } = render(App);
    await waitFor(() => {
      expect(screen.getByText('Default role for authenticated users')).toBeInTheDocument();
    });

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c1 {
        background: #f6f6f9;
        padding-top: 40px;
        padding-right: 56px;
        padding-bottom: 40px;
        padding-left: 56px;
      }

      .c3 {
        min-width: 0;
      }

      .c12 {
        padding-right: 56px;
        padding-left: 56px;
      }

      .c7 {
        background: #4945ff;
        padding: 8px;
        padding-right: 16px;
        padding-left: 16px;
        border-radius: 4px;
        border-color: #4945ff;
        border: 1px solid #4945ff;
        cursor: pointer;
      }

      .c13 {
        background: #ffffff;
        padding-top: 24px;
        padding-right: 32px;
        padding-bottom: 24px;
        padding-left: 32px;
        border-radius: 4px;
        box-shadow: 0px 1px 4px rgba(33,33,52,0.1);
      }

      .c21 {
        background: #ffffff;
        padding-right: 12px;
        padding-left: 12px;
        border-radius: 4px;
        position: relative;
        overflow: hidden;
        cursor: default;
      }

      .c34 {
        background: #f6f6f9;
        padding: 4px;
        border-radius: 4px;
        border-style: solid;
        border-width: 1px;
        border-color: #dcdce4;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
      }

      .c36 {
        padding-right: 12px;
        padding-left: 12px;
        border-radius: 4px;
      }

      .c6 {
        font-weight: 600;
        font-size: 2rem;
        line-height: 1.25;
        color: #32324d;
      }

      .c11 {
        font-size: 0.75rem;
        line-height: 1.33;
        font-weight: 600;
        color: #ffffff;
      }

      .c15 {
        font-weight: 500;
        font-size: 1rem;
        line-height: 1.25;
        color: #32324d;
      }

      .c19 {
        font-size: 0.75rem;
        line-height: 1.33;
        font-weight: 600;
        color: #32324d;
      }

      .c25 {
        font-size: 0.875rem;
        line-height: 1.43;
        display: block;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: #32324d;
      }

      .c29 {
        font-size: 0.75rem;
        line-height: 1.33;
        color: #666687;
      }

      .c39 {
        font-size: 0.75rem;
        line-height: 1.33;
        font-weight: 600;
        color: #b72b1a;
        text-transform: uppercase;
      }

      .c41 {
        font-size: 0.75rem;
        line-height: 1.33;
        font-weight: 600;
        color: #666687;
        text-transform: uppercase;
      }

      .c2 {
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
        justify-content: space-between;
      }

      .c4 {
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;
      }

      .c8 {
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;
        gap: 8px;
      }

      .c14 {
        -webkit-align-items: stretch;
        -webkit-box-align: stretch;
        -ms-flex-align: stretch;
        align-items: stretch;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        gap: 16px;
      }

      .c18 {
        -webkit-align-items: stretch;
        -webkit-box-align: stretch;
        -ms-flex-align: stretch;
        align-items: stretch;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        gap: 4px;
      }

      .c22 {
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;
        gap: 16px;
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
        justify-content: space-between;
      }

      .c24 {
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;
        gap: 16px;
      }

      .c27 {
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;
        gap: 12px;
      }

      .c37 {
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
      }

      .c9 {
        position: relative;
        outline: none;
      }

      .c9 > svg {
        height: 12px;
        width: 12px;
      }

      .c9 > svg > g,
      .c9 > svg path {
        fill: #ffffff;
      }

      .c9[aria-disabled='true'] {
        pointer-events: none;
      }

      .c9:after {
        -webkit-transition-property: all;
        transition-property: all;
        -webkit-transition-duration: 0.2s;
        transition-duration: 0.2s;
        border-radius: 8px;
        content: '';
        position: absolute;
        top: -4px;
        bottom: -4px;
        left: -4px;
        right: -4px;
        border: 2px solid transparent;
      }

      .c9:focus-visible {
        outline: none;
      }

      .c9:focus-visible:after {
        border-radius: 8px;
        content: '';
        position: absolute;
        top: -5px;
        bottom: -5px;
        left: -5px;
        right: -5px;
        border: 2px solid #4945ff;
      }

      .c33 {
        border: 0;
        -webkit-clip: rect(0 0 0 0);
        clip: rect(0 0 0 0);
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
        width: 1px;
      }

      .c10 {
        height: 2rem;
      }

      .c10[aria-disabled='true'] {
        border: 1px solid #dcdce4;
        background: #eaeaef;
      }

      .c10[aria-disabled='true'] .c5 {
        color: #666687;
      }

      .c10[aria-disabled='true'] svg > g,.c10[aria-disabled='true'] svg path {
        fill: #666687;
      }

      .c10[aria-disabled='true']:active {
        border: 1px solid #dcdce4;
        background: #eaeaef;
      }

      .c10[aria-disabled='true']:active .c5 {
        color: #666687;
      }

      .c10[aria-disabled='true']:active svg > g,.c10[aria-disabled='true']:active svg path {
        fill: #666687;
      }

      .c10:hover {
        border: 1px solid #7b79ff;
        background: #7b79ff;
      }

      .c10:active {
        border: 1px solid #4945ff;
        background: #4945ff;
      }

      .c10 svg > g,
      .c10 svg path {
        fill: #ffffff;
      }

      .c20 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
      }

      .c45 {
        border: none;
        border-radius: 4px;
        padding-bottom: 0.65625rem;
        padding-left: 16px;
        padding-right: 16px;
        padding-top: 0.65625rem;
        color: #32324d;
        font-weight: 400;
        font-size: 0.875rem;
        display: block;
        width: 100%;
        background: inherit;
      }

      .c45::-webkit-input-placeholder {
        color: #8e8ea9;
        opacity: 1;
      }

      .c45::-moz-placeholder {
        color: #8e8ea9;
        opacity: 1;
      }

      .c45:-ms-input-placeholder {
        color: #8e8ea9;
        opacity: 1;
      }

      .c45::placeholder {
        color: #8e8ea9;
        opacity: 1;
      }

      .c45[aria-disabled='true'] {
        color: inherit;
      }

      .c45:focus {
        outline: none;
        box-shadow: none;
      }

      .c47 {
        border: none;
        border-radius: 4px;
        padding-bottom: 0.65625rem;
        padding-left: 16px;
        padding-right: 16px;
        padding-top: 0.65625rem;
        cursor: not-allowed;
        color: #32324d;
        font-weight: 400;
        font-size: 0.875rem;
        display: block;
        width: 100%;
        background: inherit;
      }

      .c47::-webkit-input-placeholder {
        color: #8e8ea9;
        opacity: 1;
      }

      .c47::-moz-placeholder {
        color: #8e8ea9;
        opacity: 1;
      }

      .c47:-ms-input-placeholder {
        color: #8e8ea9;
        opacity: 1;
      }

      .c47::placeholder {
        color: #8e8ea9;
        opacity: 1;
      }

      .c47[aria-disabled='true'] {
        color: inherit;
      }

      .c47:focus {
        outline: none;
        box-shadow: none;
      }

      .c44 {
        border: 1px solid #dcdce4;
        border-radius: 4px;
        background: #ffffff;
        outline: none;
        box-shadow: 0;
        -webkit-transition-property: border-color,box-shadow,fill;
        transition-property: border-color,box-shadow,fill;
        -webkit-transition-duration: 0.2s;
        transition-duration: 0.2s;
      }

      .c44:focus-within {
        border: 1px solid #4945ff;
        box-shadow: #4945ff 0px 0px 0px 2px;
      }

      .c46 {
        border: 1px solid #dcdce4;
        border-radius: 4px;
        background: #ffffff;
        outline: none;
        box-shadow: 0;
        -webkit-transition-property: border-color,box-shadow,fill;
        transition-property: border-color,box-shadow,fill;
        -webkit-transition-duration: 0.2s;
        transition-duration: 0.2s;
        color: #666687;
        background: #eaeaef;
      }

      .c46:focus-within {
        border: 1px solid #4945ff;
        box-shadow: #4945ff 0px 0px 0px 2px;
      }

      .c23 {
        border: 1px solid #dcdce4;
        min-height: 2.5rem;
        outline: none;
        box-shadow: 0;
        -webkit-transition-property: border-color,box-shadow,fill;
        transition-property: border-color,box-shadow,fill;
        -webkit-transition-duration: 0.2s;
        transition-duration: 0.2s;
      }

      .c23[aria-disabled='true'] {
        color: #666687;
      }

      .c23:focus-visible {
        outline: none;
      }

      .c23:focus-within {
        border: 1px solid #4945ff;
        box-shadow: #4945ff 0px 0px 0px 2px;
      }

      .c28 > svg {
        width: 0.375rem;
      }

      .c28 > svg > path {
        fill: #666687;
      }

      .c26 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        gap: 4px;
        -webkit-flex-wrap: wrap;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
      }

      .c48[data-state='checked'] .c5 {
        font-weight: bold;
        color: #4945ff;
      }

      .c16 {
        display: grid;
        grid-template-columns: repeat(12,1fr);
        gap: 24px;
      }

      .c17 {
        grid-column: span 6;
        max-width: 100%;
      }

      .c30 {
        grid-column: span 12;
        max-width: 100%;
      }

      .c43 {
        grid-column: span 6;
        max-width: 100%;
      }

      .c0:focus-visible {
        outline: none;
      }

      .c32 {
        position: relative;
        display: inline-block;
        z-index: 0;
        width: 100%;
      }

      .c35 {
        overflow: hidden;
        -webkit-flex-wrap: wrap;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        outline: none;
        box-shadow: 0;
        -webkit-transition-property: border-color,box-shadow,fill;
        transition-property: border-color,box-shadow,fill;
        -webkit-transition-duration: 0.2s;
        transition-duration: 0.2s;
      }

      .c35:focus-within {
        border: 1px solid #4945ff;
        box-shadow: #4945ff 0px 0px 0px 2px;
      }

      .c38 {
        background-color: #ffffff;
        border: 1px solid #dcdce4;
        position: relative;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        z-index: 2;
        -webkit-flex: 1 1 50%;
        -ms-flex: 1 1 50%;
        flex: 1 1 50%;
        padding-top: 6px;
        padding-bottom: 6px;
      }

      .c40 {
        background-color: transparent;
        border: 1px solid #f6f6f9;
        position: relative;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        z-index: 2;
        -webkit-flex: 1 1 50%;
        -ms-flex: 1 1 50%;
        flex: 1 1 50%;
        padding-top: 6px;
        padding-bottom: 6px;
      }

      .c42 {
        height: 100%;
        left: 0;
        opacity: 0;
        position: absolute;
        top: 0;
        z-index: 1;
        width: 100%;
      }

      .c31 {
        max-width: 320px;
      }

      @media (max-width:68.75rem) {
        .c17 {
          grid-column: span 12;
        }
      }

      @media (max-width:34.375rem) {
        .c17 {
          grid-column: span;
        }
      }

      @media (max-width:68.75rem) {
        .c30 {
          grid-column: span;
        }
      }

      @media (max-width:34.375rem) {
        .c30 {
          grid-column: span 12;
        }
      }

      @media (max-width:68.75rem) {
        .c43 {
          grid-column: span;
        }
      }

      @media (max-width:34.375rem) {
        .c43 {
          grid-column: span 12;
        }
      }

      <main
        aria-busy="false"
        aria-labelledby="main-content-title"
        class="c0"
        id="main-content"
        tabindex="-1"
      >
        <form
          action="#"
          novalidate=""
        >
          <div
            style="height: 0px;"
          >
            <div
              class="c1"
              data-strapi-header="true"
            >
              <div
                class="c2"
              >
                <div
                  class="c3 c4"
                >
                  <h1
                    class="c5 c6"
                  >
                    Advanced Settings
                  </h1>
                </div>
                <button
                  aria-disabled="false"
                  class="c7 c8 c9 c10"
                  type="submit"
                >
                  <div
                    aria-hidden="true"
                    class=""
                  >
                    <svg
                      fill="none"
                      height="1rem"
                      viewBox="0 0 24 24"
                      width="1rem"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20.727 2.97a.2.2 0 0 1 .286 0l2.85 2.89a.2.2 0 0 1 0 .28L9.554 20.854a.2.2 0 0 1-.285 0l-9.13-9.243a.2.2 0 0 1 0-.281l2.85-2.892a.2.2 0 0 1 .284 0l6.14 6.209L20.726 2.97Z"
                        fill="#212134"
                      />
                    </svg>
                  </div>
                  <span
                    class="c5 c11"
                  >
                    Save
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div
            class="c12"
          >
            <div
              class="c13"
            >
              <div
                class="c14"
              >
                <h2
                  class="c5 c15"
                >
                  Settings
                </h2>
                <div
                  class="c16"
                >
                  <div
                    class="c17"
                  >
                    <div
                      class=""
                    >
                      <div
                        class=""
                      >
                        <div
                          class="c18"
                        >
                          <label
                            class="c5 c19 c20"
                            for="1"
                          >
                            Default role for authenticated users
                          </label>
                          <div
                            aria-autocomplete="none"
                            aria-controls="radix-0"
                            aria-describedby="1-hint 1-error"
                            aria-expanded="false"
                            aria-label="Default role for authenticated users"
                            class="c21 c22 c23"
                            data-state="closed"
                            dir="ltr"
                            id="1"
                            overflow="hidden"
                            role="combobox"
                            tabindex="0"
                          >
                            <span
                              class="c24"
                            >
                              <span
                                class="c5 c25"
                              >
                                <span
                                  class="c26"
                                >
                                  Authenticated
                                </span>
                              </span>
                            </span>
                            <span
                              class="c27"
                            >
                              <span
                                aria-hidden="true"
                                class="c28"
                              >
                                <svg
                                  fill="none"
                                  height="1rem"
                                  viewBox="0 0 14 8"
                                  width="1rem"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    clip-rule="evenodd"
                                    d="M14 .889a.86.86 0 0 1-.26.625L7.615 7.736A.834.834 0 0 1 7 8a.834.834 0 0 1-.615-.264L.26 1.514A.861.861 0 0 1 0 .889c0-.24.087-.45.26-.625A.834.834 0 0 1 .875 0h12.25c.237 0 .442.088.615.264a.86.86 0 0 1 .26.625Z"
                                    fill="#32324D"
                                    fill-rule="evenodd"
                                  />
                                </svg>
                              </span>
                            </span>
                          </div>
                          <p
                            class="c5 c29"
                            id="1-hint"
                          >
                            It will attach the new authenticated user to the selected role.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="c30"
                  >
                    <div
                      class=""
                    >
                      <div
                        class="c31"
                      >
                        <div
                          class="c18"
                        >
                          <div
                            class="c4"
                          >
                            <label
                              class="c5 c19 c20"
                              for="3"
                            >
                              One account per email address
                            </label>
                          </div>
                          <label
                            class="c32"
                          >
                            <div
                              class="c33"
                            >
                              One account per email address
                            </div>
                            <div
                              class="c34 c35"
                              display="flex"
                            >
                              <div
                                aria-hidden="true"
                                class="c36 c37 c38"
                              >
                                <span
                                  class="c5 c39"
                                >
                                  False
                                </span>
                              </div>
                              <div
                                aria-hidden="true"
                                class="c36 c37 c40"
                              >
                                <span
                                  class="c5 c41"
                                >
                                  True
                                </span>
                              </div>
                              <input
                                aria-describedby="3-hint"
                                aria-disabled="false"
                                aria-required="false"
                                class="c42"
                                id="3"
                                name="unique_email"
                                type="checkbox"
                              />
                            </div>
                          </label>
                          <p
                            class="c5 c29"
                            id="3-hint"
                          >
                            Disallow the user to create multiple accounts using the same email address with different authentication providers.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="c30"
                  >
                    <div
                      class=""
                    >
                      <div
                        class="c31"
                      >
                        <div
                          class="c18"
                        >
                          <div
                            class="c4"
                          >
                            <label
                              class="c5 c19 c20"
                              for="5"
                            >
                              Enable sign-ups
                            </label>
                          </div>
                          <label
                            class="c32"
                          >
                            <div
                              class="c33"
                            >
                              Enable sign-ups
                            </div>
                            <div
                              class="c34 c35"
                              display="flex"
                            >
                              <div
                                aria-hidden="true"
                                class="c36 c37 c38"
                              >
                                <span
                                  class="c5 c39"
                                >
                                  False
                                </span>
                              </div>
                              <div
                                aria-hidden="true"
                                class="c36 c37 c40"
                              >
                                <span
                                  class="c5 c41"
                                >
                                  True
                                </span>
                              </div>
                              <input
                                aria-describedby="5-hint"
                                aria-disabled="false"
                                aria-required="false"
                                class="c42"
                                id="5"
                                name="allow_register"
                                type="checkbox"
                              />
                            </div>
                          </label>
                          <p
                            class="c5 c29"
                            id="5-hint"
                          >
                            When disabled (OFF), the registration process is forbidden. No one can subscribe anymore no matter the used provider.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="c43"
                  >
                    <div
                      class=""
                    >
                      <div>
                        <div
                          class=""
                        >
                          <div
                            class="c18"
                          >
                            <label
                              class="c5 c19 c20"
                              for="email_reset_password"
                            >
                              Reset password page
                            </label>
                            <div
                              class="c2 c44"
                            >
                              <input
                                aria-describedby="email_reset_password-hint"
                                aria-disabled="false"
                                aria-invalid="false"
                                aria-required="false"
                                class="c45"
                                id="email_reset_password"
                                name="email_reset_password"
                                placeholder="ex: https://youtfrontend.com/reset-password"
                                type="text"
                                value="https://cat-bounce.com/"
                              />
                            </div>
                            <p
                              class="c5 c29"
                              id="email_reset_password-hint"
                            >
                              URL of your application's reset password page.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="c30"
                  >
                    <div
                      class=""
                    >
                      <div
                        class="c31"
                      >
                        <div
                          class="c18"
                        >
                          <div
                            class="c4"
                          >
                            <label
                              class="c5 c19 c20"
                              for="7"
                            >
                              Enable email confirmation
                            </label>
                          </div>
                          <label
                            class="c32"
                          >
                            <div
                              class="c33"
                            >
                              Enable email confirmation
                            </div>
                            <div
                              class="c34 c35"
                              display="flex"
                            >
                              <div
                                aria-hidden="true"
                                class="c36 c37 c38"
                              >
                                <span
                                  class="c5 c39"
                                >
                                  False
                                </span>
                              </div>
                              <div
                                aria-hidden="true"
                                class="c36 c37 c40"
                              >
                                <span
                                  class="c5 c41"
                                >
                                  True
                                </span>
                              </div>
                              <input
                                aria-describedby="7-hint"
                                aria-disabled="false"
                                aria-required="false"
                                class="c42"
                                id="7"
                                name="email_confirmation"
                                type="checkbox"
                              />
                            </div>
                          </label>
                          <p
                            class="c5 c29"
                            id="7-hint"
                          >
                            When enabled (ON), new registered users receive a confirmation email.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="c43"
                  >
                    <div
                      class=""
                    >
                      <div>
                        <div
                          class=""
                        >
                          <div
                            class="c18"
                          >
                            <label
                              class="c5 c19 c20"
                              for="email_confirmation_redirection"
                            >
                              Redirection url
                            </label>
                            <div
                              class="c2 c46"
                              disabled=""
                            >
                              <input
                                aria-describedby="email_confirmation_redirection-hint"
                                aria-disabled="true"
                                aria-invalid="false"
                                aria-required="false"
                                class="c47"
                                data-disabled=""
                                disabled=""
                                id="email_confirmation_redirection"
                                name="email_confirmation_redirection"
                                placeholder="ex: https://youtfrontend.com/email-confirmation"
                                type="text"
                                value=""
                              />
                            </div>
                            <p
                              class="c5 c29"
                              id="email_confirmation_redirection-hint"
                            >
                              After you confirmed your email, choose where you will be redirected.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </main>
    `);
  });
});
