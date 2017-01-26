import React from 'react';
import { Actions } from 'react-native-router-flux';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { CardSection } from './common';

const ListItem = (props) => {
  const { name } = props.employee;
  return (
    <TouchableWithoutFeedback onPress={() => Actions.employeeEdit({ employee: props.employee })}>
      <View>
        <CardSection>
          <Text>
            {name}
          </Text>
        </CardSection>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ListItem;
