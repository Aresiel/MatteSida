import {createSignal} from "solid-js";
import './style.css'

const [pages, setPages] = createSignal([
    { name: "iρΣμm", path: "index.html"},
    { name: "Roliga Formler", path: "formler.html"},
    { name: "Intressant Teori", path: "teori.html"},
    { name: "Apodiktiska Bevis", path: "bevis.html"},
    { name: "Kontakt", path: "kontakt.html"}
])

export default () =>
    <nav>
        <ul>
            <For each={pages()}>{(page, i)=>
                <li>
                    <a href={page.path}>{page.name}</a>
                </li>
            }</For>
        </ul>
    </nav>