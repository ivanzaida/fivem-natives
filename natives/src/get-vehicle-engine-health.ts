import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_VEHICLE_ENGINE_HEALTH
 *
 * 0x4C7724D572378B05

 * 
 * 1000.0 = full,  0.0 = go on fire,  -1000.0 = burnt out
 * While on fire, burning engine "may" set the petrol tank on fire as well, but there's only a chance of this.
 * While on fire engine health will drop until it reaches -1000.0
 * Engine health < 0.0 means engine won't work.
 * 
 * Returns 1000.0 if the function is unable to get the address of the specified vehicle or if it's not a vehicle.
 * 
 * Minimum: -4000
 * Maximum: 1000
 * 
 * -4000: Engine is destroyed
 * 0 and below: Engine catches fire and health rapidly declines
 * 300: Engine is smoking and losing functionality
 * 1000: Engine is perfect
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {number}  
 */
export function getVehicleEngineHealth(vehicle: VehicleIndex): number {
	const getVehicleEngineHealth_result = Citizen.invokeNative<number>('0x4C7724D572378B05', vehicle);
	return getVehicleEngineHealth_result;
}