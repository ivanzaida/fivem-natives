import { InteriorInstanceIndex } from '@ivanzaida/structures'

/**
 * INTERIOR:SET_INTERIOR_ENTITY_SET_TINT_INDEX
 *
 * 0x0A047107933868D4

 * 
 * Full list of IPLs and interior entity sets by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/ipls.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {InteriorInstanceIndex} interiorInstance
 * @param {string} entitySetName
 * @param {number} tint
 */
export function setInteriorEntitySetTintIndex(interiorInstance: InteriorInstanceIndex, entitySetName: string, tint: number): void {
	const setInteriorEntitySetTintIndex_result = Citizen.invokeNative<void>('0x0A047107933868D4', interiorInstance, entitySetName, tint);
	return setInteriorEntitySetTintIndex_result;
}