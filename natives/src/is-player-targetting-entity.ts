import { PlayerIndex, EntityIndex } from '@ivanzaida/structures'

/**
 * PLAYER:IS_PLAYER_TARGETTING_ENTITY
 *
 * 0x41754DC6001F6313

 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @param {EntityIndex} entity
 * @returns {boolean}  
 */
export function isPlayerTargettingEntity(player: PlayerIndex, entity: EntityIndex): boolean {
	const isPlayerTargettingEntity_result = Citizen.invokeNative<boolean>('0x41754DC6001F6313', player, entity);
	return isPlayerTargettingEntity_result;
}