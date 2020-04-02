import React from 'react';

interface Props {
  statusCode?: number;
}

export default class Error extends React.Component<Props> {
  static getInitialProps({ res, err }: any) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode };
  }

  componentDidMount() {
    // log error to server
    console.log('error log :D');
  }

  render() {
    return (
      <div>
        {this.props.statusCode ? `An error ${this.props.statusCode} occurred on server` : 'An error occurred on client'}
      </div>
    );
  }
}
