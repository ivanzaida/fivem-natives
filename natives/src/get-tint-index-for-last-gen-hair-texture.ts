import { ModelNames } from '@ivanzaida/structures'

/**
 * PED:GET_TINT_INDEX_FOR_LAST_GEN_HAIR_TEXTURE
 *
 * 0xD839A970B98A1E9C

 * 
 * ------------------------------------------------------------------
 * @param {ModelNames} pedModelHash
 * @param {number} hairDrawableId
 * @param {number} hairTextureId
 * @returns {number}  
 */
export function getTintIndexForLastGenHairTexture(pedModelHash: ModelNames, hairDrawableId: number, hairTextureId: number): number {
	const getTintIndexForLastGenHairTexture_result = Citizen.invokeNative<number>('0xD839A970B98A1E9C', pedModelHash, hairDrawableId, hairTextureId);
	return getTintIndexForLastGenHairTexture_result;
}