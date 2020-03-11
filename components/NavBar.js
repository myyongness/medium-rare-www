/* eslint-disable react/button-has-type */
import React, { Component } from 'react';
import Link from 'next/link';
import styled from '@emotion/styled'; // i18n
import { Container } from 'next/app';

class NavBar extends Component {
  render = () => {
    return (
      <NavBarWrap>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Link href="/">
                <a>
                  <SectionLogo
                    src="https://miro.medium.com/max/284/1*s2mD88VUvZRFMwKROI8yqw.png"
                    alt=""
                  />
                </a>
              </Link>
              <MenuWrap>
                <Link href="/">
                  <a>BODY</a>
                </Link>
                <Link href="/">
                  <a>BRAIN</a>
                </Link>
                <Link href="/">
                  <a>FOOD</a>
                </Link>
                <Link href="/">
                  <a>LIFE</a>
                </Link>
                <Link href="/">
                  <a style={{ marginRight: '20px' }}>TRENDS</a>
                </Link>
                |
                <Link href="/">
                  <a>GUIDE TO THE FLU</a>
                </Link>
              </MenuWrap>
            </div>
          </div>
        </div>
      </NavBarWrap>
    );
  };
}

const NavBarWrap = styled.div`
  width: 100%;
  margin: auto;
  height: 54px;
  line-height: 54px;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.05);
  border-top: 1px solid rgba(0, 0, 0, 0.1);

  button {
    float: right;
    margin-top: 23px;
    margin-left: 8px;
  }
`;

const SectionLogo = styled.img`
  float: left;
  height: 35px;
  width: 150px;
  margin-top: 5px;
`;

const MenuWrap = styled.div`
  float: left;
  width: calc(100% - 150px);
  a {
    margin-left: 20px;
    color: rgba(0, 0, 0, 0.8);
  }
`;

export default NavBar;
