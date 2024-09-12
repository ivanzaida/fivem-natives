import { PedIndex } from '@ivanzaida/structures'

/**
 * FILES:DOES_CURRENT_PED_PROP_HAVE_RESTRICTION_TAG
 *
 * 0x6C309E623368F96B

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} position
 * @param {number} tagHash
 * @returns {boolean}  
 */
export function doesCurrentPedPropHaveRestrictionTag(ped: PedIndex, position: number, tagHash: number): boolean {
	const doesCurrentPedPropHaveRestrictionTag_result = Citizen.invokeNative<boolean>('0x6C309E623368F96B', ped, position, tagHash);
	return doesCurrentPedPropHaveRestrictionTag_result;
}