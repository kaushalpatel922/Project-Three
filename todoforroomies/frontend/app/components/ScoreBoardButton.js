import React from 'react';

const ScoreBoardButton = React.createClass ({
  render: function() {
    return (
      <div>
        <button onClick={this.props.handleScoreBoardButton}>See ScoreBoard</button>
      </div>
    )
  }
})

export default ScoreBoardButton;
