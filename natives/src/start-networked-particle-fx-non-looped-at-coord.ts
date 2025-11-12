/**
 * GRAPHICS:START_NETWORKED_PARTICLE_FX_NON_LOOPED_AT_COORD
 *
 * 0x190E4141A4C4A1CA

 * 
 * Triggers a named particle effect at a world position, that will replicate across the network.
 * This should only be used with non-looped particle effects.
 * The particle effect will then play and tidy itself up when finished.
 * There is no access to the particle effect once it has been triggered.
 * 
 * Full list of particle effect dictionaries and effects by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/particleEffectsCompact.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} fxName
 * @param {number} vecPositionX
 * @param {number} vecPositionY
 * @param {number} vecPositionZ
 * @param {number} vecRotationX
 * @param {number} vecRotationY
 * @param {number} vecRotationZ
 * @param {number} scale Size scale of the effect (default size = 1.0) BOOL  whether or not the particle effect has been created ok
 * @param {boolean} invertAxisX
 * @param {boolean} invertAxisY
 * @param {boolean} invertAxisZ
 * @param {boolean} ignoreScopeChecks Use this ONLY for the ion cannon effects, otherwise request permission from network code
 * @returns {boolean}  
 */
export function startNetworkedParticleFxNonLoopedAtCoord(fxName: string, vecPositionX: number, vecPositionY: number, vecPositionZ: number, vecRotationX: number, vecRotationY: number, vecRotationZ: number, scale: number = 1, invertAxisX: boolean = false, invertAxisY: boolean = false, invertAxisZ: boolean = false, ignoreScopeChecks: boolean = false): boolean {
	const startNetworkedParticleFxNonLoopedAtCoord_result = Citizen.invokeNative<boolean>('0x190E4141A4C4A1CA', fxName, vecPositionX, vecPositionY, vecPositionZ, vecRotationX, vecRotationY, vecRotationZ, scale, invertAxisX, invertAxisY, invertAxisZ, ignoreScopeChecks);
	return startNetworkedParticleFxNonLoopedAtCoord_result;
}