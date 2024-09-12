import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:SET_PLAYER_FORCED_ZOOM
 *
 * 0x907872AE773E60D2

 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @param {boolean} forcedZoom
 */
export function setPlayerForcedZoom(player: PlayerIndex, forcedZoom: boolean): void {
	const setPlayerForcedZoom_result = Citizen.invokeNative<void>('0x907872AE773E60D2', player, forcedZoom);
	return setPlayerForcedZoom_result;
}