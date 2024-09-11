import { PedIndex } from '@ivanzaida/structures'

/**
 * TASK:GET_TASK_MOVE_NETWORK_SIGNAL_FLOAT
 *
 * 0x6E19562EC08A07C6

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {string} signalName
 * @returns {number}  
 */
export function getTaskMoveNetworkSignalFloat(ped: PedIndex, signalName: string): number {
	const getTaskMoveNetworkSignalFloat_result = Citizen.invokeNative<number>('0x6E19562EC08A07C6', ped, signalName);
	return getTaskMoveNetworkSignalFloat_result;
}