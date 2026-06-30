import styled from "styled-components";

export const Container = styled.div`
  grid-area: UL;

  display: flex;
  flex-direction: column;

  width: 240px;
  height: 100vh;
  box-sizing: border-box;

  padding: 12px 6px 8px 10px;
  background-color: var(--bg-sidebar);

  overflow-y: auto;
  font-family: var(--font-ui);
  gap: 0;

  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--tertiary);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-track {
    background-color: var(--secondary);
  }
`;

export const Role = styled.span`
  margin: 12px 0 6px;
  padding: 6px 10px;

  text-transform: uppercase;
  font-size: 11px;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: 0.25px;
  color: var(--text-muted);
  cursor: default;
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  min-height: 44px;
  margin: 2px 0;
  gap: 12px;

  padding: 6px 10px;
  border-radius: 6px;

  cursor: pointer;
  background: transparent;
  position: relative;
  transition:
    background-color 0.12s linear,
    transform 0.4s ease,
    opacity 0.4s ease,
    height 0.4s ease;

  &:hover {
    background-color: var(--bg-hover);

    .username-text {
      color: var(--text-normal);
    }
  }

  &:active {
    background-color: var(--bg-active);
  }
`;

export const AvatarContainer = styled.div`
  position: relative;

  width: 32px;
  height: 32px;
  flex-shrink: 0;
`;

export const Avatar = styled.div`
  width: 100%;
  height: 100%;

  border-radius: 50%;
  overflow: hidden;
  background-color: transparent;

  > img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }

  &.bot {
    box-shadow: 0 0 0 2px var(--bg-sidebar);
  }
`;

export const StatusBadge = styled.div`
  position: absolute;
  right: -2px;
  bottom: -2px;

  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 2px solid var(--bg-sidebar);
  box-sizing: content-box;

  &.status-online {
    background-color: var(--status-online);
  }

  &.status-idle {
    background-color: var(--status-idle);
  }

  &.status-dnd {
    background-color: var(--status-dnd);
  }

  &.status-offline {
    background-color: var(--status-offline);
  }
`;

export const Username = styled.span`
  color: var(--text-normal);
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;

  flex-shrink: 1;
  min-width: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 140px;

  .member-list-item:hover &,
  ${User}:hover & {
    color: var(--text-normal);
  }

  &.role-admin {
    color: var(--status-dnd);
  }

  &.role-bot {
    color: var(--text-bot-role);
  }
`;

export const TextBlock = styled.div`
  min-width: 0;
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0;
`;

export const TextRow = styled.div`
  min-width: 0;

  display: flex;
  align-items: center;
  gap: 4px;
`;

export const Subtitle = styled.span`
  max-width: 115px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  color: var(--text-muted);
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
`;

export const BotTag = styled.div`
  margin-left: 0;

  height: 15px;
  padding: 1px 4.5px;
  border-radius: 3px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;

  background-color: var(--text-bot-role);
  color: #ffffff;
  font-size: 10px;
  font-weight: 600;
  line-height: 11px;
  flex-shrink: 0;
  transform: translateY(-0.5px);

  > svg {
    width: 9px;
    height: 9px;
    display: block;

    fill: #ffffff;
  }
`;

export const MergeCollapse = styled.div`
  &.merge-collapse {
    opacity: 0;
    transform: scale(0.6) translateX(40px);
    height: 0;
    padding: 0;
    margin: 0;
    overflow: hidden;
    pointer-events: none;
    transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
