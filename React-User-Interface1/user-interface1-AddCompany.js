import {
  BiCalendarPlus
} from 'react-icons/bi';
import {
  useState
} from 'react';

const AddCompany = ({
  onDispatchCompanyInfo,
  lastId
}) => {

  let [toggleAddCompany, setToggleAddCompany] = useState(false);

  const initialiseInputData = {
    companyName: "",
    CEO: "",
    companyLocation: "",
    companyStartDate: "",
    startTime: ""
  };

  let [inputData, setInputData] = useState(initialiseInputData);

  let companyInfo;

  function releaseNewCompany() {
    if (inputData.companyName > '' && inputData.CEO > '' && inputData.companyLocation > '' &&
      inputData.companyStartDate > '' && inputData.startTime > '') {
      companyInfo = {
        id: lastId + 1,
        companyName: inputData.companyName,
        CEO: inputData.CEO,
        companyLocation: inputData.companyLocation,
        companyStartDate: inputData.companyStartDate + ' ' + inputData.startTime
      };
      setInputData(initialiseInputData);
      setToggleAddCompany(!toggleAddCompany);
    } else {
      companyInfo = {
        id: '',
        companyName: 'No Details',
        CEO: '',
        companyLocation: '',
        companyStartDate: ''
      };
    }
    onDispatchCompanyInfo(companyInfo);
  }

  return ( <
    div >
    <
    button onClick = {
      () => {
        setToggleAddCompany(!toggleAddCompany)
      }
    }
    className = {
      `bg-gradient-to-r from-cyan-500 to-blue-500 shadow-xl text-white px-2 py-3 w-full text-left rounded-t-md
        ${toggleAddCompany ? 'rounded-t-md': 'rounded-md'}`
    } >
    <
    div className = "text-base font-bold" > < BiCalendarPlus className = "inline-block align-text-top text-2xl font-bold" / >
    Add a new company <
    /div> < /
    button > {
      toggleAddCompany &&
      <
      div className = "border-r-2 border-b-2 border-l-2 border-light-blue-500 rounded-b-md pl-4 pr-4 pb-4" >
      <
      div className = "sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5" >
      <
      label htmlFor = "CEO"
      className = "block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2" >
      CEO Name <
      /label> <
      div className = "mt-1 sm:mt-0 sm:col-span-2" >
      <
      input type = "text"
      name = "CEO"
      id = "CEO"
      autoFocus
      onChange = {
        (event) => {
          setInputData({
            ...inputData,
            CEO: event.target.value
          })
        }
      }
      value = {
        inputData.CEO
      }
      className = "max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" / >
      <
      /div> < /
      div >

      <
      div className = "sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5" >
      <
      label htmlFor = "companyName"
      className = "block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2" >
      Company Name <
      /label> <
      div className = "mt-1 sm:mt-0 sm:col-span-2" >
      <
      input type = "text"
      name = "companyName"
      id = "companyName"
      onChange = {
        (event) => {
          setInputData({
            ...inputData,
            companyName: event.target.value
          })
        }
      }
      value = {
        inputData.companyName
      }
      className = "max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" / >
      <
      /div> < /
      div >

      <
      div className = "sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5" >
      <
      label htmlFor = "companyStartDate"
      className = "block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2" >
      Company Start Date <
      /label> <
      div className = "mt-1 sm:mt-0 sm:col-span-2" >
      <
      input type = "date"
      name = "companyStartDate"
      id = "companyStartDate"
      onChange = {
        (event) => {
          setInputData({
            ...inputData,
            companyStartDate: event.target.value
          })
        }
      }
      value = {
        inputData.companyStartDate
      }
      className = "max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" / >
      <
      /div> < /
      div >

      <
      div className = "sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5" >
      <
      label htmlFor = "startTime"
      className = "block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2" >
      Company Start Time <
      /label> <
      div className = "mt-1 sm:mt-0 sm:col-span-2" >
      <
      input type = "time"
      name = "startTime"
      id = "startTime"
      onChange = {
        (event) => {
          setInputData({
            ...inputData,
            startTime: event.target.value
          })
        }
      }
      value = {
        inputData.startTime
      }
      className = "max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" / >
      <
      /div> < /
      div >

      <
      div className = "sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5" >
      <
      label htmlFor = "companyLocation"
      className = "block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2" >
      Company Location <
      /label> <
      div className = "mt-1 sm:mt-0 sm:col-span-2" >
      <
      textarea id = "companyLocation"
      name = "companyLocation"
      rows = "3"
      onChange = {
        (event) => {
          setInputData({
            ...inputData,
            companyLocation: event.target.value
          })
        }
      }
      value = {
        inputData.companyLocation
      }
      className = "shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
      placeholder = "Company Location Detail" > < /textarea> < /
      div > <
      /div>

      <
      div className = "pt-5" >
      <
      div className = "flex justify-end" >
      <
      button type = "submit"
      onClick = {
        releaseNewCompany
      }
      className = "ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-400 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400" >
      Submit <
      /button> < /
      div > <
      /div> < /
      div >
    } <
    /div>
  )
}

export default AddCompany;
