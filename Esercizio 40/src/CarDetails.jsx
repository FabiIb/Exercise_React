import React, { useEffect, useRef } from "react";

function CarDetails({ initialData }) {
    const modelRef = useRef(null);
    const yearRef = useRef(null);
    const colorRef = useRef(null);

    useEffect(() => {
        modelRef.current.value = initialData.initValueModel || "";
        yearRef.current.value = initialData.initValueYear || "";
        colorRef.current.value = initialData.initValueColor || "";
    }, [initialData]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const modelValue = modelRef.current.value;
        const yearValue = yearRef.current.value;
        const colorValue = colorRef.current.value;
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Car Model</label>
            <input type="text" ref={modelRef} />

            <label>Year and month of registration:</label>
            <input type="month" ref={yearRef} />

            <label>Color:</label>
            <input type="color" ref={colorRef} />

            <button type="submit">Send</button>
        </form>
    );
}

export default CarDetails;
