import Div from "../elements/Div";

let instance;   // private static
const ids = {   // private static
  name: "user-name",
  email: "user-email"
};
// concern: user infomation(display, providing getter/setter)
class UserDetail {
  static render() {
    return /* html */`
      <i class="center extra-large material-symbols-outlined">account_circle</i>
      <div id="${ids.name}" class="middle"></div><br />
      <div id="${ids.email}" class="small"></div><br />
    `;
  }
  static getInstance() {
    if (!instance) instance = new UserDetail();
    return instance;
  }
  constructor() {
    this.user = {
      name: new Div(`#${ids.name}`),
      email: new Div(`#${ids.email}`)
    };
  }
  init() {
    this.user.name.element.textContent = this.getCurrentValue().name;
    this.user.email.element.textContent = this.getCurrentValue().email;
  }
  getCurrentValue() {
    return {
      name: "Anonymous",
      email: "foo@example.com"
    };
  }
}

const getInstance = UserDetail.getInstance;
const render = UserDetail.render;
export { getInstance, render };
