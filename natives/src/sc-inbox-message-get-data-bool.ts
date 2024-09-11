/**
 * SOCIALCLUB:SC_INBOX_MESSAGE_GET_DATA_BOOL
 *
 * 0x584EEB682A158C47

 * 
 * ------------------------------------------------------------------
 * @param {number} msg
 * @param {string} name
 * @returns {boolean}  
 */
export function scInboxMessageGetDataBool(msg: number, name: string): boolean {
	const scInboxMessageGetDataBool_result = Citizen.invokeNative<boolean>('0x584EEB682A158C47', msg, name);
	return scInboxMessageGetDataBool_result;
}