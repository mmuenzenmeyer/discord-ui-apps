import React, { type FC } from "react";

import {
	Avatar,
	AvatarContainer,
	BotTag,
	Container,
	Role,
	StatusBadge,
	TextBlock,
	TextRow,
	User,
	Username,
} from "./styles";

import almeidaAvatar from "../../assets/avatars/almeida.svg";
import atlasBotAvatar from "../../assets/avatars/atlas-bot.svg";
import maxAvatar from "../../assets/avatars/max.png";
import irisAvatar from "../../assets/avatars/iris.svg";
import kaiAvatar from "../../assets/avatars/kai.svg";
import leoAvatar from "../../assets/avatars/leo.svg";
import mayaAvatar from "../../assets/avatars/maya.svg";
import mikaAvatar from "../../assets/avatars/mika.svg";
import novaAvatar from "../../assets/avatars/nova.svg";
import rinAvatar from "../../assets/avatars/rin.svg";
import sofiaAvatar from "../../assets/avatars/sofia.svg";
import williamAvatar from "../../assets/avatars/William.png";
import zoeAvatar from "../../assets/avatars/zoe.svg";
import echoAvatar from "../../assets/avatars/echo.svg";

interface UserOptions {
	username: string;
	avatarUrl: string;
	status?: "online" | "idle" | "dnd" | "offline";
	roleColor?: "default" | "bot" | "admin";
}

const UserRow: FC<UserOptions> = ({
	username,
	avatarUrl,
	status = "offline",
	roleColor = "default",
}) => {
	return (
		<User className="member-list-item">
			<AvatarContainer>
					<Avatar className={roleColor === "bot" ? "bot" : ""}>
						<img className="pfp-image" src={avatarUrl} alt={username} />
					</Avatar>
					<StatusBadge className={`status-indicator status-${status}`} />
			</AvatarContainer>

			<TextBlock>
				<TextRow>
					<Username
						className={`username-text ${roleColor === "bot" ? "role-bot" : roleColor === "admin" ? "role-admin" : ""}`.trim()}
					>
						{username}
					</Username>

					{roleColor === "bot" && (
						<BotTag className="official-bot-badge">
							<svg viewBox="0 0 24 24" aria-hidden="true">
								<path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
							</svg>
							BOT
						</BotTag>
					)}
				</TextRow>
			</TextBlock>
		</User>
	);
};

const sections: Array<{ label: string; members: UserOptions[] }> = [
	{
		label: "Management — 2",
		members: [
			{
				username: "William",
				avatarUrl: williamAvatar,
				status: "dnd",
				roleColor: "admin",
			},
			{
				username: "Max",
				avatarUrl: maxAvatar,
				status: "online",
				roleColor: "admin",
			},
		],
	},
	{
		label: "Bots — 4",
		members: [
			{ username: "Bot Alpha", avatarUrl: atlasBotAvatar, status: "online", roleColor: "bot" },
			{ username: "Bot Beta", avatarUrl: rinAvatar, status: "online", roleColor: "bot" },
			{ username: "Bot Gamma", avatarUrl: leoAvatar, status: "dnd", roleColor: "bot" },
			{ username: "Bot Delta", avatarUrl: mikaAvatar, status: "online", roleColor: "bot" },
		],
	},
	{
		label: "Management — 1",
		members: [
			{ username: "Manager One", avatarUrl: kaiAvatar, status: "online", roleColor: "admin" },
		],
	},
	{
		label: "Customer Support — 1",
		members: [
			{ username: "Support One", avatarUrl: mayaAvatar, status: "online", roleColor: "default" },
		],
	},
	{
		label: "Marketing Team — 3",
		members: [
			{ username: "Marketer One", avatarUrl: novaAvatar, status: "online", roleColor: "default" },
			{ username: "Marketer Two", avatarUrl: atlasBotAvatar, status: "online", roleColor: "bot" },
			{ username: "Marketer Three", avatarUrl: zoeAvatar, status: "online", roleColor: "admin" },
		],
	},
	{
		label: "Community Member — 1",
		members: [
			{ username: "Community One", avatarUrl: echoAvatar, status: "online", roleColor: "bot" },
		],
	},
	{
		label: "Offline — 7",
		members: [
			{ username: "Offline One", avatarUrl: rinAvatar, status: "offline", roleColor: "bot" },
			{ username: "Offline Two", avatarUrl: echoAvatar, status: "offline", roleColor: "default" },
			{ username: "Offline Three", avatarUrl: sofiaAvatar, status: "offline", roleColor: "default" },
			{ username: "Offline Four", avatarUrl: leoAvatar, status: "offline", roleColor: "default" },
			{ username: "Offline Five", avatarUrl: mikaAvatar, status: "offline", roleColor: "default" },
			{ username: "Offline Six", avatarUrl: atlasBotAvatar, status: "offline", roleColor: "bot" },
			{ username: "Offline Seven", avatarUrl: rinAvatar, status: "offline", roleColor: "bot" },
		],
	},
];

const UserList: FC = () => {
	return (
		<Container>
			{sections.map((section) => (
				<React.Fragment key={section.label}>
					<Role>{section.label}</Role>
					{section.members.map((member) => (
						<UserRow
							key={`${section.label}-${member.username}`}
							username={member.username}
							avatarUrl={member.avatarUrl}
							status={member.status}
							roleColor={member.roleColor}
						/>
					))}
				</React.Fragment>
			))}
		</Container>
	);
};

export default UserList;
