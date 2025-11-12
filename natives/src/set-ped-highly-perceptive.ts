import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_HIGHLY_PERCEPTIVE
 *
 * 0xCAF62AAD9CA7C260

 * 
 * This command will make the ped more perceptive in the peripheral areas. This will increase the peds FOV and give
 * an extended peripheral range
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} highlyPerceptive
 */
export function setPedHighlyPerceptive(ped: PedIndex, highlyPerceptive: boolean): void {
	const setPedHighlyPerceptive_result = Citizen.invokeNative<void>('0xCAF62AAD9CA7C260', ped, highlyPerceptive);
	return setPedHighlyPerceptive_result;
}