import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  Alert,
  StatusBar,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity
} from "react-native";
import Card from "../component/Card";
import Input from "../component/Input";
import DetailRestaurant from "./DetailRestaurant";
import axios from "axios";

interface RestaurantModel {
  id: string;
  name: string;
  address: string;
  city: string;
}

interface Props {}
interface State {
  screen: "list" | "detail";
  restaurants: RestaurantModel[];
  query: string;
  selectedRestaurant?: RestaurantModel;
}

const restaurants: RestaurantModel[] = [];

const API_KEY = "94630c5ae766254997bd3788d3c3bb68";
const API_URL = "https://developers.zomato.com/api/v2.1/";

export default class Restaurant extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      screen: "list",
      restaurants: [],
      query: "semarang"
    };
  }

  public render() {
    const { screen, restaurants, query, selectedRestaurant } = this.state;
    if (screen == "list") {
      return this.renderList()
    }
    return this.renderDetail();
  }

  public renderList(){
    const { screen, restaurants, query, selectedRestaurant } = this.state;
      return (
        <View style={styles.container}>
        <TextInput
          value={query}
          onChangeText={e => this.setState({ query: e })}
        />
        <Button title="Search" onPress={() => this.handleSearch()} />
        <Text style={styles.title}>Daftar Restaurant</Text>
        <ScrollView>
          {restaurants.map((r, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => {
                this.setState({ screen: "detail", selectedRestaurant: r });
              }}
            >
              <Card title={r.name} />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      )
  }
  public renderDetail() {
    const { selectedRestaurant } = this.state;
    if (!selectedRestaurant) {
      return null;
    }

    return (
      <View>
        <Text>{selectedRestaurant.name}</Text>
        <Text>{selectedRestaurant.address}</Text>
        <Text>{selectedRestaurant.city}</Text>
        <Button title="kembali" onPress={()=>this.setState({
            screen : 'list'
        })} />
      </View>
    );
  }

  handleSearch() {
    const { query } = this.state;
    axios
      .get(`${API_URL}/search?q=${query}&count=10`, {
        headers: {
          "user-key": API_KEY
        }
      })
      .then(res => {
        console.log(res.data);
        if (res.data && res.data.restaurants) {
          const dataRestaurant = (res.data.restaurants as any[]).map<RestaurantModel>
          (r => ({
            id: r.restaurant.id,
            name: r.restaurant.name,
            address: r.restaurant.location.address,
            city: r.restaurant.location.city
          }));
          this.setState({
            restaurants: dataRestaurant
          });
        }
      })
      .catch(err => {
        console.log(err);
      });
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
