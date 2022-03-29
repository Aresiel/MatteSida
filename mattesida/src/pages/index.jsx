/* @refresh reload */
import {render} from 'solid-js/web';

import '../../node_modules/normalize.css/normalize.css';
import '../styles/common.css';
import '../styles/index.css';
import Navbar from "../components/navbar/navbar";

render(() => <>
    <header>
        <Navbar/>
    </header>
    <main>
        <div>
            <h1>Lorem Ipsum Dolor</h1>
            <p>Scelerisque ultrices adipiscing feugiat consectetur lacus eget sed porta. Convallis ut cras turpis aliquam volutpat. Pellentesque nibh nulla pellentesque mollis dolor, massa, ornare. Tellus dui nec, eu pretium. Mauris praesent tellus sed tristique cras et cras. Pharetra ut libero amet facilisis placerat integer viverra porttitor sodales.</p>
        </div>
    </main>
    <footer>

    </footer>
</>, document.getElementById('root'));
