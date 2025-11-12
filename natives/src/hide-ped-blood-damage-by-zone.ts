import { PedIndex, EPedDecorationZone } from '@ivanzaida/structures'

/**
 * PED:HIDE_PED_BLOOD_DAMAGE_BY_ZONE
 *
 * 0x81C558E9A03D2F2B

 * 
 * It can be called repeatedly to hide blood in multiple zones.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {EPedDecorationZone} zone
 * @param {boolean} enable
 */
export function hidePedBloodDamageByZone(ped: PedIndex, zone: EPedDecorationZone | number, enable: boolean): void {
	const hidePedBloodDamageByZone_result = Citizen.invokeNative<void>('0x81C558E9A03D2F2B', ped, zone, enable);
	return hidePedBloodDamageByZone_result;
}