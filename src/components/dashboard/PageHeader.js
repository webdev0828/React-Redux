import React from 'react'
import { Row, Card, CardBody, Button } from 'shards-react'
import { Popover } from 'antd'
import 'antd/dist/antd.css'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class Header extends React.Component {
  onReadAllArticles() {
    this.props.setAllReadArticles()
    const articles = this.props.articles
    articles.map(article => {
      article.isRead = true
      fetch('http://localhost:3001/articles/' + article.id, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(article),
      })
    })
  }

  onSelectTableStyle() {
    this.props.setTableStyle()
  }
  onSelectCardsStyle() {
    this.props.setCardsStyle()
  }
  render() {
    return (
      <>
        <Row>
          <div className="page-title mb-4 col-sm-7 col-md-7 col-lg-5">
            <h1 className="title">Articles</h1>
          </div>
          <div className="mt-3 col-sm-5 col-md-5 col-lg-7 switch-btns">
            <div className="btn-group">
              <Button
                onClick={() => this.onSelectCardsStyle()}
                className={this.props.style === 'CARD' ? 'active' : ''}
              >
                <img
                  src={
                    this.props.style === 'CARD'
                      ? require('./../../assets/images/icons/card_active.svg')
                      : require('./../../assets/images/icons/card.svg')
                  }
                  alt="card"
                />
                Cards
              </Button>
              <Button
                onClick={() => this.onSelectTableStyle()}
                className={this.props.style === 'TABLE' ? 'active' : ''}
              >
                <img
                  src={
                    this.props.style === 'TABLE'
                      ? require('./../../assets/images/icons/table_active.svg')
                      : require('./../../assets/images/icons/table.svg')
                  }
                  alt="card"
                />
                Table
              </Button>
            </div>
          </div>
        </Row>
        <Row>
          <Card className="article-number content-header">
            <CardBody className="p-0">
              <div className="blog-comments__content">
                <div className="blog-comments__meta text-mutes">
                  <span className="text-mutes">Number of articles</span>
                  <img
                    src={require('./../../assets/images/menu.png')}
                    alt="popover"
                  />
                </div>
              </div>
              <p className="m-0 my-1 mb-2 text-muted article-number">
                {this.props.all_articles_num}
              </p>
              <p className="text-date">This day</p>
            </CardBody>
          </Card>
          <Card className="article-number content-header">
            <CardBody className="p-0">
              <div className="blog-comments__content">
                <div className="blog-comments__meta text-mutes">
                  <span className="text-mutes">Unread articles</span>
                  <Popover
                    placement="bottom"
                    content={
                      <p
                        className="mark-read"
                        onClick={() => this.onReadAllArticles()}
                      >
                        Mark All as Read
                      </p>
                    }
                    trigger="click"
                  >
                    <img
                      src={require('./../../assets/images/menu.png')}
                      alt="popover"
                    />
                  </Popover>
                </div>
              </div>
              <p className="m-0 my-1 mb-2 text-muted unread-number">
                {this.props.unread_articles_num}
              </p>
              <p className="text-date">This day</p>
            </CardBody>
          </Card>
        </Row>
      </>
    )
  }
}

const setAllReadArticles = () => {
  return {
    type: 'ALL_READ_ARTICLES',
  }
}

const setTableStyle = () => {
  return {
    type: 'SET_DISPLAY_STYLE',
    style: 'TABLE',
  }
}

const setCardsStyle = () => {
  return {
    type: 'SET_DISPLAY_STYLE',
    style: 'CARD',
  }
}

const mapStateToProps = state => {
  return {
    unread_articles_num: state.unread_articles_num,
    all_articles_num: state.all_articles_num,
    articles: state.articles,
    style: state.style,
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { setAllReadArticles, setTableStyle, setCardsStyle },
    dispatch,
  )
}

const PageHeader = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header)

export default PageHeader
