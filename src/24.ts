import { useState } from 'react';

const MySchoolProject = () => {
  const [data, setData] = useState({
    name: '',
    age: 0,
    gender: ''
  });

  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value
    });
  };

  return (
    <div>
      <h1>MySchoolProject</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input id="name" name="name" type="text" required value={data.name} onChange={handleChange} />
        <br />

        <label htmlFor="age">Age:</label>
        <input id="age" name="age" type="number" required value={data.age} onChange={handleChange} />
        <br />

        <label htmlFor="gender">Gender:</label>
        <select id="gender" name="gender" required value={data.gender} onChange={handleChange}>
          <option value="">Select...</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <br />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

const handleSubmit = (event) => {
  event.preventDefault();
};
