/**
 * MISC:DOES_POP_MULTIPLIER_SPHERE_EXIST
 *
 * 0xCA7C80E031F9BFD2

 * 
 * ------------------------------------------------------------------
 * @param {number} index
 * @returns {boolean}  
 */
export function doesPopMultiplierSphereExist(index: number): boolean {
	const doesPopMultiplierSphereExist_result = Citizen.invokeNative<boolean>('0xCA7C80E031F9BFD2', index);
	return doesPopMultiplierSphereExist_result;
}