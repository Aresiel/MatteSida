import {createSignal} from "solid-js";
import './style.css'


// De olika sidorna
const [pages, setPages] = createSignal([
    { name: "Roliga Formler", path: "formler.html"},
    { name: "Intressant Teori", path: "teori.html"},
    { name: "Apodiktiska Bevis", path: "bevis.html"},
    { name: "Kontakt", path: "kontakt.html"}
])

const toggleMenu = () => {
    let ul = document.querySelector("nav > ul")
    ul.classList.toggle("hidden")
}

export default () =>
    <nav>
        <ul className={"hidden"}>
            <li> {/* Hem-knappen är speciell och ligger därför separat */}
                <a onClick={toggleMenu}>☰</a>
                <a href="index.html">iρΣμm</a>
            </li>
            <For each={pages()}>{(page, i)=>
                <li>
                    <a href={page.path}>{page.name}</a>
                </li>
            }</For>
        </ul>
    </nav>