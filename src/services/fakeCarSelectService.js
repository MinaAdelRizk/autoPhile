//not currently being used 

export const make = [
    { _id: "5b21ca3eeb7f6fbccd4718181", name: "Volvo" },
    { _id: "5b21ca3eeb7f6fbccd4718202", name: "Toyota" },
    { _id: "5b21ca3eeb7f6fbccd4718183", name: "Nissan" },
    { _id: "5b21ca3eeb7f6fbccd4718184", name: "Honda" },
    { _id: "5b21ca3eeb7f6fbccd4718185", name: "Lexus" },
    { _id: "5b21ca3eeb7f6fbccd4718186", name: "Infinity" },
    { _id: "5b21ca3eeb7f6fbccd4718147", name: "Mercedes" },
    { _id: "5b21ca3eeb7f6fbccd4718188", name: "BMW" },
    { _id: "5b21ca3eeb7f6fbccd4718189", name: "Mini" },
];

export function getCars() {
    return make.filter(g => g);
}
