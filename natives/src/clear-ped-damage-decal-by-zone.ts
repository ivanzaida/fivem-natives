import { PedIndex, EPedDecorationZone } from '@ivanzaida/structures'

/**
 * PED:CLEAR_PED_DAMAGE_DECAL_BY_ZONE
 *
 * 0xC6DFC06670D0589A

 * 
 * p1: from 0 to 5 in the b617d scripts.
 * p2: "blushing" and "ALL" found in the b617d scripts.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {EPedDecorationZone} zone
 * @param {string} damageDecalName
 */
export function clearPedDamageDecalByZone(ped: PedIndex, zone: EPedDecorationZone | number, damageDecalName: string): void {
	const clearPedDamageDecalByZone_result = Citizen.invokeNative<void>('0xC6DFC06670D0589A', ped, zone, damageDecalName);
	return clearPedDamageDecalByZone_result;
}