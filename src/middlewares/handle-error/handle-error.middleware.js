import {notification as notificationService} from 'src/services/services';

const handleError = () => (next) => (action) => {
  const hasErrorMessage = Boolean(action?.error?.message);

  if (hasErrorMessage) {
    notificationService.error('Error', action.error.message);
  }

  next(action);
};

export {handleError};
