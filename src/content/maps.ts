// https://valorant-api.com/v1/maps
export class Maps {
    static Ascent: MapObject = {
        name: 'Ascent',
        uuid: '7eaecc1b-4337-bbf6-6ab9-04b8f06b3319',
        url: '/Game/Maps/Ascent/Ascent'
    }
    static Bind: MapObject = {
        name: 'Bind',
        uuid: '2c9d57ec-4431-9c5e-2939-8f9ef6dd5cba',
        url: '/Game/Maps/Duality/Duality'
    }
    static Breeze: MapObject = {
        name: 'Breeze',
        uuid: '2fb9a4fd-47b8-4e7d-a969-74b4046ebd53',
        url: '/Game/Maps/Foxtrot/Foxtrot'
    }
    static Fracture: MapObject = {
        name: 'Fracture',
        uuid: 'b529448b-4d60-346e-e89e-00a4c527a405',
        url: '/Game/Maps/Canyon/Canyon'
    }
    static Haven: MapObject = {
        name: 'Haven',
        uuid: '2bee0dc9-4ffe-519b-1cbd-7fbe763a6047',
        url: '/Game/Maps/Triad/Triad'
    }
    static Icebox: MapObject = {
        name: 'Icebox',
        uuid: 'e2ad5c54-4114-a870-9641-8ea21279579a',
        url: '/Game/Maps/Port/Port'
    }
    static Split: MapObject = {
        name: 'Split',
        uuid: 'd960549e-485c-e861-8d71-aa9d1aed12a2',
        url: '/Game/Maps/Bonsai/Bonsai'
    }
    static Pearl: MapObject = {
        name: 'Pearl',
        uuid: 'fd267378-4d1d-484f-ff52-77821ed10dc2',
        url: '/Game/Maps/Pitt/Pitt'
    }
    static Lotus: MapObject = {
        name: 'Lotus',
        uuid: '2fe4ed3a-450a-948b-6d6b-e89a78e680a9',
        url: '/Game/Maps/Jam/Jam'
    }
    static District: MapObject = {
        name: 'District',
        uuid: '690b3ed2-4dff-945b-8223-6da834e30d24',
        url: '/Game/Maps/HURM/HURM_Alley/HURM_Alley'
    }
    static Kasbah: MapObject = {
        name: 'Kasbah',
        uuid: '12452a9d-48c3-0b02-e7eb-0381c3520404',
        url: '/Game/Maps/HURM/HURM_Bowl/HURM_Bowl'
    }
    static Piazza: MapObject = {
        name: 'Piazza',
        uuid: 'de28aa9b-4cbe-1003-320e-6cb3ec309557',
        url: '/Game/Maps/HURM/HURM_Yard/HURM_Yard'
    }
    static TheRange: MapObject = {
        name: 'The Range',
        uuid: 'ee613ee9-28b7-4beb-9666-08db13bb2244',
        url: '/Game/Maps/Poveglia/Range'
    }
}

export type MapUrls = ('/Game/Maps/Ascent/Ascent' | '/Game/Maps/Duality/Duality' | '/Game/Maps/Foxtrot/Foxtrot'
    | '/Game/Maps/Canyon/Canyon' | '/Game/Maps/Triad/Triad' | '/Game/Maps/Port/Port'
    | '/Game/Maps/Bonsai/Bonsai' | '/Game/Maps/Pitt/Pitt' | '/Game/Maps/Jam/Jam'
    | '/Game/Maps/HURM/HURM_Alley/HURM_Alley' | '/Game/Maps/HURM/HURM_Bowl/HURM_Bowl' | '/Game/Maps/HURM/HURM_Yard/HURM_Yard'
    | '/Game/Maps/Poveglia/Range') | (string & {});

export interface MapObject {
    name: string
    uuid: string
    url: MapUrls
}
