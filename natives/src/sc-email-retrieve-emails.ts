/**
 * SOCIALCLUB:SC_EMAIL_RETRIEVE_EMAILS
 *
 * 0x9286D4F3BBB483D0

 * 
 * ------------------------------------------------------------------
 * @param {number} start
 * @param {number} numEmails
 */
export function scEmailRetrieveEmails(start: number, numEmails: number): void {
	const scEmailRetrieveEmails_result = Citizen.invokeNative<void>('0x9286D4F3BBB483D0', start, numEmails);
	return scEmailRetrieveEmails_result;
}