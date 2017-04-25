import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-bootstrap';

const ArticlePanel = ({ data }) => (

 { /* Conditional rendering of component background */ },
  <div
    style={{
      backgroundImage: (data.imagePath) ? 'url(' + data.imagePath + ')' : null,
      backgroundColor: (data.imagePath || data.imagePath === '') ? '#ded324' : null ,
      textAlign: 'center',
      paddingBottom: '20px',
    }}
  >

    <Grid>
      <Row
        className="show-grid"
        style={{
          marginBottom: '20px',
        }}
      >
        <Col xs={12}>
          <h1>{data.title}</h1>
        </Col>
      </Row>
    </Grid>

    { /* Contional rendering of subtitle and separator */ },
    {
      (data.subtitle) ? (
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
              marginBottom: '40px',
            }}
          >
            <Col xs={12}>
              <h4>{data.subtitle}</h4>
            </Col>
          </Row>
        </div>
        ) : (
          <div />
    )}

    <Grid>
      <Row className="show-grid">
        <Col sm={12} md={4}>
          <div>
            <b>
              {data.followers}
            </b>
            &nbsp;FOLLOWERS</div>
        </Col>
        <Col sm={12} md={4}>
          <div>{data.userName}</div>
        </Col>
        <Col sm={12} md={4}>
          <div>{data.date}</div>
        </Col>
      </Row>
    </Grid>

  </div>

);

ArticlePanel.defaultProps = {
  data: {
    title: 'TITLE',
    subtitle: 'SUBTITLE. DOLOR AMET DOLO AMET',
    followers: 15,
    userName: 'DENISA JUNA',
    date: ' 3 March 2017',
    imagePath: 'http://wallpapercave.com/wp/tmx6W6N.png',
  },
};

ArticlePanel.propTypes = {
  data: PropTypes.status,
};

export default ArticlePanel;
