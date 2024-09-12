import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_CLEAR_FREEZE_WAITING_ON_COLLISION_ONCE_PLAYER_ENTERS
 *
 * 0xA133EF296C37D6E6

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} clearWaitingOnCollision
 */
export function setClearFreezeWaitingOnCollisionOncePlayerEnters(vehicle: VehicleIndex, clearWaitingOnCollision: boolean): void {
	const setClearFreezeWaitingOnCollisionOncePlayerEnters_result = Citizen.invokeNative<void>('0xA133EF296C37D6E6', vehicle, clearWaitingOnCollision);
	return setClearFreezeWaitingOnCollisionOncePlayerEnters_result;
}