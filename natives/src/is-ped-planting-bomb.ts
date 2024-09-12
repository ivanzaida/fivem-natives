import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:IS_PED_PLANTING_BOMB
 *
 * 0x74CD4FE549433E92

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {boolean}  
 */
export function isPedPlantingBomb(ped: PedIndex): boolean {
	const isPedPlantingBomb_result = Citizen.invokeNative<boolean>('0x74CD4FE549433E92', ped);
	return isPedPlantingBomb_result;
}