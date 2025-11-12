import { VehicleIndex, EPedType, ModelNames, EVehicleSeat, PedIndex } from '@ivanzaida/structures'

/**
 * PED:CREATE_PED_INSIDE_VEHICLE
 *
 * 0x8728A378EF2B46B2

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
 * @param {EPedType} pedType
 * @param {ModelNames} pedModelHashKey
 * @param {EVehicleSeat} seat
 * @param {boolean} registerAsNetworkObject
 * @param {boolean} scriptHostObject
 * @returns {PedIndex}  
 */
export function createPedInsideVehicle(vehicle: VehicleIndex, pedType: EPedType | number, pedModelHashKey: ModelNames, seat: EVehicleSeat | number = 1, registerAsNetworkObject: boolean = true, scriptHostObject: boolean = true): PedIndex {
	const createPedInsideVehicle_result = Citizen.invokeNative<PedIndex>('0x8728A378EF2B46B2', vehicle, pedType, pedModelHashKey, seat, registerAsNetworkObject, scriptHostObject);
	return createPedInsideVehicle_result;
}