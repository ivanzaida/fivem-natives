import { EntityIndex } from '@ivanzaida/structures'

/**
 * PHYSICS:SET_DISABLE_FRAG_DAMAGE
 *
 * 0x091DA52005030F41

 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entityId
 * @param {boolean} disableDamage
 */
export function setDisableFragDamage(entityId: EntityIndex, disableDamage: boolean): void {
	const setDisableFragDamage_result = Citizen.invokeNative<void>('0x091DA52005030F41', entityId, disableDamage);
	return setDisableFragDamage_result;
}