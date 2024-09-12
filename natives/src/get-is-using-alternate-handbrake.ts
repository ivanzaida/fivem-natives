/**
 * PAD:GET_IS_USING_ALTERNATE_HANDBRAKE
 *
 * 0x17D4CDD893C6031C

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function getIsUsingAlternateHandbrake(): boolean {
	const getIsUsingAlternateHandbrake_result = Citizen.invokeNative<boolean>('0x17D4CDD893C6031C', );
	return getIsUsingAlternateHandbrake_result;
}