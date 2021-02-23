import _ from "lodash"

const parts = [
    {
        _id: "5b21ca3eeb7f6fbccd4718151",
        title: "Oil Filter",
        cat: "Filters",
        compatibleCars: ["toyota-corolla-t4-2016"],
        numberInStock: 6,
        partNumber: 123456,
        price: 12
    },

    {
        _id: "5b21ca3eeb7f6fbccd4718152",
        title: "Brake Pad - front",
        cat: "Brakes",
        compatibleCars: ["toyota-corolla-t4-2016"],
        numberInStock: 3,
        partNumber: 234567,
        price: 10
    },

    {
        _id: "5b21ca3eeb7f6fbccd4718153",
        title: "Light Bulb - High Beam - H7",
        cat: "Lighting & Electrical",
        compatibleCars: ["toyota-corolla-t4-2016"],
        numberInStock: 16,
        partNumber: 345678,
        price: 15
    },
    {
        _id: "5b21ca3eeb7f6fbccd4718154",
        title: "Engine Cover Sealant",
        cat: "Engine",
        compatibleCars: ["toyota-corolla-t4-2016"],
        numberInStock: 4,
        partNumber: 456789,
        price: 144,
    },
    {
        _id: "5b21ca3eeb7f6fbccd4718155",
        title: "light bulb",
        cat: "Lighting & Electrical",
        compatibleCars: ["toyota-corolla-t4-2016"],
        numberInStock: 4,
        partNumber: 456789,
        price: 144,
    },
    {
        _id: "5b21ca3eeb7f6fbccd4718156",
        title: "Starter",
        cat: "Starters & Alternators",
        compatibleCars: ["toyota-corolla-t4-2016"],
        numberInStock: 4,
        partNumber: 456789,
        price: 144,
    },
    {
        _id: "5b21ca3eeb7f6fbccd4718157",
        title: "Spark Plug",
        cat: "Starters & Alternators",
        compatibleCars: ["toyota-corolla-t4-2016"],
        numberInStock: 4,
        partNumber: 456789,
        price: 144,
    },
    {
        _id: "5b21ca3eeb7f6fbccd4718158",
        title: "battery",
        cat: "Batteries",
        compatibleCars: ["toyota-corolla-t4-2016"],
        numberInStock: 4,
        partNumber: 456789,
        price: 144,
    }
]

export function getParts() {
    return parts;
}

export function getPartsCat() {
    return _.uniq(parts.map(p => p.cat));
}


// export const partsCat = [
//     { _id: "5b21ca3eeb7f6fbccd4718181", name: "Engine" },
//     { _id: "5b21ca3eeb7f6fbccd4718202", name: "Brake & Suspension" },
//      "Oils, Fluids & Filters" },
//     "Body Parts" },
//      "Batteries" },
//    "Tires" },
//     "Ignition" },
//      "Streering" },
//      "Lighting & Electrical" },
//      Starters & Alternators
// ];