import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-bootstrap';

// title, subtitle, followers, userName, date, imagePath
const ArticlePanel = ({ article }) => (

  /* Conditional rendering of component's background */
  <div
    id="article-panel-main"
    style={{
      backgroundImage: (article.imagePath) ? `url( ${article.imagePath} )` : null,
      backgroundColor: (!article.imagePath || article.imagePath === '') ? '#ded324' : null,
      textAlign: 'center',
      paddingBottom: '20px',
    }}
  >

    <Grid
      style={{
        width: '100%',
      }}
    >
      <Row
        className="show-grid"
        style={{
          marginBottom: '20px',
        }}
      >
        <Col xs={12}>
          <div>
            <h1 id="title">{article.title}</h1>
          </div>
        </Col>
      </Row>


      {/* Contional rendering of subtitle and separator */ }
      {
      (article.subtitle) ? (
        <div>
          <Row className="show-grid">
            <Col xs={12}>
              <div
                style={{
                  backgroundColor: 'black',
                  width: '70px',
                  height: '1px',
                  margin: '0 auto',
                }}
              />
            </Col>
          </Row>
          <Row
            className="show-grid"
            style={{
              marginTop: '20px',
              marginBottom: '35px',
            }}
          >
            <Col xs={12}>
              <div>
                <h4 id="subtitle">{article.subtitle}</h4>
              </div>
            </Col>
          </Row>
        </div>
        ) : (
          <div />
    )}

      <Row className="show-grid">
        <Col xs={12} sm={4}>
          {/* Conditional rendering of followers */}
          { (article.followers) ? (
            <div id="followers">
              <b>
                {article.followers}
              </b>
              &nbsp;FOLLOWERS
            </div>
          ) : (
            <div />
          )}

        </Col>
        <Col xs={12} sm={4}>
          <div id="userName">{article.userName}</div>
        </Col>
        <Col xs={12} sm={4}>
          <div id="date">{article.date}</div>
        </Col>
      </Row>
    </Grid>

  </div>

);

ArticlePanel.defaultProps = {
  article: {
    title: 'DEFAULT TITLE',
    subtitle: 'DEFAULT SUBTITLE',
    followers: 0,
    userName: 'USERNAME',
    date: 'A DATE',
  },
};


ArticlePanel.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    followers: PropTypes.number.isRequired,
    userName: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    imagePath: PropTypes.string,
  }),
};

export default ArticlePanel;
