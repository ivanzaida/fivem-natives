import { PedIndex } from '@ivanzaida/structures'

/**
 * WEAPON:SET_PED_CHANCE_OF_FIRING_BLANKS
 *
 * 0x0DB5B122A29E007B

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} chanceMin
 * @param {number} chanceMax
 */
export function setPedChanceOfFiringBlanks(ped: PedIndex, chanceMin: number, chanceMax: number): void {
	const setPedChanceOfFiringBlanks_result = Citizen.invokeNative<void>('0x0DB5B122A29E007B', ped, chanceMin, chanceMax);
	return setPedChanceOfFiringBlanks_result;
}