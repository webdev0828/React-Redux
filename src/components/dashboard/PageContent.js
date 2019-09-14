import React from 'react'
import { Row } from 'shards-react'
import TableContent from './Content/TableContent'
import CardContent from './Content/CardContent'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const StyleContent = ({ style }) => {
  if (style === 'TABLE') return <TableContent />
  return <CardContent />
}

class Content extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
    }
  }
  componentDidMount() {
    fetch('http://localhost:3001/articles')
      .then(res => res.json())
      .then(
        result => {
          this.props.setArticles(result)
          this.props.setArticlesNum(Object.keys(result).length)
          let unreadArticlesNumber = 0
          Object.keys(result).map(key => {
            if (!result[key].isRead) unreadArticlesNumber++
          })
          this.props.setUnreadArticlesNum(unreadArticlesNumber)
        },
        error => {
          this.setState({
            error: error,
          })
        },
      )
  }
  render() {
    const { error } = this.state
    if (error) {
      return <div>{error.message}</div>
    }
    return (
      <>
        <Row key={0}>
          <div className="current-date mb-4 col-sm-12 col-md-12 col-lg-5">
            <p>Today</p>
          </div>
        </Row>
        <Row key={1}>
          <StyleContent style={this.props.style} />
        </Row>
      </>
    )
  }
}

const setArticles = articles => {
  return {
    type: 'SET_ARTICLES',
    articles: articles,
  }
}

const setArticlesNum = n => {
  return {
    type: 'SET_ARTICLES_NUM',
    articles_num: n,
  }
}

const setUnreadArticlesNum = n => {
  return {
    type: 'SET_UNREAD_ARTICLES_NUM',
    articles_num: n,
  }
}

const mapStateToProps = state => {
  return {
    all_articles_num: state.all_articles_num,
    articles: state.articles,
    style: state.style,
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { setArticles, setArticlesNum, setUnreadArticlesNum },
    dispatch,
  )
}

const PageContent = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Content)

export default PageContent
