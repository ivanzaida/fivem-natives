import { PedIndex } from '@ivanzaida/structures'

/**
 * TASK:SET_TASK_MOVE_NETWORK_SIGNAL_FLOAT
 *
 * 0xDB1DAB5E0E775E2D

 * 
 * signalName - "Phase", "Wobble", "x_axis","y_axis","introphase","speed".
 * p2 - From what i can see it goes up to 1f (maybe).
 * 
 * Example: TASK::SET_TASK_MOVE_NETWORK_SIGNAL_FLOAT(PLAYER::PLAYER_PED_ID(), "Phase", 0.5);
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {string} signalName
 * @param {number} signal
 */
export function setTaskMoveNetworkSignalFloat(ped: PedIndex, signalName: string, signal: number): void {
	const setTaskMoveNetworkSignalFloat_result = Citizen.invokeNative<void>('0xDB1DAB5E0E775E2D', ped, signalName, signal);
	return setTaskMoveNetworkSignalFloat_result;
}