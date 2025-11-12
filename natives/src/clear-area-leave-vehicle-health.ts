/**
 * MISC:CLEAR_AREA_LEAVE_VEHICLE_HEALTH
 *
 * 0x4FEBA5060BFD5111

 * 
 * All fires and explosions in the area are also cleared
 * 
 * MISC::CLEAR_AREA_LEAVE_VEHICLE_HEALTH(x, y, z, radius, false, false, false, false); seem to make all objects go away, peds, vehicles etc. All booleans set to true doesn't seem to change anything.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} centreCoorsX
 * @param {number} centreCoorsY
 * @param {number} centreCoorsZ
 * @param {number} radius
 * @param {boolean} deleteProjectilesFlag
 * @param {boolean} leaveCarGenCars
 * @param {boolean} clearLowPriorityPickupsOnly
 * @param {boolean} broadcast
 */
export function clearAreaLeaveVehicleHealth(centreCoorsX: number, centreCoorsY: number, centreCoorsZ: number, radius: number, deleteProjectilesFlag: boolean, leaveCarGenCars: boolean = false, clearLowPriorityPickupsOnly: boolean = false, broadcast: boolean = false): void {
	const clearAreaLeaveVehicleHealth_result = Citizen.invokeNative<void>('0x4FEBA5060BFD5111', centreCoorsX, centreCoorsY, centreCoorsZ, radius, deleteProjectilesFlag, leaveCarGenCars, clearLowPriorityPickupsOnly, broadcast);
	return clearAreaLeaveVehicleHealth_result;
}