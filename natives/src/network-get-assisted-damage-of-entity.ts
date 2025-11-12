import { PlayerIndex, EntityIndex, IntRef } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_GET_ASSISTED_DAMAGE_OF_ENTITY
 *
 * 0x07DCBF1C62A9C503

 * 
 * This command can be used for any physical objects within the game (e.g. cars, peds and objects).
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} playerIndexDamager
 * @param {EntityIndex} entityDamaged
 * @param {IntRef} damageDealt [Ref]
 * @returns {boolean}  
 */
export function networkGetAssistedDamageOfEntity(playerIndexDamager: PlayerIndex, entityDamaged: EntityIndex, damageDealt: IntRef /* ptr */): boolean {
	const networkGetAssistedDamageOfEntity_result = Citizen.invokeNative<boolean>('0x07DCBF1C62A9C503', playerIndexDamager, entityDamaged, damageDealt.dataView);
	return networkGetAssistedDamageOfEntity_result;
}