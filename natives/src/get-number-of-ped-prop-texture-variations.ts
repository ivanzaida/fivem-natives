import { PedIndex, EPedPropPosition } from '@ivanzaida/structures'

/**
 * PED:GET_NUMBER_OF_PED_PROP_TEXTURE_VARIATIONS
 *
 * 0x1D77F90D87ACD2BA

 * 
 * Need to check behavior when drawableId = -1
 * 
 * - Doofy.Ass
 * Why this function doesn't work and return nill value?
 * GET_NUMBER_OF_PED_PROP_TEXTURE_VARIATIONS(PLAYER.PLAYER_PED_ID(), 0, 5)
 * 
 * tick: scripts/addins/menu_execute.lua:51: attempt to call field 'GET_NUMBER_OF_PED_PROP_TEXTURE_VARIATIONS' (a nil value)
 * 
 * 
 * List of component/props ID
 * gtaxscripting.blogspot.com/2016/04/gta-v-peds-component-and-props.html
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {EPedPropPosition} propPosition
 * @param {number} propDrawable
 * @returns {number}  
 */
export function getNumberOfPedPropTextureVariations(ped: PedIndex, propPosition: EPedPropPosition | number, propDrawable: number): number {
	const getNumberOfPedPropTextureVariations_result = Citizen.invokeNative<number>('0x1D77F90D87ACD2BA', ped, propPosition, propDrawable);
	return getNumberOfPedPropTextureVariations_result;
}