import { PedIndex, EPedComponent } from '@ivanzaida/structures'

/**
 * PED:GET_NUMBER_OF_PED_TEXTURE_VARIATIONS
 *
 * 0x8401C77F508D70FD

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
 * @param {number} drawableNumber
 * @returns {number}  
 */
export function getNumberOfPedTextureVariations(ped: PedIndex, componentNumber: EPedComponent | number, drawableNumber: number): number {
	const getNumberOfPedTextureVariations_result = Citizen.invokeNative<number>('0x8401C77F508D70FD', ped, componentNumber, drawableNumber);
	return getNumberOfPedTextureVariations_result;
}