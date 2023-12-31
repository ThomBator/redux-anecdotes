import { useSelector, useDispatch } from "react-redux";
import { vote } from "../reducers/anecdoteReducer";

const Anecdote = ({ anecdote, handleClick }) => {
  return (
    <div>
      <div>{anecdote.content}</div>
      <div>
        has {anecdote.votes}
        <button onClick={handleClick}>vote</button>
      </div>
    </div>
  );
};

const Anecdotes = () => {
  const anecdotes = useSelector((state) => {
    if (state.filter.length > 0) {
      return state.anecdotes.filter((anecdote) =>
        anecdote.content.includes(state.filter)
      );
    }
    return state.anecdotes;
  }).sort((a, b) => b.votes - a.votes);

  const dispatch = useDispatch();

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map((anecdote) => (
        <Anecdote
          key={anecdote.id}
          anecdote={anecdote}
          handleClick={() => dispatch(vote(anecdote.id))}
        />
      ))}
    </div>
  );
};

export default Anecdotes;
