import React from 'react';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Courses from './courses';
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

const App = () => (
  <ApolloProvider client={client}>
    <div>
      <h2>List of courses</h2>
    </div>
    <Courses/>
  </ApolloProvider>
);

export default App;
