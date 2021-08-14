export interface AppInterface {
    people: {
        name: string,
        age: number | string,
        url: string,
        note?: string
    }[]
}

