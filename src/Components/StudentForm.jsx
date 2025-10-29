import { useState } from "react"
function StudentForm() {
  const [data, setData] = useState({
    studentName: "",
    studentId: "",
    email: "",
    number:"",

  })

  const changeHandler=(e)=>{
   const {name,value} = e.target;
   setData((prev)=>({...prev,[name]: value}));

   localStorage.setItem("StudentData",JSON.stringify({...Data, [name]:value}));
  }

 const FormSubmit=(e)=>{
  e.preventDefault();
    console.log(data)
  }


  return (
    <div className="flex items-center justify-center">
      <form className="bg-blue-200 shadow-xl w-100 flex flex-col gap-2 px-4 py-4 rounded-lg mt-50" onSubmit={FormSubmit}>
        <div>
          <label htmlFor='studentName' className="text-xl font-semibold">Student Name: </label>
          <input
            className="bg-white p-1 hover:bg--200 border-2 border-gray-500 rounded-sm"
            type='text'
            id='studentName'
            name='studentName'
            value={data.studentName}
            onChange={changeHandler}
            placeholder='enter your name'
          />
        </div>
        <div>
          <label htmlFor='studentId' className="text-xl font-semibold">Student_Id: </label>
          <input
            className="bg-white p-1 hover:bg--200 border-2 border-gray-500 rounded-sm"
            type='text'
            id='studentId'
            name='studentId'
            value={data.studentId}
            onChange={changeHandler}
            placeholder='enter your Id'
          />
        </div>
        <div>
          <label htmlFor='email' className="text-xl font-semibold">email: </label>
          <input
          className="bg-white p-1 hover:bg--200 border-2 border-gray-500 rounded-sm"
            type='email'
            id='email'
            name='email'
            value={data.email}
            onChange={changeHandler}
            placeholder='enter your email'
          />
        </div>
        <div>
          <label htmlFor='number' className="text-xl font-semibold">mobile: </label>
          <input
          className="bg-white p-1 hover:bg--200 border-2 border-gray-500 rounded-sm"
            type='number'
            id='number'
            name='number'
            value={data.number}
            onChange={changeHandler}
            placeholder='enter your phone number'
          />
        </div>

        <div>
          <label className="text-xl font-semibold">Branch: </label>
          <select className="bg-white p-1 hover:bg--200 border-2 border-gray-500 rounded-sm">
            <option>CS</option>
            <option>civil</option>
            <option>EC</option>
          </select>
        </div>

        <button type="submit"className="shadow-xl bg-indigo-400 text-lg font-bold rounded-xl p-1 my-5" >Submit</button>

      </form>
    </div>
  )
}

export default StudentForm;