/**
 * SOCIALCLUB:SC_EMAIL_DELETE_EMAILS
 *
 * 0x44DD5E8545C5376F

 * 
 * ------------------------------------------------------------------
 * @param {number} emailIds
 * @param {number} numIds
 */
export function scEmailDeleteEmails(emailIds: number, numIds: number): void {
	const scEmailDeleteEmails_result = Citizen.invokeNative<void>('0x44DD5E8545C5376F', emailIds, numIds);
	return scEmailDeleteEmails_result;
}