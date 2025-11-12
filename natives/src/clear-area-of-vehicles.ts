/**
 * MISC:CLEAR_AREA_OF_VEHICLES
 *
 * 0x60040CDD28AA1BC3

 * 
 * Example:
 * CLEAR_AREA_OF_VEHICLES(0.0f, 0.0f, 0.0f, 10000.0f, false, false, false, false, false, false);
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} centreCoorsX
 * @param {number} centreCoorsY
 * @param {number} centreCoorsZ
 * @param {number} radius
 * @param {boolean} leaveCarGenCars
 * @param {boolean} checkViewFrustum
 * @param {boolean} ifWrecked
 * @param {boolean} ifAbandoned
 * @param {boolean} broadcast
 * @param {boolean} ifEngineOnFire
 * @param {boolean} keepScriptTrains
 */
export function clearAreaOfVehicles(centreCoorsX: number, centreCoorsY: number, centreCoorsZ: number, radius: number, leaveCarGenCars: boolean = false, checkViewFrustum: boolean = false, ifWrecked: boolean = false, ifAbandoned: boolean = false, broadcast: boolean = false, ifEngineOnFire: boolean = false, keepScriptTrains: boolean = false): void {
	const clearAreaOfVehicles_result = Citizen.invokeNative<void>('0x60040CDD28AA1BC3', centreCoorsX, centreCoorsY, centreCoorsZ, radius, leaveCarGenCars, checkViewFrustum, ifWrecked, ifAbandoned, broadcast, ifEngineOnFire, keepScriptTrains);
	return clearAreaOfVehicles_result;
}