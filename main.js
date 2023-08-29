const wardrobe = {
    height: 80,
    manufacturer: "Killibrew & Sons",
    contents:["Dress Shirt", "Jeans","Suit","Skirt", "Tennis Shoes"],
    depth: 38,
    width:50
}
wardrobe.material = "Cedar"

console.log(wardrobe)

const empireStateBuilding = {
    stories: 103,
    height: 14,
    address: "350 Fifth Avenue, Manhattan, New York 10118",
    squareFeet: 2768591,
    constructionDate: 1931,
    cost: 40948900,
    owner: "Empire State Realty Trust",
    eastWestLength: 424,
    northSouthLength: 187,
    architect: "Shreve, Lamb & Harmon"
}

console.log(empireStateBuilding.height, empireStateBuilding.eastWestLength, empireStateBuilding.northSouthLength,
    empireStateBuilding.squareFeet, empireStateBuilding.stories)

    console.log(empireStateBuilding['address','cost','constructionDate','owner','architect'])
    const nashvilleSoftwareSchool = {
        founded: 2012,
        director: "John Wark",
        instructors: {
            fullTime: ["Jisie", "Brenda", "Steve", "Joe", "Andy"],
            partTime: ["Zoe", "Nathan"]
        },
        address: "500 Interstate Blvd. S"
    }

    console.log(nashvilleSoftwareSchool.instructors.partTime[0], nashvilleSoftwareSchool.instructors.fullTime[4])