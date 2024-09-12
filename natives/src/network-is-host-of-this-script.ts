/**
 * NETWORK:NETWORK_IS_HOST_OF_THIS_SCRIPT
 *
 * 0x93E08E0F531E2C35

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function networkIsHostOfThisScript(): boolean {
	const networkIsHostOfThisScript_result = Citizen.invokeNative<boolean>('0x93E08E0F531E2C35', );
	return networkIsHostOfThisScript_result;
}