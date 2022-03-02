/* @refresh reload */
import {render} from 'solid-js/web';

import '../../node_modules/normalize.css/normalize.css';
import '../styles/index.css';
import Navbar from "../components/navbar";

render(<>
    <header>
        <Navbar/>
    </header>
    <main>

    </main>
    <footer>

    </footer>
</>, document.getElementById('root'));
