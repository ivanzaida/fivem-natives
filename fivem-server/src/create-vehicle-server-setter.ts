import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:CREATE_VEHICLE_SERVER_SETTER
 *
 * 0x6AE51D4B

 * Equivalent to CREATE_VEHICLE, but it uses 'server setter' logic (like the former CREATE_AUTOMOBILE) as a workaround forreliability concerns regarding entity creation RPC.Unlike CREATE_AUTOMOBILE, this supports other vehicle types as well.
 * 
 * ------------------------------------------------------------------
 * @param {number} modelHash The model of vehicle to spawn.
 * @param {string} type The appropriate vehicle type for the model info. Can be one of automobile, bike, boat, heli, plane, submarine, trailer, and (potentially), train. This should be the same type as the type field in vehicles.meta.
 * @param {number} x Spawn coordinate X component.
 * @param {number} y Spawn coordinate Y component.
 * @param {number} z Spawn coordinate Z component.
 * @param {number} heading Heading to face towards, in degrees.
 * @returns {VehicleIndex}  A script handle for the vehicle, or 0 if the vehicle failed to be created.
 */
export function createVehicleServerSetter(modelHash: number, type: string, x: number, y: number, z: number, heading: number): VehicleIndex {
	const createVehicleServerSetter_result = Citizen.invokeNative<VehicleIndex>('0x6AE51D4B', modelHash, type, x, y, z, heading);
	return createVehicleServerSetter_result;
}