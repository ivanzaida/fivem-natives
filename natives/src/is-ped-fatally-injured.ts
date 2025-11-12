import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:IS_PED_FATALLY_INJURED
 *
 * 0xBFD01C2045360289

 * 
 * Cannot give ped tasks if fatally injured.
 * 
 * Gets a value indicating whether this ped's health is below its fatally injured threshold. The default threshold is 100.
 * If the handle is invalid, the function returns true.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {boolean}  
 */
export function isPedFatallyInjured(ped: PedIndex): boolean {
	const isPedFatallyInjured_result = Citizen.invokeNative<boolean>('0xBFD01C2045360289', ped);
	return isPedFatallyInjured_result;
}