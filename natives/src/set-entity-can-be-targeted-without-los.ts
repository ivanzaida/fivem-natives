import { EntityIndex } from '@ivanzaida/structures'

/**
 * ENTITY:SET_ENTITY_CAN_BE_TARGETED_WITHOUT_LOS
 *
 * 0xE78E66BE6EB7D534

 * 
 * Sets whether the entity can be targeted without being in line-of-sight.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @param {boolean} targettableWithNoLos
 */
export function setEntityCanBeTargetedWithoutLos(entity: EntityIndex, targettableWithNoLos: boolean): void {
	const setEntityCanBeTargetedWithoutLos_result = Citizen.invokeNative<void>('0xE78E66BE6EB7D534', entity, targettableWithNoLos);
	return setEntityCanBeTargetedWithoutLos_result;
}