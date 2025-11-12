import { PedIndex, EPedComponent } from '@ivanzaida/structures'

/**
 * PED:SET_PED_PRELOAD_VARIATION_DATA
 *
 * 0xBE291C733F237949

 * 
 * from extreme3.c4
 * PED::SET_PED_PRELOAD_VARIATION_DATA(PLAYER::PLAYER_PED_ID(), 8, PED::GET_PED_DRAWABLE_VARIATION(PLAYER::PLAYER_PED_ID(), 8), PED::GET_PED_TEXTURE_VARIATION(PLAYER::PLAYER_PED_ID(), 8));
 * 
 * p1 is probably componentId
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {EPedComponent} componentID
 * @param {number} drawableID
 * @param {number} textureID
 * @returns {number}  
 */
export function setPedPreloadVariationData(ped: PedIndex, componentID: EPedComponent | number, drawableID: number, textureID: number): number {
	const setPedPreloadVariationData_result = Citizen.invokeNative<number>('0xBE291C733F237949', ped, componentID, drawableID, textureID);
	return setPedPreloadVariationData_result;
}