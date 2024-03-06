import React, { useEffect, useState } from 'react'
import InstitutionsHeader from '../components/institutions/InstitutionsHeader'
import InstitutionsShowStudents from '../components/institutions/InstitutionsShowStudents'
import axiosInstance from '../api/axios'
import InstitutionsSearch from '../components/institutions/InstitutionsSearch'
// import ShowWelcome from '../components/ShowWelcome'

function InstitutionsHome() {
  
  // const [getShowStudents, setGetShowStudents] = useState([])
  // useEffect(() => {
  //     const showStudents = async () => {
  //         const response = await axiosInstance.get('/institutions/getshowstudents',{
  //             withCredentials: true,
  //         })
  //         setGetShowStudents(response.data.getStudents)
  //     }
  //     showStudents()
  // }, [])
  // console.log(getShowStudents)
  return (
    <>
    <InstitutionsHeader />
    <InstitutionsShowStudents />
    {/* <ShowWelcome/> */}
    </>
  )
}

export default InstitutionsHome