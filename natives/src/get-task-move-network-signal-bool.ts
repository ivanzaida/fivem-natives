import { PedIndex } from '@ivanzaida/structures'

/**
 * TASK:GET_TASK_MOVE_NETWORK_SIGNAL_BOOL
 *
 * 0x12C0D6CD0D2EBB6F

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {string} signalName
 * @returns {boolean}  
 */
export function getTaskMoveNetworkSignalBool(ped: PedIndex, signalName: string): boolean {
	const getTaskMoveNetworkSignalBool_result = Citizen.invokeNative<boolean>('0x12C0D6CD0D2EBB6F', ped, signalName);
	return getTaskMoveNetworkSignalBool_result;
}