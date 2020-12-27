import React from "react";
import Article from "./Article";
import Pagination from "./Pagination";

class Articles extends React.Component {
  state = {
    data: [],
    isLoaded: false,
    error: null,
    activeOption: 1,
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
            date={e.date}
            title={e.title}
            description={e.description}
            key={e._id}
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
  render() {
    return (
      <React.Fragment>
        <div className="articles">{this.drawArticles()[0]}</div>
        <div className="pagination">{this.drawArticles()[1]}</div>
      </React.Fragment>
    );
  }
}
export default Articles;
