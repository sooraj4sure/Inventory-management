import { X, ChevronLeft, ChevronRight, Mail } from "lucide-react";

const ItemModal = ({
  selectedItem,
  showModal,
  closeModal,
  currentImageIndex,
  setCurrentImageIndex,
  handleEnquire,
}) => {
  if (!showModal || !selectedItem) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-gray-800">
              {selectedItem.name}
            </h3>
            <button
              onClick={closeModal}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Image Carousel */}
            <div className="space-y-4">
              <div className="relative">
                <img
                  src={selectedItem.additionalImages[currentImageIndex]}
                  alt={`${selectedItem.name} ${currentImageIndex + 1}`}
                  className="w-full h-80 object-cover rounded-lg"
                />
                {selectedItem.additionalImages.length > 1 && (
                  <>
                    <button
                      onClick={() =>
                        setCurrentImageIndex((prev) =>
                          prev === 0
                            ? selectedItem.additionalImages.length - 1
                            : prev - 1
                        )
                      }
                      className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors duration-200"
                    >
                      <ChevronLeft className="w-5 h-5 bg-transparent" />
                    </button>
                    <button
                      onClick={() =>
                        setCurrentImageIndex(
                          (prev) =>
                            (prev + 1) % selectedItem.additionalImages.length
                        )
                      }
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors duration-200"
                    >
                      <ChevronRight className="w-5 h-5 h-5 bg-transparent" />
                    </button>
                  </>
                )}
              </div>

              {/* Thumbnail Navigation */}
              {selectedItem.additionalImages.length > 1 && (
                <div className="flex gap-2 overflow-x-auto">
                  {selectedItem.additionalImages.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2  transition-all duration-200 ${
                        currentImageIndex === index
                          ? "border-purple-500"
                          : "border-gray-200"
                      }`}
                    >
                      <img
                        src={image}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Item Details */}
            <div className="space-y-4">
              <div>
                <span className="inline-block bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-3 py-1 rounded-full text-sm font-semibold mb-4">
                  {selectedItem.type}
                </span>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  Description
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {selectedItem.description}
                </p>
              </div>

              {/* <button */}
              <a
                href="mailto:enquiries@example.com?subject=Product%20Enquiry&body=Hello,%20I%20would%20like%20to%20know%20more%20about..."
                className="w-full bg-gradient-to-r from-green-500 to-emerald-500 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-600 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5 h-5 bg-transparent" />
                Enquire
              </a>
              {/* </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
