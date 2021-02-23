//
import _ from "lodash"
export const fluids = [
    {
        _id: "5b21ca3eeb7f6fbccd47181810",
        title: "Castrol Magnatec 5W30, Stop-Start A5",
        mnf: "Castrol",
        vsc: "5W30",
        synthetic: "Fully Synthetic",
        volume: 4,
        productLine: "Magnetic",
        specification: "ILSAC GF-3, ACEA A5, API SL, ACEA B5, API CF",
        mnfApproval: "Volvo VCC 95200377",
        use: "engine",
        numberInStock: 5,
        price: 10,
    },
    {
        _id: "5b21ca3eeb7f6fbccd47181809",
        title: "Castrol Magnatec 5W40, Stop-Start A5",
        mnf: "Castrol",
        vsc: "5W40",
        synthetic: "Fully Synthetic",
        volume: 4,
        productLine: "Magnetic",
        specification: "ILSAC GF-3, ACEA A5, API SL, ACEA B5, API CF",
        mnfApproval: "Volvo VCC 95200377",
        use: "engine",
        numberInStock: 5,
        price: 10
    },
    {
        _id: "5b21ca3eeb7f6fbccd47181811",
        title: "Mobil Magnatec 5W40, Stop-Start A5",
        mnf: "Mobil",
        vsc: "5W40",
        synthetic: "Fully Synthetic",
        volume: 4,
        productLine: "Magnetic",
        specification: "ILSAC GF-3, ACEA A5, API SL, ACEA B5, API CF",
        mnfApproval: "Volvo VCC 95200377",
        use: "engine",
        numberInStock: 5,
        price: 10
    },
    {
        _id: "5b21ca3eeb7f6fbccd47181812",
        title: "Taawon Magnatec 0W20, Stop-Start A5",
        mnf: "Taawon",
        vsc: "0W20",
        synthetic: "Fully Synthetic",
        volume: 4,
        productLine: "Magnetic",
        specification: "ILSAC GF-3, ACEA A5, API SL, ACEA B5, API CF",
        mnfApproval: "Volvo VCC 95200377",
        use: "engine",
        numberInStock: 5,
        price: 10
    },
    {
        _id: "5b21ca3eeb7f6fbccd47181813",
        title: "Shell Magnatec 0W20, Stop-Start A5",
        mnf: "Shell",
        vsc: "0W20",
        synthetic: "Fully Synthetic",
        volume: 4,
        productLine: "Magnetic",
        specification: "ILSAC GF-3, ACEA A5, API SL, ACEA B5, API CF",
        mnfApproval: "Volvo VCC 95200377",
        use: "engine",
        numberInStock: 5,
        price: 10
    },
    {
        _id: "5b21ca3eeb7f6fbccd47181814",
        title: "HiLux Magnatec 5W40, Stop-Start A5",
        mnf: "HiLux",
        vsc: "5W40",
        synthetic: "Fully Synthetic",
        volume: 4,
        productLine: "Magnetic",
        specification: "ILSAC GF-3, ACEA A5, API SL, ACEA B5, API CF",
        mnfApproval: "Volvo VCC 95200377",
        use: "engine",
        numberInStock: 5,
        price: 10
    },
    {
        _id: "5b21ca3eeb7f6fbccd47181815",
        title: "LiquiMoly 5W30, Stop-Start A10",
        mnf: "LiquiMoly",
        vsc: "5W30",
        synthetic: "Fully Synthetic",
        volume: 4,
        productLine: "Semi Magnetic",
        specification: "ILSAC GF-3, ACEA A5, API SL, ACEA B5, API CF",
        mnfApproval: "Toyota VCC 95200377",
        use: "engine",
        numberInStock: 5,
        price: 10
    }

];

export function getFluids() {
    return fluids.filter(f => f);
}

export function getVsc() {
    return _.uniq(fluids.map(f => f.vsc));
}

export function getFluidsMnf() {
    return _.uniq(fluids.map(f => f.mnf));
}