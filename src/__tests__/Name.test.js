it("Anais ègal Anais", () => {
    expect("Anais").toBe("Anais")
})

test("object equality", () => {
    const data = { one: 1, two: 2 }

    expect(data).toMatchObject({ one: 1 })
})

test("array test", () => {
    const shoppingList = [
        "lait",
        "sopalin",
        "pommes",
        "dentifrice"
    ]

    expect(shoppingList).toContain("lait")
})

test("find stop in Christoph", () => {
    expect("Christoph").toMatch(/stop/)
})

const getPikachu = async () => {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    const { name } = await res.json()

    return name
}

test("fetch pikachu", async () => {
    await expect(getPikachu()).resolves.toBe("pikachu")
})