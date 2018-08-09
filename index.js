import { ApolloEngine } from 'apollo-engine';
const engine = new ApolloEngine();

// Set a default value of 3000 if we don't pass an env var
const PORT = process.env.PORT || 3000;

engine.listen({
  port: PORT,
  expressApp: app
}, () => {
  console.log(`Server running on port ${PORT}!`);
});