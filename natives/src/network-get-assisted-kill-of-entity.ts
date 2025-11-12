import { PlayerIndex, EntityIndex, IntRef } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_GET_ASSISTED_KILL_OF_ENTITY
 *
 * 0x3DC0E2D99138397E

 * 
 * This command can be used for any physical objects within the game (e.g. cars, peds and objects).
 * 
 * NETWORK_GET_ASSISTED_DAMAGE_OF_ENTITY that ensures the entity is dead (IS_ENTITY_DEAD)
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} playerIndexDamager
 * @param {EntityIndex} entityDamaged
 * @param {IntRef} damageDealt [Ref]
 * @returns {boolean}  
 */
export function networkGetAssistedKillOfEntity(playerIndexDamager: PlayerIndex, entityDamaged: EntityIndex, damageDealt: IntRef /* ptr */): boolean {
	const networkGetAssistedKillOfEntity_result = Citizen.invokeNative<boolean>('0x3DC0E2D99138397E', playerIndexDamager, entityDamaged, damageDealt.dataView);
	return networkGetAssistedKillOfEntity_result;
}