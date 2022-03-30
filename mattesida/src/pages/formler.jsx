/* @refresh reload */
import {render} from 'solid-js/web';
import {getArticles} from "../api/api";

import '../../node_modules/normalize.css/normalize.css';
import '../styles/common.css';
import '../styles/formler.css';
import Navbar from "../components/navbar/navbar";

console.log(getArticles("formulas"))

render(() => <>
    <header>
        <Navbar/>
    </header>
    <main>
        <h1>Roliga Formler</h1>
        <ul>
            <For each={getArticles("formulas")[0]()}>{(article, i) =>
                <li>
                    <p>{article.name}</p>
                </li>
            }</For>
        </ul>
    </main>
    <footer>

    </footer>
</>, document.getElementById('root'));