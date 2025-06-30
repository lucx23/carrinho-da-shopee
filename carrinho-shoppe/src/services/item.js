//Arquivo para lidar com os itens do carrinho
//--> Criar item com subtotal certo
async function createItem(name, price, quantity) {
    return {
        name,
        price,
        quantity,
        subtotal: () => price * quantity,
    }
}

export default createItem;