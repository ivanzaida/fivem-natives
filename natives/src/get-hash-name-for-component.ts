/**
 * FILES:GET_HASH_NAME_FOR_COMPONENT
 *
 * 0x94B8A32AA940A6B5

 * 
 * ------------------------------------------------------------------
 * @param {number} ped
 * @param {number} componentType
 * @param {number} drawable
 * @param {number} texture
 * @returns {number}  
 */
export function getHashNameForComponent(ped: number, componentType: number, drawable: number, texture: number): number {
	const getHashNameForComponent_result = Citizen.invokeNative<number>('0x94B8A32AA940A6B5', ped, componentType, drawable, texture);
	return getHashNameForComponent_result;
}