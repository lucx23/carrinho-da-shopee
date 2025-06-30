// Importando as funções dos serviços de item e carrinho
import createItem from "./services/item.js";
import * as cartService from "./services/cart.js"
import chalk from "chalk";

// Inicializando o carrinho e a lista de desejos como arrays vazios
const cart = [];
const myWishList = [];

// Exibindo mensagem de boas-vindas
console.log(`🛒 Welcome to the your Shopee Cart!`);

// Criando itens usando a função createItem (assincrona)
const item1 = await createItem("Mouse", 70.5, 3);
const item2 = await createItem("Mousepad", 90, 2);

// Adicionando item1 ao carrinho
await cartService.addItem(cart, item1)
// Adicionando item2 à lista de desejos
await cartService.addItem(cart, item2)


await cartService.removeItem(cart, item1);
await cartService.removeItem(cart, item2);
await cartService.displayCart(cart);
// Exibindo o total do carrinho
await cartService.totalItem(cart); 

//Deletando o item do carrinho
//await cartService.delItem(cart, item2.name);
// Calculando e exibindo o total dos itens no carrinho