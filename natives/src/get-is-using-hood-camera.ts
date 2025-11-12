/**
 * PLAYER:GET_IS_USING_HOOD_CAMERA
 *
 * 0x5A50E8F361E4CFB1

 * 
 * Returns profile setting 243.
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function getIsUsingHoodCamera(): boolean {
	const getIsUsingHoodCamera_result = Citizen.invokeNative<boolean>('0x5A50E8F361E4CFB1', );
	return getIsUsingHoodCamera_result;
}