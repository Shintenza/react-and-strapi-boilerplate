const Preview = (props) => {
  const dateInfo = `${props.date.getHours()}.${props.date.getMinutes()} ${props.date.getDate()}.${props.date.getMonth()}.${props.date.getFullYear()}`;
  return (
    <div className="preview">
      <div className="previewTitle">{props.title}</div>
      <div className="previewDate">Published: {dateInfo}</div>
      <div className="previewDesc">{props.description}</div>
      <button className="readMore" onClick={(e) => props.previewMode(null, e)}>
        Go back
      </button>
    </div>
  );
};
export default Preview;
