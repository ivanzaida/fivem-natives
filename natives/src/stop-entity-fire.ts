import { EntityIndex } from '@ivanzaida/structures'

/**
 * FIRE:STOP_ENTITY_FIRE
 *
 * 0xC9B695B7C0126DCC

 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 */
export function stopEntityFire(entity: EntityIndex): void {
	const stopEntityFire_result = Citizen.invokeNative<void>('0xC9B695B7C0126DCC', entity);
	return stopEntityFire_result;
}