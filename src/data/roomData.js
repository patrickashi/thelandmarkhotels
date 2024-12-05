import signature_room from "../images/signature_room.jpg";
import deluxe_room from "../images/deluxe_room.jpg";
import luxury_room from "../images/luxury_room.jpg";
import presidential_suite from "../images/presidential_suite.jpg";
import executive_room from "../images/executive_room.jpg";
import standard_room from "../images/standard_room.jpg";
import honeymoon_suite from "../images/honeymoon_suite.jpg";
import family_suite from "../images/family_suite.jpg";

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
    },
    {
      id: 5,
      name: "Executive Room",
      image: executive_room,
      size: "60M2",
      maxPeople: 2,
      description: "Designed for business travelers, the Executive Room offers a sleek and modern space with all the essentials.",
      price: 65000,
    },
    {
      id: 6,
      name: "Standard Room",
      image: standard_room,
      size: "45M2",
      maxPeople: 2,
      description: "A comfortable and budget-friendly option for travelers looking for a peaceful and cozy stay.",
      price: 35000,
    },
    {
      id: 7,
      name: "Honeymoon Suite",
      image: honeymoon_suite,
      size: "90M2",
      maxPeople: 2,
      description: "A romantic suite designed for newlyweds, complete with a luxurious king-sized bed and stunning city views.",
      price: 120000,
    },
    {
      id: 8,
      name: "Family Suite",
      image: family_suite,
      size: "100M2",
      maxPeople: 6,
      description: "Perfect for families, this suite includes multiple bedrooms, a living area, and child-friendly amenities.",
      price: 130000,
    }
  ];
  