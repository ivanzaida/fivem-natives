import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:RESURRECT_PED
 *
 * 0x6ED737C2A74E181D

 * 
 * This function will simply bring the dead person back to life.
 * 
 * Try not to use it alone, since using this function alone, will make peds fall through ground in hell(well for the most of the times).
 * 
 * Instead, before calling this function, you may want to declare the position, where your Resurrected ped to be spawn at.(For instance, Around 2 floats of Player's current position.)
 * 
 * Also, disabling any assigned task immediately helped in the number of scenarios, where If you want peds to perform certain decided tasks.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 */
export function resurrectPed(ped: PedIndex): void {
	const resurrectPed_result = Citizen.invokeNative<void>('0x6ED737C2A74E181D', ped);
	return resurrectPed_result;
}