/**
 * MISC:REMOVE_POP_MULTIPLIER_SPHERE
 *
 * 0x9049EEEF48D81A2F

 * 
 * Removes population multiplier sphere
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} index
 * @param {boolean} localOnly
 */
export function removePopMultiplierSphere(index: number, localOnly: boolean): void {
	const removePopMultiplierSphere_result = Citizen.invokeNative<void>('0x9049EEEF48D81A2F', index, localOnly);
	return removePopMultiplierSphere_result;
}