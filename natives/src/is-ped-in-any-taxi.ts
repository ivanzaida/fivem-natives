import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:IS_PED_IN_ANY_TAXI
 *
 * 0x0F00017BC718D851

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {boolean}  
 */
export function isPedInAnyTaxi(ped: PedIndex): boolean {
	const isPedInAnyTaxi_result = Citizen.invokeNative<boolean>('0x0F00017BC718D851', ped);
	return isPedInAnyTaxi_result;
}