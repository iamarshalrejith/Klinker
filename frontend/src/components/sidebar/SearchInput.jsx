import { FiSearch } from 'react-icons/fi';

const SearchInput = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle search logic
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <input type="text" placeholder="Search..." className="input input-bordered rounded-full" />
      <button type="submit" className="btn btn-circle bg-gray-500 text-white" aria-label="Search">
        <FiSearch />
      </button>
    </form>
  );
};

export default SearchInput;