var app = new Vue({
	el: '#app',
	data: {
		page: 'home',
		username: '',
		connected: 0,
		products: [{
			name:'Nordic Chair TULIPA',
			price: 39,
			src: 'assets/image4.jpg',
			ref: 'Ref. FNG094',
			quantity: 0
		},
		{
			name:'Lamp SUNNY',
			price: 39,
			src: 'assets/image1.png',
			ref: 'Ref. FNG128',
			quantity: 0
		},
		{
			name:'Table ALIZEE',
			price: 39,
			src: 'assets/image3.png',
			ref: 'Ref. FNG074',
			quantity: 0
		},
		{
			name:'Chair ROSA',
			price: 39,
			src: 'assets/image2.png',
			ref: 'Ref. FNG056',
			quantity: 0
		}],
		cart:[],
		totalAmount: 0
	},
	methods: {
		login: function (event) {
			this.connected=1;
		},
		logout: function(event){
			this.connected =0;
			this.username = '';
		},
		addCart: function (products, index) {
			if(this.cart.indexOf(this.products[index]) > -1){
				var index = this.cart.indexOf(this.products[index]);
				this.cart[index].quantity +=1;
			}
			else{
				this.products[index].quantity += 1;
				this.cart.push(this.products[index]);
			}
			this.totalAmount += this.products[index].price;
			console.log(this.totalAmount);
			
		},
		buy: function(event){
			this.totalAmount = 0;
			this.cart = [];
		}
	}
	
})

console.log('importé');