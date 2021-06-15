export default {
    nav: {
        logo: 'Portfolio',
        links: [
            { text: 'Download',  to: process.env.PUBLIC_URL + '/assets/resume.pdf' },
            { text: 'CSV', to: process.env.PUBLIC_URL + '/assets/resume.pdf' },
            
        ],
    },
    header: {
        img: process.env.PUBLIC_URL + '/assets/profile.jpg',
        text: ['Hi!', "I will random Text.", 'I am'],
        typical: [
            'web developer. ',
            3000,
            'Study. ',
            3000,
            'Developer',
            3000,
        ],
        btnText: 'Read More',
    },

    stack: {
        title: 'Stack',
        tech: [
            {
                img: process.env.PUBLIC_URL + '/assets/mongo.png',
                alt: 'mongodb',
            },
            {
                img: process.env.PUBLIC_URL + '/assets/react.png',
                alt: 'react',
            },
            {
                img: process.env.PUBLIC_URL + '/assets/express.png',
                alt: 'express',
            },
            {
                img: process.env.PUBLIC_URL + '/assets/node.png',
                alt: 'node',
            },
        ],
        desc: `มันจะมีมากขึ้นเรื่อยๆ หากฉันไม่หยุดที่จะเรียนรู้สิ่งใหม่ๆ ตลอดเวลา`
    },

    about: {
        title: 'About',
        aboutlist: 
            {
            background: process.env.PUBLIC_URL + '/assets/profile2.jpg',
            firstname: 'นายเกษม',
            lastname: 'แสงคำ',
            position: 'Web Developer',
            position_detail: 'Backend',
            nickname: 'ตี๋',
            birthday: '07-05-2538',
            age: '26',
            aboutme: 'สวัสดีครับ ผมชื่อตี๋ เป็นเด็กร่าเริง และมึนๆอึนๆ คนนึง ชอบการเรียนรู้สิ่งใหม่ๆ นั่นก็คือเขียนเว็บไซต์ครับ '+
                        'ผมศึกษาการเขียนเว็บจากการดูคอร์สออนไลน์ ในหลายๆเจ้าอย่างเช่น Udemy ก็พอจะพิมตามเขาแล้วรันได้ (T w T) '+
                        'หลายคนอาจสงสัยผมหายไปไหนมาช่วง หลังจากที่ผมจบ ปวช อันยาวนาน ผมไปผจญภัยมาครับ... '+
                        'หนึ่งในเรื่องราวนั้นคือการได้ไปเป็นทหารเกณฑ์ ผลัด 2/59 ที่จังหวัด นครปฐม เป็นประสบการณ์ชีวิตที่ดีเลย '+
                        'พอเสร็จสิ้นภารกิจรับใช้ชาติ ผมจึงได้มาทำการต่อปวส สาขาเทคโนโลยีสารสนเทศ ใกล้บ้าน ผมได้เรียนรู้ทั้งการเขียนเว็บไซต์ด้วยภาษา Html, '+
                        'PHP, Javascript และการเขียนโปรแกรม ด้วยภาษา VB.net รวมถึง ฐานข้อมูล ทั้งของ Mysql และ SQL '+
                        'พอจบมา ก็ร้อนวิชาเลย พอดีกับมีพี่ที่รู้จักชวนไปทำ Freelance ด้วย ได้เรียนรู้การใช้ Framework และ Library เจ้าดังอย่าง '+
                        'Reactjs และ Angular รวมถึงฝั่งของ Backend เช่น Nodejs และ Nestjs ฐานข้อมูล ที่ใช้จะเป็น Mongodb ซึ่งก็พอจะพิมตาม Doc แล้วรันติด (T w T) '+
                        'ได้เรียนรู้การทำเว็บ SEO ในส่วนของ off page ด้วยการทำ Blacklink และการทำเว็บ Directory '+
                        'ปัจจุบันนี้ กำลังศึกษาอยู่ที่มหาวิทยาลัยธนบุรี ภาค วันอาทิตย์ เพื่อที่จะได้ต่อยอดความรู้ในด้านเว็บไซต์ครับ',
        },
    },

    education: {
        title: 'Education',
        educationlist: [
            {
                college: 'มหาวิทยาลัยธนบุรี',
                img: process.env.PUBLIC_URL + '/assets/thonburi2.png',
                major: 'เทคโนโลยีสารสนเทศ',
                from: '2021',
                to: 'Present',
                gpa: 'รอผลการประเมิน',
                alt: 'thonburi',
            },
            {
                college: 'วิทยาลัยเทคนิคสัตหีบ',
                img: process.env.PUBLIC_URL + '/assets/thaiaus.png',
                major: 'เทคโนโลยีสารสนเทศ',
                from: '2018',
                to: '2020',
                gpa: '2.82',
                alt: 'thonburi',
            },
            {
                college: 'วิทยาลัยเทคโนโลยีอักษรพัทยา',
                img: process.env.PUBLIC_URL + '/assets/aksorn.png',
                major: 'คอมพิวเตอร์ธุรกิจ',
                from: '2013',
                to: '2010',
                gpa: '2.82',
                alt: 'thonburi',
            },
        ],
    },

    portfolio: {
        portfoliolist: [
            {
                img: process.env.PUBLIC_URL + '/assets/profile2.jpg',
                headder: 'web Post',
                content: 'เว็บเพิ่มข้อมูล ด้วย state hook'+
                            '',
                dev_font: '#Reactjs',
                dev_back: 'ไม่มี',
                dev_db: 'ไม่มี',
                url : 'https://sharedmovies01.herokuapp.com/',
            },
            {
                img: process.env.PUBLIC_URL + '/assets/profile2.jpg',
                headder: 'Lorem Ipsum is simply dummy ',
                content: 'Lorem Ipsum is simply dummy text of the printing '+
                            'and typesetting industry. Lorem Ipsum has been the'+
                            " industry's standard dummy text ever since the 1500s,"+
                            " when an unknown printer took a galley of type and "+
                            "scrambled it to make a type specimen book. "+
                            '',
                dev_font: 'xxx',
                dev_back: 'xxx',
                dev_db: 'xxx',
                url : 'www.google.com',
            },
            {
                img: process.env.PUBLIC_URL + '/assets/profile2.jpg',
                headder: 'Bot facebook ',
                content: 'ดึงข้อมูลจาก facebook ลงฐานข้อมูล โพสข้อความอัตโนมัติ'+
                            ' มีระบบสมาชิก Authentication CRUD + API + puppeteer',
                dev_font: 'Angular',
                dev_back: 'NestJS',
                dev_db: 'mongodb',
                url : 'https://mkoffice.vegasrj.live/',
            },
        ],
    },


}