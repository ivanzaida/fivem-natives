import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:STOP_PED_WEAPON_FIRING_WHEN_DROPPED
 *
 * 0x9EDCA2C3E5F3B330

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 */
export function stopPedWeaponFiringWhenDropped(ped: PedIndex): void {
	const stopPedWeaponFiringWhenDropped_result = Citizen.invokeNative<void>('0x9EDCA2C3E5F3B330', ped);
	return stopPedWeaponFiringWhenDropped_result;
}