import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:GET_PED_EMISSIVE_SCALE
 *
 * 0x6D7810EB34D1A1E3

 * 
 * Use 0x4E90D746056E273D to set the illuminated clothing glow intensity for a specific ped.
 * Returns a float between 0.0 and 1.0 representing the current illuminated clothing glow intensity.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {number}  
 */
export function getPedEmissiveScale(ped: PedIndex): number {
	const getPedEmissiveScale_result = Citizen.invokeNative<number>('0x6D7810EB34D1A1E3', ped);
	return getPedEmissiveScale_result;
}