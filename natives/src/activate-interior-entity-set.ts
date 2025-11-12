import { InteriorInstanceIndex } from '@ivanzaida/structures'

/**
 * INTERIOR:ACTIVATE_INTERIOR_ENTITY_SET
 *
 * 0x907994FF361E5295

 * 
 * More info: http://gtaforums.com/topic/836367-adding-props-to-interiors/
 * 
 * Full list of IPLs and interior entity sets by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/ipls.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {InteriorInstanceIndex} interiorInstance
 * @param {string} entitySetName
 */
export function activateInteriorEntitySet(interiorInstance: InteriorInstanceIndex, entitySetName: string): void {
	const activateInteriorEntitySet_result = Citizen.invokeNative<void>('0x907994FF361E5295', interiorInstance, entitySetName);
	return activateInteriorEntitySet_result;
}