import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_HELMET_TEXTURE_INDEX
 *
 * 0x297DBAD88EF053F9

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} overwriteHelmetTex
 */
export function setPedHelmetTextureIndex(ped: PedIndex, overwriteHelmetTex: number = 1): void {
	const setPedHelmetTextureIndex_result = Citizen.invokeNative<void>('0x297DBAD88EF053F9', ped, overwriteHelmetTex);
	return setPedHelmetTextureIndex_result;
}