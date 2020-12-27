const Pagination = (props) => {
  const changeBgColor = () => {
    if (props.activeOption === props.content) {
      return { backgroundColor: "red" };
    } else {
      return { backgroundColor: "white" };
    }
  };
  return (
    <div
      className="option"
      style={changeBgColor()}
      onClick={() => props.f(props.content)}
    >
      {props.content}
    </div>
  );
};
export default Pagination;
