import { PedIndex } from '@ivanzaida/structures'

/**
 * MISC:SET_TENNIS_MOVE_NETWORK_SIGNAL_FLOAT
 *
 * 0xD3FF6AD07BECA69C

 * 
 * From the scripts:
 * 
 * MISC::SET_TENNIS_MOVE_NETWORK_SIGNAL_FLOAT(sub_aa49(a_0), "ForcedStopDirection", v_E);
 * 
 * Related to tennis mode.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {string} signalName
 * @param {number} signal
 */
export function setTennisMoveNetworkSignalFloat(ped: PedIndex, signalName: string, signal: number): void {
	const setTennisMoveNetworkSignalFloat_result = Citizen.invokeNative<void>('0xD3FF6AD07BECA69C', ped, signalName, signal);
	return setTennisMoveNetworkSignalFloat_result;
}