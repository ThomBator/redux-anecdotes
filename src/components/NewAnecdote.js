import { useDispatch } from "react-redux";
import { newAnecdote } from "../reducers/anecdoteReducer";

const NewAnecdote = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(newAnecdote(event.target.anecdote.value));
  };

  return (
    <div>
      <h2>create new</h2>
      {/*Remember, events are just passed when you put the function into onSubmit like this*/}
      <form onSubmit={handleSubmit}>
        <div>
          <input name="anecdote" />
        </div>
        <button>create</button>
      </form>
    </div>
  );
};

export default NewAnecdote;
