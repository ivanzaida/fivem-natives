import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:CLONE_PED
 *
 * 0xEA797D2F13BCD0AA

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} registerAsNetworkObject The new object will be created and synced on other machines if a network game is running
 * @param {boolean} scriptHostObject
 * @param {boolean} linkBlends
 * @returns {PedIndex}  
 */
export function clonePed(ped: PedIndex, registerAsNetworkObject: boolean = true, scriptHostObject: boolean = true, linkBlends: boolean = true): PedIndex {
	const clonePed_result = Citizen.invokeNative<PedIndex>('0xEA797D2F13BCD0AA', ped, registerAsNetworkObject, scriptHostObject, linkBlends);
	return clonePed_result;
}