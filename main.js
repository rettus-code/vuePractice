const app = Vue.createApp({
    data() {
        return {
        product: 'Socks',
        image: './assets/vmSocks-green-onWhite.jpg',
        inventory: 8,
        onSale: true,
        details: ["80% cotton", "20% polyester", "Gender-neutral"]
        }
    }
})