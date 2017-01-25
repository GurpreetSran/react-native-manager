import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button, Spinner } from './common';
import { emailChanged, passwordChanged, loginUser } from '../actions';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;

    this.props.loginUser({ email, password });
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size='large' />;
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Login
      </Button>
    );
  }


  render() {
      return (
        <Card>
          <CardSection>
            <Input
              value={this.props.email}
              onChangeText={this.onEmailChange.bind(this)}
              label="Email"
              placeholder="email@gmail.com"
            />
          </CardSection>

          <CardSection>
            <Input
              value={this.props.password}
              onChangeText={this.onPasswordChange.bind(this)}
              label="Password"
              secureTextEntry
              placeholder="password"
            />
          </CardSection>

          <Text style={{ color: 'red', fontSize: 20, alignSelf: 'center' }} >
            {this.props.error}
          </Text>

          <CardSection>
            {this.renderButton()}
          </CardSection>
        </Card>
      );
  }
}

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;

  return { email, password, error, loading };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);
