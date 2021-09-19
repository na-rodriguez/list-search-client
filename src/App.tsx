import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import "./App.css";
import ContactList from './Components/ContactList'
import Contact from './Components/Contact'

function App() {
  const client = new ApolloClient({
    uri: "http://localhost:4000/graphql",
    cache: new InMemoryCache(),
  })

  return (
    <>
      <ApolloProvider client={client}>
        <Router>
          <Route path="/" exact><ContactList /></Route>
          <Route path="/contact/:id"><Contact /></Route>
        </Router>
      </ApolloProvider>
    </>
  )
}

export default App
