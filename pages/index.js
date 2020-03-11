import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled'; // i18n
import ArticleBox from '../components/ArticleBox';
import fetch from '../utils/fetch.js';

class Index extends Component {
  // eslint-disable-next-line react/static-property-placement
  static propTypes = {
    // eslint-disable-next-line react/require-default-props
    articles: PropTypes.object, // .isRequired,
  };

  static getInitialProps = async context => {
    const page = context.query.page || 1;
    const articles = await fetch(
      null,
      'get',
      `admin/articles?page=${page}`,
      null,
    );
    return {
      articles,
    };
  };

  render = () => {
    return (
      <>
        <Container>
          <MenuBar>
            <img src="/img/elemental.png" alt="" />
            <span>By medium</span>
          </MenuBar>

          <div className="row" style={{ marginTop: '20px' }}>
            {this.props.articles.title !== null &&
              this.props.articles.rows.map((article, index) => {
                if (index === 0) {
                  return (
                    <>
                      <div className="col-8" style={{ marginBottom: '20px' }}>
                        <Thumbnail
                          style={{
                            backgroundImage: `url(http://localhost:3000/${article.coverImageURL})`,
                          }}
                        />
                      </div>
                      <div className="col-4" style={{ marginBottom: '20px' }}>
                        <a href={`/articleDetail?id=${article.id}`}>
                          <h2>{article.title}</h2>
                        </a>
                        <br />
                        {article.detail}
                      </div>
                    </>
                  );
                }
                return (
                  <div className="col-4">
                    <ArticleBox article={article} />
                  </div>
                );
              })}
          </div>
        </Container>
      </>
    );
  };
}

const Container = styled.div`
  background-color: transparent;
  width: 1032px;
  height: 300px;
  margin: auto;

  h3 {
    margin-top: 10px;
  }
`;

const MenuBar = styled.div`
  background-color: transparent;
  width: 100%;
  height: 250px;
  display: block;

  span {
    font-family: sans-serif;
    font-size: 22px;
  }

  span,
  img {
    display: block;
    clear: both;
  }
`;

const Thumbnail = styled.div`
  background-size: cover;
  background-position: center center;
  height: 352px;
  width: 100%;
`;

export default Index;
