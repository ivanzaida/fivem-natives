import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:ENABLE_VEHICLE_DYNAMIC_AMBIENT_SCALES
 *
 * 0x43AF47D2A857D51A

 * 
 * Remove the weird shadow applied by DISABLE_VEHCILE_DYNAMIC_AMBIENT_SCALES.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 */
export function enableVehicleDynamicAmbientScales(vehicle: VehicleIndex): void {
	const enableVehicleDynamicAmbientScales_result = Citizen.invokeNative<void>('0x43AF47D2A857D51A', vehicle);
	return enableVehicleDynamicAmbientScales_result;
}