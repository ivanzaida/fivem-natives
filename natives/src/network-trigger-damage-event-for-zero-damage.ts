import { EntityIndex } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_TRIGGER_DAMAGE_EVENT_FOR_ZERO_DAMAGE
 *
 * 0x2D8C146ED8EFF79D

 * 
 * When set, damage events will trigger for invincible entities
 * 
 * Allows vehicle wheels to be destructible even when the vehicle entity is invincible.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @param {boolean} shouldTrigger
 */
export function networkTriggerDamageEventForZeroDamage(entity: EntityIndex, shouldTrigger: boolean): void {
	const networkTriggerDamageEventForZeroDamage_result = Citizen.invokeNative<void>('0x2D8C146ED8EFF79D', entity, shouldTrigger);
	return networkTriggerDamageEventForZeroDamage_result;
}