const config = {
  SENTRY_DSN: "https://b54aa7b6adbd4d318a3f23ce5a176400@o1136098.ingest.sentry.io/6506150",
  STRIPE_KEY: "pk_test_51KPrLjKaCh8zIANTxOWTy4oyrmt0HJjgyE0bXvQZRy5faq36pR4Jv8vKqlNDeeYGHQ7EXtwrQuOdNeoANsWjJMni00Fp2f6Qa7",
  MAX_ATTACHMENT_SIZE: 5000000,
    // Backend config
    s3: {
      REGION: process.env.REACT_APP_REGION,
      BUCKET: process.env.REACT_APP_BUCKET,
    },
    apiGateway: {
      REGION: process.env.REACT_APP_REGION,
      URL: process.env.REACT_APP_API_URL,
    },
    cognito: {
      REGION: process.env.REACT_APP_REGION,
      USER_POOL_ID: process.env.REACT_APP_USER_POOL_ID,
      APP_CLIENT_ID: process.env.REACT_APP_USER_POOL_CLIENT_ID,
      IDENTITY_POOL_ID: process.env.REACT_APP_IDENTITY_POOL_ID,
    },
  };
  
  export default config;