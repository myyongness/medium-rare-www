import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled'; // i18n
import fetch from '../utils/fetch.js';
import NavBar from '../components/NavBar.js';

class articleDetail extends Component {
  static propTypes = {
    article: PropTypes.object.isRequired,
  };

  static getInitialProps = async ctx => {
    const queryParams = ctx.query;
    let article = null;
    if (queryParams.id) {
      article = await fetch(
        null,
        'get',
        `admin/article/${queryParams.id}`,
        null,
      );
    }
    return {
      article,
    };
  };

  render = () => {
    return (
      <>
        <NavBar />
        <DetailWrap>
          <h2 style={{ marginTop: '20px' }}>{this.props.article.title}</h2>
          <p>{this.props.article.detail}</p>
          <Thumbnail
            style={{
              backgroundImage: `url(http://localhost:3000/${this.props.article.coverImageURL})`,
            }}
          />
        </DetailWrap>
      </>
    );
  };
}

const DetailWrap = styled.div`
  width: 680px;
  margin: auto;

  button {
    float: right;
    margin-top: 23px;
    margin-left: 8px;
  }
`;

const Thumbnail = styled.img`
  background-size: cover;
  background-position: center center;
  height: 455px;
  width: 100%;
`;
export default articleDetail;
