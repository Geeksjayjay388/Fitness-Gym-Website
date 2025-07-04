
  function Cart({ cartItems, cartCount, adjustQuantity }) {
   const totalPrice = cartItems.reduce((acc, item) => {
    const numericPrice = parseFloat(item.price.replace(/[^0-9.]/g, ""));
    return acc + numericPrice * item.quantity;
  }, 0);

  return (
    <section className="mt-16 bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      <p className="text-gray-600 mb-6">Total Items: <span className="font-bold">{cartCount}</span></p>

      {cartItems.length === 0 ? (
        <p className="text-gray-500">No items added yet...</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className="mb-4 border-b pb-4">
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <p className="text-gray-700">Price: USD {item.price}</p>
            <div className="flex items-center gap-4 mt-2">
              <button
                onClick={() => adjustQuantity(item.id, -1)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                −
              </button>
              <span className="text-lg font-medium">{item.quantity}</span>
              <button
                onClick={() => adjustQuantity(item.id, 1)}
                className="bg-green-500 text-white px-3 py-1 rounded"
              >
                +
              </button>
            </div>
            <p className="mt-2 text-green-700 font-bold">
               Subtotal: ${parseFloat(item.price.replace(/[^0-9.]/g, "") * item.quantity).toFixed(2)}
             </p>

          </div>
        ))
      )}

      <p className="text-right mt-6 text-xl font-bold text-blue-600">
        Final Price: USD ${totalPrice.toFixed(2)}
      </p>
      <button className="bg-blue-600 text-white p-3 rounded-lg font-bold text-lg hover:bg-blue-800">
        Checkout
      </button>
    </section>
  );
}

export default Cart;
