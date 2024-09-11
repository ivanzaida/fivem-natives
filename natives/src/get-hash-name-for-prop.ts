/**
 * FILES:GET_HASH_NAME_FOR_PROP
 *
 * 0x6B7AEB5F3D578298

 * 
 * ------------------------------------------------------------------
 * @param {number} ped
 * @param {number} anchorPoint
 * @param {number} prop
 * @param {number} texture
 * @returns {number}  
 */
export function getHashNameForProp(ped: number, anchorPoint: number, prop: number, texture: number): number {
	const getHashNameForProp_result = Citizen.invokeNative<number>('0x6B7AEB5F3D578298', ped, anchorPoint, prop, texture);
	return getHashNameForProp_result;
}