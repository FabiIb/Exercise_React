import { useEffect, useState } from "react"

function CarDetails({ initialData }) {
    const { initValueModel, initValueYear, initValueColor } = initialData
    const [model, setModel] = useState(initValueModel)
    const [year, setYear] = useState(initValueYear)
    const [color, setColor] = useState(initValueColor)


    const handleChangeModel = ((e) => {
        const models = e.target.value
        setModel(models)
    })
    const changeYear = ((e) => {
        const years = e.target.value
        setYear(years)
    })
    const changeColor = ((e) => {
        const colors = e.target.value
        setColor(colors)
    })
    useEffect(() => {
        setModel(initialData.model || '');
        setYear(initialData.year || '');
        setColor(initialData.color || '');
    }, [initialData]);
    return (
        <form>
            <label > Car Model</label>
            <input type="text" onChange={handleChangeModel} value={model} />

            <label > Year and month of registration:</label>
            <input type="month" onChange={changeYear} value={year} />

            <label> Color:</label>
            <input type="color" onChange={changeColor} value={color} />

            <button type="submit">Send</button>
        </form>
    )
}
export default CarDetails