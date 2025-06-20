import { Camera, Upload } from 'lucide-react';

const ItemForm = ({ 
  formData, 
  itemTypes, 
  handleInputChange, 
  handleFileUpload, 
  handleSubmit 
}) => {
  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Item Name *
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
          placeholder="Enter item name"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Item Type *
        </label>
        <select
          name="type"
          value={formData.type}
          onChange={handleInputChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
        >
          <option value="">Select item type</option>
          {itemTypes.map(type => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Item Description *
        </label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          required
          rows="4"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none"
          placeholder="Enter item description"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Cover Image
        </label>
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-purple-500 transition-colors duration-300">
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleFileUpload(e, 'cover')}
            className="hidden"
            id="coverImage"
          />
          <label htmlFor="coverImage" className="cursor-pointer">
            <Camera className="w-12 h-12 mx-auto text-gray-400 mb-4" />
            <p className="text-gray-600">Click to upload cover image</p>
          </label>
          {formData.coverImage && (
            <img src={formData.coverImage} alt="Cover preview" className="mt-4 max-w-xs mx-auto rounded-lg" />
          )}
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Additional Images
        </label>
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-purple-500 transition-colors duration-300">
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={(e) => handleFileUpload(e, 'additional')}
            className="hidden"
            id="additionalImages"
          />
          <label htmlFor="additionalImages" className="cursor-pointer">
            <Upload className="w-12 h-12 mx-auto text-gray-400 mb-4" />
            <p className="text-gray-600">Click to upload additional images</p>
          </label>
          {formData.additionalImages.length > 0 && (
            <div className="mt-4 grid grid-cols-3 gap-2">
              {formData.additionalImages.map((img, index) => (
                <img key={index} src={img} alt={`Preview ${index}`} className="w-full h-20 object-cover rounded" />
              ))}
            </div>
          )}
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white py-4 rounded-lg font-semibold text-lg hover:from-purple-600 hover:to-cyan-600 transform hover:scale-105 transition-all duration-300 shadow-lg"
      >
        Add Item
      </button>
    </form>
  );
};

export default ItemForm;