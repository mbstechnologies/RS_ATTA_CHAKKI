import React from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, CalendarCheck } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { createWhatsAppOrderLink } from '../../utils/whatsapp';
import { useNavigate } from 'react-router-dom';

export function CartDrawer() {
  const { cartItems, isCartOpen, closeCart, updateQuantity, removeFromCart, totalCartPrice, clearCart } = useCart();
  const navigate = useNavigate();

  if (!isCartOpen) return null;

  const handleWhatsAppCheckout = () => {
    const link = createWhatsAppOrderLink({ cartItems });
    window.open(link, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 animate-fade-in">
      <div
        onClick={closeCart}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      />

      <div className="absolute top-0 right-0 bottom-0 w-full max-w-md bg-[#FEFCE8] p-6 shadow-2xl flex flex-col justify-between border-l border-[#D59B2D]/30">
        <div>
          <div className="flex items-center justify-between pb-4 border-b border-[#F5E6B9] mb-4">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-6 h-6 text-[#4A2C11]" />
              <h3 className="text-xl font-bold text-[#4A2C11]">
                Your Shopping Cart
              </h3>
            </div>
            <button
              onClick={closeCart}
              className="p-2 rounded-full bg-white text-[#3D230D] border border-[#F5E6B9] hover:bg-[#FFFBEB]"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {cartItems.length === 0 ? (
            <div className="py-16 text-center space-y-4">
              <div className="text-6xl">🌾</div>
              <h4 className="text-lg font-bold text-[#4A2C11]">
                Your cart is currently empty!
              </h4>
              <p className="text-xs text-[#7A4E27] max-w-xs mx-auto">
                Select your favorite stone ground flour and enjoy fresh, delicious rotis at home.
              </p>
              <button
                onClick={() => {
                  closeCart();
                  navigate('/products');
                }}
                className="px-6 py-2.5 rounded-full bg-[#4A2C11] text-white text-xs font-bold shadow hover:bg-[#3D230D]"
              >
                Browse Products
              </button>
            </div>
          ) : (
            <div className="space-y-3 max-h-[55vh] overflow-y-auto pr-1">
              {cartItems.map((item) => (
                <div
                  key={item.cartItemId}
                  className="p-4 rounded-2xl bg-white border border-[#F5E6B9] shadow-sm flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#FFFBEB] border border-[#D59B2D]/30 flex items-center justify-center text-xl">
                      🌾
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-[#4A2C11]">
                        {item.name}
                      </h4>
                      <div className="text-xs text-[#7A4E27] font-medium">
                        Pack: {item.size} | ₹{item.price}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="flex items-center rounded-xl bg-[#FFFBEB] border border-[#D59B2D]/20 p-1">
                      <button
                        onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
                        className="p-1 hover:bg-white rounded-lg text-[#3D230D]"
                        aria-label="Decrease"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="w-6 text-center text-xs font-bold text-[#4A2C11]">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                        className="p-1 hover:bg-white rounded-lg text-[#3D230D]"
                        aria-label="Increase"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.cartItemId)}
                      className="p-1.5 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                      aria-label="Remove"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="pt-4 border-t border-[#F5E6B9] space-y-4">
            <div className="space-y-1.5 text-xs text-[#3D230D]">
              <div className="flex justify-between">
                <span>Total Items:</span>
                <span className="font-bold">{cartItems.reduce((a, b) => a + b.quantity, 0)} packs</span>
              </div>
              <div className="flex justify-between">
                <span>Fulfillment:</span>
                <span className="text-[#2E7D46] font-bold">Self Store Pickup</span>
              </div>
              <div className="flex justify-between text-base font-extrabold text-[#4A2C11] pt-2 border-t border-dashed border-[#F5E6B9]">
                <span>Estimated Total:</span>
                <span className="text-xl">₹{totalCartPrice}</span>
              </div>
            </div>

            <button
              onClick={handleWhatsAppCheckout}
              className="w-full py-3.5 px-4 rounded-xl bg-[#2E7D46] hover:bg-[#236337] text-white font-bold text-sm shadow-lg flex items-center justify-center gap-2 transition-all active:scale-95"
            >
              <CalendarCheck className="w-4 h-4 text-[#D59B2D]" />
              Pre-Book for Store Pickup (WhatsApp)
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={clearCart}
              className="w-full py-1.5 text-center text-xs text-[#7A4E27] hover:underline font-semibold"
            >
              Clear Cart
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
