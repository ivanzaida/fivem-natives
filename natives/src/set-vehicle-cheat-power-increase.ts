import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_CHEAT_POWER_INCREASE
 *
 * 0xF1C985BBEC6B6321

 * 
 * <1.0 - Decreased torque
 * =1.0 - Default torque
 * >1.0 - Increased torque
 * 
 * Negative values will cause the vehicle to go backwards instead of forwards while accelerating.
 * 
 * value - is between 0.2 and 1.8 in the decompiled scripts.
 * 
 * This needs to be called every frame to take effect.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} increase
 */
export function setVehicleCheatPowerIncrease(vehicle: VehicleIndex, increase: number): void {
	const setVehicleCheatPowerIncrease_result = Citizen.invokeNative<void>('0xF1C985BBEC6B6321', vehicle, increase);
	return setVehicleCheatPowerIncrease_result;
}