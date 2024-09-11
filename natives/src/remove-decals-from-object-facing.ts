import { ObjectIndex } from '@ivanzaida/structures'

/**
 * GRAPHICS:REMOVE_DECALS_FROM_OBJECT_FACING
 *
 * 0x6434E0F1FB054F78

 * 
 * ------------------------------------------------------------------
 * @param {ObjectIndex} object
 * @param {number} dirX
 * @param {number} dirY
 * @param {number} dirZ
 */
export function removeDecalsFromObjectFacing(object: ObjectIndex, dirX: number, dirY: number, dirZ: number): void {
	const removeDecalsFromObjectFacing_result = Citizen.invokeNative<void>('0x6434E0F1FB054F78', object, dirX, dirY, dirZ);
	return removeDecalsFromObjectFacing_result;
}