/**
 * NETWORK:NETWORK_BLOCK_PROXY_MIGRATION_BETWEEN_TUTORIAL_SESSIONS
 *
 * 0xD91B1F4829299334

 * 
 * ------------------------------------------------------------------
 * @param {boolean} block
 */
export function networkBlockProxyMigrationBetweenTutorialSessions(block: boolean): void {
	const networkBlockProxyMigrationBetweenTutorialSessions_result = Citizen.invokeNative<void>('0xD91B1F4829299334', block);
	return networkBlockProxyMigrationBetweenTutorialSessions_result;
}