export enum EJoinResponseCode {
	ResponseAccept, // Join successful
	ResponseDenyUnknown, // Unknown - Indicates bug - Use Generic Error
	ResponseDenyWrongSession, // Different session - Indicates bug - Use Generic Error
	ResponseDenyNotHosting, // User not hosting - (might have left and come back) - Use Generic Error
	ResponseDenyNotReady, // Session still starting - would occur if someone hosted and immediately sent an invite.
	ResponseDenyBlacklisted, // We start straight away so this should be very difficult in practice. Use Generic Error. Gamer is blacklisted from session
	ResponseDenyInvalidRequestData, // Indicates bug - Use Generic Error
	ResponseDenyIncompatibleAssets, // Different assets
	ResponseDenySessionFull, // Session is full
	ResponseDenyGroupFull, // Selected group is full
	ResponseDenyWrongVersion, // Different session - Dev only - Use Generic Error
	ResponseDenyNotVisible, // Session not visible for Matchmaking - Won't happen for Invites (would be a bug)
	ResponseDenyBlocking, // Use Generic Error
	ResponseDenyAimPreference, // for instance, might be to block players joining during a race). Different aim settings
	ResponseDenyCheater, // Cheater setting different (either local or session is flagged as cheater)
	ResponseDenyTimeout, // Different time out - Dev only - Use Generic Error
	ResponseDenyDataHash, // Different data hash - Indicates cloud assets different
	ResponseDenyCrewLimit, // Too many crews
	ResponseDenyPoolNormal, // Pool we tried to join is NORMAL. Player must be bad sport or cheater
	ResponseDenyPoolBadSport, // Pool we tried to join is BAD SPORT. Player must be normal or cheater
	ResponseDenyPoolCheater, // Pool we tried to join is CHEATER. Player must be normal or bad sport
	ResponseDenyNotJoinable, // Session no longer exists
	ResponseDenyPrivateOnly, // Session has only private slots. Player was not invited.
	ResponseDenyDifferentBuild, // Different build type - Dev Only
	ResponseDenyDifferentPort, // Different socket port - Dev Only
	ResponseDenyDifferentContentSetting, // Different content setting (online vs. offline)
	ResponseDenyNotFriend, // A player who is not a friend of the host is trying to join a friends-only session
	ResponseDenyReputation, // Reputation of players is different (One is bad, other is good). Xbox One only.
	ResponseDenyFailedToEstablish, // Couldn't contact the session. It may no longer exist
	ResponseDenyPremium, // Premium session, no access
	ResponseSolo, // Solo session
	ResponseDenyAdminBlocked, // Admin blocked due to no notification
	ResponseDenyTooManyBosses, // Too many bosses in the session
}