import { EntityIndex } from '@ivanzaida/structures'

/**
 * CFX:SET_ENTITY_ROTATION
 *
 * 0xA345EFE

 * 
 * rotationOrder refers to the order yaw pitch roll is applied
 * value ranges from 0 to 5. What you use for rotationOrder when setting must be the same as rotationOrder when getting the rotation.
 * Unsure what value corresponds to what rotation order, more testing will be needed for that.
 * For the most part R uses 1 or 2 as the order.
 * p5 is usually set as true
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity The entity to rotate.
 * @param {number} pitch The pitch (Xaxis) rotation in degrees.
 * @param {number} roll The roll (Yaxis) rotation in degrees.
 * @param {number} yaw The yaw (Zaxis) rotation in degrees.
 * @param {number} rotationOrder Specifies the order in which yaw, pitch, and roll are applied, see [GET_ENTITY_ROTATION](\_0xAFBD61CC738D9EB9) for the available rotation orders.
 * @param {boolean} bDeadCheck Usually set to true. Determines whether to check if the entity is dead before applying the rotation.
 */
export function setEntityRotation(entity: EntityIndex, pitch: number, roll: number, yaw: number, rotationOrder: number, bDeadCheck: boolean): void {
	const setEntityRotation_result = Citizen.invokeNative<void>('0xA345EFE', entity, pitch, roll, yaw, rotationOrder, bDeadCheck);
	return setEntityRotation_result;
}