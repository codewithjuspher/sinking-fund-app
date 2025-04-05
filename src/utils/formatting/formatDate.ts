export const formatDate = (date: Date | string, locale: string = "en-US") => {
    return new Intl.DateTimeFormat(locale).format(new Date(date));
};