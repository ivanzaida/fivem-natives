/**
 * MISC:CLEAR_ANGLED_AREA_OF_VEHICLES
 *
 * 0x6F3435F85C932A08

 * 
 * Clears the non axis aligned area of all all non-mission vehicles
 * CURRENTLY NOT SUPPORTED IN MP if Broadcast is set
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} vecAngledAreaPoint1X
 * @param {number} vecAngledAreaPoint1Y
 * @param {number} vecAngledAreaPoint1Z
 * @param {number} vecAngledAreaPoint2X
 * @param {number} vecAngledAreaPoint2Y
 * @param {number} vecAngledAreaPoint2Z
 * @param {number} distanceOfOppositeFace
 * @param {boolean} leaveCarGenCars
 * @param {boolean} broadcast
 * @param {boolean} checkViewFrustum
 * @param {boolean} ifWrecked
 * @param {boolean} ifAbandoned
 * @param {boolean} ifEngineOnFire
 * @param {boolean} keepScriptTrains
 */
export function clearAngledAreaOfVehicles(vecAngledAreaPoint1X: number, vecAngledAreaPoint1Y: number, vecAngledAreaPoint1Z: number, vecAngledAreaPoint2X: number, vecAngledAreaPoint2Y: number, vecAngledAreaPoint2Z: number, distanceOfOppositeFace: number, leaveCarGenCars: boolean = false, broadcast: boolean = false, checkViewFrustum: boolean = false, ifWrecked: boolean = false, ifAbandoned: boolean = false, ifEngineOnFire: boolean = false, keepScriptTrains: boolean = false): void {
	const clearAngledAreaOfVehicles_result = Citizen.invokeNative<void>('0x6F3435F85C932A08', vecAngledAreaPoint1X, vecAngledAreaPoint1Y, vecAngledAreaPoint1Z, vecAngledAreaPoint2X, vecAngledAreaPoint2Y, vecAngledAreaPoint2Z, distanceOfOppositeFace, leaveCarGenCars, broadcast, checkViewFrustum, ifWrecked, ifAbandoned, ifEngineOnFire, keepScriptTrains);
	return clearAngledAreaOfVehicles_result;
}