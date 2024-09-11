/**
 * WEAPON:FIRE_AIR_DEFENCE_SPHERE_WEAPON_AT_POSITION
 *
 * 0x71C760BC3D9BEDAC

 * 
 * ------------------------------------------------------------------
 * @param {number} sphere
 * @param {number} targetPositionX
 * @param {number} targetPositionY
 * @param {number} targetPositionZ
 */
export function fireAirDefenceSphereWeaponAtPosition(sphere: number, targetPositionX: number, targetPositionY: number, targetPositionZ: number): void {
	const fireAirDefenceSphereWeaponAtPosition_result = Citizen.invokeNative<void>('0x71C760BC3D9BEDAC', sphere, targetPositionX, targetPositionY, targetPositionZ);
	return fireAirDefenceSphereWeaponAtPosition_result;
}