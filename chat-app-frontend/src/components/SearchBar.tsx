import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

interface SearchBarProps {
  placeholder: string;
  users: string[];
  chatrooms: string[];
  messages: string[];
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder, users, chatrooms, messages }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<string[]>([]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setQuery(value);

    const searchResults = [
      ...users.filter(user => user.toLowerCase().includes(value.toLowerCase())),
      ...chatrooms.filter(room => room.toLowerCase().includes(value.toLowerCase())),
      ...messages.filter(message => message.toLowerCase().includes(value.toLowerCase())),
    ];
    setResults(searchResults);
  };

  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
        <FaSearch className="text-gray-300 w-5 h-5" />
      </div>
      <input
        className="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:bg-white focus:text-gray-900"
        placeholder={placeholder}
        type="search"
        value={query}
        onChange={handleSearch}
      />
      {query && (
        <div className="absolute mt-1 w-full bg-white shadow-lg z-10 rounded-md">
          {results.length > 0 ? (
            <ul className="py-2">
              {results.map((result, index) => (
                <li key={index} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  {result}
                </li>
              ))}
            </ul>
          ) : (
            <p className="px-4 py-2 text-gray-500">No results found</p>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;  // <-- Ensure this is exported
