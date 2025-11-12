import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_ENVEFF_SCALE
 *
 * 0xDD7B1A7458742205

 * 
 * Values look to be between 0.0 and 1.0
 * From decompiled scripts: 0.0, 0.6, 0.65, 0.8, 1.0
 * 
 * You are correct, just looked in IDA it breaks from the function if it's less than 0.0f or greater than 1.0f.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} scale
 */
export function setPedEnveffScale(ped: PedIndex, scale: number): void {
	const setPedEnveffScale_result = Citizen.invokeNative<void>('0xDD7B1A7458742205', ped, scale);
	return setPedEnveffScale_result;
}