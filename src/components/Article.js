const Article = (props) => {
  const dateInfo = `${props.date.getHours()}.${props.date.getMinutes()} ${props.date.getDate()}.${props.date.getMonth()}.${props.date.getFullYear()}`;
  return (
    <div className="article">
      <div className="articleTitle">{props.title}</div>
      <div className="articleDate">Published: {dateInfo}</div>
      <div className="articleDesc">{props.description}</div>
      <button className="readMore" onClick={(e) => props.previewMode(props, e)}>
        Read more
      </button>
    </div>
  );
};
export default Article;
