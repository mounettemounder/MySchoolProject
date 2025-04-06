import { useState } from "react";

function MyComponent() {
  const [data, setData] = useState({
    name: "John",
    age: 20,
    address: {
      street: "123 Main St",
      city: "Anytown",
      state: "CA"
    }
  });

  const handleChange = (event) => {
    const { value } = event.target;
    setData({ ...data, [value]: "" });
  };

  return (
    <div>
      <input
        type="text"
        onChange={handleChange}
        value={data.name}
        placeholder="Enter name"
      />
      <input
        type="number"
        onChange={handleChange}
        value={data.age}
        placeholder="Enter age"
      />
      <select value={data.address.city} onChange={(e) => setData({ ...data, address: { ...data.address, city: e.target.value } })}>
        <option value="">-- Select City --</option>
        <option value="Anytown">Anytown</option>
        <option value="Anytown, CA">Anytown, CA</option>
      </select>
    </div>
  );
}

export default MyComponent;
