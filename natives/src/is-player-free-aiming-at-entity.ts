import { PlayerIndex, EntityIndex } from '@ivanzaida/structures'

/**
 * PLAYER:IS_PLAYER_FREE_AIMING_AT_ENTITY
 *
 * 0xE5D813FA6F741B01

 * 
 * Gets a value indicating whether the specified player is currently aiming freely at the specified entity.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @param {EntityIndex} entity
 * @returns {boolean}  
 */
export function isPlayerFreeAimingAtEntity(player: PlayerIndex, entity: EntityIndex): boolean {
	const isPlayerFreeAimingAtEntity_result = Citizen.invokeNative<boolean>('0xE5D813FA6F741B01', player, entity);
	return isPlayerFreeAimingAtEntity_result;
}