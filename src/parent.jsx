import React, { useState } from "react";
import Child from "./child";

const Parent = () => {
    const [count, setCount] = useState(0);
    const [values, setValues] = useState({ email: "" });

    const user = { name: "John", age: "24" };
    const serializedUser = JSON.stringify(user);
    console.log(serializedUser); // Строка -> '{"name": "John", "age": "24"}'

    // Восстанавливаем из строки
    console.log(JSON.parse(serializedUser)); // { name: "John", age: "24" }

    const obj1 = { name: "John" }; // объект
    const obj2 = Object.assign({}, obj1); // новый объект
    const obj3 = { ...obj1 }; // новый объект

    console.log(obj1 === obj2); // false
    console.log(obj1 === obj3); // false
    console.log(obj2 === obj3); // false

    const arr1 = []; // Массив
    const arr2 = [...arr1]; // новый массив
    const arr3 = arr1.slice(); // новый массив

    console.log(arr1 === arr2); // false
    console.log(arr1 === arr3); // false
    console.log(arr2 === arr3); // false

    const handleChange = (event) => {
        const { value, name } = event.target;

        // Передаем новый объект
        setValues({
            ...values,
            [name]: value
        });
    };
    return (
        <>
            <div>
                <button onClick={() => setCount((prevCount) => prevCount + 1)}>
                    +
                </button>
                <input value={values.email} onChange={handleChange} />
                <Child count={count} values={values} />
            </div>
        </>
    );
};

export default Parent;
