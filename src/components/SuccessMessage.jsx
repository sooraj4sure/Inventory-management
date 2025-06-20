const SuccessMessage = ({ showSuccess }) => {
  if (!showSuccess) return null;

  return (
    <div className=" flex items-center justify-center bg-gradient-to-r from-green-400 to-green-600 text-white px-6 py-4 rounded-lg mb-6 shadow-lg animate-pulse">
      <p className="text-center h-8 text-black font-semibold bg-transparent" >✅ Item successfully added!</p>
    </div>
  );
};

export default SuccessMessage;