import { BiSearch, BiCaretDown, BiCheck } from 'react-icons/bi';
import { useState } from 'react';

const DropDownMenu = ({ toggle, orderBy, onOrderByChange, sortBy, onSortByChange }) => {
  if (!toggle) {
    return null;
  }
  return (
    <div className="origin-top-right absolute right-0 mt-2 w-56
      rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
      <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
        <div onClick={() => onSortByChange('companyName')}
          className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer"
          role="menuitem">Company Name {(sortBy === 'companyName') && <BiCheck />}</div>
        <div onClick={() => onSortByChange('CEO')}
          className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer"
          role="menuitem">CEO Name  {(sortBy === 'CEO') && <BiCheck />}</div>
        <div onClick={() => onSortByChange('companyStartDate')}
          className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer"
          role="menuitem">Company Start Date {(sortBy === 'companyStartDate') && <BiCheck />}</div>
        <div onClick={() => onOrderByChange('asc')}
          className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer border-gray-1 border-t-2"
          role="menuitem">Asc {(orderBy === 'asc') && <BiCheck />}</div>
        <div onClick={() => onOrderByChange('desc')}
          className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer"
          role="menuitem">Desc {(orderBy === 'desc') && <BiCheck />}</div>
      </div>
    </div>
  )
}

const SearchCompanies = ({ searchQuery, onSeacrhQueryChange, orderBy, onOrderByChange, sortBy, onSortByChange }) => {
  let [toggleSort, setToggleSort] = useState(false);
  return (
    <div className="py-5">
      <div className="mt-1 relative rounded-md shadow-sm">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <BiSearch />
          <label htmlFor="searchQuery" className="sr-only" />
        </div>
        <input type="text" name="searchQuery" id="searchQuery" value={searchQuery}
        onChange={(event) => {onSeacrhQueryChange(event.target.value)}}
          className="pl-8 rounded-md focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300" placeholder="Search" />
        <div className="absolute inset-y-0 right-0 flex items-center">
          <div>
            <button type="button" onClick={() => {setToggleSort(!toggleSort)}}
              className="justify-center px-4 py-2 bg-blue-400 border-2 border-blue-400 text-sm text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 flex items-center" id="options-menu" aria-haspopup="true" aria-expanded="true">
              Sort By <BiCaretDown className="ml-2" />
            </button>
            <DropDownMenu toggle={toggleSort}
            orderby={orderBy}
            onOrderByChange={newSortOrder => onOrderByChange(newSortOrder)}
            sortBy={sortBy}
            onSortByChange={newSort => onSortByChange(newSort)}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchCompanies;
