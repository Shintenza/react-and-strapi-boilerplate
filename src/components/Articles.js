import React from "react";
import Article from "./Article";
import Pagination from "./Pagination";
import Preview from "./Preview";

class Articles extends React.Component {
  state = {
    data: [],
    isLoaded: false,
    error: null,
    activeOption: 1,
    preview: false,
    activeArticle: null,
  };
  componentDidMount() {
    fetch("https://shz-strapi.herokuapp.com/articles")
      .then((res) => res.json())
      .then(
        (res) => {
          this.setState({
            data: res,
            isLoaded: true,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }
  drawArticles = () => {
    let articles = [];
    const { isLoaded, data, error } = this.state;
    if (!isLoaded) {
      return <div>Ładowanie strony</div>;
    } else if (error) {
      return <div>O nie, coś poszło nie tak: {error.message}</div>;
    } else {
      data.map((e) => {
        articles.push(
          <Article
            date={new Date(e.date)}
            title={e.title}
            description={e.description}
            id={e._id}
            key={e._id}
            previewMode={this.handlePreviewMode}
          />
        );
      });
      const amountOfArticles = articles.length;
      if (amountOfArticles > 4) {
        const quantity = Math.ceil(amountOfArticles / 4);
        const pagination = [];
        for (let i = 0; i < quantity; i++) {
          pagination.push(
            <Pagination
              key={i}
              content={i + 1}
              f={this.switchArticles}
              activeOption={this.state.activeOption}
            />
          );
        }
        articles = articles.reverse();
        const { activeOption } = this.state;
        return [
          articles.slice((activeOption - 1) * 4, 4 * activeOption),
          pagination,
        ];
      } else {
        return articles.reverse();
      }
    }
  };
  switchArticles = (e = 1) => {
    this.setState({
      activeOption: e,
    });
  };
  handlePreviewMode = (res, e) => {
    e.preventDefault();
    this.setState({
      preview: !this.state.preview,
      activeArticle: res,
    });
  };
  render() {
    const { preview, activeArticle } = this.state;
    if (preview) {
      return (
        <Preview
          date={activeArticle.date}
          title={activeArticle.title}
          description={activeArticle.description}
          key={activeArticle._id}
          previewMode={this.handlePreviewMode}
        />
      );
    } else {
      return (
        <React.Fragment>
          <div className="articles">{this.drawArticles()[0]}</div>
          <div className="pagination">{this.drawArticles()[1]}</div>
        </React.Fragment>
      );
    }
  }
}
export default Articles;
