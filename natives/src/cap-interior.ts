import { InteriorInstanceIndex } from '@ivanzaida/structures'

/**
 * INTERIOR:CAP_INTERIOR
 *
 * 0xA5C49FC956688050

 * 
 * caps the interior to only the shell objects ( usually walls + floor + doors + windows), prevents collisions from loading.
 * 
 * Does something similar to INTERIOR::DISABLE_INTERIOR
 * 
 * 
 * ------------------------------------------------------------------
 * @param {InteriorInstanceIndex} interiorInstance
 * @param {boolean} cap
 */
export function capInterior(interiorInstance: InteriorInstanceIndex, cap: boolean): void {
	const capInterior_result = Citizen.invokeNative<void>('0xA5C49FC956688050', interiorInstance, cap);
	return capInterior_result;
}