const anecdotesAtStart = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

const getId = () => (100000 * Math.random()).toFixed(0);

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0,
  };
};

//Takes the initalState array and creates objects with required properties
//Properties are defined in asObject function above
const initialState = anecdotesAtStart.map(asObject);

const anecdoteReducer = (state = initialState, action) => {
  console.log("state now: ", state);
  console.log("action", action);
  switch (action.type) {
    case "NEW ANECDOTE":
      return [...state, action.payload];

    case "VOTE":
      const id = action.payload.id;
      const anecdoteToChange = state.find((anecdote) => anecdote.id === id);
      const changedAnecdote = {
        ...anecdoteToChange,
        votes: anecdoteToChange.votes + 1,
      };
      return state.map((anecdote) =>
        anecdote.id !== id ? anecdote : changedAnecdote
      );
    default:
      return state;
  }
};

//action creators

//Take id as param and returns an action with type "VOTE" and payload of id
export const vote = (id) => {
  return { type: "VOTE", payload: { id } };
};

//Takes an anecdote as a param and returns an action with type "NEW ANECDOTE" and payload matching anecdote asObject function defined above.
export const newAnecdote = (anecdote) => {
  return {
    type: "NEW ANECDOTE",
    payload: {
      content: anecdote,
      id: getId(),
      votes: 0,
    },
  };
};

export default anecdoteReducer;
