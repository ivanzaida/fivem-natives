import { EntityIndex, EPhysicsDampingType } from '@ivanzaida/structures'

/**
 * PHYSICS:SET_DAMPING
 *
 * 0x43C223EA02402E66

 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entityID
 * @param {EPhysicsDampingType} dampingType
 * @param {number} dampingValue
 */
export function setDamping(entityID: EntityIndex, dampingType: EPhysicsDampingType | number, dampingValue: number): void {
	const setDamping_result = Citizen.invokeNative<void>('0x43C223EA02402E66', entityID, dampingType, dampingValue);
	return setDamping_result;
}