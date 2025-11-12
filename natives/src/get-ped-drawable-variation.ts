import { PedIndex, EPedComponent } from '@ivanzaida/structures'

/**
 * PED:GET_PED_DRAWABLE_VARIATION
 *
 * 0xC0120BBCC298EA2F

 * 
 * Each ped model can have several drawables for each component. Each drawable can have several textures.
 * 
 * Ids
 * 0 - Head
 * 1 - Beard
 * 2 - Hair
 * 3 - Torso
 * 4 - Legs
 * 5 - Hands
 * 6 - Foot
 * 7 - ------
 * 8 - Accessories 1
 * 9 - Accessories 2
 * 10- Decals
 * 11 - Auxiliary parts for torso
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {EPedComponent} componentNumber
 * @returns {number}  
 */
export function getPedDrawableVariation(ped: PedIndex, componentNumber: EPedComponent | number): number {
	const getPedDrawableVariation_result = Citizen.invokeNative<number>('0xC0120BBCC298EA2F', ped, componentNumber);
	return getPedDrawableVariation_result;
}