import { ModelNames, VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:CREATE_VEHICLE
 *
 * 0x5779387E956077A6

 * 
 * RegisterAsNetworkObject:		The new object will be created and synced on other machines if a network game is running
 * ScriptHostObject:		If true, this object has been created by the host portion of a network script and is vital to that script - it must always exist regardless of who is hosting the script.
 * If false, the object has been created by the client portion of a network script and can be removed when the client who created it leaves the script session.
 * 
 * p7 when set to true allows you to spawn vehicles under -100 z.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {ModelNames} modelHashKey
 * @param {number} coorsX
 * @param {number} coorsY
 * @param {number} coorsZ
 * @param {number} vehicleHeading
 * @param {boolean} registerAsNetworkObject
 * @param {boolean} scriptHostObject
 * @param {boolean} ignoreGroundCheck
 * @returns {VehicleIndex}  
 */
export function createVehicle(modelHashKey: ModelNames, coorsX: number, coorsY: number, coorsZ: number, vehicleHeading: number = 0, registerAsNetworkObject: boolean = true, scriptHostObject: boolean = true, ignoreGroundCheck: boolean = false): VehicleIndex {
	const createVehicle_result = Citizen.invokeNative<VehicleIndex>('0x5779387E956077A6', modelHashKey, coorsX, coorsY, coorsZ, vehicleHeading, registerAsNetworkObject, scriptHostObject, ignoreGroundCheck);
	return createVehicle_result;
}