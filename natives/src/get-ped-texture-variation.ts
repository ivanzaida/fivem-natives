import { PedIndex, EPedComponent } from '@ivanzaida/structures'

/**
 * PED:GET_PED_TEXTURE_VARIATION
 *
 * 0xD6AED6BFCC58AF7F

 * 
 * Each ped model can have several drawables for each component. Each drawable can have several textures.
 * 
 * List of component/props ID
 * gtaxscripting.blogspot.com/2016/04/gta-v-peds-component-and-props.html
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {EPedComponent} componentNumber
 * @returns {number}  
 */
export function getPedTextureVariation(ped: PedIndex, componentNumber: EPedComponent | number): number {
	const getPedTextureVariation_result = Citizen.invokeNative<number>('0xD6AED6BFCC58AF7F', ped, componentNumber);
	return getPedTextureVariation_result;
}