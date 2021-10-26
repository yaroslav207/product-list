import differenceInDays from 'date-fns/differenceInCalendarDays';

const getDiscountDaysLeft = (discountDate) => {
  if (!discountDate?.seconds) return;
  const formatDiscountDate = new Date(discountDate.seconds * 1000);
  const currentDate = new Date();
  return differenceInDays(formatDiscountDate, currentDate);
};

export {getDiscountDaysLeft};

