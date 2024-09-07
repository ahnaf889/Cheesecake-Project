import React from 'react'
import { FaFacebook,FaInstagramSquare,FaTwitter,FaYoutube } from "react-icons/fa";
import Cake from '../../assets/Cake.png'

const AboutUs = () => {
  return (
    <>
    <div className='flex justify-between items-center my-[100px]'>
        <div>
            <picture>
                <img className='w-[50%] h-[50%]' src={Cake} alt={Cake} />
            </picture>
        </div>
        <div>
            <h2 className='font-Roboto text-[60px] font-normal text-[#220404]'>We Love Cheesecake</h2>
            <p className='font-Roboto text-[24px] mt-[-10px] font-normal text-[#1B0B0BBF]'>Discover Our Cheesecake Story</p>
            <p className='font-Roboto text-[20px] mt-[30px] w-[558px] font-normal text-[#1B0B0BBF]'>At Cheesecake Love, quality is our cornerstone. Each cheesecake is crafted with the finest ingredients, meticulous attention to detail, and a dash of creativity. </p>
            <p className='font-Roboto text-[20px] mt-[20px] w-[558px] font-normal text-[#1B0B0BBF]'>We believe in delivering not just desserts but moments of sheer indulgence.</p>
            <button className='mt-[30px] px-[40px] py-[13px] text-white font-Roboto rounded-[100px] text-[14px] bg-[#6A4028]'>Read More</button>
        </div>
    </div>
    </>
  )
}

export default AboutUs