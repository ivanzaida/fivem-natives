import { DecalId } from '@ivanzaida/structures'

/**
 * GRAPHICS:GET_DECAL_WASH_LEVEL
 *
 * 0xC437B7DF8EEE7C1D

 * 
 * ------------------------------------------------------------------
 * @param {DecalId} decalId
 * @returns {number}  
 */
export function getDecalWashLevel(decalId: DecalId): number {
	const getDecalWashLevel_result = Citizen.invokeNative<number>('0xC437B7DF8EEE7C1D', decalId);
	return getDecalWashLevel_result;
}