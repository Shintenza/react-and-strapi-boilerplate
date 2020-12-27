const Article = (props) => {
  return (
    <div className="article">
      <div className="articleDate">{props.date}</div>
      <div className="articleTitle">{props.title}</div>
      <div className="articleDesc">{props.description}</div>
    </div>
  );
};
export default Article;
