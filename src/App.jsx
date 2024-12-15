import {useEffect, useState} from 'react'
import './App.css'
import sidebarmob from './assets/assets/images/bg-sidebar-mobile.svg'
import arcade from './assets/assets/images/icon-arcade.svg'
import advanced from './assets/assets/images/icon-advanced.svg'
import pro from './assets/assets/images/icon-pro.svg'
import ty from './assets/assets/images/icon-thank-you.svg'

import { MdToggleOn } from "react-icons/md";
import { MdToggleOff } from "react-icons/md";


function App() {
  const [page, setPage] = useState(1)
    const [toggle, setToggle] = useState(false)
    const [page2Choice, setPage2Choice] = useState(0)
    const [page3Choices, setPage3Choices] = useState([false, false, false])




  function handlePage3(num){
      let arr = [...page3Choices]
      arr[num] = !arr[num]
      setPage3Choices(arr)
  }


    const [yearlyPrice, setYearlyPrice] = useState('')
    const [totalYearly, setTotalYearly] = useState('')

    function calcTotal(){
      let total = 0
      if(page3Choices[0] === true){
          let add1 = toggle ? 10 : 12
          console.log('add1',add1)
           total += add1
          console.log('after 1', total)

      }

      if(page3Choices[1] === true){
            let add2 = toggle ? 20 : 24
          console.log('add2',add2)
            total = total + add2
          console.log('after 2', total)
        }

        if(page3Choices[2] === true){
            let add3 = toggle ? 20 : 24
            console.log('add3',add3)
            total = total + add3
            console.log('after 3', total)
        }

        console.log(total)

        setTotalYearly(String(total))
    }

  function calcYearly(){
      if(page2Choice === 1){
          setYearlyPrice(toggle ?  '90': '120')
      }else if(page2Choice === 2){
          setYearlyPrice(toggle ?  '120': '144')
      } else if(page2Choice === 3){
          setYearlyPrice(toggle ?  '150': '180')
      }

  }



    useEffect(() => {
        console.log(page3Choices)
        console.log(yearlyPrice)
    }, [page3Choices, yearlyPrice]);


  return (
      <div>
      <img src={sidebarmob} className='w-full lg:hidden'/>



       <div className='relative bottom-44 lg:static'>
         <div className='flex justify-center mt-10 lg:hidden'>
          <div className={`mx-2 px-4 py-2 border rounded-full ${page === 1 ? 'bg-cyan-200 border-black': 'bg-none border-white text-white' } font-bold`}>1</div>
          <div className={`mx-2 px-4 py-2 border rounded-full ${page === 2 ? 'bg-cyan-200 border-black': 'bg-none border-white text-white' } font-bold`}>2</div>
          <div className={`mx-2 px-4 py-2 border rounded-full ${page === 3 ? 'bg-cyan-200 border-black': 'bg-none border-white text-white' } font-bold`}>3</div>
          <div className={`mx-2 px-4 py-2 border rounded-full ${page === 4 || page === 5 ? 'bg-cyan-200 border-black': 'bg-none border-white text-white' } font-bold`}>4</div>


        </div>

         { page === 1 && <div className='bg-white mx-6 mt-10 rounded-xl px-7 py-6'>
          <div className='font-bold text-3xl'>Personal info</div>
          <div className='text-lg mb-5'>Please provide your name, email, address, and phone number.</div>
          <div>
            <div className='text-sm'>Name</div>
            <input placeholder='e.g. Stephen King' type='text' className='outline-0 border py-2 w-full px-3 rounded-md mb-3'/>
          </div>
          <div>
            <div className='text-sm'>Email Address</div>
            <input placeholder='e.g. Stephen King' type='text' className='outline-0 border py-2 w-full px-3 rounded-md mb-3'/>
          </div>
          <div>
            <div className='text-sm'>Phone Number</div>
            <input placeholder='e.g. Stephen King' type='text' className='outline-0 border py-2 w-full px-3 rounded-md mb-3'/>
          </div>


        </div>}

           {
               page === 2 && <div className='bg-white mx-6 mt-10 rounded-xl px-7 py-6'>
                   <div className='font-bold text-3xl'>Select your plan</div>
                   <div className='text-lg mb-5'>You have the option of monthly or yearly billing.</div>
                   <div className={`${page2Choice === 1 ?  'bg-blue-100 border-2 bg-opacity-40 border-blue-700': 'border'} py-3.5 flex rounded-lg px-4 mt-3`} onClick={() => {setPage2Choice(1)}}>
                       <img src={arcade}/>
                       <div className='pl-4'>
                           <div className='font-bold'>Arcade</div>
                           <div className='font-light'>{toggle ? '$90/yr' : '$9/mo'}</div>
                           {toggle && <div className='text-sm text-blue-800'>2 months free</div>}
                       </div>
                   </div>

                   <div className={`${page2Choice === 2 ?  'bg-blue-100 border-2 bg-opacity-40 border-blue-700': 'border'} py-3.5 flex rounded-lg px-4 mt-3`} onClick={() => {setPage2Choice(2)}}>
                       <img src={advanced}/>
                       <div className='pl-4'>
                           <div className='font-bold'>Advanced</div>
                           <div className='font-light'>{toggle ? '$120/yr' : '$12/mo'}</div>
                           {toggle && <div className='text-sm text-blue-800'>2 months free</div>}
                       </div>
                   </div>
                   <div className={`${page2Choice === 3 ?  'bg-blue-100 border-2 bg-opacity-40 border-blue-700': 'border'} py-3.5 flex rounded-lg px-4 mt-3`} onClick={() => {setPage2Choice(3)}}>
                       <img src={pro}/>
                       <div className='pl-4'>
                           <div className='font-bold'>Pro</div>
                           <div className='font-light'>{toggle ? '$150/yr' : '$15/mo'}</div>
                           {toggle && <div className='text-sm text-blue-800'>2 months free</div>}
                       </div>
                   </div>


                   <div className='flex bg-blue-50 py-1 px-4 justify-center text-lg mt-7 rounded-lg'>
                       <div className='mt-3.5'>Monthly</div>
                       {toggle === false && <MdToggleOff className='text-6xl ml-4 mr-4' onClick={() => setToggle(prev => !prev)}/>}
                       {toggle === true && <MdToggleOn className='text-6xl ml-4 mr-4' onClick={() => setToggle(prev => !prev)}/>}
                       <div className='mt-3.5'>Yearly</div>
                   </div>


               </div>
           }

           {
               page === 3 && <div className='bg-white mx-6 mt-10 rounded-xl px-7 py-6'>
                   <div className='font-bold text-3xl'>Pick add-ons</div>
                   <div className='text-lg mb-5'>Add-ons help enhance your gaming experience.</div>
                   <div className={`${page3Choices[0] ? 'border-blue-700 border' : 'border'} py-3.5 flex rounded-lg px-4 mt-3`} onClick={() => handlePage3(0)}>
                       <input type={"checkbox"} className='mr-4 scale-150' checked={page3Choices[0]}/>
                       <div className='flex w-full' >
                           <div className='w-4/5'>
                               <div className='font-bold'>Online service</div>
                               <div className='text-sm'>Access to multiplayer games</div>
                           </div>
                           <div className='w-1/5 mt-2 text-sm text-blue-800'>+${toggle? '10/yr':'1/mo'}</div>
                       </div>
                   </div>

                   <div className={`${page3Choices[1] ? 'border-blue-700 border' : 'border'} py-3.5 flex rounded-lg px-4 mt-3`} onClick={() => handlePage3(1)}>
                       <input type={"checkbox"} className='mr-4 scale-150' checked={page3Choices[1]}/>
                       <div className='flex w-full'>
                           <div className='w-4/5'>
                               <div className='font-bold'>Larger storage</div>
                               <div className='text-sm'>Extra 1TB of cloud save</div>
                           </div>
                           <div className='w-1/5 mt-2 text-sm text-blue-800'>+${toggle? '20/yr':'2/mo'}</div>
                       </div>
                   </div>

                   <div className={`${page3Choices[2] ? 'border-blue-700 border' : 'border'} py-3.5 flex rounded-lg px-4 mt-3`} onClick={() => handlePage3(2)}>
                       <input type={"checkbox"} className='mr-4 scale-150' checked={page3Choices[2]}/>
                       <div className='flex w-full'  >
                           <div  className='w-4/5'>
                               <div className='font-bold'>Customizable profile</div>
                               <div className='text-sm'>Custom theme on your profile</div>
                           </div>
                           <div className='w-1/5 mt-2 text-sm text-blue-800'>+${toggle? '20/yr':'2/mo'}</div>
                       </div>
                   </div>

               </div>
           }

           {
               page === 4 && <div className='bg-white mx-6 mt-10 rounded-xl px-7 py-6'>
                   <div className='font-bold text-3xl'>Finishing up</div>
                   <div className='text-lg mb-5'>Double-check everything looks OK before confirming.</div>
               <div className='bg-gray-100 px-4 py-4 rounded-lg'>
                   <div className='flex justify-between border-b pb-3'>
                       <div>
                           <div className='font-bold text-blue-800'>{page2Choice === 1 && 'Arcade'} {page2Choice === 2 && 'Advanced'} {page2Choice === 3 && 'Pro'} ({toggle ? 'Yearly': 'Monthly'})</div>
                            <div className='text-sm underline text-gray-500' onClick={() => {setPage(2)}}>Change</div>
                       </div>
                       <div className='text-blue-800 font-bold mt-2'>${yearlyPrice}/yr</div>
                   </div>
                   <div>
                       {page3Choices[0] && <div className='flex justify-between mt-3'>
                           <div className='text-gray-500'>Online service</div>
                           <div className='text-blue-800'>+${toggle ? '10': '12'}/yr</div>
                       </div>}
                       {page3Choices[1] && <div className='flex justify-between mt-1.5'>
                           <div className='text-gray-500'>Larger Storage</div>
                           <div className='text-blue-800'>+${toggle ? '20': '24'}/yr</div>
                       </div>}
                       {page3Choices[2] && <div className='flex justify-between mt-1.5'>
                           <div className='text-gray-500'>Customizable profile</div>
                           <div className='text-blue-800'>+${toggle ? '20': '24'}/yr</div>
                       </div>}
                   </div>
               </div>

                   <div className='flex justify-between mt-3 px-4'>
                       <div className='text-gray-500'>Total (per year)</div>
                       <div className='text-blue-700 text-lg font-bold'>${Number(totalYearly) + Number(yearlyPrice)}/yr</div>
               </div>


               </div>
           }

           {page === 5 && <div className='bg-white mx-6 mt-10 rounded-xl px-7 py-20'>
               <img src={ty} className='mx-auto mb-5'/>
               <div className='text-2xl font-bold text-center mb-4 text-blue-950'>Thank you!</div>
               <div className='text-gray-500 text-md text-center'>Thanks for confirming your subscription. We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com</div>
           </div>}


           {page === 1 && <div className='bg-white w-full fixed bottom-0 py-6 lg:hidden'>
               <div className='ml-auto mr-4 bg-blue-600 text-white rounded-lg py-1 px-3 w-max text-lg' onClick={() => {
                   setPage(2)
               }}>Next Step
               </div>
           </div>}

           {page === 2 && <div className='bg-white w-full fixed bottom-0 py-6 flex justify-between'>
                   <div className='text-lg ml-4 mt-1' onClick={()=> {setPage(1)}}>Go Back</div>
                   <div className=' mr-4 bg-blue-600 text-white rounded-lg py-1 px-3 w-max text-lg' onClick={() => {
                       setPage(3)
                   }}>Next Step
                   </div>
               </div>}

           {page === 3 && <div className='bg-white w-full fixed bottom-0 py-6 flex justify-between'>
                   <div className='text-lg ml-4 mt-1' onClick={()=> {setPage(2)}}>Go Back</div>
                   <div className=' mr-4 bg-blue-600 text-white rounded-lg py-1 px-3 w-max text-lg' onClick={() => {
                       setPage(4)
                       calcYearly()
                       calcTotal()
                   }}>Next Step
                   </div>
               </div>}

           {page === 4 && <div className='bg-white w-full fixed bottom-0 py-6 flex justify-between'>
               <div className='text-lg ml-4 mt-1' onClick={()=> {setPage(3)}}>Go Back</div>
               <div className=' mr-4 bg-blue-600 text-white rounded-lg py-1 px-3 w-max text-lg' onClick={() => {
                   setPage(5)
               }}>Confirm
               </div>
           </div>}

       </div>


      </div>
  )
}

export default App
