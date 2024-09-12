/**
 * MISC:IS_POP_MULTIPLIER_AREA_NETWORKED
 *
 * 0x3989D4F6D95B3DBD

 * 
 * ------------------------------------------------------------------
 * @param {number} index
 * @returns {boolean}  
 */
export function isPopMultiplierAreaNetworked(index: number): boolean {
	const isPopMultiplierAreaNetworked_result = Citizen.invokeNative<boolean>('0x3989D4F6D95B3DBD', index);
	return isPopMultiplierAreaNetworked_result;
}