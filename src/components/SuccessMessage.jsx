const SuccessMessage = ({ showSuccess }) => {
  if (!showSuccess) return null;

  return (
    <div className="bg-gradient-to-r from-green-400 to-green-600 text-white px-6 py-4 rounded-lg mb-6 shadow-lg animate-pulse">
      <p className="text-center font-semibold">✅ Item successfully added!</p>
    </div>
  );
};

export default SuccessMessage;