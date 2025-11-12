import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:APPLY_PED_BLOOD_BY_ZONE
 *
 * 0x07D31B8F40A98A75

 * 
 * you can use the widgets in  "Peds/Ped Damage/Test Blood by UV (Interactive)" to test u,v values for different zones, etc
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} component
 * @param {number} u
 * @param {number} v
 * @param {string} bloodName
 */
export function applyPedBloodByZone(ped: PedIndex, component: number, u: number, v: number, bloodName: string): void {
	const applyPedBloodByZone_result = Citizen.invokeNative<void>('0x07D31B8F40A98A75', ped, component, u, v, bloodName);
	return applyPedBloodByZone_result;
}