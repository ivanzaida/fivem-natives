import { PlayerIndex, EntityIndex } from '@ivanzaida/structures'

/**
 * PLAYER:REMOVE_PLAYER_TARGETABLE_ENTITY
 *
 * 0x5D602AB9F6E93843

 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @param {EntityIndex} target
 */
export function removePlayerTargetableEntity(player: PlayerIndex, target: EntityIndex): void {
	const removePlayerTargetableEntity_result = Citizen.invokeNative<void>('0x5D602AB9F6E93843', player, target);
	return removePlayerTargetableEntity_result;
}