import _ from "lodash"

export const cars = [
    {
        make: { name: "Volvo", _id: "5b21ca3eeb7f6fbccd4718181" },
        models: [
            {
                name: "S60", _id: "5b21ca3eeb7f6fbccd4718202", trim: [
                    { name: "T4" }, { name: 'T5' }, { name: 'T6' }]
            },
            {
                name: "S80", _id: "5b21ca3eeb7f6fbccd4718204", trim: [
                    { name: "T4" }, { name: 'T6' }]
            },
            {
                name: "XC70", _id: "5b21ca3eeb7f6fbccd4718255", trim: [
                    { name: "T4" }, { name: 'T6' }]
            },
            {
                name: "C30", _id: "5b21ca3eeb7f6fbccd4718206", trim: [
                    { name: "T4" }, { name: 'T6' }]
            }
        ]
    },
    {
        make: { name: "Toyota", _id: "5b21ca3eeb7f6fbccd4718202" },
        models: [
            {
                name: "Yaris", trim: [
                    { name: "coupe" }, { name: 'YTS' }]
            },
            {
                name: "Corolla", trim: [
                    { name: "T4" }, { name: 'T6' }]
            },
            {
                name: "Camry", trim: [
                    { name: "V3" }, { name: 'V4' }, { name: 'V5' }]
            },
            {
                name: "Supra", trim: [
                    { name: "IV" }, { name: 'V' }, { name: 'VI' }]
            },
            {
                name: "Zelas", trim: [
                    { name: "T4" }, { name: 'T6' }]
            }
        ]
    },
    {
        make: { name: "Nissan", _id: "5b21ca3eeb7f6fbccd4718183" },
        models: [
            {
                name: "Altima", trim: [
                    { name: "T4" }, { name: 'T6' }]
            },
            {
                name: "Maxima", trim: [
                    { name: "T4" }, { name: 'T6' }]
            },
            {
                name: "Juke", trim: [
                    { name: "T4" }, { name: 'T6' }]
            },
            {
                name: "Patrol", trim: [
                    { name: "T4" }, { name: 'T6' }]
            },
            {
                name: "Sentra", trim: [
                    { name: "T4" }, { name: 'T6' }]
            }
        ]
    },
    {
        make: { name: "Honda", _id: "5b21ca3eeb7f6fbccd4718184" },
        models: [
            {
                name: "Civic", trim: [
                    { name: "T4" }, { name: 'T6' }]
            },
            {
                name: "City", trim: [
                    { name: "T4" }, { name: 'T6' }]
            },
            {
                name: "Accord", trim: [
                    { name: "T4" }, { name: 'T6' }]
            },
            {
                name: "Pilot", trim: [
                    { name: "T4" }, { name: 'T6' }]
            },
            {
                name: "HR-V", trim: [
                    { name: "T4" }, { name: 'T6' }]
            }
        ]
    },
    {
        make: { name: "Lexus", _id: "5b21ca3eeb7f6fbccd4718185" },
        models: [
            {
                name: "S60", trim: [
                    { name: "T4" }, { name: 'T6' }]
            },
            {
                name: "S80", trim: [
                    { name: "T4" }, { name: 'T6' }]
            },
            {
                name: "XC70", trim: [
                    { name: "T4" }, { name: 'T6' }]
            },
            {
                name: "C30", trim: [
                    { name: "T4" }, { name: 'T6' }]
            },
            {
                name: "S60", trim: [
                    { name: "T4" }, { name: 'T6' }]
            }
        ]
    },
    {
        make: { name: "Infinity", _id: "5b21ca3eeb7f6fbccd4718186" },
        models: [
            {
                name: "XS1", trim: [
                    { name: "T4" }, { name: 'T6' }]
            },
            {
                name: "SKI ", trim: [
                    { name: "T4" }, { name: 'T6' }]
            },
            {
                name: "WXInf", trim: [
                    { name: "T4" }, { name: 'T6' }]
            },
            {
                name: "ISN", trim: [
                    { name: "T4" }, { name: 'T6' }]
            },
            {
                name: "S60", trim: [
                    { name: "T4" }, { name: 'T6' }]
            }
        ]
    },
    {
        make: { name: "Mercedes", _id: "5b21ca3eeb7f6fbccd4718147" },
        models: [
            {
                name: "C200", trim: [
                    { name: "T4" }, { name: 'T6' }]
            },
            {
                name: "E200", trim: [
                    { name: "T4" }, { name: 'T6' }]
            },
            {
                name: "GLS200", trim: [
                    { name: "T4" }, { name: 'T6' }]
            },
            {
                name: "ELS300", trim: [
                    { name: "T4" }, { name: 'T6' }]
            },
            {
                name: "S600", trim: [
                    { name: "T4" }, { name: 'T6' }]
            }
        ]
    },
    {
        make: { name: "BMW", _id: "5b21ca3eeb7f6fbccd4718188" },
        models: [
            {
                name: "S60", trim: [
                    { name: "T4" }, { name: 'T6' }]
            },
            {
                name: "S80", trim: [
                    { name: "T4" }, { name: 'T6' }]
            },
            {
                name: "XC70", trim: [
                    { name: "T4" }, { name: 'T6' }]
            },
            {
                name: "C30", trim: [
                    { name: "T4" }, { name: 'T6' }]
            },
            {
                name: "S60", trim: [
                    { name: "T4" }, { name: 'T6' }]
            }
        ]
    },
    {
        make: { name: "Mini", _id: "5b21ca3eeb7f6fbccd4718189" },
        models: [
            {
                name: "S60", trim: [
                    { name: "T4" }, { name: 'T6' }]
            },
            {
                name: "S80", trim: [
                    { name: "T4" }, { name: 'T6' }]
            },
            {
                name: "XC70", trim: [
                    { name: "T4" }, { name: 'T6' }]
            },
            {
                name: "C30", trim: [
                    { name: "T4" }, { name: 'T6' }]
            },
            {
                name: "S60", trim: [
                    { name: "T4" }, { name: 'T6' }]
            }
        ]
    },
];

export function getCars() {
    return cars.filter(m => m);
}

// export function getCarMakeOptions() {
//     let makes = cars.map(car => car.make); //Not used
//     return makes;
// }

export function getModels(selectedMakeId) {
    let makeModels = cars.filter(car => car.make._id === selectedMakeId);
    makeModels = _.uniq(makeModels.map(m => m.models)) // no use
    return makeModels[0];
}

export function getTrims(selectedMakeId, selectedModelId) {
    let makeModels = getModels(selectedMakeId)
    makeModels = makeModels.filter(m => m._id === selectedModelId)

}