import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_TURRET_HIDDEN
 *
 * 0x6405F9D3DF61E127

 * 
 * Toggles specific flag on turret
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} turret
 * @param {boolean} hideTurret
 */
export function setTurretHidden(vehicle: VehicleIndex, turret: number, hideTurret: boolean): void {
	const setTurretHidden_result = Citizen.invokeNative<void>('0x6405F9D3DF61E127', vehicle, turret, hideTurret);
	return setTurretHidden_result;
}