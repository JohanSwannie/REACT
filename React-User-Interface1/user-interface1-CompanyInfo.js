import { BiTrash } from 'react-icons/bi';

const CompanyInfo = ( {companyDetail, onDeleteCompanyDetail} ) => {
  return (
    <li className="px-3 py-3 flex items-start">
      <button type="button" onClick={() => onDeleteCompanyDetail(companyDetail.id)}
        className="p-1.5 mr-1.5 mt-1 rounded text-white bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
        <BiTrash /></button>
      <div className="flex-grow">
        <div className="grid items-center" style={{gridTemplateColumns: '1fr 1.5fr'}}><span className="flex-none font-medium text-2xl text-blue-500">Company Name: {companyDetail.companyName}</span>
          <span><span className="font-medium text-1xl text-blue-500">Company Start Date & Time : </span>{companyDetail.companyStartDate}</span>
        </div>
        <div><b className="font-bold text-blue-500">CEO: </b>{companyDetail.CEO}</div>
        <div><b className="leading-tight font-bold text-blue-500">Company Location: </b>{companyDetail.companyLocation}</div>
      </div>
    </li>
  )
}

export default CompanyInfo;
