import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled'; // i18n

class ArticleBox extends Component {
  static propTypes = {
    article: PropTypes.object.isRequired,
  };

  render = () => {
    return (
      <>
        <Thumbnail2
          style={{
            backgroundImage: `url(http://localhost:3000/${this.props.article.coverImageURL})`,
          }}
        />
        <h3>
          <a href={`/articleDetail?id=${this.props.article.id}`}>
            {this.props.article.title}
          </a>
        </h3>
        {this.props.article.detail}
      </>
    );
  };
}

const Thumbnail2 = styled.div`
  background-size: cover;
  background-position: center center;
  height: 174px;
  width: 100%;
`;

export default ArticleBox;
