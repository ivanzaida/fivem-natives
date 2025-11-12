/**
 * DLC:IS_DLC_PRESENT
 *
 * 0x087611B922B50F13

 * 
 * Detects if a DLC pack is present
 * 
 * Returns true if the given DLC pack is present.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} nameHash
 * @returns {boolean}  
 */
export function isDlcPresent(nameHash: number): boolean {
	const isDlcPresent_result = Citizen.invokeNative<boolean>('0x087611B922B50F13', nameHash);
	return isDlcPresent_result;
}