import { PedIndex, ELoadoutType } from '@ivanzaida/structures'

/**
 * WEAPON:GIVE_LOADOUT_TO_PED
 *
 * 0x9C1B023459284932

 * 
 * Gives the specified loadout to the specified ped.
 * Loadouts are defined in common.rpf\data\ai\loadouts.meta
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {ELoadoutType} loadOut
 */
export function giveLoadoutToPed(ped: PedIndex, loadOut: ELoadoutType | number): void {
	const giveLoadoutToPed_result = Citizen.invokeNative<void>('0x9C1B023459284932', ped, loadOut);
	return giveLoadoutToPed_result;
}