import _ from "lodash"
export const tires = [
    {
        _id: "5b21ca3eeb7f6fbccd47181810",
        mnf: "Michlene",
        width: 215,
        height: 55,
        rim: 16,
        y: 2019,
        lindex: 70,
        price: 10,
        title: "Michelene Tire 215/55/16"
    },
    {
        _id: "5b21ca3eeb7f6fbccd47181809",
        mnf: "Continental",
        width: 220,
        height: 55,
        rim: 17,
        y: 2019,
        lindex: 70,
        price: 10,
        title: "Continental Tire 215/55/16"
    },
    {
        _id: "5b21ca3eeb7f6fbccd47181811",
        mnf: "Michlene",
        width: 225,
        height: 55,
        rim: 17,
        y: 2019,
        lindex: 70,
        price: 10,
        title: "Michelene Tire 215/55/16"
    },
    {
        _id: "5b21ca3eeb7f6fbccd47181812",
        mnf: "Michlene",
        width: 210,
        height: 65,
        rim: 17,
        y: 2019,
        lindex: 70,
        price: 10,
        title: "Michelene Tire 215/55/16"
    },
    {
        _id: "5b21ca3eeb7f6fbccd47181813",
        mnf: "GoodYear",
        width: 225,
        height: 50,
        rim: 18,
        y: 2019,
        lindex: 70,
        price: 10,
        title: "GoodYear Tire 215/55/16"
    },
    {
        _id: "5b21ca3eeb7f6fbccd47181814",
        mnf: "Michlene",
        width: 225,
        height: 55,
        rim: 18,
        y: 2019,
        lindex: 70,
        price: 10,
        title: "Michelene Tire 215/55/16"
    },
    {
        _id: "5b21ca3eeb7f6fbccd47181815",
        mnf: "Michlene",
        width: 200,
        height: 55,
        rim: 16,
        y: 2019,
        lindex: 70,
        price: 10,
        title: "Michelene Tire 215/55/16"
    }

];

export function getTires() {
    return tires.filter(f => f);
}

export function getTiresMnf() {
    return _.uniq(tires.map(t => t.mnf));
}

export function getTireW() {
    return _.uniq(tires.map(t => t.width));
}

export function getRimSize() {
    return _.uniq(tires.map(t => t.rim));
}

export function getTireH() {
    return _.uniq(tires.map(t => t.height));
}