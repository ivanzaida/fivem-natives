/**
 * AUDIO:RELEASE_WEAPON_AUDIO
 *
 * 0xAE5E74D6FA4EF0D8

 * 
 * Release weapon audio
 * 
 * 
 * ------------------------------------------------------------------
 */
export function releaseWeaponAudio(): void {
	const releaseWeaponAudio_result = Citizen.invokeNative<void>('0xAE5E74D6FA4EF0D8', );
	return releaseWeaponAudio_result;
}