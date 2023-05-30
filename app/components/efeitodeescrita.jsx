"use client"

import { useEffect, useState } from "react";

export function Efeitodeescrita (props) {
    const [text, setText] = useState("");

    const escrever = (text, i = 0) => {
        if (i < text.length) {
            setText(text.slice(0, i + 1));
            setTimeout(() => escrever(text, i + 1), 100);
        }
    };
    useEffect(() => {
        setTimeout(() =>  escrever(props.text));
    }, []);

    return (
        <>
        {text}
        </>
    )
}