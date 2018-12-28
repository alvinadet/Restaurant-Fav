import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  Alert,
  StyleSheet,
  TouchableOpacity
} from "react-native";

interface Props {
  title: string;
}

interface State {
  favorite: boolean;
}

export default class Card extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      favorite: false
    };
  }

  handleClick = () => {
    this.setState({
      favorite: !this.state.favorite
    });
  };

  render() {
    const { favorite } = this.state;
    return (
      <View
        style={[
          styles.container,
          { backgroundColor: favorite ? "red" : "blue" }
        ]}
      >
        <Text>{this.props.title}</Text>
        <Button
          title={favorite ? "Hapus dari Favorit" : "Jadikan Favorit"}
          onPress={() => this.handleClick()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    padding: 10
  }
});
