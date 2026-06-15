import {useState } from "react";

const Register = () => {
   const [formData, setFormData] = useState({
    name: "",
     email: "",
      password: "",
    });

 const handleFormData = (e) => {
    setFormData({
        ...formData,[e.target.name]: e.target.value});
};

console.log(formData);

return (
    <>
          <form method="post">
              <div>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" value={formData.name} placeholder="Name" onChange={handleFormData} />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" placeholder="Email" value={formData.email} onChange={handleFormData} />
                </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" placeholder="Password" value={formData.password} onChange={handleFormData} />
            </div>

            <button type="submit">Register</button>
          </form>

          <h2>{formData.name}</h2>
          <h2>{formData.email}</h2>
          
    </>
  )
}


export default Register