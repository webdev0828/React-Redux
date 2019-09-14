import React from 'react'
import { Card, CardBody, Button, Col } from 'shards-react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const ReadBadge = ({ isRead }) => {
  if (isRead) {
    return <div></div>
  }
  return (
    <div className="badge">
      <img src={require('./../../../assets/images/badge.png')} alt="badge" />
    </div>
  )
}

class Content extends React.Component {
  onReadArticle(article) {
    article.isRead = true
    this.props.readArticle(this.props.unread_articles_num)
    fetch('http://localhost:3001/articles/' + article.id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(article),
    })
  }

  onDeleteArticle(article) {
    fetch('http://localhost:3001/articles/' + article.id, {
      method: 'DELETE',
    }).then(() => {
      let articles = []
      Object.keys(this.props.articles).map(key => {
        if (this.props.articles[key].id !== article.id) {
          articles.push(this.props.articles[key])
        }
      })
      this.props.deleteArticle(articles)
      if (!article.isRead)
        this.props.readArticle(this.props.unread_articles_num)
    })
  }
  render() {
    const articles = this.props.articles
    if (Object.keys(articles).length === 0) return <div></div>
    return articles.map((article, idx) => (
      <Col lg="12" md="12" sm="12" className="mb-4" key={`col_${idx}`}>
        <Card small className="blog-comments table-style" key={`card_${idx}`}>
          <CardBody className="p-0">
            <div key={idx} className="blog-comments__item d-flex p-3">
              <div className="blog-comments__avatar mr-3 col-md-1">
                <img
                  src={require('./../../../assets/images/avatars/0.jpg')}
                  alt={article.author}
                />
              </div>
              <div className="blog-comments__meta text-mutes col-md-2">
                <p className="text-secondary name">{article.author}</p>
                <p className="text-secondary email">{article.email}</p>
                <span className="text-mutes role"> {article.jobTitle}</span>
              </div>
              <div className="blog-comments__meta text-mutes col-md-5">
                <p className="m-0 mb-2 text-muted title">{article.title}</p>
                <p className="m-0 mb-2 text-muted description">
                  {article.desc.substring(0, 125)}
                </p>
              </div>
              <div className="blog-comments__meta text-mutes skills col-md-2">
                <div className="row">
                  {article.tags.map((tag, idx) => (
                    <div className="col-sm-6" key={`${idx}_${tag}`}>
                      <p>{tag}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="blog-comments__meta text-mutes actions col-md-2">
                <div className="row">
                  <div className="col-sm-3">
                    <img
                      src={require('./../../../assets/images/icons/delete.svg')}
                      alt="delete"
                      onClick={() => this.onDeleteArticle(article)}
                    />
                  </div>
                  <div className="col-sm-9">
                    <Button
                      onClick={() => this.onReadArticle(article)}
                      disabled={article.isRead}
                    >
                      Mark as Read
                    </Button>
                  </div>
                </div>
              </div>
              <ReadBadge isRead={article.isRead} />
            </div>
          </CardBody>
        </Card>
      </Col>
    ))
  }
}

const readArticle = () => {
  return {
    type: 'READ_ARTICLE',
  }
}

const deleteArticle = articles => {
  return {
    type: 'DELETE_ARTICLE',
    articles: articles,
  }
}

const mapStateToProps = state => {
  return {
    unread_articles_num: state.unread_articles_num,
    articles: state.articles,
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ readArticle, deleteArticle }, dispatch)
}

const TableContent = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Content)

export default TableContent
