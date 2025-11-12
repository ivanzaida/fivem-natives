import { InteriorInstanceIndex } from '@ivanzaida/structures'

/**
 * INTERIOR:DEACTIVATE_INTERIOR_ENTITY_SET
 *
 * 0x62BCE536D41AC07D

 * 
 * Full list of IPLs and interior entity sets by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/ipls.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {InteriorInstanceIndex} interiorInstance
 * @param {string} entitySetName
 */
export function deactivateInteriorEntitySet(interiorInstance: InteriorInstanceIndex, entitySetName: string): void {
	const deactivateInteriorEntitySet_result = Citizen.invokeNative<void>('0x62BCE536D41AC07D', interiorInstance, entitySetName);
	return deactivateInteriorEntitySet_result;
}