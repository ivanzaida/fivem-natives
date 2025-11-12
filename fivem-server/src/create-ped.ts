import { PedIndex } from '@ivanzaida/structures'

/**
 * CFX:CREATE_PED
 *
 * 0x389EF71

 * 
 * RegisterAsNetworkObject:		The new object will be created and synced on other machines if a network game is running
 * ScriptHostObject:		If true, this object has been created by the host portion of a network script and is vital to that script - it must always exist regardless of who is hosting the script.
 * If false, the object has been created by the client portion of a network script and can be removed when the client who created it leaves the script session.
 * 
 * https://alloc8or.re/gta5/doc/enums/ePedType.txt
 * 
 * Full list of peds by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/peds.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} pedType Unused. Peds get set to CIVMALE/CIVFEMALE/etc. no matter the value specified.
 * @param {number} modelHash The model of ped to spawn.
 * @param {number} x Spawn coordinate X component.
 * @param {number} y Spawn coordinate Y component.
 * @param {number} z Spawn coordinate Z component.
 * @param {number} heading Heading to face towards, in degrees.
 * @param {boolean} isNetwork Whether to create a network object for the ped. If false, the ped exists only locally.
 * @param {boolean} bScriptHostPed Whether to register the ped as pinned to the script host in the R\ network model.
 * @returns {PedIndex}  
 */
export function createPed(pedType: number, modelHash: number, x: number, y: number, z: number, heading: number, isNetwork: boolean, bScriptHostPed: boolean): PedIndex {
	const createPed_result = Citizen.invokeNative<PedIndex>('0x389EF71', pedType, modelHash, x, y, z, heading, isNetwork, bScriptHostPed);
	return createPed_result;
}