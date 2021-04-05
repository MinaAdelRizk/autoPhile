import _ from "lodash"

export const cars = [
    {
        make: { name: "Volvo" },
        models: [
            {
                name: "S60", trim: [
                    { name: "T4" }, { name: 'T5' }, { name: 'T6' }]
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
            }
        ]
    },
    {
        make: { name: "Toyota" },
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
        make: { name: "Nissan" },
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
        make: { name: "Honda" },
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
        make: { name: "Lexus" },
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
        make: { name: "Infinity" },
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
        make: { name: "Mercedes" },
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
        make: { name: "BMW" },
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
        make: { name: "Mini" },
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

export function getCarMakeOptions() {
    let makes = cars.map(car => car.make); //Not used
    return makes;
}

export function getModels(selectedMake) {
    let makeModels = cars.filter(car => car.make.name === selectedMake);
    makeModels = _.uniq(makeModels.map(m => m.models)) // no use
    return makeModels[0];
}

export function getTrims(make, model) {
    let makeModels = cars.filter(car => car.make.name === make);
    makeModels = makeModels[0].models
    let modelTrims = makeModels.filter(mm => mm.name === model)
    modelTrims = _.uniq(modelTrims.map(m => m.trim))
    let options = modelTrims[0]
    return options
}