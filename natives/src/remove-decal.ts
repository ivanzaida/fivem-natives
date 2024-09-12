import { DecalId } from '@ivanzaida/structures'

/**
 * GRAPHICS:REMOVE_DECAL
 *
 * 0x93E1EA1609ABF230

 * 
 * ------------------------------------------------------------------
 * @param {DecalId} decalId
 */
export function removeDecal(decalId: DecalId): void {
	const removeDecal_result = Citizen.invokeNative<void>('0x93E1EA1609ABF230', decalId);
	return removeDecal_result;
}