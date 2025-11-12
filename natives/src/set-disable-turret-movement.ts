import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_DISABLE_TURRET_MOVEMENT
 *
 * 0xF2B6BC6177886AEF

 * 
 * Disables turret movement when called in a loop. You can still fire and aim. You cannot shoot backwards though.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} turret
 */
export function setDisableTurretMovement(vehicle: VehicleIndex, turret: number): void {
	const setDisableTurretMovement_result = Citizen.invokeNative<void>('0xF2B6BC6177886AEF', vehicle, turret);
	return setDisableTurretMovement_result;
}