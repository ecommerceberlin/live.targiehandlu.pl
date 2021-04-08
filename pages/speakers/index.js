import { 
    connect, 
    reduxWrapper,
    configure,
    WidgetPresenters,
    WidgetVideoWithEventInfo,
    WidgetRegForm,
    MyHead
  } from 'eventjuicer-site-components';
  

  import Head from 'next/head'
  
  const settings = require('../../settings').default;
  
  
  
  const PagePresenters = () => (
    <>

     <MyHead 
      image="https://res.cloudinary.com/eventjuicer/image/upload/f_auto/v1615494821/tehonline.jpg" 
      titleLabel="virtual.opengraph.name" 
      descriptionLabel="virtual.opengraph.description"
    >{(data)=><Head>{data}</Head>}</MyHead>

    <WidgetPresenters setting="virtual_speakers" link={(item) => `/speakers/${item.id}` } />
  
    <WidgetVideoWithEventInfo setting="heroStreaming" />
  
    <WidgetRegForm setting="streaming_registration" />
  
  
    </>
  )
  
  export const getStaticProps = reduxWrapper.getStaticProps(async (props) => {
  
    return await configure(props, {
      settings : settings,
      preload : ["presenters"]
    })
  
  })
  
  export default connect()(PagePresenters);
  