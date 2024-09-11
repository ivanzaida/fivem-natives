/**
 * CFX:RESET_MAPDATA_ENTITY_MATRIX
 *
 * 0X8143FA4F

 * Resets mapdata entity transform matrix to its original state.This function supports SDK infrastructure and is not intended to be used directly from your code.
 * 
 * ------------------------------------------------------------------
 * @param {number} mapDataHash A mapdata hash from mapDataLoaded event.
 * @param {number} entityInternalIdx
 * @returns {boolean}  True if successful, false if not.
 */
export function resetMapdataEntityMatrix(mapDataHash: number, entityInternalIdx: number): boolean {
	const resetMapdataEntityMatrix_result = Citizen.invokeNative<boolean>('0X8143FA4F', mapDataHash, entityInternalIdx);
	return resetMapdataEntityMatrix_result;
}