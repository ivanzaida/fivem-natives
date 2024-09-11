import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:FORCE_SUBMARINE_SURFACE_MODE
 *
 * 0xCE1294F698971209

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} forceSurface
 */
export function forceSubmarineSurfaceMode(vehicle: VehicleIndex, forceSurface: boolean): void {
	const forceSubmarineSurfaceMode_result = Citizen.invokeNative<void>('0xCE1294F698971209', vehicle, forceSurface);
	return forceSubmarineSurfaceMode_result;
}