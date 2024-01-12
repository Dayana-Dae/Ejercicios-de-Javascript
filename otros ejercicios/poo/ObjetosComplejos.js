var ordenarPizzas = [
    {
        "Tipo": "Margarita",
        "Tamaño": "Personal",
        "Precio": 5.67,
        "Toppings": [
            "Extra queso",
            "Champiñones",
            "piña"
        ],
        "Para llevar": true
    }, // siempre separar objetos con una "," en un arreglo
    {
        "Tipo": "Cuatro quesos",
        "Tamaño": "Familiar",
        "Precio": 18.34,
        "Toppings": [
            "Extra queso",
            "Pimenton"
        ],
        "Para llevar": false
    }
];

document.write(ordenarPizzas[0]["Toppings"]); // se puede usar tambien .Tamaño