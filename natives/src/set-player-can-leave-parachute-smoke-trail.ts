import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:SET_PLAYER_CAN_LEAVE_PARACHUTE_SMOKE_TRAIL
 *
 * 0x92BC68FD9EBF7832

 * 
 * This function controls whether the player is allowed to leave a smoke trail during parachuting
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @param {boolean} canLeaveParachuteSmokeTrail
 */
export function setPlayerCanLeaveParachuteSmokeTrail(player: PlayerIndex, canLeaveParachuteSmokeTrail: boolean): void {
	const setPlayerCanLeaveParachuteSmokeTrail_result = Citizen.invokeNative<void>('0x92BC68FD9EBF7832', player, canLeaveParachuteSmokeTrail);
	return setPlayerCanLeaveParachuteSmokeTrail_result;
}