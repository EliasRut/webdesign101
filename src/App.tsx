import React from 'react';
import data from './data.json';
import './App.css';
import {Container, Header, Grid} from 'semantic-ui-react';

// ToDos
// 1: Move display component for individual Dropships into a new class, DropshipPreview.tsx
// 2: Make it pretty
// 3: Add a state to App to keep track of which dropship has been clicked (you can use the array index)
// 4: Add a class DropshipDetails.tsx that displays the details of the clicked dropship

// hint: you can use Semantic UI React
// For the Dropship Preview, Look at Cards: https://react.semantic-ui.com/views/card/
// For the details page, use a Grid or a Table

// hint: for using a state, use a react state hook: https://reactjs.org/docs/hooks-overview.html

const App = () => {
  return (
    <Container className="App">
      <Header textAlign="center">Dropships</Header>
      <Grid stackable={true} columns={3}>
        {data.map((entry) => (
          <Grid.Column>
            {entry.name}
          </Grid.Column>
        ))}
      </Grid>
    </Container>
  );
}

export default App;
