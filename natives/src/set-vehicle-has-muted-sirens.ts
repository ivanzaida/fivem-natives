import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_HAS_MUTED_SIRENS
 *
 * 0xBC5009F300C00558

 * 
 * If set to true, prevents vehicle sirens from having sound, leaving only the lights.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} sirensAreMuted
 */
export function setVehicleHasMutedSirens(vehicle: VehicleIndex, sirensAreMuted: boolean): void {
	const setVehicleHasMutedSirens_result = Citizen.invokeNative<void>('0xBC5009F300C00558', vehicle, sirensAreMuted);
	return setVehicleHasMutedSirens_result;
}