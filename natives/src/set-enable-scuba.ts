import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_ENABLE_SCUBA
 *
 * 0x61BBBE1B9F8AC7D0

 * 
 * Enables diving motion when underwater.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} enable
 */
export function setEnableScuba(ped: PedIndex, enable: boolean): void {
	const setEnableScuba_result = Citizen.invokeNative<void>('0x61BBBE1B9F8AC7D0', ped, enable);
	return setEnableScuba_result;
}