export function generateReference() {
    return Math.random().toString(36).substring(2).toUpperCase()
}

export const checkoutResolver = {
    Query: {
        submitOrder: async function(_, data, { models, token }) {
            try {
                const customer = await models.Customer.findOne({ where: { token }, include: [models.CartItem] })

                if (!customer) {
                    return false
                }

                const address = await models.Address.findOne({ where: { id: data.address_id, customer_id: customer.id } })

                if (!address) {
                    return null
                }

                const order = await models.Order.create({
                    reference: generateReference(),
                    totalDelivery: 0,
                    totalTax: customer.totalTax,
                    subtotal: customer.subtotal,
                    total: customer.total,
                    customer_id: customer.id,
                    address_id: address.id
                })

                customer.CartItems.forEach(async (cartItem) => {
                    await models.OrderItem.create({
                        totalTax: cartItem.totalTax,
                        subtotal: cartItem.subtotal,
                        total: cartItem.total,
                        product_id: cartItem.product_id,
                        order_id: order.id
                    })
                })

                return order.reference
            } catch (error) {
                console.error(error)

                return null
            }
        }
    }
}

export default checkoutResolver
