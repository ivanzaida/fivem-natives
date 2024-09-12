import { DecalId } from '@ivanzaida/structures'

/**
 * GRAPHICS:IS_DECAL_ALIVE
 *
 * 0x1A22029316A4B46C

 * 
 * ------------------------------------------------------------------
 * @param {DecalId} decalId
 * @returns {boolean}  
 */
export function isDecalAlive(decalId: DecalId): boolean {
	const isDecalAlive_result = Citizen.invokeNative<boolean>('0x1A22029316A4B46C', decalId);
	return isDecalAlive_result;
}