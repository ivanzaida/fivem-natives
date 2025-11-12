import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_FRICTION_OVERRIDE
 *
 * 0xF5E7FBE3D9D9BC24

 * 
 * Seems to be related to the metal parts, not tyres (like i was expecting lol)
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} frictionOverride
 */
export function setVehicleFrictionOverride(vehicle: VehicleIndex, frictionOverride: number): void {
	const setVehicleFrictionOverride_result = Citizen.invokeNative<void>('0xF5E7FBE3D9D9BC24', vehicle, frictionOverride);
	return setVehicleFrictionOverride_result;
}