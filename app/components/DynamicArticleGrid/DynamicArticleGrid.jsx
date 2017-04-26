import React from 'react';
import PropTypes from 'prop-types';
import ArticlePanel from '../ArticlePanel/ArticlePanel';

const DynamicArticleGrid = ({ articles }) => (

  <div
    id="article-list-main"
    style={{
      textAlign: 'center',
    }}
  >

    <div>
      <div className="DocumentList">
        <ul className="list-inline">
          { Array.isArray(articles)
          ? [
            (articles.map(article => (

              <li className="DocumentItem article">
                <ArticlePanel
                  article={article}
                />
              </li>

            ))),
          ]
          : (
            <div />
          )}

        </ul>
      </div>
    </div>

  </div>

);

DynamicArticleGrid.defaultProps = {
  articles: [],
};

DynamicArticleGrid.propTypes = {
  articles: PropTypes.arrayOf({
    article: PropTypes.shape({
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string,
      followers: PropTypes.number.isRequired,
      userName: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      imagePath: PropTypes.string,
    }),
  }),
};

export default DynamicArticleGrid;
