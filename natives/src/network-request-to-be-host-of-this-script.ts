/**
 * NETWORK:NETWORK_REQUEST_TO_BE_HOST_OF_THIS_SCRIPT
 *
 * 0x68F69A7905654A16

 * 
 * Requests that the local player becomes the host of the script
 * PLEASE DO NOT ABUSE THIS, WE MUST ALWAYS TRY AND ALLOW MIGRATION WHENEVER POSSIBLE
 * 
 * 
 * ------------------------------------------------------------------
 */
export function networkRequestToBeHostOfThisScript(): void {
	const networkRequestToBeHostOfThisScript_result = Citizen.invokeNative<void>('0x68F69A7905654A16', );
	return networkRequestToBeHostOfThisScript_result;
}