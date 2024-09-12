/**
 * CFX:SEND_LOADING_SCREEN_MESSAGE
 *
 * 0X8BBE6CC0

 * Sends a message to the `loadingScreen` NUI frame, which contains the HTML page referenced in `loadscreen` resources.
 * 
 * ------------------------------------------------------------------
 * @param {string} jsonString The JSONencoded message.
 * @returns {boolean}  A success value.
 */
export function sendLoadingScreenMessage(jsonString: string): boolean {
	const sendLoadingScreenMessage_result = Citizen.invokeNative<boolean>('0X8BBE6CC0', jsonString);
	return sendLoadingScreenMessage_result;
}