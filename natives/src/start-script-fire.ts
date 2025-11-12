import { FireIndex } from '@ivanzaida/structures'

/**
 * FIRE:START_SCRIPT_FIRE
 *
 * 0xC86536B840EE3AB3

 * 
 * These will be ignored by the fire brigade. Only the player can extinguish a script-created fire. A script-created fire must be REMOVE_SCRIPT_FIRE once and only once.
 * 
 * Starts a fire:
 * 
 * xyz: Location of fire
 * maxChildren: The max amount of times a fire can spread to other objects. Must be 25 or less, or the function will do nothing.
 * isGasFire: Whether or not the fire is powered by gasoline.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} posX
 * @param {number} posY
 * @param {number} posZ
 * @param {number} generationsAllowed
 * @param {boolean} isPetrolFire
 * @returns {FireIndex}  
 */
export function startScriptFire(posX: number, posY: number, posZ: number, generationsAllowed: number, isPetrolFire: boolean = false): FireIndex {
	const startScriptFire_result = Citizen.invokeNative<FireIndex>('0xC86536B840EE3AB3', posX, posY, posZ, generationsAllowed, isPetrolFire);
	return startScriptFire_result;
}