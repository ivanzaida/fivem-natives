import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:SET_PLAYER_LOCKON
 *
 * 0xEFF44B1774BDC08F

 * 
 * Example from fm_mission_controler.ysc.c4:
 * 
 * PLAYER::SET_PLAYER_LOCKON(PLAYER::PLAYER_ID(), 1);
 * 
 * All other decompiled scripts using this seem to be using the player id as the first parameter, so I feel the need to confirm it as so.
 * 
 * No need to confirm it says PLAYER_ID() so it uses PLAYER_ID() lol.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @param {boolean} active
 */
export function setPlayerLockon(player: PlayerIndex, active: boolean): void {
	const setPlayerLockon_result = Citizen.invokeNative<void>('0xEFF44B1774BDC08F', player, active);
	return setPlayerLockon_result;
}