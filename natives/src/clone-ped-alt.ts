import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:CLONE_PED_ALT
 *
 * 0x7486FF8F1B2245EA

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} registerAsNetworkObject The new object will be created and synced on other machines if a network game is running
 * @param {boolean} scriptHostObject
 * @param {boolean} linkBlends
 * @param {boolean} cloneCompressedDamage True=clone shares compressed damage (default), false=clone has no compressed damage
 * @returns {PedIndex}  
 */
export function clonePedAlt(ped: PedIndex, registerAsNetworkObject: boolean = true, scriptHostObject: boolean = true, linkBlends: boolean = true, cloneCompressedDamage: boolean = true): PedIndex {
	const clonePedAlt_result = Citizen.invokeNative<PedIndex>('0x7486FF8F1B2245EA', ped, registerAsNetworkObject, scriptHostObject, linkBlends, cloneCompressedDamage);
	return clonePedAlt_result;
}