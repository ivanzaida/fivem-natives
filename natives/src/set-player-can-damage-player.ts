import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:SET_PLAYER_CAN_DAMAGE_PLAYER
 *
 * 0xA4337AACEADDAA8E

 * 
 * This must be set up locally on all machines, no information here is synced (same as SET_PED_CAN_BE_TARGETTED_BY_PLAYER).
 * PARAMS
 * PlayerIndex - Player index.
 * TargetPlayerIndex - Target player index.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @param {PlayerIndex} targetPlayer
 * @param {boolean} allowDamageFlag
 */
export function setPlayerCanDamagePlayer(player: PlayerIndex, targetPlayer: PlayerIndex, allowDamageFlag: boolean): void {
	const setPlayerCanDamagePlayer_result = Citizen.invokeNative<void>('0xA4337AACEADDAA8E', player, targetPlayer, allowDamageFlag);
	return setPlayerCanDamagePlayer_result;
}