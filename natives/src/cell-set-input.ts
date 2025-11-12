import { ECellInput } from '@ivanzaida/structures'

/**
 * MOBILE:CELL_SET_INPUT
 *
 * 0xBF3F90E670404C44

 * 
 * For move the finger of player, the value of int goes 1 at 5.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {ECellInput} cellInput
 */
export function cellSetInput(cellInput: ECellInput | number): void {
	const cellSetInput_result = Citizen.invokeNative<void>('0xBF3F90E670404C44', cellInput);
	return cellSetInput_result;
}