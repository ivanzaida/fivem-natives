import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_ON_GROUND_PROPERLY
 *
 * 0x1DE99C193C7EC64B

 * 
 * Sets a vehicle on the ground on all wheels.  Returns whether or not the operation was successful.
 * 
 * sfink: This has an additional param(Vehicle vehicle, float p1) which is always set to 5.0f in the b944 scripts.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} hightSampleRangeUp
 * @returns {boolean}  
 */
export function setVehicleOnGroundProperly(vehicle: VehicleIndex, hightSampleRangeUp: number = 5): boolean {
	const setVehicleOnGroundProperly_result = Citizen.invokeNative<boolean>('0x1DE99C193C7EC64B', vehicle, hightSampleRangeUp);
	return setVehicleOnGroundProperly_result;
}