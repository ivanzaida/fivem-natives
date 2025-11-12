import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_TYRE_SMOKE_COLOR
 *
 * 0x5DA0536AEAD1FF31

 * 
 * Sets the tire smoke's color of this vehicle.
 * 
 * vehicle: The vehicle that is the target of this method.
 * r: The red level in the RGB color code.
 * g: The green level in the RGB color code.
 * b: The blue level in the RGB color code.
 * 
 * Note: setting r,g,b to 0 will give the car the "Patriot" tire smoke.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} red
 * @param {number} green
 * @param {number} blue
 */
export function setVehicleTyreSmokeColor(vehicle: VehicleIndex, red: number, green: number, blue: number): void {
	const setVehicleTyreSmokeColor_result = Citizen.invokeNative<void>('0x5DA0536AEAD1FF31', vehicle, red, green, blue);
	return setVehicleTyreSmokeColor_result;
}