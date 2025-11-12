import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_HELI_TAIL_BOOM_HEALTH
 *
 * 0x4177E9034F7CFE38

 * 
 * Max 1000.
 * At -100 both helicopter rotors will stall.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {number}  
 */
export function getHeliTailBoomHealth(vehicle: VehicleIndex): number {
	const getHeliTailBoomHealth_result = Citizen.invokeNative<number>('0x4177E9034F7CFE38', vehicle);
	return getHeliTailBoomHealth_result;
}