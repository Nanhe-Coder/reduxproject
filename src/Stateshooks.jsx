import { useEffect, useState } from "react";
import Employedata from "./Employedata";

const Stateshooks = () => {
    const [data, setdata] = useState([]);
    const [update, setupdate] = useState(false);
    const [editIndex, setEditIndex] = useState(null);
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        age: "",
    });


    useEffect(() => {
        setdata(Employedata);
    }, [])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleClear = () => {
        setFormData({
            firstname: "",
            lastname: "",
            age: ""
        })
    }
    const handleSave = () => {
        if (formData.firstname && formData.lastname && formData.age) {
            setdata((prev) => [...prev, formData]);
            handleClear(); // clear form
        }
    };
    const handleUpdate = () => {
        if (editIndex !== null && formData.firstname && formData.lastname && formData.age) {
            const updatedData = [...data]; // copy of current data
            updatedData[editIndex] = { ...formData };// update the item
            setdata(updatedData); // update state
            setEditIndex(null); // reset edit mode
            setupdate(false);
            handleClear(); // clear form
        }
    };
    
  
    const handleEdit = (index) => {
         setFormData(data[index]);
         setEditIndex(index); // track which row is being edited
         setupdate(true);
    };
    const handleDelete = (id) => {
        const updatedData = data.filter((_, index) => index !== id);
        setdata(updatedData);
    }

    return (
        <>
<div>
<div className=" w-3/4 flex justify-center items-center mx-auto space-x-4">
                <input name="firstname" type="text" className="border border-gray-500" placeholder="please Enter the firstname" onChange={handleChange} value={formData.firstname} />
                <input name="lastname" type="text" className="border border-gray-500" placeholder="please Enter the lastname" onChange={handleChange} value={formData.lastname} />
                <input name="age" type="number" className="border border-gray-500" placeholder="please Enter the age" onChange={handleChange} value={formData.age} />
                {
                    !update ? <button className="bg-blue-200 border border-gray-500" onClick={handleSave}>Save</button> : <button className="bg-blue-200 border border-gray-500" onClick={handleUpdate}>Update</button>
                }
                <button className="bg-blue-200 border border-gray-500" onClick={handleClear}>Clear</button>
            </div>
            <div className="overflow-x-auto mt-10">
                <table className="w-full  divide-y divide-gray-200 border border-gray-300">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Sr. Num</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">First Name</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Last Name</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Age</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                        {data.map((item, index) => (
                            <tr
                                key={index}
                                className="hover:bg-gray-50 transition-colors duration-200"
                            >
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                                    {index+1}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                                    {item.firstname}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                                    {item.lastname}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                                    {item.age}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                                    <button className="bg-blue-200 border border-gray-500" onClick={() => { handleEdit(index) }}>Edit</button>
                                    <button className="bg-blue-200 border border-gray-500" onClick={() => { handleDelete(index) }}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
</div>

        </>
    )
}

export default Stateshooks;