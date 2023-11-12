interface mode {
  id: number;
  name: string;
  maps: map[];
}

interface map {
  id: number;
  name: string;
  image: string;
  video: string;
}

interface Welcome {
  id: string;
  name: string;
  workspaceSettings: WorkspaceSettings;
  game: number;
  gameConfig: GameConfig;
  overlayConfigs: OverlayConfig[];
}

interface GameConfig {
  maxPlayers: number;
  maxSubstitutes: number;
  maps: any[];
  sideChange: boolean;
  hideOverlay: boolean;
  usesMatchDay: boolean;
  usesGameInfo: boolean;
  standingsRowLimit: number;
}

interface OverlayConfig {
  type: number;
  config: Config;
}

interface Config {
  stageInfo?: string;
  seasonNameShort?: string;
  seasonNameLong?: string;
  game?: number;
  article?: string;
  stageIsPlural?: boolean;
  nextStreamGame?: number;
  nextStreamStage?: string;
  nextStreamDate?: Date;
  seasonWinner?: undefined;
  patch?: string;
  casters?: CasterCenter[];
  casterMode?: number;
  casterLeft?: CasterCenter;
  casterCenter?: CasterCenter;
  casterRight?: CasterCenter;
  oneCaster?: CasterCenter;
  greenScreenMode?: boolean;
  interviewTeam?: undefined;
  interviewPlayer?: undefined;
  animationState?: AnimationState;
  ingameCasterLeft?: CasterCenter;
  ingameCasterRight?: CasterCenter;
  oneCasterIngame?: CasterCenter;
  ressourcePath?: string;
  matches?: Match[];
  tournamentId?: string;
  stageId?: string;
  apiKey?: string;
  d3Nodes?: D3Node[];
  renderScope?: string;
  roundLimit?: number;
  stage?: FirstGroup;
  standings?: FirstGroup[];
  firstGroup?: FirstGroup;
  secondGroup?: undefined;
  standingsDescription?: StandingsDescription[];
  title?: string;
  rowLimit?: number;
  teams?: TeamLeft[];
  updatedTeams?: TeamLeft[];
  matchMode?: string;
  customMatchMode?: string;
  teamLeft?: TeamLeft;
  teamRight?: TeamLeft;
  scoreLeft?: string;
  scoreRight?: string;
  gameInfo?: string;
  numberOfGames?: string;
  map?: Record<string, unknown>;
  playerNumber?: number;
  restartCountdown?: boolean;
  showLocalTime?: boolean;
  countDownEndDate?: Date;
  minutes?: string;
  seconds?: string;
  paused?: boolean;
  streamDelayMin?: string;
  streamDelaySec?: string;
  sponsors?: SponsorElement[];
  currentSponsor?: number;
  fadeLengthMs?: number;
}

interface AnimationState {
  animationPlayed: boolean;
  isUpdate: boolean;
}

interface CasterCenter {
  firstname: string;
  nickname: string;
  lastname: string;
  twitter: string;
  twitch: string;
  id?: string;
}

interface D3Node {
  id: string;
  parent: undefined | string;
  depth: number;
  title: string;
  bracketBranch: string;
  teams: Array<Team | undefined>;
}

interface Team {
  name: string;
  result: string;
}

interface FirstGroup {
  id: string;
  teamStandings?: TeamStanding[];
  number: number;
  name: string;
  size?: number;
}

interface TeamStanding {
  id: string;
  rank: number;
  name: string;
  participantId: string;
  points: number;
  draws: number;
  forfeits: number;
  losses: number;
  played: number;
  score_against: number;
  score_difference: number;
  score_for: number;
  wins: number;
  seed: number;
}

interface Match {
  time: Date;
  matchConfig: MatchConfig;
}

interface MatchConfig {
  matchMode: string;
  customMatchMode: string;
  teamLeft: TeamLeft;
  teamRight: TeamLeft;
  scoreLeft: string;
  scoreRight: string;
  gameInfo: string;
  numberOfGames: string;
  map: Record<string, unknown>;
  playerNumber: number;
  animationState: AnimationState;
  game: number;
}

interface TeamLeft {
  id: string;
  name: string;
  tag: string;
  city: string;
  logo: string;
  maskLogoIngame: boolean;
  players: Player[];
  participantId: string;
}

interface Player {
  id: string;
  name: string;
  picture: string;
  active: boolean;
  custom_fields?: CustomFields;
}

interface CustomFields {
  battle_net_id: undefined | string;
}

interface SponsorElement {
  sponsor: SponsorSponsor;
  lengthSec: number;
}

interface SponsorSponsor {
  default: string;
  light: string;
  dark: string;
  wide: string;
}

interface StandingsDescription {
  attributeName: string;
  shortDisplayName: string;
  longDisplayName: string;
  configurable: boolean;
  show: boolean;
}

interface WorkspaceSettings {
  ressourcePath: string;
  tabConfig: TabConfig;
}

interface TabConfig {
  tabs: Tab[];
}

interface Tab {
  name: string;
  id: string;
  enabled: boolean;
  dependencies: string[];
}
