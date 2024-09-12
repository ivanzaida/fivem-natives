/**
 * CFX:GET_MAPDATA_FROM_HASH_KEY
 *
 * 0XD29D8EDD

 * Returns the transient map data index for a specified hash.This function supports SDK infrastructure and is not intended to be used directly from your code.
 * 
 * ------------------------------------------------------------------
 * @param {number} mapdataHandle The input map data handle.
 * @returns {number}  A transient (non-persistable) index to the requested mapdata, or -1.
 */
export function getMapdataFromHashKey(mapdataHandle: number): number {
	const getMapdataFromHashKey_result = Citizen.invokeNative<number>('0XD29D8EDD', mapdataHandle);
	return getMapdataFromHashKey_result;
}