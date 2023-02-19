import React from "react";

export default function Button({href, cls, lable}) {
    return (
        <a href={href}>
            <button className={cls + " bton"}> {lable}</button>
        </a>
    );
}
