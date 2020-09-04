export default {
  session: {
    token: 'cccdfgsdfgsdfggdgdf',
    error: {
      status: 'error',
    },
    isAuth: false,
    user: {
      id: '5f2abad53b62e40d0f7b0e11',
      name: 'worker@1',
      email: 'worker@1.com',
    },
    userRole: 'worker',
  },

  workers: [
    {
      id: '1',
      name: 'worker@1',
      email: 'worker@1.com',
      password: '123456',
      projects: [
        {
          id: 'sdfwreer4845wer45er',
          nameClient: 'Jaine White',
          nameProject: 'CRM system',
          type: 'Billable',
          income: '100000',
          expenses: '0',
          createTimeProject: '18.06.2020',
          week: {
            '24': {
              MON: 6.5,
              TUE: 6.5,
              // ...
            },
            '25': {
              MON: 6.5,
              TUE: 6.5,
              // ...
            },
          },
        },
      ],
    },
    // ... one worker
  ],
  global: { theme: 'default theme' },
};
