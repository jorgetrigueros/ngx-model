/**
 * Creates a unique id for identification purposes.
 * @param separator Optional separator for grouping the generated segmants: default "-".
 */
export function generateUid(separator: string) {
    const ts = Math.round((new Date()).getTime() / 1000); // UNIX timestamp for the current date and time relevent
    const delim = separator || '-';
    function S4() {
        // tslint:disable-next-line:no-bitwise
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    }
    return (ts + delim + S4() + delim + S4() + delim + S4() + delim + S4() + S4() + S4());
}
