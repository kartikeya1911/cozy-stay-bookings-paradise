
import { useState, useEffect } from 'react';
import { FilterOptions, RoomType, SortOption } from '@/types/hotel';
import { Slider } from '@/components/ui/slider';

interface RoomFiltersProps {
  onFilterChange: (filters: FilterOptions) => void;
  onSortChange: (sort: SortOption) => void;
  totalRooms: number;
  filteredCount: number;
  minPrice: number;
  maxPrice: number;
}

const RoomFilters = ({ 
  onFilterChange, 
  onSortChange, 
  totalRooms, 
  filteredCount,
  minPrice,
  maxPrice
}: RoomFiltersProps) => {
  const [filters, setFilters] = useState<FilterOptions>({
    type: 'all',
    minPrice: minPrice,
    maxPrice: maxPrice,
    capacity: 1,
    breakfast: false,
    pets: false
  });
  
  const [priceRange, setPriceRange] = useState<number[]>([minPrice, maxPrice]);
  const [sort, setSort] = useState<SortOption>('price-asc');
  
  useEffect(() => {
    // Apply filters
    onFilterChange(filters);
  }, [filters, onFilterChange]);
  
  useEffect(() => {
    // Apply sorting
    onSortChange(sort);
  }, [sort, onSortChange]);
  
  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as RoomType | 'all';
    setFilters({ ...filters, type: value });
  };
  
  const handlePriceChange = (values: number[]) => {
    setPriceRange(values);
    setFilters({
      ...filters,
      minPrice: values[0],
      maxPrice: values[1]
    });
  };
  
  const handleCapacityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = parseInt(e.target.value);
    setFilters({ ...filters, capacity: value });
  };
  
  const handleBreakfastChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({ ...filters, breakfast: e.target.checked });
  };
  
  const handlePetsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({ ...filters, pets: e.target.checked });
  };
  
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSort(e.target.value as SortOption);
  };
  
  const handleReset = () => {
    setFilters({
      type: 'all',
      minPrice: minPrice,
      maxPrice: maxPrice,
      capacity: 1,
      breakfast: false,
      pets: false
    });
    setPriceRange([minPrice, maxPrice]);
    setSort('price-asc');
  };
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-playfair font-semibold">Filter Rooms</h2>
        <button 
          onClick={handleReset}
          className="text-hotel-purple hover:text-hotel-purple-dark"
        >
          Reset Filters
        </button>
      </div>
      
      <div className="mb-4">
        <p className="text-gray-500 text-sm mb-2">
          Showing {filteredCount} of {totalRooms} rooms
        </p>
      </div>
      
      {/* Filter by Type */}
      <div className="mb-6">
        <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-2">
          Room Type
        </label>
        <select
          id="type"
          value={filters.type || 'all'}
          onChange={handleTypeChange}
          className="hotel-input"
        >
          <option value="all">All Types</option>
          <option value="single">Single Room</option>
          <option value="double">Double Room</option>
          <option value="family">Family Room</option>
          <option value="presidential">Presidential Suite</option>
        </select>
      </div>
      
      {/* Filter by Price */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Price Range: ${priceRange[0]} - ${priceRange[1]}
        </label>
        <Slider
          defaultValue={[minPrice, maxPrice]}
          min={minPrice}
          max={maxPrice}
          step={10}
          value={priceRange}
          onValueChange={handlePriceChange}
          className="mt-4"
        />
      </div>
      
      {/* Filter by Capacity */}
      <div className="mb-6">
        <label htmlFor="capacity" className="block text-sm font-medium text-gray-700 mb-2">
          Guests
        </label>
        <select
          id="capacity"
          value={filters.capacity || 1}
          onChange={handleCapacityChange}
          className="hotel-input"
        >
          <option value={1}>1 Person</option>
          <option value={2}>2 People</option>
          <option value={3}>3 People</option>
          <option value={4}>4+ People</option>
        </select>
      </div>
      
      {/* Filter by Breakfast */}
      <div className="mb-4 flex items-center">
        <input
          id="breakfast"
          type="checkbox"
          checked={filters.breakfast || false}
          onChange={handleBreakfastChange}
          className="h-4 w-4 rounded border-gray-300 text-hotel-purple focus:ring-hotel-purple"
        />
        <label htmlFor="breakfast" className="ml-2 block text-sm text-gray-700">
          Breakfast Included
        </label>
      </div>
      
      {/* Filter by Pets */}
      <div className="mb-6 flex items-center">
        <input
          id="pets"
          type="checkbox"
          checked={filters.pets || false}
          onChange={handlePetsChange}
          className="h-4 w-4 rounded border-gray-300 text-hotel-purple focus:ring-hotel-purple"
        />
        <label htmlFor="pets" className="ml-2 block text-sm text-gray-700">
          Pet Friendly
        </label>
      </div>
      
      <hr className="my-6" />
      
      {/* Sort Options */}
      <div>
        <label htmlFor="sort" className="block text-sm font-medium text-gray-700 mb-2">
          Sort By
        </label>
        <select
          id="sort"
          value={sort}
          onChange={handleSortChange}
          className="hotel-input"
        >
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="capacity">Capacity</option>
          <option value="size">Room Size</option>
          <option value="rating">Rating</option>
        </select>
      </div>
    </div>
  );
};

export default RoomFilters;
