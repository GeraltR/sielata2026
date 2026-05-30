
export function formatDate(
    date: string | Date, 
    locale: string = "pl-PL", 
    options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "numeric",
    year: "numeric"
    }
): string {
    return new Intl.DateTimeFormat(locale, options).format(new Date(date));
}