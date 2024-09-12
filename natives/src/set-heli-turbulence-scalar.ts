import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_HELI_TURBULENCE_SCALAR
 *
 * 0x9647565D7FAB305A

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} scalar
 */
export function setHeliTurbulenceScalar(vehicle: VehicleIndex, scalar: number): void {
	const setHeliTurbulenceScalar_result = Citizen.invokeNative<void>('0x9647565D7FAB305A', vehicle, scalar);
	return setHeliTurbulenceScalar_result;
}