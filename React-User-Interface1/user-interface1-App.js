import { useState, useEffect, useCallback } from 'react';
import { FaBuilding } from 'react-icons/fa';
import SearchCompanies from './components/SearchCompanies';
import AddCompany from './components/AddCompany';
import CompanyInfo from './components/CompanyInfo';

export default function App() {
  let [companyDetailList, setCompanyDetailList] = useState([]);
  let [searchQuery, setSearchQuery] = useState("");
  let [sortBy, setSortBy] = useState("companyName");
  let [orderBy, setOrderBy] = useState("Asc");

  const filteredCompanyDetails = companyDetailList.filter(
    item => {
      return (
        item.companyName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.CEO.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.companyLocation.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
  ).sort((a, b) => {
    let order = (orderBy === "Asc") ? 1: -1;
    return (
      a[sortBy].toLowerCase() < b[sortBy].toLowerCase() ? -1 * order : 1 * order
    );

  });

  const fetchInputData = useCallback(() => {
    fetch('./inputdata.json')
    .then(response => response.json())
    .then(data => {
      setCompanyDetailList(data);
    });
  }, []);

  useEffect(() => {
    fetchInputData();
  }, [fetchInputData]);

  return (
    <div className="App container mx-auto mt-3 font-thin">
      <h1 className="text-5xl mb-3 main_heading">
        <FaBuilding className=" inline-block align-top" style={{color: 'chocolate', fontSize:'75px'}} />
        Top Ranked IT Companies - Details
        <FaBuilding className="inline-block align-top" style={{color: 'chocolate', fontSize:'75px'}} />
      </h1>
      <AddCompany
        lastId={companyDetailList.reduce((max, nextId ) => Number(nextId.id) > max ? Number(nextId.id) : max, 0)}
        onDispatchCompanyInfo={newCompany =>
        newCompany.companyName !== "No Details" ? setCompanyDetailList([...companyDetailList, newCompany]) : alert('New Company Details Not Fully Completed')}
       />
      <SearchCompanies searchQuery={searchQuery}
      onSearchQueryChange={mySearchQuery => setSearchQuery(mySearchQuery)}
      orderBy={orderBy}
      onOrderByChange={newSortOrder => setOrderBy(newSortOrder)}
      sortBy={sortBy}
      onSortByChange={newSort => setSortBy(newSort)}
      />
      <ul className="divide-y divide-gray-200">
      {filteredCompanyDetails
        .map(companyDetail => (
          <CompanyInfo key={companyDetail.id}
          companyDetail={companyDetail}
          onDeleteCompanyDetail = {
            companyDetailId => {
              setCompanyDetailList(companyDetailList.filter(companyDetail => companyDetail.id !== companyDetailId))
            }
          }
          />
        ))}
      </ul>
    </div>
  );
}
