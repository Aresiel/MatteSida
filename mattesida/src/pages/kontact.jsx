/* @refresh reload */
import {render} from 'solid-js/web';

import 'normalize.css';
import '../styles/common.css';
import '../styles/contact.css';
import Navbar from "../components/navbar/navbar";

render(() => <>
    <header>
        <Navbar/>
    </header>
    <main>

    </main>
    <footer>

    </footer>
</>, document.getElementById('root'));
