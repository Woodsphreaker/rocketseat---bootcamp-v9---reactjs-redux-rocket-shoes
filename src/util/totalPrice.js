export default (data = []) => {
  return data.reduce((acc, { price = 0, amount = 0 }) => {
    acc += price * amount
    return acc
  }, 0)
}
