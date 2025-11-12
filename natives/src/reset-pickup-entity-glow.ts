import { EntityIndex } from '@ivanzaida/structures'

/**
 * ENTITY:RESET_PICKUP_ENTITY_GLOW
 *
 * 0x5145F9B426021578

 * 
 * Revert entity alpha override and restart pickup glow.
 * 
 * Similar to RESET_ENTITY_ALPHA
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 */
export function resetPickupEntityGlow(entity: EntityIndex): void {
	const resetPickupEntityGlow_result = Citizen.invokeNative<void>('0x5145F9B426021578', entity);
	return resetPickupEntityGlow_result;
}