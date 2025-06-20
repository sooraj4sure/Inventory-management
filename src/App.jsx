import { useState } from 'react';
import Header from './components/Header';
import ViewItemsPage from './pages/ViewItemsPage';
import AddItemPage from './pages/AddItemPage';
import ItemModal from './components/ItemModel';
import SuccessMessage from './components/SuccessMessage'

const App = () => {
  const [currentPage, setCurrentPage] = useState('view');
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Classic Blue Shirt",
      type: "Shirt",
      description: "A comfortable cotton shirt perfect for casual wear. Features a modern fit and breathable fabric.",
      coverImage: "https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=400&h=400&fit=crop",
      additionalImages: [
        "https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=400&fit=crop"
      ]
    },
    

    {
      id: 2,
      name: "Running Sneakers",
      type: "Shoes",
      description: "High-performance running shoes with advanced cushioning technology. Perfect for daily runs and athletic activities.",
      coverImage: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
      additionalImages: [
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop"
      ]
    },
    {
      id: 3,
      name: "Denim Jeans",
      type: "Pants",
      description: "Premium quality denim jeans with a comfortable fit. Classic design that never goes out of style.",
      coverImage: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&h=400&fit=crop",
      additionalImages: [
        "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1582552938357-32b906df40cb?w=400&h=400&fit=crop"
      ]
    }
  ]);

  const [selectedItem, setSelectedItem] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    description: '',
    coverImage: '',
    additionalImages: []
  });

  const itemTypes = ['Shirt', 'Pants', 'Shoes', 'Sports Gear', 'Accessories', 'Jackets', 'Dress', 'Other'];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileUpload = (e, type) => {
    const files = Array.from(e.target.files);
    files.forEach(file => {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (type === 'cover') {
          setFormData(prev => ({
            ...prev,
            coverImage: event.target.result
          }));
        } else {
          setFormData(prev => ({
            ...prev,
            additionalImages: [...prev.additionalImages, event.target.result]
          }));
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newItem = {
      id: Date.now(),
      name: formData.name,
      type: formData.type,
      description: formData.description,
      coverImage: formData.coverImage || 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=400&fit=crop',
      additionalImages: formData.additionalImages.length > 0 ? 
        [formData.coverImage, ...formData.additionalImages] : 
        [formData.coverImage || 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=400&fit=crop']
    };

    // Mock API call
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newItem),
      });
      
      if (response.ok) {
        setItems(prev => [...prev, newItem]);
        setFormData({
          name: '',
          type: '',
          description: '',
          coverImage: '',
          additionalImages: []
        });
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 3000);
        setCurrentPage('view');
      }
    } catch (error) {
      // Fallback - add item anyway
      setItems(prev => [...prev, newItem]);
      setFormData({
        name: '',
        type: '',
        description: '',
        coverImage: '',
        additionalImages: []
      });
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
      setCurrentPage('view');
    }
  };

  const openModal = (item) => {
    setSelectedItem(item);
    setCurrentImageIndex(0);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedItem(null);
    setCurrentImageIndex(0);
  };

  const handleEnquire = async () => {
    // Mock email API call
    try {
      const emailData = {
        to: 'admin@inventory.com',
        subject: `Enquiry for ${selectedItem.name}`,
        body: `Customer is interested in ${selectedItem.name} (${selectedItem.type}). Please contact them for more details.`
      };
      
      await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData),
      });
      
      alert('Enquiry sent successfully! We will contact you soon.');
    } catch (error) {
      alert('Enquiry sent successfully! We will contact you soon.');
    }
  };

  return (
    <div className="min-h-screen ">
      <div className="container mx-auto px-4 py-8">
        <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
        
        <SuccessMessage showSuccess={showSuccess} />
        
        {currentPage === 'view' && (
          <ViewItemsPage items={items} openModal={openModal} />
        )}

        {currentPage === 'add' && (
          <AddItemPage 
            formData={formData}
            itemTypes={itemTypes}
            handleInputChange={handleInputChange}
            handleFileUpload={handleFileUpload}
            handleSubmit={handleSubmit}
          />
        )}

        <ItemModal
          selectedItem={selectedItem}
          showModal={showModal}
          closeModal={closeModal}
          currentImageIndex={currentImageIndex}
          setCurrentImageIndex={setCurrentImageIndex}
          handleEnquire={handleEnquire}
        />
      </div>
    </div>
  );
};

export default App;