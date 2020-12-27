const Pagination = (props) => {
  const changeBgColor = () => {
    if (props.activeOption === props.content) {
      return { backgroundColor: "#f73939" };
    } else {
      return { backgroundColor: "#242424" };
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
