import { PlayerIndex } from '@ivanzaida/structures'

/**
 * NETWORK:SET_REMOTE_PLAYER_VISIBLE_IN_CUTSCENE
 *
 * 0x57F9D4E3B420366E

 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @param {boolean} locallyVisible
 */
export function setRemotePlayerVisibleInCutscene(player: PlayerIndex, locallyVisible: boolean): void {
	const setRemotePlayerVisibleInCutscene_result = Citizen.invokeNative<void>('0x57F9D4E3B420366E', player, locallyVisible);
	return setRemotePlayerVisibleInCutscene_result;
}