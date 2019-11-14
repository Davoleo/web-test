/********************
 *  Coded By Davoleo
 ********************/

var App = Vue.component("App", {
    template: `
        <div class="container">
            <Products />            
        </div>
    `,
    data() {
        return {};
    }
});

var Products = Vue.component("Products", {
    template: `
        <div>
            <h2>Product List</h2>
            
            <div>
                <ProductBox :key="product.id" v-for="product in products" v-bind:item="product" />            
            </div>        
        </div>
    `,

    data() {
        return {
            products: [
            {
                id: 1,
                name: "Product 1",
                description: "Short Product Description",
                price: 15,
                availability: 100
            },
            {
                id: 2,
                name: "Product 2",
                description: "Short Product Description",
                price: 12,
                availability: 98
            },
            {
                id: 3,
                name: "Product 3",
                description: "Short Product Description",
                price: 5,
                availability: 56
            },
            {
                id: 4,
                name: "Product 4",
                description: "Short Product Description",
                price: 24,
                availability: 32
            },
            {
                id: 5,
                name: "Product 5",
                description: "Short Product Description",
                price: 32,
                availability: 15
            },
            {
                id: 6,
                name: "Product 6",
                description: "Short Product Description",
                price: 8,
                availability: 57
            }
        ]
        };
    }
});

var ProductBox = Vue.component("ProductBox", {
   template: `
        <div class="card" style="width: 240px; float: left; margin: 16px">
            <img class="card-img-top" v-bind:src="'https://picsum.photos/240/240?image=' + item.id">
            <div class="card-body">
                <h4 class="card-title">{{ item.name }}</h4>
                <p class="card-text">{{ item.description }}</p>
                <p class="card-text text-right"><strong>Price: € {{item.price}}</strong></p>
                <button class="btn btn-secondary">Details</button>
            </div>
        </div>
   `,
    props: ['item']
});


new Vue({
    el: "#vueContainer",
});