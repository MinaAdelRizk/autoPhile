export const categories = [
    { _id: "5b21ca3eeb7f6fbccd4718181", name: "Engine" },
    { _id: "5b21ca3eeb7f6fbccd4718202", name: "Brake & Suspension" },
    { _id: "5b21ca3eeb7f6fbccd4718183", name: "Oils, Fluids & Filters" },
    { _id: "5b21ca3eeb7f6fbccd4718184", name: "Body Parts" },
    { _id: "5b21ca3eeb7f6fbccd4718185", name: "Batteries" },
    { _id: "5b21ca3eeb7f6fbccd4718186", name: "Tires" },
    { _id: "5b21ca3eeb7f6fbccd4718147", name: "Ignition" },
    { _id: "5b21ca3eeb7f6fbccd4718188", name: "Streering" },
    { _id: "5b21ca3eeb7f6fbccd4718189", name: "Lighting & Electrical" },
];

export function getCategories() {
    return categories.filter(g => g);
}
