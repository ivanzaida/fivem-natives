/**
 * NETWORK:NETWORK_GET_INSTANCE_ID_OF_THIS_SCRIPT
 *
 * 0xF25E5B7C1279A85B

 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function networkGetInstanceIdOfThisScript(): number {
	const networkGetInstanceIdOfThisScript_result = Citizen.invokeNative<number>('0xF25E5B7C1279A85B', );
	return networkGetInstanceIdOfThisScript_result;
}