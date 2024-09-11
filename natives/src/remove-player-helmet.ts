import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:REMOVE_PLAYER_HELMET
 *
 * 0x380902AACBEF8EDD

 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @param {boolean} forceRemove
 */
export function removePlayerHelmet(player: PlayerIndex, forceRemove: boolean): void {
	const removePlayerHelmet_result = Citizen.invokeNative<void>('0x380902AACBEF8EDD', player, forceRemove);
	return removePlayerHelmet_result;
}