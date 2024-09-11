/**
 * MISC:DOES_POP_MULTIPLIER_AREA_EXIST
 *
 * 0x87EDD05291B7412C

 * 
 * ------------------------------------------------------------------
 * @param {number} index
 * @returns {boolean}  
 */
export function doesPopMultiplierAreaExist(index: number): boolean {
	const doesPopMultiplierAreaExist_result = Citizen.invokeNative<boolean>('0x87EDD05291B7412C', index);
	return doesPopMultiplierAreaExist_result;
}