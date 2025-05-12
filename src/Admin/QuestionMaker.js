import React from "react";
import './QuestionMaker.css';

const QuestionMaker = ()=>{
    return(
        <div>
             <div className="con">
            <div className="left1"><i class="fa-solid fa-house-chimney"></i><a href="#">Home</a>/ Question Maker</div>
              
                <from className="rightee">
                    
                <label htmlFor="role" className="brance"><h3>Brance</h3></label>
                <select id="role" name="role" className="rolee">
                    <option value="brance">xiii</option>
                    <option value="xii">xii</option>
                </select>

                <label htmlFor="role" className="brance"><h3>Sesson</h3></label>
                <select id="role" name="role" className="rolee">
                    <option value="brance">2023</option>
                    <option value="xii">2024</option>
                    <option value="xii">2025</option>
                </select>
                
             </from>
             </div>


             <div className="Question">
                <div className="Maker"><h2>Question Maker</h2></div>

                <from className="Questione">
                    <label htmlFor="role" className="makertwo"><h3>Class Name</h3></label>
                    <select id="role" name="role"className="makerone">
                        <option value="one">One</option>
                        <option value="one">Two</option>
                        <option value="one">Three</option>
                        <option value="one">Four</option>
                        <option value="one">Five</option>
                        <option value="one">Six</option>
                        <option value="one">Seveen</option>
                        <option value="one">Eight</option>
                        <option value="one">Nine</option>
                        <option value="one">Ten</option>
                    </select>

                    <label htmlFor="role" className="makertwo"><h3>Subject</h3></label>
                    <select id="role" name="role" className="makerone">
                        <option value="Bangle">Bangle</option>
                        <option value="Bangle">English</option>
                        <option value="Bangle">Math</option>
                    </select>

                    <label htmlFor="role" className="makertwo"><h3>Chapter</h3></label>
                    <select id="role" name="role" className="makerone">
                        <option value="Chapter">Chapter 1</option>
                        <option value="Chapter">Chapter 2</option>
                        <option value="Chapter">Chapter 3</option>
                        <option value="Chapter">Chapter 4</option>
                        <option value="Chapter">Chapter 5</option>
                        <option value="Chapter">Chapter 6</option>
                        <option value="Chapter">Chapter 7</option>
                        <option value="Chapter">Chapter 8</option>
                    </select>

                    <label htmlFor="role" className="makertwo"><h3>Question Type</h3></label>
                    <select id="role" name="role" className="makerone">
                        <option value="short">Long Question</option>
                        <option value="short">Short Question</option>
                        <option value="short">5 Question</option>
                        <option value="short">MCQ</option>
                    </select>

                </from>
                <div className="makerthree">
                    
                        <button type="submit" className="makerfour"><b>Submit</b></button>
                    </div>
             </div>

        </div>
    )
}

export default QuestionMaker;