import ItemForm from '../components/ItemForm';

const AddItemPage = ({ 
  formData, 
  itemTypes, 
  handleInputChange, 
  handleFileUpload, 
  handleSubmit 
}) => {
  return (
    <div className="bg-white/95 backdrop-blur-lg rounded-2xl p-8 shadow-2xl">
      <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent">
        Add New Item
      </h2>
      <ItemForm 
        formData={formData}
        itemTypes={itemTypes}
        handleInputChange={handleInputChange}
        handleFileUpload={handleFileUpload}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default AddItemPage;