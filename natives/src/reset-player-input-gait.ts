import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:RESET_PLAYER_INPUT_GAIT
 *
 * 0xDF1A809B241FEE24

 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} playerIdx
 */
export function resetPlayerInputGait(playerIdx: PlayerIndex): void {
	const resetPlayerInputGait_result = Citizen.invokeNative<void>('0xDF1A809B241FEE24', playerIdx);
	return resetPlayerInputGait_result;
}