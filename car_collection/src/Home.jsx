function Home() {
  const Products = [
    {
      id: 1,
      brand: "Toyota",
      model: "Corolla",
      year: 2024,
      price: 20000,
      specs: {
        engine: "1.8L I4",
        transmission: "Automatic",
        fuelType: "Gasoline",
        mileage: 35,
      },
      features: ["Bluetooth", "Backup Camera", "Cruise Control"],
      availability: true,
    },
    {
      id: 2,
      brand: "Honda",
      model: "Civic",
      year: 2023,
      price: 22000,
      specs: {
        engine: "2.0L I4",
        transmission: "Manual",
        fuelType: "Gasoline",
        mileage: 32,
      },
      features: ["Heated Seats", "Sunroof", "Lane Assist"],
      availability: true,
    },
    {
      id: 3,
      brand: "Ford",
      model: "Mustang",
      year: 2024,
      price: 55000,
      specs: {
        engine: "5.0L V8",
        transmission: "Automatic",
        fuelType: "Gasoline",
        mileage: 20,
      },
      features: ["Apple CarPlay", "Performance Package", "Keyless Entry"],
      availability: false,
    },
  ];
  const cart=[];


  const addToCart=(index)=>{
    console.log(Products[index]);
    cart.push({...Products[index],quantity:1});

    console.log(cart);
    localStorage.setItem("cart",JSON.stringify(cart));
  }


  return (
    <div>
      {Products.map((products,index)=>(
         <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md  flex flex-row overflow-hidden">
         {/* Image Section */}
         <img
           src="https://via.placeholder.com/400" // Replace with actual image URL
           alt="Maruti Suzuki Dzire"
           className="w-full h-48 object-cover"
         />
 
         {/* Card Content */}
         <div className="p-4  flex-none w-50">
           {/* Title */}
           <h2 className="text-lg font-semibold text-gray-800 mb-2">
             {products.brand}
           </h2>
           {/* Price Section */}
           <p className="text-gray-800 font-bold text-xl">
             {products.price}
             <span className="text-gray-500 text-sm font-normal">onwards</span>
           </p>
           {/* Offers */}
           <div className="flex items-center mt-2 text-green-600 font-medium cursor-pointer">
             <span>OFFERS</span>
             <svg
               className="w-5 h-5 ml-1"
               fill="none"
               stroke="currentColor"
               viewBox="0 0 24 24"
               xmlns="http://www.w3.org/2000/svg">
               <path
                 strokeLinecap="round"
                 strokeLinejoin="round"
                 strokeWidth={2}
                 d="M9 5l7 7-7 7"
               />
             </svg>
           </div>
           {/* Ex-Showroom Price */}
           <p className="text-sm text-gray-500 mt-2">Avg. Ex-Showroom price</p>
           {/* Link */}
           <a
             href="#"
             className="text-blue-600 font-medium hover:underline mt-2 inline-block">
             Show price in my city
           </a>
           <div className="w-1/ ">
             <p className="mb-3 text-lg font-bold bg-black-400">
               {products.price}
             </p>
             <button className="bg-blue-500 text-white px-3 py-2 rounded" onClick={() =>addToCart(index)}>
               add to cart
             </button>
           </div>
         </div>
       </div>
      ))}
    </div>
    )}
export default Home;
