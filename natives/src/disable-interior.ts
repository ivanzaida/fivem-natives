import { InteriorInstanceIndex } from '@ivanzaida/structures'

/**
 * INTERIOR:DISABLE_INTERIOR
 *
 * 0xD3EBDA853981B983

 * 
 * completely disable the interior in the game
 * 
 * Example:
 * This removes the interior from the strip club and when trying to walk inside the player just falls:
 * 
 * INTERIOR::DISABLE_INTERIOR(118018, true);
 * 
 * 
 * ------------------------------------------------------------------
 * @param {InteriorInstanceIndex} interiorInstance
 * @param {boolean} disable
 */
export function disableInterior(interiorInstance: InteriorInstanceIndex, disable: boolean): void {
	const disableInterior_result = Citizen.invokeNative<void>('0xD3EBDA853981B983', interiorInstance, disable);
	return disableInterior_result;
}