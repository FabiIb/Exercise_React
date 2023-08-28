import { useMemo } from "react";
function FilterList({ list }) {

    const filterLista = useMemo(() => {
        return list.filter((a) => a.age >= 18);
    }, [list])
    return (
        <div>
            <ul>{filterLista.map(a => <li key={a.id}>{a.name}{a.age}</li>)}</ul>
        </div>
    )
}
export default FilterList


