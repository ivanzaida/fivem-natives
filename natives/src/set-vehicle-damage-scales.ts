import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_DAMAGE_SCALES
 *
 * 0x9640E30A7F395E4B

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} bodyScale
 * @param {number} petrolTankScale
 * @param {number} engineScale
 * @param {number} collisionWithMapScale
 */
export function setVehicleDamageScales(vehicle: VehicleIndex, bodyScale: number, petrolTankScale: number, engineScale: number, collisionWithMapScale: number = 1): void {
	const setVehicleDamageScales_result = Citizen.invokeNative<void>('0x9640E30A7F395E4B', vehicle, bodyScale, petrolTankScale, engineScale, collisionWithMapScale);
	return setVehicleDamageScales_result;
}