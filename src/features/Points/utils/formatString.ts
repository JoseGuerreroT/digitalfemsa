import {format} from 'date-fns';
import {es} from 'date-fns/locale';

export const getTextualDateFormat = (dateString: string) => {
  const date = new Date(dateString);
  const formattedDate = format(date, "dd 'de' MMMM, yyyy", {locale: es});
  return formattedDate;
};

export const getThousandFormat = (points: number) => {
  return points
    .toLocaleString('es-ES', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })
    .replace(/\./g, '|')
    .replace(/,/g, '.')
    .replace(/\|/g, ',');
};
