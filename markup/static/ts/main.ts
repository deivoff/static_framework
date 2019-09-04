import { 
  Header,
  Modal,
  Form
} from "../../components/index";

(() => {
  [
    Header,
    Modal,
    Form
  ].map(block => block.init());
})();