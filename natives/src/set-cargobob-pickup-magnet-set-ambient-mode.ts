import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_CARGOBOB_PICKUP_MAGNET_SET_AMBIENT_MODE
 *
 * 0x57F9AA96B2E7702A

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} cargobob
 * @param {boolean} affectsVehicles
 * @param {boolean} affectsObjects
 */
export function setCargobobPickupMagnetSetAmbientMode(cargobob: VehicleIndex, affectsVehicles: boolean, affectsObjects: boolean): void {
	const setCargobobPickupMagnetSetAmbientMode_result = Citizen.invokeNative<void>('0x57F9AA96B2E7702A', cargobob, affectsVehicles, affectsObjects);
	return setCargobobPickupMagnetSetAmbientMode_result;
}