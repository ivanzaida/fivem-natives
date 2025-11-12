import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_GOON_BOSS_VEHICLE
 *
 * 0x2041F0CA908ABAC2

 * 
 * Enable special enter / exit vehicle functionality. Only when holding enter input,
 * the Boss will enter rear seat, while the Goon will not be able to leave or enter it
 * 
 * Used for GTAO CEO/Associate spawned vehicles.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} enableSpecialEnterFunc
 */
export function setGoonBossVehicle(vehicle: VehicleIndex, enableSpecialEnterFunc: boolean): void {
	const setGoonBossVehicle_result = Citizen.invokeNative<void>('0x2041F0CA908ABAC2', vehicle, enableSpecialEnterFunc);
	return setGoonBossVehicle_result;
}