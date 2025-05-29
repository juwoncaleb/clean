import { getEntries } from "../lib/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Footer from "./component/footer";
import Headdy from "./component/head";

export default function Home({ services }) {
  return (
    <div>
      <Headdy />
      <div className="p-8 mt-20 grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
        {services.map((service, idx) => {
          const { price, spaceName, description } = service.fields;

          return (
            <div
              key={idx}
              className="bg-white shadow-lg rounded-xl max-w-sm w-full p-8 flex flex-col justify-between hover:shadow-2xl transition-shadow duration-300"
            >
              <div>
                <h2 className="text-5xl font-extrabold text-blue-600">
                  ${price}
                  <span className="text-lg font-normal text-gray-500 ml-2">
                    / visit
                  </span>
                </h2>
                <h3 className="mt-4 text-2xl font-semibold text-gray-900">
                  {spaceName}
                </h3>
                <div className="mt-4 text-gray-600 text-sm leading-relaxed min-h-[100px]">
                  {documentToReactComponents(description)}
                </div>
              </div>

              <button
                onClick={() => {
                  const space = encodeURIComponent(spaceName);
                  const priceVal = encodeURIComponent(price);
                  const bookingUrl = `https://cal.com/omojuwon?space=${space}&price=${priceVal}`;
                  window.location.href = bookingUrl;
                }}
                className="mt-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition"
              >
                Get started
              </button>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const services = await getEntries("package"); // Replace with actual content type ID

  return {
    props: { services },
    revalidate: 60, // Optional ISR
  };
}
