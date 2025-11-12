import { PedIndex, EPedComponent } from '@ivanzaida/structures'

/**
 * PED:GET_PED_PALETTE_VARIATION
 *
 * 0xDAF263B0E792EAEC

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
export function getPedPaletteVariation(ped: PedIndex, componentNumber: EPedComponent | number): number {
	const getPedPaletteVariation_result = Citizen.invokeNative<number>('0xDAF263B0E792EAEC', ped, componentNumber);
	return getPedPaletteVariation_result;
}