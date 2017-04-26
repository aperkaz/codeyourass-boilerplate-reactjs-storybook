import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-bootstrap';
import ArticlePanel from '../ArticlePanel/ArticlePanel';

const ArticleList = ({ articles }) => (

  <div
    id="article-list-main"
    style={{
      textAlign: 'center',
    }}
  >

    <div>

      { Array.isArray(articles)
      ? [
        (articles.map(article => (
          <div
            className="article"
            key={article.id}
          >
            <Grid
              style={{
                width: '100%',
              }}
            >
              <Row
                style={{
                  paddingBottom: '20px',
                }}
              >
                <Col xs={12}>
                  <div>
                    <ArticlePanel
                      article={article}
                    />
                  </div>
                </Col>
              </Row>
            </Grid>
          </div>
        ))),
      ]
    : (
      <div />
    )}

    </div>

  </div>

);

ArticleList.defaultProps = {
  articles: [],
};

ArticleList.propTypes = {
  articles: PropTypes.arrayOf({
    article: PropTypes.shape({
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string,
      followers: PropTypes.number.isRequired,
      userName: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      imagePath: PropTypes.string,
    })
  })
};

export default ArticleList;
