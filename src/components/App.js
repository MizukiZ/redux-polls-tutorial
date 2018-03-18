import React, { Component } from "react"
import { connect } from "react-redux"
import { handleInitialData } from "../actions/share"
import Dashboard from "./Dashboard"
import LoadingBar from "react-redux-loading"
import Leaderboard from "./Leaderboard"

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <div>
        <LoadingBar />
        {this.props.loading ? null : <Leaderboard />}
      </div>
    )
  }
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App)
