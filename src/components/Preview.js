const Preview = (props) => {
  const dateInfo = `${props.date.getHours()}.${props.date.getMinutes()} ${props.date.getDate()}.${props.date.getMonth()}.${props.date.getFullYear()}`;
  return (
    <div className="article">
      <div className="articleDate">{dateInfo}</div>
      <div className="articleTitle">{props.title}</div>
      <div className="articleDesc">{props.description}</div>
      <button className="readMore" onClick={(e) => props.previewMode(null, e)}>
        Go back
      </button>
    </div>
  );
};
export default Preview;
