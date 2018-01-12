import { InMemoryDbService } from 'angular-in-memory-web-api';
import {Injectable} from "@angular/core";

@Injectable()
export class DataMock implements InMemoryDbService {

  constructor() {

  }

  createDb() {

    const food = {
      "categories": [
      {
        "id": 0,
        "name": "Boissons",
        "picture": "assets/imgs/drink.jpg",
        "products": [
        {"name": "Coca-Cola 50cl", "price": 4, "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum, mi sed commodo rutrum.", "picture": "assets/imgs/can.png"},
        {"name": "Fanta 50cl", "price": 3, "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum, mi sed commodo rutrum.", "picture": "assets/imgs/can.png"},
        {"name": "Fanta 50cl", "price": 3, "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum, mi sed commodo rutrum.", "picture": "assets/imgs/can.png"},
      ]
      },
      {
        "id": 1,
        "name": "Sandwich",
        "picture": "assets/imgs/food.jpg",
        "products": [
        {"name": "Jambon beurre", "price": 6, "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum, mi sed commodo rutrum.", "picture": "assets/imgs/sandwitch200.jpg"},
        {"name": "Hot-Dog", "price": 7, "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum, mi sed commodo rutrum.", "picture": "assets/imgs/sandwitch200.jpg"},
        {"name": "Jambon beurre", "price": 6, "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum, mi sed commodo rutrum.", "picture": "assets/imgs/sandwitch200.jpg"},
        {"name": "Hot-Dog", "price": 7, "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum, mi sed commodo rutrum.", "picture": "assets/imgs/sandwitch200.jpg"}
      ]
      },
      {
        "id": 2,
        "name": "Dessert",
        "picture": "assets/imgs/dessertpic.jpg",
        "products": [
        {"name": "Jambon beurre", "price": 6, "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum, mi sed commodo rutrum.", "picture": "assets/imgs/drink.jpg"},
        {"name": "Hot-Dog", "price": 7, "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum, mi sed commodo rutrum.", "picture": "assets/imgs/drink.jpg"}
      ]
      }]
    };
    return {food};
  }
}
