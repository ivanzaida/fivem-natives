import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:REGISTER_HATED_TARGETS_AROUND_PED
 *
 * 0xA2759157C7F12D3C

 * 
 * Based on TASK_COMBAT_HATED_TARGETS_AROUND_PED, the parameters are likely similar (PedHandle, and area to attack in).
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} radius
 */
export function registerHatedTargetsAroundPed(ped: PedIndex, radius: number): void {
	const registerHatedTargetsAroundPed_result = Citizen.invokeNative<void>('0xA2759157C7F12D3C', ped, radius);
	return registerHatedTargetsAroundPed_result;
}