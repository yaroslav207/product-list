import moment from 'moment';

const getFormatDate = (date) => {
  return moment(date).format('DD-MM-yyyy');
};

export {getFormatDate};
