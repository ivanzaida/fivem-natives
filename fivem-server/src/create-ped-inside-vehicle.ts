import { VehicleIndex, PedIndex } from '@ivanzaida/structures'

/**
 * CFX:CREATE_PED_INSIDE_VEHICLE
 *
 * 0x3000F092

 * 
 * If any_seat_is passed in the command will assert.
 * RegisterAsNetworkObject:		The new object will be created and synced on other machines if a network game is running
 * ScriptHostObject:		If true, this object has been created by the host portion of a network script and is vital to that script - it must always exist regardless of who is hosting the script.
 * If false, the object has been created by the client portion of a network script and can be removed when the client who created it leaves the script session.
 * 
 * pedType: see CREATE_PED
 * 
 * Full list of peds by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/peds.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} pedType See [CREATE_PED](\_0xD49F9B0955C367DE)
 * @param {number} modelHash
 * @param {number} seat
 * @param {boolean} isNetwork
 * @param {boolean} bScriptHostPed
 * @returns {PedIndex}  
 */
export function createPedInsideVehicle(vehicle: VehicleIndex, pedType: number, modelHash: number, seat: number, isNetwork: boolean, bScriptHostPed: boolean): PedIndex {
	const createPedInsideVehicle_result = Citizen.invokeNative<PedIndex>('0x3000F092', vehicle, pedType, modelHash, seat, isNetwork, bScriptHostPed);
	return createPedInsideVehicle_result;
}