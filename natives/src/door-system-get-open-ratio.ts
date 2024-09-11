/**
 * OBJECT:DOOR_SYSTEM_GET_OPEN_RATIO
 *
 * 0x8CA2126DEA4C3796

 * 
 * ------------------------------------------------------------------
 * @param {number} doorEnumHash
 * @returns {number}  
 */
export function doorSystemGetOpenRatio(doorEnumHash: number): number {
	const doorSystemGetOpenRatio_result = Citizen.invokeNative<number>('0x8CA2126DEA4C3796', doorEnumHash);
	return doorSystemGetOpenRatio_result;
}