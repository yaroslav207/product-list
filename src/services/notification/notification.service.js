import {toastr} from 'react-redux-toastr';

class Notification {
  constructor() {
    this.instance = toastr;
  }

  success(title, message, options) {
    this.instance.success(title, message, options);
  }

  info(title, message, options) {
    this.instance.info(title, message, options);
  }

  warning(title, message, options) {
    this.instance.warning(title, message, options);
  }

  error(title, message, options) {
    this.instance.error(title, message, options);
  }
}

export {Notification};
