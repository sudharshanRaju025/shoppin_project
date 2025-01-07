function Product(){

    return(
        <div className="max-w-sm bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
      {/* Image Section */}
      <div className="relative">
        <img
          src="https://via.placeholder.com/400" // Replace with actual image URL
          alt="Mahindra Thar"
          className="w-full h-48 object-cover"
        />
      </div>

      {/* Card Content */}
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">
          Mahindra Thar ROXX
        </h2>
        <p className="text-gray-600 text-sm mt-2">
          ₹ 12.99 - 22.49 Lakh<span className="text-xs">*</span>
        </p>

        {/* Button */}
        <button className="w-full mt-4 bg-orange-500 text-white py-2 rounded-md font-medium hover:bg-orange-600 transition duration-300">
          Check December Offers
        </button>
      </div>
    </div>
    )
}
export default Product;