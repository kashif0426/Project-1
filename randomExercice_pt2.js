function getTotalPrice(groceries){
    let total = 0;

    for (const item of groceries){
        console.log(item);

        const itemPrice = item.quantity*item.price;

        total += itemPrice;
    }
}

console.log(getTotalPrice([
    {
        product: 'Milk', quantity: 1, price: 1.50
    },
    {
        product: "Cereal",  quantity: 1, price: 2.50
    }
]));