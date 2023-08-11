export class Queues {
    static Competitive: QueueObject = {
        id: 'competitive',
        name: 'Competitive',
    }
    static Custom: QueueObject = {
        id: 'custom',
        name: 'Custom',
    }
    static Deathmatch: QueueObject = {
        id: 'deathmatch',
        name: 'Deathmatch',
    }
    static Escalation: QueueObject = {
        id: 'ggteam',
        name: 'Escalation',
    }
    static TeamDeathmatch: QueueObject = {
        id: 'hurm',
        name: 'Team Deathmatch'
    }
    static NewMap: QueueObject = {
        id: 'newmap',
        name: 'New Map',
    }
    static Replication: QueueObject = {
        id: 'onefa',
        name: 'Replication',
    }
    static Premier: QueueObject = {
        id: 'premier',
        name: 'Premier'
    }
    static SnowballFight: QueueObject = {
        id: 'snowball',
        name: 'Snowball Fight',
    }
    static SpikeRush: QueueObject = {
        id: 'spikerush',
        name: 'Spike Rush',
    }
    static Swiftplay: QueueObject = {
        id: 'swiftplay',
        name: 'Swiftplay'
    }
    static Unrated: QueueObject = {
        id: 'unrated',
        name: 'Unrated'
    }
}

export interface QueueObject {
    id: QueueIds
    name: string
}

export type QueueIds = ('competitive' | 'custom' | 'deathmatch' | 'ggteam' | 'hurm' | 'newmap'
    | 'onefa' | 'premier' | 'snowball' | 'spikerush' | 'swiftplay' | 'unrated') | (string & {});