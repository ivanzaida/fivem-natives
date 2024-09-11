import { PedIndex } from '@ivanzaida/structures'

/**
 * TASK:SET_TASK_MOVE_NETWORK_SIGNAL_LOCAL_FLOAT
 *
 * 0xE523F21FAB5438DA

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {string} signalName
 * @param {number} signal
 */
export function setTaskMoveNetworkSignalLocalFloat(ped: PedIndex, signalName: string, signal: number): void {
	const setTaskMoveNetworkSignalLocalFloat_result = Citizen.invokeNative<void>('0xE523F21FAB5438DA', ped, signalName, signal);
	return setTaskMoveNetworkSignalLocalFloat_result;
}