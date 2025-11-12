import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:SET_PLAYER_SIMULATE_AIMING
 *
 * 0x469AD8A2B1EBB937

 * 
 * Enable/disable player simulating aiming.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @param {boolean} simulateAiming
 */
export function setPlayerSimulateAiming(player: PlayerIndex, simulateAiming: boolean): void {
	const setPlayerSimulateAiming_result = Citizen.invokeNative<void>('0x469AD8A2B1EBB937', player, simulateAiming);
	return setPlayerSimulateAiming_result;
}