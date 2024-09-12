import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:BREAK_OFF_VEHICLE_WHEEL
 *
 * 0xA274CADB

 * Break off vehicle wheel by index. The `leaveDebrisTrail` flag requires `putOnFire` to be true.
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle The vehicle handle.
 * @param {number} wheelIndex The wheel index.
 * @param {boolean} leaveDebrisTrail Start "veh_debris_trail" ptfx.
 * @param {boolean} deleteWheel True to delete wheel, otherwise detach.
 * @param {boolean} unknownFlag Unknown flag.
 * @param {boolean} putOnFire Set wheel on fire once detached.
 */
export function breakOffVehicleWheel(vehicle: VehicleIndex, wheelIndex: number, leaveDebrisTrail: boolean, deleteWheel: boolean, unknownFlag: boolean, putOnFire: boolean): void {
	const breakOffVehicleWheel_result = Citizen.invokeNative<void>('0xA274CADB', vehicle, wheelIndex, leaveDebrisTrail, deleteWheel, unknownFlag, putOnFire);
	return breakOffVehicleWheel_result;
}