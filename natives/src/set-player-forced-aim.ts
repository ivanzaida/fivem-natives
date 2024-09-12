import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:SET_PLAYER_FORCED_AIM
 *
 * 0x5F607C9E85F2ECC5

 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @param {boolean} forcedAim
 */
export function setPlayerForcedAim(player: PlayerIndex, forcedAim: boolean): void {
	const setPlayerForcedAim_result = Citizen.invokeNative<void>('0x5F607C9E85F2ECC5', player, forcedAim);
	return setPlayerForcedAim_result;
}