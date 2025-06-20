import { Eye, Plus } from 'lucide-react';

const Header = ({ currentPage, setCurrentPage }) => {
  return (
    <div className="bg-white/95 backdrop-blur-lg rounded-2xl p-6 mb-8 shadow-2xl">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent">
          Inventory Management System
        </h1>
        <div className="flex gap-4">
          <button
            onClick={() => setCurrentPage('view')}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              currentPage === 'view'
                ? 'bg-gradient-to-r from-purple-500 to-cyan-500 text-white shadow-lg scale-105'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            <Eye className="w-5 h-5 inline mr-2" />
            View Items
          </button>
          <button
            onClick={() => setCurrentPage('add')}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              currentPage === 'add'
                ? 'bg-gradient-to-r from-purple-500 to-cyan-500 text-white shadow-lg scale-105'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            <Plus className="w-5 h-5 inline mr-2" />
            Add Items
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;