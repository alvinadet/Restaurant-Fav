import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  Alert,
  StatusBar,
  StyleSheet,
  ScrollView
} from "react-native";
import Card from "../component/Card";
import Input from "../component/Input";
import DetailRestaurant from "./DetailRestaurant";

interface RestaurantModel {
  id: string;
  name: string;
}

interface Props {}
interface State {
  screen: string;
}

const restaurants: RestaurantModel[] = [
  {
    id: "1",
    name: "Warung Padang"
  },
  {
    id: "2",
    name: "Warung Bakso"
  },
  {
    id: "3",
    name: "Warung Miayam"
  },
  {
    id: "4",
    name: "Warung Geprek"
  },
  {
    id: "5",
    name: "Warung GH Corner"
  },
  {
    id: "5",
    name: "Warung GH Corner"
  },
  {
    id: "5",
    name: "Warung GH Corner"
  }
];

export default class Restaurant extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      screen: "detail"
    };
  }

 

  render() {
    const { screen } = this.state;
    if (screen == "list") {
      return (
        <View style={styles.container}>
          <Input />
          <Text style={styles.title}>Daftar Restaurant</Text>
          <ScrollView>
            {restaurants.map((r, index) => (
              <Card title={r.name} key={index} />
            ))}
          </ScrollView>
        </View>
      )
    }
    return <DetailRestaurant />
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    padding: 10
  },
  title: {
    fontSize: 16
  }
});
