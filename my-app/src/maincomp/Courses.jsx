import { React, useState } from 'react';
import ItemList from './ItemList'


const Courses = () => {
    const [courseList, setCourse] = useState([
        { id: 1, name: "name1", desc: "des1" },
        { id: 2, name: "name2", desc: "des2" },
        { id: 3, name: "name3", desc: "des3" },
    ])
    return (
        <div>
            {
                courseList.map((item) => (
                    <ItemList course={item} />
                ))
            }
        </div>
    );
}

export default Courses;
