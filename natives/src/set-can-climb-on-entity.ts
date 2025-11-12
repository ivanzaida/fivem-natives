import { EntityIndex } from '@ivanzaida/structures'

/**
 * ENTITY:SET_CAN_CLIMB_ON_ENTITY
 *
 * 0xE59BDA10CE05FD35

 * 
 * Prevent climbing on a particular entity.
 * 
 * p1 always false.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @param {boolean} canClimb
 */
export function setCanClimbOnEntity(entity: EntityIndex, canClimb: boolean): void {
	const setCanClimbOnEntity_result = Citizen.invokeNative<void>('0xE59BDA10CE05FD35', entity, canClimb);
	return setCanClimbOnEntity_result;
}