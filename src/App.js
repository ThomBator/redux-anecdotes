import React from "react";
import Anecdotes from "./components/Anecdotes";
import NewAnecdote from "./components/NewAnecdote";
import Filter from "./components/Filter";

const App = () => {
  return (
    <div>
      <Filter />
      <Anecdotes />
      <NewAnecdote />
    </div>
  );
};

export default App;
