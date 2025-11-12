import { EntityIndex } from '@ivanzaida/structures'

/**
 * ENTITY:SET_ENTITY_HEALTH
 *
 * 0xD25E9BDC14A0B649

 * 
 * health >= 0
 * male ped ~= 100 - 200
 * female ped ~= 0 - 100
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @param {number} newHealth
 * @param {EntityIndex} instigator
 */
export function setEntityHealth(entity: EntityIndex, newHealth: number, instigator: EntityIndex = null!): void {
	const setEntityHealth_result = Citizen.invokeNative<void>('0xD25E9BDC14A0B649', entity, newHealth, instigator);
	return setEntityHealth_result;
}