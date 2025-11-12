/**
 * MISC:IS_SNIPER_INVERTED
 *
 * 0x1156728DBCB1F3B2

 * 
 * This function is hard-coded to always return 0.
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function isSniperInverted(): boolean {
	const isSniperInverted_result = Citizen.invokeNative<boolean>('0x1156728DBCB1F3B2', );
	return isSniperInverted_result;
}