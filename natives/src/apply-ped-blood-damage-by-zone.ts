import { PedIndex, EPedDecorationZone, EPedBloodDamageType } from '@ivanzaida/structures'

/**
 * PED:APPLY_PED_BLOOD_DAMAGE_BY_ZONE
 *
 * 0x83707FFC4BC486A1

 * 
 * you can use the widgets in  "Peds/Ped Damage/Test Blood by UV" to test u,v values for different zones, etc
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {EPedDecorationZone} zone
 * @param {number} u
 * @param {number} v
 * @param {EPedBloodDamageType} type
 */
export function applyPedBloodDamageByZone(ped: PedIndex, zone: EPedDecorationZone | number, u: number, v: number, type: EPedBloodDamageType | number): void {
	const applyPedBloodDamageByZone_result = Citizen.invokeNative<void>('0x83707FFC4BC486A1', ped, zone, u, v, type);
	return applyPedBloodDamageByZone_result;
}