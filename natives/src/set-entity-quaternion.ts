import { EntityIndex } from '@ivanzaida/structures'

/**
 * ENTITY:SET_ENTITY_QUATERNION
 *
 * 0xF425E0B05426E088

 * 
 * w is the correct parameter name!
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @param {number} newX
 * @param {number} newY
 * @param {number} newZ
 * @param {number} newW
 */
export function setEntityQuaternion(entity: EntityIndex, newX: number, newY: number, newZ: number, newW: number): void {
	const setEntityQuaternion_result = Citizen.invokeNative<void>('0xF425E0B05426E088', entity, newX, newY, newZ, newW);
	return setEntityQuaternion_result;
}