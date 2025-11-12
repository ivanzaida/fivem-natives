import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_ACT_AS_IF_HIGH_SPEED_FOR_FRAG_SMASHING
 *
 * 0x30415B9FFAC70D2C

 * 
 * Call this to set a vehicle to act as if it has a very high speed when colliding with a frag.
 * Mostly useful for scripted sequencse where a vehicle needs to break through a barrier, but may
 * not be going fast enough to break it
 * This is a reset flag, and will only stay set for one frame
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} actHighSpeed
 */
export function setVehicleActAsIfHighSpeedForFragSmashing(vehicle: VehicleIndex, actHighSpeed: boolean = true): void {
	const setVehicleActAsIfHighSpeedForFragSmashing_result = Citizen.invokeNative<void>('0x30415B9FFAC70D2C', vehicle, actHighSpeed);
	return setVehicleActAsIfHighSpeedForFragSmashing_result;
}