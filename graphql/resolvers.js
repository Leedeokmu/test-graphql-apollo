const people = [
    {
        id: 1,
        name: "freefly",
        age: 12,
        gender: "male"
    }, {
        id: 2,
        name: "eddie",
        age: 13,
        gender: "male"
    },
];

const getById = id => {
    const filteredPerson = people.filter(person => id === person.id);
    return filteredPerson[0];
}

const resolver = {
    Query: {
        people: () => people,
        person: () => getById()

    }
};

export default resolver;