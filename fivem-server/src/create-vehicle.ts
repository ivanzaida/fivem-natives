import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:CREATE_VEHICLE
 *
 * 0xDD75460A

 * 
 * RegisterAsNetworkObject:		The new object will be created and synced on other machines if a network game is running
 * ScriptHostObject:		If true, this object has been created by the host portion of a network script and is vital to that script - it must always exist regardless of who is hosting the script.
 * If false, the object has been created by the client portion of a network script and can be removed when the client who created it leaves the script session.
 * 
 * p7 when set to true allows you to spawn vehicles under -100 z.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} modelHash The model of vehicle to spawn.
 * @param {number} x Spawn coordinate X component.
 * @param {number} y Spawn coordinate Y component.
 * @param {number} z Spawn coordinate Z component.
 * @param {number} heading Heading to face towards, in degrees.
 * @param {boolean} isNetwork Whether to create a network object for the vehicle. If false, the vehicle exists only locally.
 * @param {boolean} netMissionEntity Whether to register the vehicle as pinned to the script host in the R\ network model.
 * @returns {VehicleIndex}  
 */
export function createVehicle(modelHash: number, x: number, y: number, z: number, heading: number, isNetwork: boolean, netMissionEntity: boolean): VehicleIndex {
	const createVehicle_result = Citizen.invokeNative<VehicleIndex>('0xDD75460A', modelHash, x, y, z, heading, isNetwork, netMissionEntity);
	return createVehicle_result;
}