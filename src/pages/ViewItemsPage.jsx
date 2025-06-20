import ItemCard from '../components/ItemCard';

const ViewItemsPage = ({ items, openModal }) => {
  return (
    <div className="bg-white/95 backdrop-blur-lg rounded-2xl p-8 shadow-2xl">
      <h2 className="text-3xl font-bold text-center mb-8 ">
        All Items
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item) => (
          <ItemCard key={item.id} item={item} openModal={openModal} />
        ))}
      </div>
    </div>
  );
};

export default ViewItemsPage;