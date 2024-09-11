import { PedIndex, ModelNames } from '@ivanzaida/structures'

/**
 * PED:IS_PED_IN_MODEL
 *
 * 0x0595DAC15F5513F9

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {ModelNames} vehicleModelHashKey
 * @returns {boolean}  
 */
export function isPedInModel(ped: PedIndex, vehicleModelHashKey: ModelNames): boolean {
	const isPedInModel_result = Citizen.invokeNative<boolean>('0x0595DAC15F5513F9', ped, vehicleModelHashKey);
	return isPedInModel_result;
}