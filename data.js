const data = {
  session: {
    access_token:
      'eyJhbGciOiJIUzI1NiIsImtpZCI6IkoxZnllWEhiMmNBWFdSMisiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzA1MTc4MzgzLCJpYXQiOjE3MDUxNzQ3ODMsImlzcyI6Imh0dHBzOi8vb3J2cmRhaHFpZXh3ZWZ4Z2p5Ym4uc3VwYWJhc2UuY28vYXV0aC92MSIsInN1YiI6ImU3Yzg5NzYyLWEyNGUtNDYwMC05MWFjLTA4ODZiMjYwZTlhMCIsImVtYWlsIjoia2FyYW5nYWxldnJAZ21haWwuY29tIiwicGhvbmUiOiIiLCJhcHBfbWV0YWRhdGEiOnsicHJvdmlkZXIiOiJlbWFpbCIsInByb3ZpZGVycyI6WyJlbWFpbCJdfSwidXNlcl9tZXRhZGF0YSI6e30sInJvbGUiOiJhdXRoZW50aWNhdGVkIiwiYWFsIjoiYWFsMSIsImFtciI6W3sibWV0aG9kIjoicGFzc3dvcmQiLCJ0aW1lc3RhbXAiOjE3MDUxNzQ3ODN9XSwic2Vzc2lvbl9pZCI6ImQyOGIxODA2LWJlODYtNGJmZC05ZDBmLTgzYmY0MjU0YTA1MSJ9.7CSLWZf3y0aNa5RKbK4YPc5re5hR9KCd4rIAeotFW7k',
    expires_at: 1705178383,
    expires_in: 3600,
    refresh_token: '0KzLVAa7ATVPI3Rvzfhcrw',
    token_type: 'bearer',
    user: {
      app_metadata: [Object],
      aud: 'authenticated',
      confirmed_at: '2024-01-13T19:39:21.581696Z',
      created_at: '2024-01-13T19:39:21.578811Z',
      email: 'karangalevr@gmail.com',
      email_confirmed_at: '2024-01-13T19:39:21.581696Z',
      id: 'e7c89762-a24e-4600-91ac-0886b260e9a0',
      identities: [Array],
      last_sign_in_at: '2024-01-13T19:39:43.618605251Z',
      phone: '',
      role: 'authenticated',
      updated_at: '2024-01-13T19:39:43.623251Z',
      user_metadata: [Object],
    },
  },
  user: {
    app_metadata: {provider: 'email', providers: [Array]},
    aud: 'authenticated',
    confirmed_at: '2024-01-13T19:39:21.581696Z',
    created_at: '2024-01-13T19:39:21.578811Z',
    email: 'karangalevr@gmail.com',
    email_confirmed_at: '2024-01-13T19:39:21.581696Z',
    id: 'e7c89762-a24e-4600-91ac-0886b260e9a0',
    identities: [[Object]],
    last_sign_in_at: '2024-01-13T19:39:43.618605251Z',
    phone: '',
    role: 'authenticated',
    updated_at: '2024-01-13T19:39:43.623251Z',
    user_metadata: {},
  },
};

const testData = {
  app_metadata: {provider: 'email', providers: ['email']},
  aud: 'authenticated',
  confirmed_at: '2024-01-13T19:39:21.581696Z',
  created_at: '2024-01-13T19:39:21.578811Z',
  email: 'karangalevr@gmail.com',
  email_confirmed_at: '2024-01-13T19:39:21.581696Z',
  id: 'e7c89762-a24e-4600-91ac-0886b260e9a0',
  identities: [
    {
      created_at: '2024-01-13T19:39:21.579866Z',
      email: 'karangalevr@gmail.com',
      id: 'e7c89762-a24e-4600-91ac-0886b260e9a0',
      identity_data: [Object],
      identity_id: '006b43cc-6ba0-48d2-a5bd-4720524d0a3b',
      last_sign_in_at: '2024-01-13T19:39:21.579817Z',
      provider: 'email',
      updated_at: '2024-01-13T19:39:21.579866Z',
      user_id: 'e7c89762-a24e-4600-91ac-0886b260e9a0',
    },
  ],
  last_sign_in_at: '2024-01-15T09:49:37.463753Z',
  phone: '',
  role: 'authenticated',
  updated_at: '2024-01-15T10:08:44.07965Z',
  user_metadata: {},
};
