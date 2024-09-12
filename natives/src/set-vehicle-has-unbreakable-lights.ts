import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_HAS_UNBREAKABLE_LIGHTS
 *
 * 0x680C862D9FC0F4BC

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} unbreakableLightFlag
 */
export function setVehicleHasUnbreakableLights(vehicle: VehicleIndex, unbreakableLightFlag: boolean): void {
	const setVehicleHasUnbreakableLights_result = Citizen.invokeNative<void>('0x680C862D9FC0F4BC', vehicle, unbreakableLightFlag);
	return setVehicleHasUnbreakableLights_result;
}