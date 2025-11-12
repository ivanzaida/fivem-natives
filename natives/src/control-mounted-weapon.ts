import { PedIndex } from '@ivanzaida/structures'

/**
 * TASK:CONTROL_MOUNTED_WEAPON
 *
 * 0x54E6D48F5FEEC68E

 * 
 * Use to control the direction of a mounted vehicle weapon and still maintain the ability to control the vehicle.
 * PARAM NOTS:
 * 
 * Forces the ped to use the mounted weapon.
 * Returns false if task is not possible.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {boolean}  
 */
export function controlMountedWeapon(ped: PedIndex): boolean {
	const controlMountedWeapon_result = Citizen.invokeNative<boolean>('0x54E6D48F5FEEC68E', ped);
	return controlMountedWeapon_result;
}