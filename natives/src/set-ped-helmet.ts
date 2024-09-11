import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_HELMET
 *
 * 0xECF7FE1783A38672

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} enable
 */
export function setPedHelmet(ped: PedIndex, enable: boolean): void {
	const setPedHelmet_result = Citizen.invokeNative<void>('0xECF7FE1783A38672', ped, enable);
	return setPedHelmet_result;
}