import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:IS_PED_WEARING_HELMET
 *
 * 0x6DBAC05AFA907A23

 * 
 * Returns true if the ped passed through the parenthesis is wearing a helmet.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {boolean}  
 */
export function isPedWearingHelmet(ped: PedIndex): boolean {
	const isPedWearingHelmet_result = Citizen.invokeNative<boolean>('0x6DBAC05AFA907A23', ped);
	return isPedWearingHelmet_result;
}