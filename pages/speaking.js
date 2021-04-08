import React from 'react'

import {
  connect,
  Wrapper,
  WidgetVideoWithEventInfo,
  WidgetRegForm,
  WidgetRoleButtons,
  Markdown,
  WidgetPresentersAll,
  WidgetIconGrid,
  WidgetFaq,
  WidgetJurors,
  reduxWrapper,
  configure,
  WidgetPhotostream,
  WidgetVerticalTimeline,
  TwoColsLayout as Section,
  MyTypography
} from 'eventjuicer-site-components';


import {
  NoteAdd, 
  Settings,
  Public,
  Mic,
  Assessment,
  FaSearch,
  FaPoll,
  FaTrophy
} from '../components/icons'


import settings from '../settings';


const PageSpeaking = () => (

  <div>
       <Wrapper first label="cfp.hello.title">
       
       <Section 
        
        left={  <div style={{marginTop: '5rem'}}>

          <MyTypography template="h4" label="cfp.hello.submit" />
         
          <MyTypography template="subtitle1" label="cfp.hello.needs" />
  
          <Markdown label="cfp.hello.details" />
  
  
          </div> }
        right={ 
          <WidgetVerticalTimeline 
          setting="cfptimeline" 
          icons={{
            NoteAdd,
            Settings,
            Public,
            Mic,
            Assessment
          }} />
        }

      leftCentered={true}

      />


      </Wrapper>


  <WidgetPhotostream setting="cfpphotostream" />

  <WidgetRegForm
      setting="speakers.callforpapers"
      options={{
        "categories": [
          'conversion',
          'marketing',
          'logistics',
          'payments',
          'it',
          'trends',
        ]
       }} 

      right={
        <>
        <MyTypography template="subtitle1" label="presenters.competition.rules.title" /> 
        <Markdown label="presenters.competition.rules.content" />
        </>
      }

      summary={<div>asd</div>}

      />


   

        {/* <div>

        Why speak at the E-commerce Berlin Expo?
Over 7,000 e-commerce professionals
90% average session capacity
3,000+ CEOs, Directors & Heads of Departments
Relevant visitors, 65% of whom come from retailers & brands


        </div> */}

        {/*

Website Conversion Rate
Marketing in E-commerce
eLogistics / International Expansion
ePayments
IT for E-commerce
New Developments in E-commerce

 */}

      
        
  
        <WidgetJurors minToShow={4} />

        <WidgetFaq 
            items={[
            {
              label: 'exhibitor-status',
              important: true,
              buttons: [],
            },
            {
          //    baseLabel: 'exhibitors.faq.before_event',
              label: 'fee',
            },
            { label: 'submission-limits' },
            { label: 'co-presenter' },
            { label: 'ranking' },
            { label: 'fair-play' },
            {
            //  baseLabel: 'cfp.faq.before_event',
              label: 'stage',
            },
    ]} />


      
        <WidgetIconGrid setting="speakers.benefits" icons={{
            FaSearch: FaSearch, 
            FaPoll: FaPoll, 
            FaTrophy: FaTrophy
        }} />


        <WidgetPresentersAll 
          filter={(item)=> parseInt(item.featured_cfp) } limit="24" 
          label="cfp.featured_presenters"
        />



        <WidgetVideoWithEventInfo
          setting="heroExpo"
          title="presenters.claim.title"
          subtitle="presenters.claim.description"
        />

        <WidgetRoleButtons first={false} />

  </div>
)





export const getStaticProps = reduxWrapper.getStaticProps(async ({ store }) => {

  await configure(store, {
    settings : settings,
    preload : ["exhibitors"]
  })

  return {
    props: {},
    revalidate: 1
  }

})

export default connect()(PageSpeaking);
