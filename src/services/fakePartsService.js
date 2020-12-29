//import * as categoryAPI from "./fakeGenreService";

const parts = [
    {
        _id: "5b21ca3eeb7f6fbccd4718151",
        title: "Oil Filter",
        category: { _id: "5b21ca3eeb7f6fbccd4718181", name: "Filters" },
        numberInStock: 6,
        partNumber: 123456,
        price: 12
    },

    {
        _id: "5b21ca3eeb7f6fbccd4718152",
        title: "Brake Pad - front",
        category: { _id: "5b21ca3eeb7f6fbccd4718203", name: "Brakes" },
        numberInStock: 3,
        partNumber: 234567,
        price: 10
    },

    {
        _id: "5b21ca3eeb7f6fbccd4718153",
        title: "Light Bulb - High Beam - H7",
        category: { _id: "5b21ca3eeb7f6fbccd4718184", name: "Lighting & Electrical" },
        numberInStock: 16,
        partNumber: 345678,
        price: 15
    },
    {
        _id: "5b21ca3eeb7f6fbccd4718154",
        title: "Starter",
        category: { _id: "5b21ca3eeb7f6fbccd4718206", name: "Starters & Alternators" },
        numberInStock: 4,
        partNumber: 456789,
        price: 144,
        currency: "AED"
    },
    {
        _id: "5b21ca3eeb7f6fbccd4718155",
        title: "Starter",
        category: { _id: "5b21ca3eeb7f6fbccd4718206", name: "Starters & Alternators" },
        numberInStock: 4,
        partNumber: 456789,
        price: 144,
        currency: "AED"
    },
    {
        _id: "5b21ca3eeb7f6fbccd4718156",
        title: "Starter",
        category: { _id: "5b21ca3eeb7f6fbccd4718206", name: "Starters & Alternators" },
        numberInStock: 4,
        partNumber: 456789,
        price: 144,
        currency: "AED"
    },
    {
        _id: "5b21ca3eeb7f6fbccd4718157",
        title: "Starter",
        category: { _id: "5b21ca3eeb7f6fbccd4718206", name: "Starters & Alternators" },
        numberInStock: 4,
        partNumber: 456789,
        price: 144,
        currency: "AED"
    },
    {
        _id: "5b21ca3eeb7f6fbccd4718158",
        title: "Starter",
        category: { _id: "5b21ca3eeb7f6fbccd4718206", name: "Starters & Alternators" },
        numberInStock: 4,
        partNumber: 456789,
        price: 144,
        currency: "AED"
    }
]

export function getParts() {
    return parts;
}




// { _id: "5b21ca3eeb7f6fbccd4718181", name: "Filters" },
// { _id: "5b21ca3eeb7f6fbccd4718142", name: "Ignition" },
// { _id: "5b21ca3eeb7f6fbccd4718203", name: "Brakes" },
// { _id: "5b21ca3eeb7f6fbccd4718184", name: "Lighting & Electrical" },
// { _id: "5b21ca3eeb7f6fbccd4718145", name: "Shock & Suspension" },
// { _id: "5b21ca3eeb7f6fbccd4718206", name: "Starters & Alternators" }