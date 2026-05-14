import React from 'react'
import Hero from '../Thepremise/Hero'
import ProblemSection from '../Thepremise/ProblemSection'
import WhyTableOne from '../Thepremise/WhyTableOne'
import TableSection from '../Thepremise/TableSection'
import TimelineSection from '../Thepremise/TimelineSection'
import RulesSection from '../Thepremise/RulesSection'
import InvestmentSection from '../Thepremise/InvestmentSection'
import ContactFormSection from '../Thepremise/ContactFormSection'
import TopBar from '../Thepremise/TopBar'
import TimelineDesktop from '../Thepremise/TimelineDesktop'
import TimelineMobile from '../Thepremise/TimelineMobile'
import PartnershipSection from '../Thepremise/PartnershipSection'

function ThePremise() {
  return (
   <div>
    <div className='overflow-hidden'><Hero/></div>
     <div className='overflow-hidden'><PartnershipSection/></div>
    <div className='overflow-hidden'><ProblemSection/></div>
    <div className='overflow-hidden'><WhyTableOne/></div>
    <div className='overflow-hidden'><TableSection/></div>
    <div><TimelineDesktop/></div>
    <div className='overflow-hidden'><TimelineMobile/></div>
    <div className='overflow-hidden'><RulesSection/></div>
    <div className='overflow-hidden'><InvestmentSection/></div>
    <div className='overflow-hidden'><ContactFormSection/></div>
    <div className='overflow-hidden'><TopBar/></div>  
   </div>
  )
}

export default ThePremise