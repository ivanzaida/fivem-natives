import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_DIP_STRAIGHT_DOWN_WHEN_CRASHING_PLANE
 *
 * 0x0D1E561A4621971E

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} dipDownOnCrash
 */
export function setDipStraightDownWhenCrashingPlane(vehicle: VehicleIndex, dipDownOnCrash: boolean): void {
	const setDipStraightDownWhenCrashingPlane_result = Citizen.invokeNative<void>('0x0D1E561A4621971E', vehicle, dipDownOnCrash);
	return setDipStraightDownWhenCrashingPlane_result;
}