import { InteriorInstanceIndex } from '@ivanzaida/structures'

/**
 * INTERIOR:PIN_INTERIOR_IN_MEMORY
 *
 * 0x74C1590CC91B3930

 * 
 * ------------------------------------------------------------------
 * @param {InteriorInstanceIndex} interiorInstance
 */
export function pinInteriorInMemory(interiorInstance: InteriorInstanceIndex): void {
	const pinInteriorInMemory_result = Citizen.invokeNative<void>('0x74C1590CC91B3930', interiorInstance);
	return pinInteriorInMemory_result;
}