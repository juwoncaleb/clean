import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export default function Price({ services }) {
  return (
    <div className="p-8 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
      {services.map((service, idx) => {
        const { price, spaceName, description } = service.fields;

        return (
          <div
            key={idx}
            className="bg-blue-100 p-6 rounded-lg max-w-xs w-full"
          >
            <h2 className="text-2xl m-0">
              ${price} <span className="text-base">/ visit</span>
            </h2>
            <h3 className="my-2">{spaceName}</h3>
            <div className="text-sm text-gray-600">
              {documentToReactComponents(description)}
            </div>
            <button
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              Get started
            </button>
          </div>
        );
      })}
    </div>
  );
}

export async function getStaticProps() {
  const services = await getEntries('package'); // Replace with actual content type ID

  return {
    props: { services },
    revalidate: 60, // Optional: ISR
  };
}
