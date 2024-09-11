/**
 * SOCIALCLUB:SC_EMAIL_GET_NUM_RETRIEVED_EMAILS
 *
 * 0x6109CAB6F2F7BB46

 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function scEmailGetNumRetrievedEmails(): number {
	const scEmailGetNumRetrievedEmails_result = Citizen.invokeNative<number>('0x6109CAB6F2F7BB46', );
	return scEmailGetNumRetrievedEmails_result;
}