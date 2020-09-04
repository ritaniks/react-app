export default {
  session: {
    token: 'cccdfgsdfgsdfggdgdf',
    error: {
      status: 'error',
    },
    isAuth: false,
    user: {
      id: '5f2abad53b62e40d0f7b0e11',
      email: 'admin@admin.com',
      name: 'admin@admin.com',
    },
    userRole: 'admin || manager',
  },

  projects: [
    {
      id: 'sdfwreer4845wer45er',
      nameClient: 'Jaine White',
      nameProject: 'CRM system',
      type: 'Billable | NON-Billable',
      income: '100000',
      expenses: '0',
      createTimeProject: '18.06.2020',
    },
  ],

  workers: [
    {
      id: '1',
      name: 'worker@1.com',
      email: 'worker@1.com',
      password: '123456',
      userRole: 'worker',
      projects: [
        {
          id: 'sdfwreer4845wer45er',
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
    {
      id: '2',
      name: 'manager@1.com',
      email: 'manager@1.com',
      password: '123456',
      userRole: 'manager',
      projects: [
        {
          id: 'sdfwreer4845wer45er',
          week: {
            '24': {
              MON: 3.5,
              WEN: 5.5,
              // ...
            },
            '25': {
              MON: 2.5,
              SUN: 1.5,
              // ...
            },
          },
        },
      ],
    },
    // .... all workers
  ],
  global: { theme: 'default theme' },
};
