import { Text, View } from 'react-native';
import React, { Component } from 'react';

type PageParamsType = {
  content: React.FC;
};

let _content: PageParamsType['content'];

class Login extends Component {
  render() {
    return _content && _content({});
  }
}

export default ({ content }: PageParamsType) => {
  _content = content;
  return Login;
};
