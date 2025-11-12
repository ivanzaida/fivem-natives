import { PedIndex, EPedComponent } from '@ivanzaida/structures'

/**
 * PED:GET_NUMBER_OF_PED_DRAWABLE_VARIATIONS
 *
 * 0x1A4EFE92822E3123

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
export function getNumberOfPedDrawableVariations(ped: PedIndex, componentNumber: EPedComponent | number): number {
	const getNumberOfPedDrawableVariations_result = Citizen.invokeNative<number>('0x1A4EFE92822E3123', ped, componentNumber);
	return getNumberOfPedDrawableVariations_result;
}