/**
 * CFX:SEND_NUI_MESSAGE
 *
 * 0x78608ACB

 * 
 * ------------------------------------------------------------------
 * @param {string} jsonString
 * @returns {boolean}  
 */
export function sendNuiMessage(jsonString: string): boolean {
	const sendNuiMessage_result = Citizen.invokeNative<boolean>('0x78608ACB', jsonString);
	return sendNuiMessage_result;
}