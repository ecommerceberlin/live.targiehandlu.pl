

const settings =  {
    
  
    system : {
        ogTemplate: "",
        passwords : {
            'admin': '1751bfe48d5ad21fd9d'
        },
        lang_api_endpoint : 'https://api.eventjuicer.com/proxy?url=https%3A%2F%2Flocalise.biz%2Fapi%2Fexport%2Fall.json%3Fformat%3Dmulti%26pretty%26key%3Dr_MBDf3NrpxqiMTWvycw5z7ICbciRjnt',    
        api : "https://api.eventjuicer.com/proxy?url=https://api.eventjuicer.com/v1/public/hosts/live.targiehandlu.pl",
        post_api : "https://api.eventjuicer.com/v1/public/hosts/live.targiehandlu.pl/register",
        service_api : "https://api.eventjuicer.com/v1/services",
        og_image : "https://res.cloudinary.com/ecommerceberlin/image/upload/c_limit,w_1024/v1546943854/ebe_og_home.jpg",
    
    },


    videoself: {

        title: "videoself.title",
        baseLabel: "videoself.timeline",
        iconSize: "40",
        items : [
            {date: "2021-04-14", name: "sales", icon:  "NoteAdd", dotColor: 'black', active: true},
            {date: "2021-04-30", name: "teaser", icon:  "Public"},
            {date: "2021-05-05", name: "assessment", icon:  "Assessment" },
            {date: "2021-05-28", name: "final", icon:  "HowToVote" },
            {date: "2021-06-09", name: "conference", icon:  "Mic", active: false }   
        ],

        faq: {
            wrapperProps: {},
            baseLabel: "videoself.faq",
            items: [
              {label: 'not-accepted-teaser'},
            //   { label: 'submission-limits' },
            //   { label: 'co-presenter' },
            //   { label: 'ranking' },
            //   { label: 'fair-play' }
            ]
        }
    },


    videostudio: {
        title: "videostudio.title",
        baseLabel: "videostudio.timeline",
        iconSize: "40",
        items : [
            {date: "2021-04-14", name: "sales", icon:  "NoteAdd", dotColor: 'black', active: true},
            {date: "2021-04-30", name: "summary", icon:  "Public"},
            {date: "2021-05-12", name: "recording", icon:  "Assessment" },
            {date: "2021-06-02", name: "authorization", icon:  "HowToVote" },
            {date: "2021-06-09", name: "conference", icon:  "Mic" }
        ],

        faq: {
            wrapperProps: {},
            baseLabel: "videostudio.faq",
            items: [
              { label: 'summary-howto'},
              { label: 'recording-howto' },
              { label: 'authorization-process' },
            ]
        }

    },




    virtual_featured_presenters: {
        wrapperProps:{
            label: "virtual.presenters.title",
            secondaryLabel: "virtual.presenters.description"
        },
        filter: [["featured", 1]]
    },


    virtual_speakers: {
        wrapperProps:{
            label: "virtual.presenters.title",
            secondaryLabel: "virtual.presenters.description"
        },
        og_template: "tehonline_template_speaker2"
    },

    streaming : {
        regform: "streaming_registration",
        api: "https://proxy.eventjuicer.com/api/schedule",
        discordProps: {
            avatars: false,
            join: "https://discord.gg/u3Fv9VJGU5",
            title: "streaming.chat.title",
            showTime: false
        },
        playerProps: {
            controls: true, 
            playing: true,  
            loop: true,
            width: "100%",
            height: "100%"
        },
        stages: {
            A: {
                embed: "player",
                url: "https://youtu.be/fih7dfpLr2g",
                discord: null,
                restricted: true,
                sponsor: null,
                placeholder: "https://res.cloudinary.com/eventjuicer/image/upload/v1616511215/tehonline_fpeventcover_start.png"
            },
            B: {
                embed: "player",
                url: "https://youtu.be/PUEL2MCzxMI",
                discord: null,
                restricted: true,
                sponsor: null,
                placeholder: "https://res.cloudinary.com/eventjuicer/image/upload/v1616511215/tehonline_fpeventcover_start.png"
            },
            C: {
                embed: "player",
                url: "https://youtu.be/vr_9O5nqwgw",
                discord: null,
                restricted: true,
                sponsor: null,
                placeholder: "https://res.cloudinary.com/eventjuicer/image/upload/v1616511215/tehonline_fpeventcover_start.png"
            },
            D: {
                embed: "player",
                url: "https://youtu.be/EwQ02-nA7NQ",
                discord: null,
                restricted: true,
                sponsor: null,
                placeholder: "https://res.cloudinary.com/eventjuicer/image/upload/v1616511215/tehonline_fpeventcover_start.png"
            }
        }
    },


    

    streaming_registration: {

        wrapperProps: {
            label : null,
            secondaryLabel: null,
            dense: true,
            first: false
        },
        legend: "streaming.restricted",
        fields : [
          {name: "email", required: true},
          {name: "fname", required: true},
          {name: "lname", required: true},
          {name: "cname2", required: true},
          {name: "position", required: true},
          {name: "phone", required: false},
        ],
        start : ['email', 'fname'],
        ticket_id : 1911,
        email_template : "pl-livestream-registration",
        right: "https://res.cloudinary.com/eventjuicer/image/upload/f_auto/v1615497181/tehonline_reg.jpg",
        rightShadowed: true

    },

    schedule: {
        times : {
            '11:00': 'presentation',
            '11:25': 'presentation',
            '11:46': 'presentation',
            '12:04': 'presentation',
            '12:22': 'presentation',
            '13:00': 'presentation',
          },    
          venues : {
            A: { company_id: 0 },
            B: { company_id: 0 },
            C: { company_id: 0 },
            D: { company_id: 0 },
          },
        //   minimized : ["A", "C"],
          venueStyle : "red",
    },


    heroStreaming : {

        videoSrc : "https://res.cloudinary.com/eventjuicer/video/upload/v1615494822/tehonline.mp4",
        background : "https://res.cloudinary.com/eventjuicer/image/upload/f_auto/v1615494821/tehonline.jpg",
        overlay : "black",
        template : "heroGold",
        heading : "virtual.event.claim",
        subheading : "virtual.event.description",
        showable: ["date"],
        orientation : "v",
        primaryStyle: "heroPrimary",
        secondaryStyle: "heroSecondary",
        iconStyle: "heroIcon",

        event_name : 'Kongres Ehandlu Online',
        event_date : '9 czerwca  2021',
        event_hours : '10:00',

    },

    rolebuttonsVirtual : {
        accent : "gold",
        items : [
        {
          url: 'https://res.cloudinary.com/eventjuicer/image/upload/w_768,c_fit,f_auto/v1579000835/exhibit.jpg',
          label: 'common.whats_next',
        //   width: '50%',
          target : "https://targiehandlu.pl"
        },
        ]
    },



    bookingmap : {
        height : 700,
        steps : [
            "choose_booth",
            "confirm",
            "pay",
            "access"
        ],
        allowedGroupIds : [335,336],
        disabledTicketIds : [],
        styles : {
            // light : null,
            // standard : 310,
            // hot : 311,
            // superhot : 312,
            // ultra : 313,
            // grand : 314,
            // stage : 315,
            // networking : 316
        },
        boothStyleMapping: {
            335: "light",
            336: "hot"
        },
        api : "https://orderslive.targiehandlu.pl/preorder"
    },


    speakers : {

        callforpapers: {

            wrapperProps: {
                label: "presenters.form.title",
                // secondaryLabel: ""
            },
            
            baseLabel: "presenters",
            fields: [
                {name: "email", required: true},
                {name: "fname", required: true},
                {name: "lname", required: true},
                {name: "cname2", required: true},
                {name: "phone", required: true},
                {name: "presenter", required: true},  
                {
                  name: "presentation_category", 
                  required: true,
                  options : "categories"
                },
                {name: "presentation_title", required: true},
                {name: "presentation_description", required: true}
            ],
            
              start: [
                'presenter',
                'presentation_title', 
                'presentation_description',
                'presentation_category',
                'cname2'
            ],

            ticket_id : 1790,
            email_template : "pl-presenters-application",

        },


        benefits : {

            label: "presenters.steps.title",
            baseLabel: "presenters.steps",

            items: [

                {
                    icon : "FaSearch",
                    label :  'start',
                },
            
                {
                    icon : "FaPoll",
                    label : 'mentoring'
                },
            
                {
                    icon : "FaTrophy",
                    label : 'presentation'
                }
    
            ]
        }, 
    },

 
    

    ui : {

        menuItems : [
           
           
            {
                name: 'general',
                items: [
                  {name: 'home', to: '/'},
                ]
            }
  
        ]
    },

    premium : {

        ticketgroups : [337]

    },

    exhibitors : {
        ogTemplate: "template_teh19_exhibitor_",
        benefits : {
            baseLabel: "exhibitors.benefits",
            items: [
                {
                    icon : "FaHandshake",
                    label :  'outreach',
                },
                {   
                    icon : "FaComments",
                    label : 'feedback'
                },
                {   
                    icon : "FaSmile",
                    label : 'organizer'
                },
                {   
                    icon : "FaPiggyBank",
                    label : 'all_inclusive'
                },
                {
                    icon : "FaLink",
                    label : 'meet_clients'
                },
                {
                    icon : "FaLightbulb",
                    label : 'inspiration'
                }
            ]
        }
    },

    visitor : {

       
        benefits : {

            baseLabel: "visitors.benefits",

            items: [

                {
                    icon : "FaLockOpen",
                    label :  'free_entry',
                },
            
                {
                    icon : "FaPiggyBank",
                    label : 'special_offers'
                },
            
                {
                    icon : "FaSearch",
                    label : 'insight'
                },
            
                {   
                    icon : "FaWrench",
                    label : 'case_studies'
                },
            
                {   
                    icon : "FaHandshake",
                    label : 'networking'
                },
            
                {   
                    icon : "FaChartLine",
                    label : 'future'
                }
        ]
        },
      
    },
    
    common : {

        organizer_name : 'Infoguru Sp. z o.o. Sp. k.',
        organizer_address : 'POLAND, Poznań, Truskawiecka 13',
        organizer_regno : 'VAT ID 7811967834',
        event_name : 'Kongres eHandlu Online',
        event_location : 'internet',
        event_date : '9 czerwca  2021',
        event_hours : '10:00-15:00',

    },


    sales_support : {

        title: 'event.support.hello',
        description: 'event.support.description',

        people : [
            {             
                name: 'Karolina Michalak',
                position : 'Relationship Manager',
                langs : ["pl","en"],
                avatar: 'https://res.cloudinary.com/eventjuicer/image/upload/v1598009850/targiehandlu_people_km.jpg',
                phone: '+48 721 945 134',
                email: 'karolina.michalak@targiehandlu.pl',
                chatlio : true
            },
          
          ]
    },

   
    footer : {
        iconStyle : "black",
        primaryStyle: null,
        secondaryStyle: null,
      //  iconStyle: "heroIcon",
        links : [
         //   {label: "exhibitors.agreement.title", href : "/legal-20200324"},
        ]
    },

    appbar : {
        profile: ["logout"],
        links: [
            // {label: "ehandel.com.pl", color: "secondary",  href: "https://ehandel.com.pl", as: "https://ehandel.com.pl", variant: "text"}
        ],
    },

    cfpphotostream : {

        wrapperProps: {
            label : "cfp.gallery.title"
        },

        overlay: "red",

        cols: 12,

        items : [
            {src: "https://res.cloudinary.com/eventjuicer/image/upload/v1598999866/www/speaking/witold_wrodarczyk.jpg", cols: 3},
            {src: "https://res.cloudinary.com/eventjuicer/image/upload/v1598999863/www/speaking/robert_stolarczyk.jpg", cols: 3},
            {src: "https://res.cloudinary.com/eventjuicer/image/upload/v1598999861/www/speaking/sempai.jpg", cols: 3},
            {src: "https://res.cloudinary.com/eventjuicer/image/upload/v1598999860/www/speaking/jakub_gierszynski.jpg", cols: 3},
            {src: "https://res.cloudinary.com/eventjuicer/image/upload/v1598999860/www/speaking/dominik_cison.jpg", cols: 3},
            {src: "https://res.cloudinary.com/eventjuicer/image/upload/v1598999860/www/speaking/felix_hubner.jpg", cols: 3},
            {src: "https://res.cloudinary.com/eventjuicer/image/upload/v1598999857/www/speaking/ireneusz_klimczak.jpg", cols: 3},
            {src: "https://res.cloudinary.com/eventjuicer/image/upload/v1598999855/www/speaking/freshworks.jpg", cols: 3},
            {src: "https://res.cloudinary.com/eventjuicer/image/upload/v1598999855/www/speaking/openstage.jpg", cols: 3},
            {src: "https://res.cloudinary.com/eventjuicer/image/upload/v1598999854/www/speaking/lead360.jpg", cols: 3},
            {src: "https://res.cloudinary.com/eventjuicer/image/upload/v1598999852/www/speaking/damian_wiszowaty.jpg", cols: 3},
            {src: "https://res.cloudinary.com/eventjuicer/image/upload/v1598999851/www/speaking/artur_jablonski.jpg", cols: 3}
        ]
    },

    cfptimeline: {

        baseLabel: "cfp.timeline",

        items : [
            {date: "2020-09-01", name: "submissions", icon:  "NoteAdd", dotColor: 'primary', active: true },
            {date: "2020-09-16", name: "qualification", icon:  "Assessment" },
            {date: "2020-09-21", name: "public-voting", icon:  "Public" },
            // {date: "2020-10-26", name: "jury-voting", icon:  "HowToVote" },
            {date: "2020-10-05", name: "results", icon:  "Mic", active: false },
            {date: "2020-10-06", name: "formal", icon:  "Settings", active: false }

        ]

    },


    
};

        

 export default settings