import { PedIndex, EPedComponent } from '@ivanzaida/structures'

/**
 * FILES:DOES_CURRENT_PED_COMPONENT_HAVE_RESTRICTION_TAG
 *
 * 0xCA362C769B0F4F0E

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {EPedComponent} componentNumber
 * @param {number} tagHash
 * @returns {boolean}  
 */
export function doesCurrentPedComponentHaveRestrictionTag(ped: PedIndex, componentNumber: EPedComponent | number, tagHash: number): boolean {
	const doesCurrentPedComponentHaveRestrictionTag_result = Citizen.invokeNative<boolean>('0xCA362C769B0F4F0E', ped, componentNumber, tagHash);
	return doesCurrentPedComponentHaveRestrictionTag_result;
}