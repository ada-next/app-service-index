import { root, StaticViewGroup } from "adajs";
import './style/style.css';
import './style/index.css';

@root()
class Root extends StaticViewGroup {
    onready() {
        // this.addChild(Container);
    }
}

export default Root;