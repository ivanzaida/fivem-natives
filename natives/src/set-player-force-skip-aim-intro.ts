import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:SET_PLAYER_FORCE_SKIP_AIM_INTRO
 *
 * 0x676D58067087BA0A

 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @param {boolean} skipIntro
 */
export function setPlayerForceSkipAimIntro(player: PlayerIndex, skipIntro: boolean): void {
	const setPlayerForceSkipAimIntro_result = Citizen.invokeNative<void>('0x676D58067087BA0A', player, skipIntro);
	return setPlayerForceSkipAimIntro_result;
}