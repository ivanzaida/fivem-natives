import { InteriorInstanceIndex } from '@ivanzaida/structures'

/**
 * INTERIOR:REFRESH_INTERIOR
 *
 * 0xEEC112F70F9E6543

 * 
 * ------------------------------------------------------------------
 * @param {InteriorInstanceIndex} interiorInstance
 */
export function refreshInterior(interiorInstance: InteriorInstanceIndex): void {
	const refreshInterior_result = Citizen.invokeNative<void>('0xEEC112F70F9E6543', interiorInstance);
	return refreshInterior_result;
}