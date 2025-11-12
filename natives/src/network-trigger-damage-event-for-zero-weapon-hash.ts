import { EntityIndex } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_TRIGGER_DAMAGE_EVENT_FOR_ZERO_WEAPON_HASH
 *
 * 0x64390744D38F9167

 * 
 * When set, damage events will trigger even if they have damage weapon hash as 0
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @param {boolean} shouldTrigger
 */
export function networkTriggerDamageEventForZeroWeaponHash(entity: EntityIndex, shouldTrigger: boolean): void {
	const networkTriggerDamageEventForZeroWeaponHash_result = Citizen.invokeNative<void>('0x64390744D38F9167', entity, shouldTrigger);
	return networkTriggerDamageEventForZeroWeaponHash_result;
}