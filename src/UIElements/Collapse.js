const Collapse = (props) => {
  return (
    <img
      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAbElEQVR4nO3SQQqDQBBE0blNcKt4lJlfzFbwHh5A18khxSuEgJFsA9Ii1IPe9KaoplMyM7MzlVJaYIgO7YFN0hQZ2kpaJc1hoTnnx6fp3vb17wBPoLlP8O+pgSVFK1c811ettQPGY2FmZinQGy9XUjdzBWG6AAAAAElFTkSuQmCC"
      onClick={props?.onClick}
      className={props?.class}
    />
  );
};
export default Collapse;
