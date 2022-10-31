const today =document.querySelector(".today")
const now =document.querySelector(".now")
now.textContent=Date.call()

today.textContent=Date.call()
const qod =document.getElementById("qod")
const author =document.getElementById("author")

//geting the quote and current
async function getQuote(){
  
    let quote = await fetch('https://goquotes-api.herokuapp.com/api/v1/random?count=2',{
      mode:"cors",
      headers:{
         'Access-Control-Allow-Origin':'https://goquotes-api.herokuapp.com/api/v1/random?count=2'
      }
    }).then((res)=>{
   
        return res.json()}).then((data)=>{
              author.innerText =data.quotes[0].author
        qod.innerText=data.quotes[0].text
    }).catch((err)=>{
      })
   

}
getQuote()
//sidebar functionality
const cross =document.querySelector(".cross")
const menu =document.querySelector(".menu")
cross.onclick=()=>{
    document.querySelector(".sidebar").style.display="none"

   
}
menu.onclick=()=>{
    document.querySelector(".sidebar").style.display="grid"

}
//handling date picked
const submit =document.querySelector(".submit")
const BD =document.getElementById("date")


submit.onclick=(e)=>{
    e.preventDefault()
    if(BD.value.length<7){
        alert("your birthday is empty")
    }
    else{
        document.querySelector(".yourHoroscope").style.display="grid"
    const month=Number(BD.value.slice(5,7))-1
    //displaying horoscope data
const closehoro=document.querySelector(".cross_horo")
closehoro.onclick=()=>{
    document.querySelector(".yourHoroscope").style.display="none"
}
document.querySelector(".horoscope_container").style.background=`linear-gradient(90deg,rgba(2, 32, 30, 0.582),rgba(0, 0, 0, 0.759),rgba(182, 8, 83, 0.4) ),url("${zodiac_data[month].url}")`
document.querySelector(".horoscope_container").style.backgroundSize="cover"

const zodiac_sign=document.querySelector(".zodiac")
zodiac_sign.innerText=zodiac_data[month].sign
const horoscope_text=document.querySelector(".horoscope")
horoscope_text.innerText=zodiac_data[month].horoscope

    }
    
    BD.value=""
    
}









//lol literary had to learn astrology to do this
//data selected on horoscopes 
const zodiac_data=[
    {       month:"january",
            horoscope:"It will be an excellent time for you and your family. You need to sit together and discuss matters of utmost importance. It will help you bring people together in a great way, and your bond will get stronger day by day. You need to be active this month so that you can utilize various opportunities.",
            sign:"capricorn",
            url:"https://askastrology.com/wp-content/uploads/2020/07/capricorn_astrology_sign.jpg"}
    ,{
           month:"february",
           horoscope:"You will face troubles in your career during this time. It is an excellent time to think about alternative job aspects. People involved in business will face losses like never before. However, there are always a lot of opportunities for redemption, so try not to lose focus.",
           sign:"aquarius",
           url:"https://askastrology.com/wp-content/uploads/2020/07/aquarius_astrology_sign.jpg"}
     ,   {   
        month:"march",
        horoscope:"You may get to spend a lot of time having fun with someone you like. This month would bring you planned financial gains from increments, as well as tips from your friends for a successful financial investment. This may provide you with an anticipated return",
        sign:"Aries",
        url:"https://miro.medium.com/max/1400/1*qZcNEkZHinQ8sdc-Y8v3-g.jpeg",
     },
     {   
        month:"april",
        horoscope:"This is a time to settle the issues in the relationship, and you have to focus on improving the existing relationships. Let it be a business or personal relationship; please consider the mindset of others as well. You may get new job offers, or you have to go for interviews as well. This is also a good time to improve your business. This is also a time to socialize and you will meet new people.",
        sign:"Pisces",
        url:"https://askastrology.com/wp-content/uploads/2020/07/pisces_astrology_sign.jpg"
     },
     {   
        month:"may",
        horoscope:"You shall complete all of your tasks using your communication skills and overcome ongoing disputes with others using your persuasive ability. Your strength would grow, and you would be able to complete several projects on time, paving the way for financial gain in your life. Aside from that, you are likely to develop in long-term ventures that would yield positive results in the long run.",
        sign:"Taurus",
        url:"https://askastrology.com/wp-content/uploads/2020/07/taurus-astrology-sign.jpg"
     },
     {   
        month:"june",
        horoscope:"Engineering-related work or employment may lead to success. Students are encouraged to practise their skills and remain centred. Many of you who get nervous or stressed out about exams should break down your training plan into baby steps. This would support you in your test. When giving gifts to your partner, be romantic and imaginative",
        sign:"gemini",
        url:"https://askastrology.com/wp-content/uploads/2020/07/gemini_astrology_sign.jpg"     },
     {   
        month:"july",
        horoscope:"you’re hoping to spend more time working remotely or have grown bored with your current occupation. Unfortunately, the desire for a fresh start could bring out an impulsive streak, though you should avoid quitting your job on a whim without a safety net under you. Luckily, this cosmic climate could also drum up new leadership opportunities, though you’ll need to get comfortable with the idea of having authority over others",
        sign:"cancer",
        url:"https://askastrology.com/wp-content/uploads/2020/07/cancer_astrology_sign.jpg"
     },
     {   
        month:"august",
        horoscope:" You have the innate ability to do wonders, and you will be able to realize this during this time.you must be careful and not talk to anyone excessively at the workplace, or someone might take advantage of it and hurt you. If you take care of these little things then your performance will be even better at work. ",
        sign:"leo",
        url:"https://askastrology.com/wp-content/uploads/2020/07/leo_astrology_sign.jpg"
     },
     {   
        month:"september",
        horoscope:" This month could be beneficial to your health and fitness. There is no extensive illness on the horizon. About the middle of this month, your health would remain mediocre. However, you would soon feel at ease with your health and fitness levels.",
        sign:"virgo",
        url:"https://askastrology.com/wp-content/uploads/2020/07/virgo_astrology_sign.jpg"
     },
     {   
        month:"october",
        horoscope:" You should expect to get favourable outcomes from some important aspects of your life. But you need to pay attention to your health and family life as these will be among the weaker sections of your life during this time, and ignoring them can lead to stress and major problems. Try to stay away from mental stress as much as possible and drive your vehicle carefully.",
        sign:"libra",
        url:"https://askastrology.com/wp-content/uploads/2020/07/libra_astrology_sign.jpg"
     },
     {   
        month:"november",
        horoscope:"You need to stay passive as much as possible. Heated discussions with anyone need to be avoided in order to ensure peace and stability in your life. You will feel the need to start something new in life, and this is the right time to do so",
        sign:"Scorpius",
        url:"https://askastrology.com/wp-content/uploads/2020/07/scorpio_astrology_sign.jpg"
     },
     {   
        month:"december",
        horoscope:"You should maintain your cool at work and be able to remain calm in stressful situations. Also, keep a close eye on your remarks to avoid getting into heated debates with your professional colleagues. Your mother's health may be a source of concern this month, as she would likely experience some health issues. Similarly, monitor your child's eating habits and ensure that they follow a healthy lifestyle pattern",
        sign:"sagittarius",
        url:"https://askastrology.com/wp-content/uploads/2020/07/sagittarius_astrology_sign.jpg"
     },


]




