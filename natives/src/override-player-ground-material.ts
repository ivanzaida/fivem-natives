/**
 * AUDIO:OVERRIDE_PLAYER_GROUND_MATERIAL
 *
 * 0x1E0388A9E6A3BF5B

 * 
 * Sets audio flag "OverridePlayerGroundMaterial"
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} overriddenMaterialHash
 * @param {boolean} scriptOverrides
 */
export function overridePlayerGroundMaterial(overriddenMaterialHash: number, scriptOverrides: boolean): void {
	const overridePlayerGroundMaterial_result = Citizen.invokeNative<void>('0x1E0388A9E6A3BF5B', overriddenMaterialHash, scriptOverrides);
	return overridePlayerGroundMaterial_result;
}