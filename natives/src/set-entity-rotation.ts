import { EntityIndex, EEulerRotOrder } from '@ivanzaida/structures'

/**
 * ENTITY:SET_ENTITY_ROTATION
 *
 * 0xCF39804E8C88080E

 * 
 * rotationOrder refers to the order yaw pitch roll is applied
 * value ranges from 0 to 5. What you use for rotationOrder when setting must be the same as rotationOrder when getting the rotation.
 * Unsure what value corresponds to what rotation order, more testing will be needed for that.
 * For the most part R uses 1 or 2 as the order.
 * p5 is usually set as true
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @param {number} newRotationX
 * @param {number} newRotationY
 * @param {number} newRotationZ
 * @param {EEulerRotOrder} rotOrder
 * @param {boolean} doDeadCheck
 */
export function setEntityRotation(entity: EntityIndex, newRotationX: number, newRotationY: number, newRotationZ: number, rotOrder: EEulerRotOrder | number = 2, doDeadCheck: boolean = true): void {
	const setEntityRotation_result = Citizen.invokeNative<void>('0xCF39804E8C88080E', entity, newRotationX, newRotationY, newRotationZ, rotOrder, doDeadCheck);
	return setEntityRotation_result;
}