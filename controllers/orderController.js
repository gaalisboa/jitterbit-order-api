const Order = require("../models/Order")

exports.createOrder = async (req, res) => {

    try {

        const data = req.body

        const mappedOrder = {
            orderId: data.numeroPedido,
            value: data.valorTotal,
            creationDate: new Date(data.dataCriacao),
            items: data.items.map(item => ({
                productId: Number(item.idItem),
                quantity: item.quantidadeItem,
                price: item.valorItem
            }))
        }

        const order = new Order(mappedOrder)

        await order.save()

        res.status(201).json(order)

    } catch (error) {

        res.status(500).json({ error: error.message })

    }
}

exports.getOrder = async (req, res) => {

    try {

        const order = await Order.findOne({
            orderId: req.params.orderId
        })

        if (!order) {
            return res.status(404).json({ message: "Pedido não encontrado" })
        }

        res.json(order)

    } catch (error) {

        res.status(500).json({ error: error.message })

    }
}

exports.listOrders = async (req, res) => {

    const orders = await Order.find()

    res.json(orders)

}

exports.updateOrder = async (req, res) => {

    const order = await Order.findOneAndUpdate(
        { orderId: req.params.orderId },
        req.body,
        { new: true }
    )

    res.json(order)

}

exports.deleteOrder = async (req, res) => {

    await Order.findOneAndDelete({
        orderId: req.params.orderId
    })

    res.json({ message: "Pedido deletado" })

}