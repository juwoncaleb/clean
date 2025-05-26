import { getEntries } from "../lib/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import FixedHeader from "./component/header";
import Footer from "./component/footer";
import Headdy from "./component/head";

export default function Home({ services }) {
  return (
    <div>
      <Headdy />
      <div className="p-8 mt-20 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
        {services.map((service, idx) => {
          const { price, spaceName, description } = service.fields;

          return (
            <div
              key={idx}
              className="bg-blue-100 p-6 rounded-lg max-w-xs w-full"
            >
              <h2 className="text-4xl  m-0">
                ${price} <span className="text-base">/ visit</span>
              </h2>
              <h3 className="my-2 font-bold text-xl">{spaceName}</h3>
              <div className="text-sm text-gray-600">
                {documentToReactComponents(description)}
              </div>
              <button
                onClick={() => {
                  const name = encodeURIComponent(spaceName);
                  const priceVal = encodeURIComponent(price);
                  const bookingUrl = `https://cal.com/omojuwon?space=${name}&price=${priceVal}`;
                  window.location.href = bookingUrl;
                }}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
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
    revalidate: 60, // Optional: ISR
  };
}
