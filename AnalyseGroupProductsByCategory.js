/* ---------------------------------- TASK ---------------------------------- */
// Implement the groupProductsByCategory() function, which takes an array of
// products as input and returns an array of products grouped by category,
// as given in EXPECTED OUTPUT section bellow

/* -------------------------- EXPECTED OUTPUT ------------------------- */
// EXPECTED OUTPUT:
// {
// 	music: [
// 		{ code: 1, name: 'product1', category: 'music', price: 1 },
// 		{ code: 4, name: 'product4', category: 'music', price: 4 }
// 	],
// 	books: [
// 		{ code: 2, name: 'product2', category: 'books', price: 2 },
// 		{ code: 3, name: 'product3', category: 'books', price: 3 }
// 	]
// }

const products = [
	{
		code:1,
		name:"product1",
		category: "music",
		price:1
	},
	{
		code:2,
		name:"product2",
		category: "books",
		price:2
	},
	{
		code:3,
		name:"product3",
		category: "books",
		price:3
	},
	{
		code:4,
		name:"product4",
		category: "music",
		price:4
	}
]


/* -------------------------- Solution with forLoop ------------------------- */
function groupProductsByCategory_ForLoop(products) {
	let groupedProducts = {};

	for (let i = 0; i < products.length; i++) {
		const product = products[i];
		const category = product.category;

		if( !groupedProducts[category] ){
			groupedProducts[category] = []
		}

		groupedProducts[category].push(product);
	}

	return groupedProducts;
}

/* -------------------------- Solution with Reduce -------------------------- */
function groupProductsByCategory_Reduce(products) {
	return products.reduce((acc, product) => {
		const category = product.category;

		if( !acc[category] ){
			acc[category] = []
		}
		acc[product.category].push(product);
		return acc;
	}, {});
}


// TEST:
console.log( groupProductsByCategory_ForLoop(products) );
console.log( groupProductsByCategory_Reduce(products) );

//WITH REDUCE METHOD
// products.reduce((acc, product) => {

// first cycle:
// acc = {};
// product = {
//     code:1,
//     name:"product1",
//     category: "music",
//     price:1
// }
//     const category = product.category; // "music"
//     if( !acc[category] ){ // !{}.["music"] = !{}.music = !undefined = !false = true 
//         acc[category] = [] // {}.music = []
//     }
//     acc[product.category].push(product); // [].push(product) 
//     return acc; // {music: [{code:1,name:"product1",category: "music",price:1}]}
// }, {}); 

// second cycle:
// acc = {music: [{code:1,name:"product1",category: "music",price:1}]};
// product = {code:2,name:"product2",category: "books",price:2};
//
//     const category = product.category; // "books"
//     if( !acc[category] ){ // !{music: [{code:1,name:"product1",category: "music",price:1}]}.books = !false=true 
//         acc[category] = [] // acc.books = []
//     }
//     acc[product.category].push(product); // [].push(product) 
//     return acc; // {music: [{code:1,name:"product1",category: "music",price:1}],books: [{code:2,name:"product2",category: "books",price:2}]}
// }, {}); 

// third cycle:
// acc = {music: [{code:1,name:"product1",category: "music",price:1}],books: [{code:2,name:"product2",category: "books",price:2}]}
// product = {code:3,name:"product3",category: "books",price:3};
//
//     const category = product.category; // "books"
//     if( !acc[category] ){ // !{music: [{code:1,name:"product1",category: "music",price:1}],books: [{code:2,name:"product2",category: "books",price:2}]}.books = !true=false 
//         acc[category] = [] // doesnt go here
//     }
//     acc[product.category].push(product); // [{code:2,name:"product2",category: "books",price:2}].push(product) 
//     return acc; // {music: [{code:1,name:"product1",category: "music",price:1}],books: [
// {code:2,name:"product2",category: "books",price:2},
// {code:3,name:"product3",category: "books",price:3}]}
// }, {}); 

// forth cycle:
// acc = {music: [{code:1,name:"product1",category: "music",price:1}],books: [
// {code:2,name:"product2",category: "books",price:2},
// {code:3,name:"product3",category: "books",price:3}]}
// }
// product = {code:4,name:"product4",category: "music",price:4};
//
//     const category = product.category; // "music"
//     if( !acc[category] ){ // !{music: [{code:1,name:"product1",category: "music",price:1}],books: [
// {code:2,name:"product2",category: "books",price:2},
// {code:3,name:"product3",category: "books",price:3}]}
// }.music = !true=false 
//         acc[category] = [] // doesnt go here
//     }
//     acc[product.category].push(product); // [{code:1,name:"product1",category: "music",price:1}].push(product) 
//     return acc; // {
// books: 
// [{code:2,name:"product2",category: "books",price:2},{code:3,name:"product3",category: "books",price:3}]
// music: 
// [{code:4,name:"product4",category: "music",price:4},{code:4,name:"product4",category: "music",price:4}]
// }
// }, {});

// .reduce returns the calculated value(in this case acc) in each loop it runs. 


//WITH FOR LOOP
// for (let i = 0; i < products.length; i++) {
//     const product = products[0];
//     const category = product.category; // "music"
//
//     if( !groupedProducts[category] ){ // !{}.music = !false=true
//         groupedProducts[category] = [] // {music: []}
//     }
//     [].push(products[0])
//   }

// for (let i = 0; i < products.length; i++) {
//     const product = products[1];
//     const category = product.category; // "books"
//
//     if( !groupedProducts[category] ){ // !{music: [products[0]]}.books = !false=true
//         groupedProducts[category] = [] // {music: [products[0]], books: []}
//     }
//     [].push(products[1])
//   }

// for (let i = 0; i < products.length; i++) {
//     const product = products[2];
//     const category = product.category; // "books"
//
//     if( !groupedProducts[category] ){ // !{music: [products[0]], books: [products[1]]}.books = !true=false
//         groupedProducts[category] = [] // doesnt go here
//     }
//     [products[1]].push(products[2])
//   }

// for (let i = 0; i < products.length; i++) {
//     const product = products[3];
//     const category = product.category; // "music"
//
//     if( !groupedProducts[category] ){ // !{music: [products[0]], books: [products[1],products[2]]}.music = !true=false
//         groupedProducts[category] = [] // doesnt go here
//     }
//     [products[0]].push(products[3])
//   }

// for doesnt return every time the array and it doesnt automatically define variables with that array as value for every cycle, it just "fills" the array and the function returns it in the end of the last cycle => I think for is more efficient than .reduce in this case.