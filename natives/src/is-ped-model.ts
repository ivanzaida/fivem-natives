import { PedIndex, ModelNames } from '@ivanzaida/structures'

/**
 * PED:IS_PED_MODEL
 *
 * 0x700C28A639389477

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {ModelNames} pedModelHashKey
 * @returns {boolean}  
 */
export function isPedModel(ped: PedIndex, pedModelHashKey: ModelNames): boolean {
	const isPedModel_result = Citizen.invokeNative<boolean>('0x700C28A639389477', ped, pedModelHashKey);
	return isPedModel_result;
}