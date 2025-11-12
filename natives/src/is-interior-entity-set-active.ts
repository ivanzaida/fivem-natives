import { InteriorInstanceIndex } from '@ivanzaida/structures'

/**
 * INTERIOR:IS_INTERIOR_ENTITY_SET_ACTIVE
 *
 * 0x9491D4E34E4389CD

 * 
 * Full list of IPLs and interior entity sets by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/ipls.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {InteriorInstanceIndex} interiorInstance
 * @param {string} entitySetName
 * @returns {boolean}  
 */
export function isInteriorEntitySetActive(interiorInstance: InteriorInstanceIndex, entitySetName: string): boolean {
	const isInteriorEntitySetActive_result = Citizen.invokeNative<boolean>('0x9491D4E34E4389CD', interiorInstance, entitySetName);
	return isInteriorEntitySetActive_result;
}