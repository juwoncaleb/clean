import { useState, useEffect } from "react";
import client from "@/lib/contentful";
import Image from "next/image";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import Header from "../component/header";
import Footer from "../component/footer";
import { useCartStore } from "@/store/cartStore"; // ✅ Zustand store
import CartDrawer from "../component/CartDrawer"; // ✅ Cart drawer component

// Fetch paths
export async function getStaticPaths() {
  const res = await client.getEntries({
    content_type: "icecream",
  });

  const paths = res.items.map((item) => ({
    params: { slug: item.fields.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

// Fetch props
export async function getStaticProps({ params }) {
  const { slug } = params;
  const res = await client.getEntries({
    content_type: "icecream",
    "fields.slug": slug,
  });

  const icecream = res.items[0];

  return {
    props: {
      icecream,
    },
    revalidate: 60,
  };
}

// Main Component
export default function IcecreamDetail({ icecream }) {
  const { name, price, image, description, slug } = icecream.fields;
  const imageUrl =
    image && image[0]?.fields?.file?.url
      ? "https:" + image[0].fields.file.url
      : "/placeholder.png";

  const [quantity, setQuantity] = useState(1);
  const { addToCart, cart } = useCartStore();

  const [isDrawerOpen, setDrawerOpen] = useState(false); // 👈 Drawer state

  const increaseQuantity = () => setQuantity((prev) => Math.min(prev + 1, 99));
  const decreaseQuantity = () => setQuantity((prev) => Math.max(prev - 1, 1));

  const handleAddToCart = () => {
    addToCart({ name, price, quantity, slug, image: imageUrl });
    setDrawerOpen(true); // 👈 Open cart drawer
  };

  useEffect(() => {
    console.log("Cart updated:", cart);
  }, [cart]);

  return (
    <div>
      <Header />

      {/* Optional Overlay */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black opacity-40 z-40"
          onClick={() => setDrawerOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="min-h-screen flex items-center justify-center bg-gray-100 py-10">
        <div className="max-w-3xl w-full p-8 bg-white shadow-lg rounded-lg flex flex-col items-center">
          {/* Image */}
          {imageUrl && (
            <div className="flex justify-center mb-4">
              <Image
                src={imageUrl}
                alt={name}
                width={300}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>
          )}

          {/* Name */}
          <h1 className="text-3xl font-bold mb-4 text-center">{name}</h1>

          {/* Price */}
          <p className="font-bold text-xl mb-4">${(price * quantity).toFixed(2)}</p>

          {/* Quantity Control */}
          <div className="flex items-center justify-center space-x-4 mb-4">
            <button
              className="bg-gray-200 p-2 rounded-full"
              onClick={decreaseQuantity}
            >
              <AiOutlineMinus size={20} />
            </button>
            <span className="text-xl font-semibold">{quantity}</span>
            <button
              className="bg-gray-200 p-2 rounded-full"
              onClick={increaseQuantity}
            >
              <AiOutlinePlus size={20} />
            </button>
          </div>

          {/* Add to Cart */}
          <button
            className="bg-black text-white py-3 px-8 rounded-lg w-full mt-4"
            onClick={handleAddToCart}
          >
            Add {quantity} to Cart
          </button>

          {/* Description */}
          <p className="text-gray-700 mb-4 mt-6 text-center">{description}</p>
        </div>
      </div>

      {/* Cart Drawer */}
      <CartDrawer isOpen={isDrawerOpen} onClose={() => setDrawerOpen(false)} />

      <Footer />
    </div>
  );
}
