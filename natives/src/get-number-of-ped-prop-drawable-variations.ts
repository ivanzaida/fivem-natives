import { PedIndex, EPedPropPosition } from '@ivanzaida/structures'

/**
 * PED:GET_NUMBER_OF_PED_PROP_DRAWABLE_VARIATIONS
 *
 * 0x4D0F04723A52D0E9

 * 
 * List of component/props ID
 * gtaxscripting.blogspot.com/2016/04/gta-v-peds-component-and-props.html
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {EPedPropPosition} propPosition
 * @returns {number}  
 */
export function getNumberOfPedPropDrawableVariations(ped: PedIndex, propPosition: EPedPropPosition | number): number {
	const getNumberOfPedPropDrawableVariations_result = Citizen.invokeNative<number>('0x4D0F04723A52D0E9', ped, propPosition);
	return getNumberOfPedPropDrawableVariations_result;
}