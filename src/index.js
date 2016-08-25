import React from 'react';

export default class Table extends React.Component {

  static propTypes = {
    show: React.PropTypes.array.isRequired,
    children: React.PropTypes.node.isRequired
  }

  render() {
    let first = Infinity;
    return <div>
      {this.props.children.filter((_, i) => i % 2 == 0 ? first > i && this.props.show[i/2] && (first = i + 1) : first < i || !this.props.show[(i-1)/2]).map(i => i)}
    </div>;
  }

}
