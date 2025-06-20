const ItemCard = ({ item, openModal }) => {
  return (
    <div
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
      onClick={() => openModal(item)}
    >
      <div className="relative overflow-hidden">
        <img
          src={item.coverImage}
          alt={item.name}
          className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
          {item.type}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{item.name}</h3>
        <p className="text-gray-600 text-sm line-clamp-2">{item.description}</p>
      </div>
    </div>
  );
};

export default ItemCard;