// ** Object de-structure

const course = {
    coursename : "Javascript",
    courseteacher : "Hitesh Sir",
    price : 999,
    location : "online",
    platform : "Zoom meeting"
}

// console.log(course.courseteacher); --> best way

// Object de-structure
// Example 1:
const {location} = course
console.log(location);

// Example 2:
const {platform} = course
console.log(platform);









// ** JSON file: 
//    - The JSON file is always key and values are in String.
//    - We use : for assign the values to the keys.

// Example 1: API gets in object format {}.
{
    "Name": "Omkar",
    "course" : "Javascript",
    "teacher": "Hitesh Sir",
    "price": "free"
}

// Example 2: API gets in array format [].
[
    {},
    {},
    {}
]