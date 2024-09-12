import { PedIndex } from '@ivanzaida/structures'

/**
 * TASK:SET_TASK_MOVE_NETWORK_SIGNAL_BOOL
 *
 * 0xBF87221921DE71CA

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {string} signalName
 * @param {boolean} signal
 */
export function setTaskMoveNetworkSignalBool(ped: PedIndex, signalName: string, signal: boolean): void {
	const setTaskMoveNetworkSignalBool_result = Citizen.invokeNative<void>('0xBF87221921DE71CA', ped, signalName, signal);
	return setTaskMoveNetworkSignalBool_result;
}