import InstitutionsHeader from '../components/institutions/InstitutionsHeader'
import InstitutionsShowStudents from '../components/institutions/InstitutionsShowStudents'
import InstitutionsAdvertisment from '../components/institutions/InstitutionsAdvertisment'
import Footer from '../components/Footer'
// import ShowWelcome from '../components/ShowWelcome'

function InstitutionsHome() {

  return (
    <>
    <InstitutionsHeader />
    <InstitutionsShowStudents />
    <InstitutionsAdvertisment/>
    <Footer/>
    {/* <ShowWelcome/> */}
    </>
  )
}

export default InstitutionsHome