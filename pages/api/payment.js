// pages/api/payment.js
import Paystack from "paystack";
const paystack = Paystack(process.env.PAYSTACK_KEY);
export default async function handler(req, res) {
    if (req.method === "POST") {
      try {
        const { name, email, amount, cart, address } = req.body;
        const reference = Date.now().toString();
  
        const transaction = await paystack.transaction.initialize({
          email,
          amount: amount * 100, // Paystack works with kobo
          reference,
          currency: "NGN",
          callback_url: `http://localhost:3000/success?reference=${reference}`,
          metadata: {
            custom_fields: [
              {
                display_name: "Full Name",
                variable_name: "full_name",
                value: name,
              },
              {
                display_name: "Address",
                variable_name: "address",
                value: address,
              },
              {
                display_name: "Cart",
                variable_name: "cart_items",
                value: JSON.stringify(cart), // Send cart items here
              },
            ],
          },
        });
  
        res.status(200).json({
          success: true,
          url: transaction.data.authorization_url,
        });
      } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: "Payment init failed" });
      }
    } else {
      res.status(405).json({ success: false, message: "Method not allowed" });
    }
  }
  