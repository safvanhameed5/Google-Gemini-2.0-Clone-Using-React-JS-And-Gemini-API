import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/context'
import { RiCompass3Line } from "react-icons/ri";
import { FaRegLightbulb } from "react-icons/fa";
import { FiMessageSquare } from "react-icons/fi";
import { FaCode } from "react-icons/fa6";
import { RiImageAddLine } from "react-icons/ri";
import { FaMicrophone } from "react-icons/fa";
import { AiOutlineSend } from "react-icons/ai";

const Main = () => {

    const {onSent, recentPrompt, showResult, loading, resultData, setInput, input} = useContext(Context)
  return (
    <div className='main'>
        <div className="nav">
            <p>Gemini</p>
            <img src={assets.user_icon} alt="" />
        </div>
        <div className="main-container">
            { !showResult?
            <>
                <div className="greet">
                <p><span>Hello, Saf.</span></p>
                <p>How can I help you today?</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>Suggest beautiful places</p>
                    <RiCompass3Line className='card-icon' />
                </div>
                <div className="card">
                    <p>Quiz me about science fiction movies</p>
                    <FaRegLightbulb className='card-icon' />
                </div>
                <div className="card">
                    <p>Suggest beautiful places</p>
                    <FiMessageSquare className='card-icon'/>
                </div>
                <div className="card">
                    <p>Suggest beautiful places</p>
                    <FaCode className='card-icon' />
                </div>
            </div>
            </>
            :<div className='result'>
                <div className="result-title">
                    <img src={assets.user_icon} alt="" />
                    <p>{recentPrompt}</p>
                </div>
                <div className="result-data">
                    <img className={loading ? "spin" : "result-data"} src={assets.gemini_icon} alt="" />
                    {loading?
                    <div className="loader">
                        <hr />
                        <hr />
                        <hr />
                    </div>:
                    <p dangerouslySetInnerHTML={{__html:resultData}}></p>
                    }
                </div>
            </div>
            }
            
            <div className="main-bottom">
                <div className="search-box">
                    <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here.'/>
                    <div>
                    <RiImageAddLine className='search-box-image'/>
                    <FaMicrophone className='search-box-image' />
                        {input?<AiOutlineSend className='search-box-image' onClick={()=>onSent()} />:null}
                    </div>
                </div>
                <p className="bottom-info">Gemini may display inaccurate info, including about people, so double-check its responses.</p>
            </div>
        </div>
    </div>
  )
}

export default Main

