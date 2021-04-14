import React from 'react'

import {
    connect,
    WidgetVideoWithEventInfo,
    // WidgetFeaturedCompanies,
    // WidgetAllExhibitorsColumnList,
    WidgetRoleButtons,
    WidgetRegForm,
    reduxWrapper,
    configure,
    WidgetPresenters,
    WidgetSchedule,
    MyHead,
    WidgetSalesMap,
    WidgetVerticalTimeline,
    WidgetIconGrid,
    WidgetFaq,
    WidgetTabs
  } from 'eventjuicer-site-components';
  
  import Head from 'next/head'

import VideocamIcon from '@material-ui/icons/Videocam';
import HomeWorkIcon from '@material-ui/icons/HomeWork';


  import settings from '../settings'
  import {TimelineWithText} from '../components'
  
  const PageIndex = (props) => (
  
     
    <React.Fragment>
  
    <MyHead 
      image="https://res.cloudinary.com/eventjuicer/image/upload/f_auto/v1615494821/tehonline.jpg" 
      titleLabel="virtual.opengraph.name" 
      descriptionLabel="virtual.opengraph.description"
    >{(data)=><Head>{data}</Head>}</MyHead>


    <WidgetVideoWithEventInfo setting="heroStreaming" />

 <WidgetIconGrid setting="sponsors.benefits" icons={{

}}/>
    
    <WidgetSalesMap />
    
    <WidgetTabs setting="video" items={[
      {label: "videoself.title", icon: HomeWorkIcon, content: <TimelineWithText baseLabel="videoself" />},
      {label: "videostudio.title", icon: VideocamIcon, content:   <TimelineWithText baseLabel="videostudio" />}
    ]} />
    
  
   <WidgetRegForm
      setting="streaming_registration"
      wrapperProps={{ 
        label:"virtual.register.title",
        secondaryLabel: null
      }}
      legend="streaming.how_to_register"
    />
  
  
  
    <WidgetRoleButtons 
      setting="rolebuttonsVirtual" 
    />

    </React.Fragment>
   
  ) 
  
  export const getStaticProps = reduxWrapper.getStaticProps(async (props) => {
  
    return await configure(props, {
      settings: settings,
      preload: ['bookingmap', 'presenters']
    })
    
  })
  
  export default connect()(PageIndex);
  