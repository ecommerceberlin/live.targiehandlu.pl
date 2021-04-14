

import NoteAdd  from '@material-ui/icons/NoteAdd'
import Settings from '@material-ui/icons/Settings'
import Public from '@material-ui/icons/Public'
import Mic from '@material-ui/icons/Mic'
import Assessment from '@material-ui/icons/Assessment'

import {
  MyTypography,
  TwoColsLayout as Section,
  WidgetVerticalTimeline,
  Wrapper,
  Markdown,
  WidgetFaq
} from 'eventjuicer-site-components'



const Timeline = (props) => (<WidgetVerticalTimeline 
  setting="livetimeline" 
  icons={{
      // NoteAdd,
      // HowToVote,
      // Public,
      // Mic,
      // Assessment
}}  iconSize="40"  {...props}  />)


const TimelineWithText = ({baseLabel="videoself"}) => {
 // <Wrapper label={`${baseLabel}.title`} first={false} dense={true} typography="subtitle"> 
  return (

   <div>
  
    <Section
  
    left={
      <>
        <div style={{marginBottom: 30}}>
        <MyTypography template="subtitle1" label={`${baseLabel}.subtitle`} />
        </div>  
        <div style={{marginBottom: 30}}>
        <MyTypography template="subtitle1" ><Markdown label={`${baseLabel}.description`} /></MyTypography>
        </div>
        <WidgetFaq setting={`${baseLabel}.faq`} />
      </>
  }
  right={
    <Timeline setting={baseLabel} />
  }     
      
  />
  
 
  </div>
 
  )
// </Wrapper>
}





// export {
//   FaSearch,
//   FaPoll,
//   FaTrophy,
//   FaWrench,
//   FaHandshake,
//   FaLockOpen,
//   FaChartLine,
//   FaPiggyBank,
//   FaDotCircle,
//   FaFastForward,
//   FaChair,
//   FaComments,
//   FaSmile,
//   FaLink,
//   FaLightbulb
// } from 'react-icons/fa';

export {Timeline, TimelineWithText}