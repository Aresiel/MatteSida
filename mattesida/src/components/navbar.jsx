import {createSignal} from "solid-js";

const [pages, setPages] = createSignal([
    { name: "Formulas", path: "formulas.html"},
    { name: "Contact", path: "contact.html"},
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