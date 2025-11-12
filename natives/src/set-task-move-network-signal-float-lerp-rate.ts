import { PedIndex } from '@ivanzaida/structures'

/**
 * TASK:SET_TASK_MOVE_NETWORK_SIGNAL_FLOAT_LERP_RATE
 *
 * 0x515111A614F76DC4

 * 
 * Sets the lerp rate to the passed value -
 * Lerp rate controls rate at which the corresponding MoVE float signal will lerp over frame updates on the clone from the current value to the target value.
 * It is assumed that the corresponding MoVE float signal has already been created using SET_TASK_MOVE_NETWORK_SIGNAL_FLOAT command.
 * Currently the lerp rate defaults to a value of 0.5f. The lerp value has to be above 0.0f and below 1.0f.
 * If a lerp rate of 1.0f is applied then no lerping is used and the exact float value will be synced and applied immediately on the clone.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {string} signalName
 * @param {number} lerpRate
 */
export function setTaskMoveNetworkSignalFloatLerpRate(ped: PedIndex, signalName: string, lerpRate: number): void {
	const setTaskMoveNetworkSignalFloatLerpRate_result = Citizen.invokeNative<void>('0x515111A614F76DC4', ped, signalName, lerpRate);
	return setTaskMoveNetworkSignalFloatLerpRate_result;
}