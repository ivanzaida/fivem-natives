/**
 * CFX:MUMBLE_IS_CONNECTED
 *
 * 0XB816370A

 * This native will return true if the user succesfully connected to the voice server.If the user disabled the voice-chat setting it will return false.
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  True if the player is connected to a mumble server.
 */
export function mumbleIsConnected(): boolean {
	const mumbleIsConnected_result = Citizen.invokeNative<boolean>('0XB816370A', );
	return mumbleIsConnected_result;
}