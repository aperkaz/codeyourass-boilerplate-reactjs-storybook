import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-bootstrap';

const ArticlePanel = ({ data }) => (
  <div
    style={{
      backgroundColor: '#ded324',
      textAlign: 'center',
      paddingBottom: '20px',
    }}
  >

    <Grid>
      <Row className="show-grid">
        <Col xs={12}>
          <h2>{data.title}</h2>
        </Col>
      </Row>
    </Grid>

    <Grid>
      <Row className="show-grid">
        <Col xs={12}>
          <div
            style={{
              backgroundColor: 'black',
              width: '100px',
              height: '1px',
              margin: '0 auto',
            }}
          />
        </Col>
      </Row>
    </Grid>

    <Grid>
      <Row className="show-grid">
        <Col xs={12}>
          <h5>{data.subtitle}</h5>
        </Col>
      </Row>
    </Grid>

    <Grid>
      <Row className="show-grid">
        <Col xs={4}>
          <div>{data.followers}
            FOLLOWERS</div>
        </Col>
        <Col xs={4}>
          <div>{data.userName}</div>
        </Col>
        <Col xs={4}>
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
    date: '3 MARCH 2017',
    imagePath: 'http://kingofwallpapers.com/gradient/gradient-011.jpg',
  },
};

ArticlePanel.propTypes = {
  data: PropTypes.object,
};

export default ArticlePanel;
