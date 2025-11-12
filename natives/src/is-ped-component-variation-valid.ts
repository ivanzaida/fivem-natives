import { PedIndex, EPedComponent } from '@ivanzaida/structures'

/**
 * PED:IS_PED_COMPONENT_VARIATION_VALID
 *
 * 0xE91CD2B3CF8A106C

 * 
 * Checks if the component variation is valid, this works great for randomizing components using loops.
 * 
 * List of component/props ID
 * gtaxscripting.blogspot.com/2016/04/gta-v-peds-component-and-props.html
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {EPedComponent} componentNumber
 * @param {number} drawableNumber
 * @param {number} textureNumber
 * @returns {boolean}  
 */
export function isPedComponentVariationValid(ped: PedIndex, componentNumber: EPedComponent | number, drawableNumber: number, textureNumber: number): boolean {
	const isPedComponentVariationValid_result = Citizen.invokeNative<boolean>('0xE91CD2B3CF8A106C', ped, componentNumber, drawableNumber, textureNumber);
	return isPedComponentVariationValid_result;
}