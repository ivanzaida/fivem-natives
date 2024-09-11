import { FireIndex } from '@ivanzaida/structures'

/**
 * FIRE:REMOVE_SCRIPT_FIRE
 *
 * 0xCA60A45D232EEDDB

 * 
 * ------------------------------------------------------------------
 * @param {FireIndex} fire
 */
export function removeScriptFire(fire: FireIndex): void {
	const removeScriptFire_result = Citizen.invokeNative<void>('0xCA60A45D232EEDDB', fire);
	return removeScriptFire_result;
}