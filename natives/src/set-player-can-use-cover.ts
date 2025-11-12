import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:SET_PLAYER_CAN_USE_COVER
 *
 * 0x3EBA706E071AA76A

 * 
 * Sets whether this player can take cover.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @param {boolean} canUseCover
 */
export function setPlayerCanUseCover(player: PlayerIndex, canUseCover: boolean): void {
	const setPlayerCanUseCover_result = Citizen.invokeNative<void>('0x3EBA706E071AA76A', player, canUseCover);
	return setPlayerCanUseCover_result;
}