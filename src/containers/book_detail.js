import React from "react";
import { connect } from "react-redux";

class App extends React.Component {
  render() {
    if (!this.props.book) {
      return <div>Select a book</div>;
    }

    return (
      <div>
        <h3>Details for :</h3>
        <h4>{this.props.book.title}</h4>
        <h4>{this.props.book.pages}</h4>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    book: state.activeBook,
  };
}

export default connect(mapStateToProps)(App);
