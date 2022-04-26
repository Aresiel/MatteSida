/* @refresh reload */
import {render} from 'solid-js/web';
import {getArticles} from "../api/api";

import '../../node_modules/normalize.css/normalize.css';
import '../styles/common.css';
import '../styles/formler.css';
import Navbar from "../components/navbar/navbar";

console.log(getArticles("formulas"))

function summarize(text){
    let max_length = 150;
    if(text.length <= max_length) return text;
    return text.substr(0,max_length-3) + "..."
}

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
                    <p>{summarize(article.contents)}</p>
                </li>
            }</For>
        </ul>
    </main>
    <footer>

    </footer>
</>, document.getElementById('root'));