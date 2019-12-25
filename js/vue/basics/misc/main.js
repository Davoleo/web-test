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
            
            <div>
                <h4>{{getFullName()}}</h4>
                <h4>{{fullName}}</h4>
                <input type="text" v-model:value="fullName" />
            </div>
            
            <button @click="count++">INCREMENT COUNT</button>
        </div>
    `,

    // The first time vue calls the function, then  it caches the results
    computed: {
        fullName: {
            get: function () {
                if (this.surname !== '')
                    return this.name + ' ' + this.surname;
                else
                    return this.name;
            },

            set: function (val) {
                var text = val.split(' ');
                this.name = text[0];
                if (text.length > 1) {
                    if (text.length < 3)
                        this.surname = text[1];
                    else
                        this.surname = text.slice(1, text.length).join(' ');
                } else
                    this.surname = '';
            }
        }
    },

    //Always Called
    methods: {
        getFullName: function () {
            return this.surname + " " + this.name;
        }
    },

    //Calls a function every time the value of a variable is changed
    watch: {
        count: (val) => { console.log(val); }
    },

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
        ],
            name: "Mario",
            surname: "Rossi",
            count: 0
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