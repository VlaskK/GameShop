const calcTotalPrice = items => items.reduce((acc, game) => acc += game.price, 0)

const URLS = (title) => {
    return `/app/${title}`
}

export default calcTotalPrice;