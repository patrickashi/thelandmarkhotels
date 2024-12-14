import signature_room from "../images/signature_room.jpg";
import deluxe_room from "../images/deluxe_room.jpg";
import luxury_room from "../images/luxury_room.jpg";
import presidential_suite from "../images/presidential_suite.jpg";


export const rooms = [
    {
      id: 1,
      name: "Signature Room",
      image: signature_room,
      size: "70M2",
      maxPeople: 2,
      description: "A luxurious room with breathtaking views of the city skyline, perfect for a romantic getaway.",
      price: 50000,
    },
    {
      id: 2,
      name: "Deluxe Room",
      image: deluxe_room,
      size: "50M2",
      maxPeople: 3,
      description: "Spacious and elegant, the Deluxe Room is designed for comfort and convenience with modern amenities.",
      price: 70000,
    },
    {
      id: 3,
      name: "Luxury Room",
      image: luxury_room,
      size: "80M2",
      maxPeople: 4,
      description: "A spacious suite with premium furnishings and an unbeatable view, ideal for families or business travelers.",
      price: 95000,
    },
    {
      id: 4,
      name: "Presidential Suite",
      image: presidential_suite,
      size: "120M2",
      maxPeople: 5,
      description: "The epitome of luxury, with lavish interiors, a private jacuzzi, and unparalleled services.",
      price: 200000,
    }
    
  ];
  