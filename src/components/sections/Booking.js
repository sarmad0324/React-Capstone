import { useState } from "react";

import { Link } from "react-router-dom";

export default function Booking() {
    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const [email, setEmail] = useState("");
    const [tel, setTel] = useState("");
    const [people, setPeople] = useState(1);
    const [date, setDate] = useState("");
    const [occasion, setOccasion] = useState("");
    const [preferences, setPreferences] = useState("");
    const [comments, setComments] = useState("");

    const clearForm = () => { 
        setFName(""); 
        setComments(""); 
        setEmail(""); 
        setDate(""); 
        setLName("")
        setTel("")
        setDate("")
        setPeople("")
        setOccasion("")
        setPreferences("")
      }; 
    function handleSubmit(e){
        e.preventDefault(); 
        if(fName && email && tel && people && date && date){
            clearForm()
        }else{
            alert("kindly fill all the details")
        }
    }

    return (
        <form className=" text-center border border-gray-400 rounded text-gray-600" onSubmit={handleSubmit} >
            <div class="container px-5 py-24 mx-auto">
                <div class="lg:w-1/3 md:w-2/5 sm:w-3/5 mx-auto">
                    <div class="flex flex-wrap -m-2">
                        <div class="p-2 w-full">
                            <div className="relative">
                                <label htmlFor="fName" className="leading-7 text-sm text-gray-600">First Name</label> <br></br>
                                <input
                                    className="w-full bg-gray-200 bg-opacity-50 rounded border border-gray-400 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    type="text"
                                    id="fName"
                                    placeholder="First Name"
                                    required
                                    minLength={2}
                                    maxLength={50}
                                    value={fName}
                                    onChange={(e) => setFName(e.target.value)}
                                ></input>
                            </div>
                        </div>
                        <div class="p-2 w-full">
                            <div class="relative">
                                <label htmlFor="email" className="leading-7 text-sm text-gray-600">Last Name</label> <br></br>
                                <input
                                    className="w-full bg-gray-200 bg-opacity-50 rounded border border-gray-400 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    type="text"
                                    id="email"
                                    placeholder="Last Name"
                                    value={lName}
                                    required
                                    minLength={4}
                                    maxLength={200}
                                    onChange={(e) => setLName(e.target.value)}
                                ></input>
                            </div>
                        </div>
                        <div class="p-2 w-full">
                            <div class="relative">
                                <label htmlFor="email">Email</label> <br></br>
                                <input
                                    className="w-full bg-gray-200 bg-opacity-50 rounded border border-gray-400 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    type="email"
                                    id="email"
                                    placeholder="Email"
                                    value={email}
                                    required
                                    minLength={4}
                                    maxLength={200}
                                    onChange={(e) => setEmail(e.target.value)}
                                ></input>
                            </div>
                        </div>
                        <div class="p-2 w-full">
                            <div class="relative">
                                <label htmlFor="phonenum">Phone Number</label> <br></br>
                                <input
                                    className="w-full bg-gray-200 bg-opacity-50 rounded border border-gray-400 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    type="tel"
                                    id="phonenum"
                                    placeholder="(xxx)-xxx-xxxx"
                                    value={tel}
                                    required
                                    minLength={10}
                                    maxLength={25}
                                    onChange={(e) => setTel(e.target.value)}
                                ></input>
                            </div>
                        </div>
                        <div class="p-2 w-full">
                            <div class="relative">
                                <label htmlFor="people">Number of People</label> <br></br>
                                <input
                                    className="w-full bg-gray-200 bg-opacity-50 rounded border border-gray-400 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    type="number"
                                    id="people"
                                    placeholder="Number of People"
                                    value={people}
                                    required
                                    min={1}
                                    max={100}
                                    onChange={(e) => setPeople(e.target.value)}
                                ></input>
                            </div>
                        </div>
                        <div class="p-2 w-full">
                            <div class="relative">
                                <label htmlFor="date">Select Date</label> <br></br>
                                <input
                                    className="w-full bg-gray-200 bg-opacity-50 rounded border border-gray-400 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    type="date"
                                    id="date"
                                    required
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                >
                                </input>
                            </div>
                        </div>
                        <div class="p-2 w-full">
                            <div class="relative">
                                <label htmlFor="time">Select Time</label> <br></br>
                                <select id="time" className="w-full bg-gray-200 bg-opacity-50 rounded border border-gray-400 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required>
                                    <option>----</option>
                                    <option>8:00pm</option>
                                    <option>9:00pm</option>
                                    <option>10:00pm</option>
                                    <option>11:00pm</option>
                                </select>
                            </div>
                        </div>
                        <div class="p-2 w-full">
                            <div class="relative">
                                <label htmlFor="occasion">Occasion</label> <br></br>
                                <select
                                    className="w-full bg-gray-200 bg-opacity-50 rounded border border-gray-400 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    id="occasion"
                                    value={occasion}
                                    onChange={(e) => setOccasion(e.target.value)}
                                >
                                    <option>None</option>
                                    <option>Birthday</option>
                                    <option>Anniversary</option>
                                    <option>Engagement</option>
                                    <option>Other</option>
                                </select>
                            </div>
                        </div>
                        <div class="p-2 w-full">
                            <div class="relative">
                                <label htmlFor="preferences">Seating preferences</label> <br></br>
                                <select
                                    className="w-full bg-gray-200 bg-opacity-50 rounded border border-gray-400 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    id="preferences"
                                    value={preferences}
                                    onChange={(e) => setPreferences(e.target.value)}
                                >
                                    <option>None</option>
                                    <option>Indoors</option>
                                    <option>Outdoor (Patio)</option>
                                    <option>Outdoor (Sidewalk)</option>
                                </select>
                            </div>
                        </div>
                        <div class="p-2 w-full">
                            <div class="relative">
                                <label for="message" class="leading-7 text-sm text-gray-600">Additional Comments</label>
                                <textarea id="message" name="message" 
                                    class="w-full bg-gray-300 bg-opacity-50 rounded border border-gray-400 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                    value={comments}
                                    onChange={(e) => setComments(e.target.value)}
                                ></textarea>
                            </div>
                        </div>
                        <div class="p-2 w-full">
                            <br></br>
                            <small>
                                <p>
                                    Note: You cannot edit your reservation after submission. Please
                                    double-check your answer before submitting your reservation request.
                                </p>
                            </small>
                            <br />
                       
                                <Link to='/conformation' className="bg-red-600 px-4 py-2" type="submit">Book a table</Link>
              
                            
                        </div>

                    </div>
                </div>
            </div>
        </form>
    );
}
