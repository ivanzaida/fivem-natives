import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:REVIVE_INJURED_PED
 *
 * 0xB713CAFC12DED3BE

 * 
 * This can only be applied to an injured ped
 * 
 * It will revive/cure the injured ped. The condition is ped must not be dead.
 * 
 * Upon setting and converting the health int, found, if health falls below 5, the ped will lay on the ground in pain(Maximum default health is 100).
 * 
 * This function is well suited there.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 */
export function reviveInjuredPed(ped: PedIndex): void {
	const reviveInjuredPed_result = Citizen.invokeNative<void>('0xB713CAFC12DED3BE', ped);
	return reviveInjuredPed_result;
}