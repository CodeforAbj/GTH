const indianNames = [
  // Male Names
  "Arjun",
  "Ravi",
  "Rajesh",
  "Sanjay",
  "Vikram",
  "Deepak",
  "Ajay",
  "Rohit",
  "Suresh",
  "Anil",
  "Vishal",
  "Amit",
  "Rakesh",
  "Pankaj",
  "Abhishek",
  "Rohan",
  "Manish",
  "Kunal",
  "Prakash",
  "Gaurav",
  "Praveen",
  "Nikhil",
  "Sachin",
  "Sandeep",
  "Karthik",
  "Rahul",
  "Sunil",
  "Shankar",
  "Vinay",
  "Naresh",
  "Dinesh",
  "Manoj",
  "Tarun",
  "Harish",
  "Lokesh",
  "Mohan",
  "Sagar",
  "Rajeev",
  "Ashish",
  "Suraj",
  "Mahesh",
  "Shubham",
  "Arvind",
  "Chetan",
  "Vikas",
  "Hemant",
  "Yogesh",
  "Ankit",
  "Mukesh",
  "Devendra",

  // Female Names
  "Priya",
  "Anjali",
  "Neha",
  "Pooja",
  "Sneha",
  "Ritu",
  "Aarti",
  "Kavita",
  "Shweta",
  "Sunita",
  "Nisha",
  "Meena",
  "Rina",
  "Rekha",
  "Anuradha",
  "Divya",
  "Shalini",
  "Suman",
  "Swati",
  "Preeti",
  "Radhika",
  "Kiran",
  "Sushma",
  "Rupa",
  "Vandana",
  "Meera",
  "Madhuri",
  "Geeta",
  "Radha",
  "Smita",
  "Jyoti",
  "Lata",
  "Komal",
  "Manju",
  "Deepa",
  "Meenakshi",
  "Varsha",
  "Asha",
  "Nandini",
  "Sujata",
  "Anitha",
  "Lakshmi",
  "Gayathri",
  "Sandhya",
  "Bhavya",
  "Monica",
  "Tara",
  "Richa",
  "Sangeeta",
  "Shruti",
];

const getRandomIndianName = () => {
  const randomIndex = Math.floor(Math.random() * indianNames.length);
  return indianNames[randomIndex];
};

export { getRandomIndianName };
