import { Component } from "react";
import "./faq.css"
class FAQS extends Component{
    state={
        activeindex:null
    }
    togglefaqs=(index)=>{
        this.setState((prev)=>({
          activeindex:prev.activeindex ===index?null:index
        }))
    }
    render(){
         const faqs =[
                {
                   question: 'What is IRC?',
                   answer: 'IRC is an Internal Review Committee to guide and mentor students.',
                },
                {
                    question: 'What is the medium of instruction?',
                    answer: 'The medium of instruction is English.',
                },
                {
                    question: 'Is there an EMI option to pay the fee for CCBP Tech 4.0 Intensive?',
                    answer: 'Yes, EMI options are available through our payment partners.',
                },
                {
                    question: 'How will my doubts be cleared? What is the mechanism?',
                    answer: 'You can raise doubts through the platform, and mentors will respond.',
                },
            ];
        const {activeindex}=this.state

        return(
            <div className="back_bg">
                <div className="faq-bg">
                    <h1>FAQs</h1>
                    <div className="faq-list">
                      {faqs.map((item,index)=>(
                        <div 
                            key={index}
                            className={`${activeindex===index?"active":""}`}
                            onClick={()=>this.togglefaqs(index)}
                        >
                        <div className="butchnage">
                            <p>{item.question}</p>
                            <span>{activeindex===index?"-":"+"}</span>
                        </div>
                        {activeindex===index&& 
                        ( 
                        <div className="faq-ans">
                            <p>{item.answer}</p>
                        </div>
                         )}
                        </div>
                             ))}
                      
                    </div>
                </div>
            </div>

        )
    }
}
export default FAQS