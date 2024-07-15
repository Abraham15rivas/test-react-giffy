import React from "react";
import { Button, Link } from "./styles"

export default function ButtonComponent ({ children, href }) {
    return href
        ? <Link href={href}>{ children }</Link>
        : <Button>{ children }</Button>
}