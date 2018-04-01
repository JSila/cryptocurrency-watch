import { configure } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import "url-search-params-polyfill"

configure({ adapter: new Adapter() })