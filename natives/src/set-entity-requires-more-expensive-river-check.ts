import { EntityIndex } from '@ivanzaida/structures'

/**
 * ENTITY:SET_ENTITY_REQUIRES_MORE_EXPENSIVE_RIVER_CHECK
 *
 * 0xD1426896B0800D21

 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @param {boolean} flagValue
 */
export function setEntityRequiresMoreExpensiveRiverCheck(entity: EntityIndex, flagValue: boolean): void {
	const setEntityRequiresMoreExpensiveRiverCheck_result = Citizen.invokeNative<void>('0xD1426896B0800D21', entity, flagValue);
	return setEntityRequiresMoreExpensiveRiverCheck_result;
}