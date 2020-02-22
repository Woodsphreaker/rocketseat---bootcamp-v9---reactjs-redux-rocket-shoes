export default (data = []) => {
  return data.reduce((acc, product) => {
    return [...acc, { subTotal: product.price * product.amount, ...product }]
  }, [])
}
