import { InteriorInstanceIndex } from '@ivanzaida/structures'

/**
 * INTERIOR:UNPIN_INTERIOR
 *
 * 0xBBB6D0F765409642

 * 
 * Does something similar to INTERIOR::DISABLE_INTERIOR.
 * 
 * You don't fall through the floor but everything is invisible inside and looks the same as when INTERIOR::DISABLE_INTERIOR is used. Peds behaves normally inside.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {InteriorInstanceIndex} interiorInstance
 */
export function unpinInterior(interiorInstance: InteriorInstanceIndex): void {
	const unpinInterior_result = Citizen.invokeNative<void>('0xBBB6D0F765409642', interiorInstance);
	return unpinInterior_result;
}