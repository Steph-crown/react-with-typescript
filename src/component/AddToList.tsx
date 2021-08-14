import { useState, ChangeEvent, FC } from "react"
import { AppInterface as IProps } from "../interface";


interface IFormDetails {
    name: string,
    age: number | string,
    note: string,
    img: string
}

interface Props {
    people: IProps["people"],
    setPeople: React.Dispatch<React.SetStateAction<IProps["people"]>>
}


export const AddToList: FC<Props> = ({people, setPeople}) => {

    const [input, setInput] = useState<IFormDetails>({
        name: "",
        age: "",
        note: "",
        img: ""
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>): void => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        console.log(input)

    }

    const handleClick = (): void => {
        if (
            !input.img &&
            !input.age &&
            !input.img
        ) {
            return
        }
        setPeople([
            ...people,
            {
                name: input.name,
                age: input.age,
                url: "",
                note: ""
            }
        ]);
        setInput({
            name: "",
            age: "",
            note: "",
            img: ""
        })
    }

    return (
        <div className="AddToList">
            <input
                type="text"
                placeholder="Name"
                className="AddToList-input"
                name="name"
                value={input.name}
                onChange={handleChange}
            />
            <input
                type="text"
                placeholder="Age"
                className="AddToList-input"
                name="age"
                value={input.age}
                onChange={handleChange}

            />
            <input
                type="text"
                placeholder="Image Url"
                className="AddToList-input"
                name="img"
                value={input.img}
                onChange={handleChange}

            />
            <textarea
                placeholder="Note"
                className="AddToList-input"
                name="note" value={input.note}
                onChange={handleChange}
            />

            <button className="AddToList-btn"
                onClick={handleClick}
            >
                Add to list
            </button>
        </div>
    )
}