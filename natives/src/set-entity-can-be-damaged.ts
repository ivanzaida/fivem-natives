import { EntityIndex } from '@ivanzaida/structures'

/**
 * ENTITY:SET_ENTITY_CAN_BE_DAMAGED
 *
 * 0x999C62072AF920FD

 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @param {boolean} canBeDamagedFlag
 */
export function setEntityCanBeDamaged(entity: EntityIndex, canBeDamagedFlag: boolean): void {
	const setEntityCanBeDamaged_result = Citizen.invokeNative<void>('0x999C62072AF920FD', entity, canBeDamagedFlag);
	return setEntityCanBeDamaged_result;
}