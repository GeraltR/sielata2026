
export function formatDate(
    date: string | Date, 
    options: Intl.DateTimeFormatOptions = {
        day: "numeric",
        month: "numeric",
        year: "numeric"
    },
    locale: string = "pl-PL" 
): string {
    return new Intl.DateTimeFormat(locale, options).format(new Date(date));
}