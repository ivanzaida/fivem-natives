import { PlayerIndex } from '@ivanzaida/structures'

/**
 * CFX:SET_PLAYER_TALKING_OVERRIDE
 *
 * 0XFC02CAF6

 * the status of default voip system. It affects on `NETWORK_IS_PLAYER_TALKING` and `mp_facial` animation.This function doesn't need to be called every frame, it works like a switcher.
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player The target player.
 * @param {boolean} state Overriding state.
 */
export function setPlayerTalkingOverride(player: PlayerIndex, state: boolean): void {
	const setPlayerTalkingOverride_result = Citizen.invokeNative<void>('0XFC02CAF6', player, state);
	return setPlayerTalkingOverride_result;
}