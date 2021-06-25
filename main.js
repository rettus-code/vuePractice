const app = Vue.createApp({
    data() {
        return {
        cart: 0,
        product: 'Socks',
        image: './assets/images/socks_green.jpg',
        url: 'https://www.vuemastery.com/',
        inventory: 8,
        onSale: true,
        details: ["80% cotton", "20% polyester", "Gender-neutral"],
        variants: [
            { id: 2234, color: 'green', image: './assets/images/socks_green.jpg' },
            { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg' }
        ],
        sizes: ["small", "medium", "large"]
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        takeFromCart() {
            this.cart -= 1
        },
        updateImage(variantImage){
            this.image = variantImage
        }
    }
})