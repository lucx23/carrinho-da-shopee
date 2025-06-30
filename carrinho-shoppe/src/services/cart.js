import chalk from "chalk";
//Arquivo para lidar com o carrinho
//Quais ações meu carrinho pode fazer?
/* Casos de uso */
//✅Adicionar item
async function addItem(userCart, item) {
    userCart.push(item);
}
//Calcular o total
async function totalItem(userCart) {
    console.log("Shopee Cart total is:");
    const result = userCart.reduce((total, item) => total + item.subtotal(), 0);

    console.log(chalk.green(`Total: $${result}`));
}
//Deletar item
async function delItem(userCart, name) {
    const index = userCart.findIndex(item => item.name === name);
    if(index != -1)
    {
        userCart.splice(index, 1);
        console.log(chalk.red(`Item ${name} removed from cart.`));
    }
}

//✅Remover item
async function removeItem(userCart, item) { 

    // Verificando o index do item no carrinho
    const indexFound = userCart.findIndex((p) => p.name === item.name);

    //Se o index for -1, significa que o item não foi encontrado
    if(indexFound == -1)
    {
        console.log(chalk.red(`Item ${item.name} not found in cart.`));
        return;
    }

    //Se a quantidade do item for maior que 1, diminui a quantidade
    if(userCart[indexFound].quantity > 1) {
        userCart[indexFound].quantity -= 1;
        return;
    }

    //Se a quantidade do item for igual a 1, remove o item do carrinho
    if(userCart[indexFound].quantity === 1) {
        userCart.splice(indexFound, 1);
        console.log(chalk.red(`Item ${item.name} removed from cart.`));
        return;
    } else {
        console.log(chalk.red(`Item ${item.name} not found in cart.`));
        return;
    }
}

async function displayCart(userCart) {
    console.log(chalk.green("Your cart items:"));
    userCart.forEach((item , index) => {
       console.log(chalk.bgGreenBright(`${index + 1}. ${item.name} - Price $${item.price.toFixed(2)} - Quantity: ${item.quantity} - Subtotal: $${item.subtotal().toFixed(2)}`));
    });
}

export {
    addItem,
    totalItem,
    removeItem,
    delItem,
    displayCart,
};


