import React, { useRef } from "react";
import Axios from 'axios'
const Register = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const phoneRef = useRef();
  const divisionRef = useRef();
  const districtRef = useRef();
  const ThanaRef = useRef();
  const addressRef = useRef();
  const imageRef = useRef();

  const handleSubmit = async(e) => {
    e.preventDefault();
    const formData = new FormData();
    console.log(nameRef.current.value)
    formData.append("name", nameRef.current.value);
    formData.append("email", emailRef.current.value);
    formData.append("password", passwordRef.current.value);
    formData.append("phone", phoneRef.current.value);
    formData.append("division",divisionRef.current.value);
    formData.append("district", districtRef.current.value);
    formData.append("Thana", ThanaRef.current.value);
    formData.append("address", addressRef.current.value);
    formData.append("image", imageRef.current.files[0]);
    console.log(formData);
    const res = await Axios.post('http://localhost:8000/api/user/register', formData);
        console.log(res.data);
  };

  return (
    <div>
      <br/>
      <form className="container" onSubmit={handleSubmit}>
        <input placeholder="Enter your Name" ref={nameRef} />
        <input placeholder="Enter your Email" ref={emailRef} />
        <input placeholder="Enter your password" ref={passwordRef} />
        <input placeholder="Enter your phone" ref={phoneRef} />
        <input placeholder="Enter your division" ref={divisionRef} />
        <input placeholder="Enter your district" ref={districtRef} />
        <input placeholder="Enter your Thana" ref={ThanaRef} />
        <input placeholder="Enter your address" ref={addressRef} />
        <input type="file" ref={imageRef} /> <br/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Register;


// import { useState } from "react";
// import Axios from 'axios';

// const Register = () => {
//     let [FormObj, SetFormObj] = useState({
//         name: "",
//         email: "",
//         password: "",
//         phone: "",
//         division: "",
//         district: "",
//         Thana: "",
//         address: "",
//         role: "",
//         image: null
//     });

//     const InputChange = (property, value) => {
//         SetFormObj(prevObj => ({
//             ...prevObj,
//             [property]: value
//         }));
//     }

//     const handleImageChange = (e) => {
//         const file = e.target.files[0];
//         SetFormObj(prevObj => ({
//             ...prevObj,
//             image: file
//         }));
//     };

//     const FormSubmit = async (e) => {
//         e.preventDefault();

//         try {
//             console.log(FormObj);
//             const formData = new FormData();
//             formData.append('name', FormObj.name);
//             formData.append('email', FormObj.email);
//             formData.append('password', FormObj.password);
//             formData.append('phone', FormObj.phone);
//             formData.append('division', FormObj.division);
//             formData.append('district', FormObj.district);
//             formData.append('Thana', FormObj.Thana);
//             formData.append('address', FormObj.address);
//             formData.append('role', FormObj.role);
//             formData.append('image', FormObj.image);
//             console.log(formData)
//             const res = await Axios.post('http://localhost:8000/api/user/register', formData);
//             console.log(res.data);
//         } catch (error) {
//             if (error.response) {
//                 console.error('Server responded with status:', error.response.status);
//                 console.error('Response data:', error.response.data);
//             } else if (error.request) {
//                 console.error('No response received:', error.request);
//             } else {
//                 console.error('Error setting up request:', error.message);
//             }
//         }
//     };

//     return (
//         <div className="container">
//             <form onSubmit={FormSubmit}>
//                 {/* Input fields */}
//                 <input onChange={(e)=>{InputChange("name",e.target.value)}} value={FormObj.name} placeholder="Name"  required/><br/>

//          <input onChange={(e)=>{InputChange("email",e.target.value)}} value={FormObj.email} placeholder="email" required/><br/>
//          <input onChange={(e)=>{InputChange("password",e.target.value)}} value={FormObj.password} placeholder="password" required/><br/>
//          <input onChange={(e)=>{InputChange("phone",e.target.value)}} value={FormObj.phone} placeholder="phone" required/><br/>
//          <input onChange={(e)=>{InputChange("division",e.target.value)}} value={FormObj.division} placeholder="division" required/><br/>
//          <input onChange={(e)=>{InputChange("district",e.target.value)}} value={FormObj.district} placeholder="district" required/><br/>

//          <input onChange={(e)=>{InputChange("Thana",e.target.value)}} value={FormObj.Thana} placeholder="Thana" required/><br/>
//          <input onChange={(e)=>{InputChange("role",e.target.value)}} value={FormObj.role} placeholder="role" required/><br/>
//                 <input type="file" accept="image/*" onChange={handleImageChange} />
//                 <button type="submit">Submit</button>
//             </form>
//         </div>
//     );
// };

// export default Register;

// import {useState } from "react";
// import Axios from 'axios';
// const Register = () => {
//     let [FormObj,SetFormObj] = useState({name:"",email:""
//     ,password:"",phone:"",division:"",district:"",Thana:"",address:"", role:"",image:null});
//     const InputChange = (property,value) =>{
//         SetFormObj(prevObj=>({
//             ...prevObj,
//             [property]: value
//         }))
//     }
//     const handleImageChange = (Image) => {

//         SetFormObj(prevObj => ({
//             ...prevObj,
//             image: Image
//         }));
//     };

//     // const FormSubmit = async(e) =>{
//     //     e.preventDefault();
//     //     let res = await Axios.post('http://localhost:5173/api/user',)
//     //      console.log(FormObj);
//     // }
//     const FormSubmit = async (e) => {
//         e.preventDefault();
//         console.log(FormObj)

//         try {
//             const res = await Axios.post('http://localhost:8000/api/user/register',FormObj);
//             console.log(res.data);
//         } catch (error) {
//             console.error('Error submitting form:', error);
//         }
//     };

//      return (
//       <div  className="container">
//           <br/>
//          <form onSubmit={FormSubmit}>
//          <input onChange={(e)=>{InputChange("name",e.target.value)}} value={FormObj.name} placeholder="Name"  required/><br/>
//          <input onChange={(e)=>{InputChange("email",e.target.value)}} value={FormObj.email} placeholder="email" required/><br/>
//          <input onChange={(e)=>{InputChange("password",e.target.value)}} value={FormObj.password} placeholder="password" required/><br/>
//          <input onChange={(e)=>{InputChange("phone",e.target.value)}} value={FormObj.phone} placeholder="phone" required/><br/>
//          <input onChange={(e)=>{InputChange("division",e.target.value)}} value={FormObj.division} placeholder="division" required/><br/>
//          <input onChange={(e)=>{InputChange("district",e.target.value)}} value={FormObj.district} placeholder="district" required/><br/>

//          <input onChange={(e)=>{InputChange("Thana",e.target.value)}} value={FormObj.Thana} placeholder="Thana" required/><br/>
//          <input onChange={(e)=>{InputChange("role",e.target.value)}} value={FormObj.role} placeholder="role" required/><br/>
//          <input onChange={(e)=>{InputChange("address",e.target.value)}} value={FormObj.address} placeholder="address" required/><br/>
//          <input type="file" onChange={(e)=>{handleImageChange(e.target.files[0])}} required/><br/>
//           <button type="submit">Submit</button>
//          </form>
//       </div>
//      )
// };

// export default Register;
